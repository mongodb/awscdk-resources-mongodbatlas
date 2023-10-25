import * as cdk from "aws-cdk-lib";
import { aws_ec2, aws_ecs, Duration } from "aws-cdk-lib";
import * as ecs from "aws-cdk-lib/aws-ecs";
import { Protocol } from "aws-cdk-lib/aws-ecs";
import * as elbv2 from "aws-cdk-lib/aws-elasticloadbalancingv2";
import { TargetType } from "aws-cdk-lib/aws-elasticloadbalancingv2";
import * as iam from "aws-cdk-lib/aws-iam";
import * as logs from "aws-cdk-lib/aws-logs";
import * as servicediscovery from "aws-cdk-lib/aws-servicediscovery";
import { Construct } from "constructs";
import { AtlasBasicProps } from "../common/props";

/**
 * @description
 * @export
 * @interface FargateIntegrationProps
 */
export interface FargateIntegrationProps {
  readonly ServerContainerImageURI: string;
  readonly ClientContainerImageURI: string;
  readonly AtlasServerAddress: string;
  readonly WebAccessCIDR: string;
  readonly vpcCidr: string;
  readonly az1: string;
  readonly az2: string;
  readonly collectionName: string;
  readonly databaseName: string;
  readonly mongoDBEndpoint: string;
  readonly profile: string;
}

/**
 * @description
 * @export
 * @class FargateIntegration
 * @extends {Construct}
 */

export class FargateIntegration extends Construct {
  /**
   * @description
   * @type {aws_ec2.Vpc}
   * @memberof FargateIntegration
   */
  readonly Vpc: aws_ec2.Vpc;

  /**
   * @description
   * @type {aws_ecs.CfnService}
   * @memberof FargateIntegration
   */
  readonly ClientService: aws_ecs.FargateService;

  /**
   * @description
   * @type {servicediscovery.CfnService}
   * @memberof FargateIntegration
   */
  readonly clientServiceDiscoveryEntry: servicediscovery.Service;

  /**
   * @description
   * @type {elbv2.ApplicationListener}
   * @memberof FargateIntegration
   */
  readonly ClientAppTCP8080Listener: elbv2.NetworkListener;

  /**
   * @description
   * @type {elbv2.ApplicationTargetGroup}
   * @memberof FargateIntegration
   */
  readonly ClientAppTCP8080TargetGroup: elbv2.NetworkTargetGroup;

  /**
   * @description
   * @type {ecs.TaskDefinition}
   * @memberof FargateIntegration
   */
  readonly ClientTaskDefinition: ecs.TaskDefinition;

  /**
   * @description
   * @type {iam.Role}
   * @memberof FargateIntegration
   */
  readonly ClientTaskExecutionRole: iam.Role;

  /**
   * @description
   * @type {servicediscovery.PrivateDnsNamespace}
   * @memberof FargateIntegration
   */
  readonly CloudMapNameSpace: servicediscovery.PrivateDnsNamespace;

  /**
   * @description
   * @type {eventbus.EventBus}
   * @memberof FargateIntegration
   */
  readonly ECSCluster: ecs.Cluster;

  /**
   * @description
   * @type {aws_ec2.CfnSecurityGroupIngress}
   * @memberof FargateIntegration
   */
  readonly Default8080Ingress: aws_ec2.CfnSecurityGroupIngress;

  /**
   * @description
   * @type {elbv2.CfnLoadBalancer}
   * @memberof FargateIntegration
   */
  readonly LoadBalancer: elbv2.NetworkLoadBalancer;

  /**
   * @description
   * @type {logs.LogGroup}
   * @memberof FargateIntegration
   */
  readonly LogGroup: logs.LogGroup;

  /**
   * @description
   * @type {aws_ecs.CfnService}
   * @memberof FargateIntegration
   */
  readonly ServerService: aws_ecs.FargateService;
  /**
   * @description
   * @type {servicediscovery.CfnService}
   * @memberof FargateIntegration
   */
  readonly ServerServiceDiscoveryEntry: servicediscovery.Service;

  /**
   * @description
   * @type {elbv2.ApplicationListener}
   * @memberof FargateIntegration
   */
  readonly ServerAppTCP5200Listener: elbv2.NetworkListener;

  /**
   * @description
   * @type {elbv2.ApplicationTargetGroup}
   * @memberof FargateIntegration
   */
  readonly ServerAppTCP5200TargetGroup: elbv2.NetworkTargetGroup;

  /**
   * @description
   * @type {ecs.TaskDefinition}
   * @memberof FargateIntegration
   */
  readonly ServerTaskDefinition: ecs.TaskDefinition;

  /**
   * @description
   * @type {iam.Role}
   * @memberof FargateIntegration
   */
  readonly ServerTaskExecutionRole: iam.Role;

  /**
   * Creates an instance of AtlasBasic.
   * @param {Construct} scope
   * @param {string} id
   * @param {FargateIntegrationProps} props
   * @memberof FargateIntegration
   */
  constructor(scope: Construct, id: string, props: FargateIntegrationProps) {
    super(scope, id);

    // Create VPC for fargate service
    this.Vpc = new aws_ec2.Vpc(this, "fargate-vpc", {
      maxAzs: 2, // Number of Availability Zones
      availabilityZones: [props.az1, props.az2],
      cidr: props.vpcCidr,
      subnetConfiguration: [
        {
          name: "PublicSubnet1",
          subnetType: aws_ec2.SubnetType.PUBLIC,
        },
        {
          name: "PublicSubnet2",
          subnetType: aws_ec2.SubnetType.PUBLIC,
        },
        {
          name: "PrivateSubnet1",
          subnetType: aws_ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
        {
          name: "PrivateSubnet2",
          subnetType: aws_ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
      ],
    });

    // Output the VPC ID and Subnet IDs
    const vpcID = this.Vpc.vpcId;
    const publicSubnet1ID = new cdk.CfnOutput(this, "PublicSubnet1Id", {
      value: this.Vpc.selectSubnets({ subnetType: aws_ec2.SubnetType.PUBLIC })
        .subnetIds[0],
    });
    const publicSubnet2ID = new cdk.CfnOutput(this, "PublicSubnet2Id", {
      value: this.Vpc.selectSubnets({ subnetType: aws_ec2.SubnetType.PUBLIC })
        .subnetIds[1],
    });
    const privateSubnet1ID = new cdk.CfnOutput(this, "PrivateSubnet1Id", {
      value: this.Vpc.selectSubnets({
        subnetType: aws_ec2.SubnetType.PRIVATE_WITH_EGRESS,
      }).subnetIds[0],
    });
    const privateSubnet2ID = new cdk.CfnOutput(this, "PrivateSubnet2Id", {
      value: this.Vpc.selectSubnets({
        subnetType: aws_ec2.SubnetType.PRIVATE_WITH_EGRESS,
      }).subnetIds[1],
    });

    // Create log group
    this.LogGroup = new logs.LogGroup(this, "LogGroup", {
      logGroupName: "/docker-compose/partner-meanstack-atlas-fargate",
    });

    // Create ecs cluster
    this.ECSCluster = new ecs.Cluster(
      this,
      "atlas-fargate-integration-example",
      {
        vpc: this.Vpc,
      }
    );

    this.LoadBalancer = new elbv2.NetworkLoadBalancer(
      this,
      "MeanStack-CDK-LoadBalancer",
      {
        vpc: this.Vpc,
        internetFacing: true,
        crossZoneEnabled: true,
      }
    );

    // Specify the subnets for the load balancer
    cdk.Tags.of(this.LoadBalancer).add(
      "com.docker.compose.project",
      "partner-meanstack-atlas-fargate"
    );

    // Create ecs task definition
    this.ClientTaskDefinition = new ecs.FargateTaskDefinition(
      this,
      "clientTaskDefinition",
      {
        memoryLimitMiB: 512,
        cpu: 256,
        taskRole: this.ClientTaskExecutionRole,
        executionRole: this.ClientTaskExecutionRole,
        family: "partner-meanstack-atlas-fargate-client",
      }
    );
    // Add containers
    const clientContainer = this.ClientTaskDefinition.addContainer(
      "ClientContainer",
      {
        image: ecs.ContainerImage.fromRegistry(props.ClientContainerImageURI), // You can specify your Docker image here
        portMappings: [{ containerPort: 8080, hostPort: 8080 }],
        containerName: "client",
        command: [
          "us-east-1.compute.internal",
          "partner-meanstack-atlas-fargate.local",
        ],
        essential: true,
        environment: {
          ATLAS_URI: "http://${this.LoadBalancer.DNSName}",
        },
        logging: new ecs.AwsLogDriver({
          streamPrefix: "partner-meanstack-atlas-fargate",
          logGroup: logs.LogGroup.fromLogGroupName(
            this,
            "LogGroup",
            this.LogGroup.logGroupName
          ),
        }),
      }
    );

    // Define the init container
    const initContainer = this.ClientTaskDefinition.addContainer(
      "Client_ResolvConf_InitContainer",
      {
        image: ecs.ContainerImage.fromRegistry(
          "docker/ecs-searchdomain-sidecar:1.0"
        ),
        essential: false,
        command: [
          "us-east-1.compute.internal",
          "partner-meanstack-atlas-fargate.local",
        ],
        environment: {
          ATLAS_URI: "http://${LoadBalancer.DNSName}:5200",
        },
        logging: new ecs.AwsLogDriver({
          streamPrefix: "partner-meanstack-atlas-fargate",
          logGroup: logs.LogGroup.fromLogGroupName(
            this,
            "LogGroup",
            this.LogGroup.logGroupName
          ),
        }),
      }
    );

    // Define a dependency from the client container to the init container
    clientContainer.addContainerDependencies({
      container: initContainer,
      condition: ecs.ContainerDependencyCondition.SUCCESS,
    });

    // Create a Cloud Map namespace
    this.CloudMapNameSpace = new servicediscovery.PrivateDnsNamespace(
      this,
      "MyNamespace",
      {
        name: "partner-meanstack-atlas-fargate.local",
        vpc: this.Vpc,
      }
    );

    // Create a service discovery entry
    this.clientServiceDiscoveryEntry = new servicediscovery.Service(
      this,
      "ClientServiceDiscoveryEntry",
      {
        name: "client",
        description: "Client service discovery entry in Cloud Map",
        namespace: this.CloudMapNameSpace,
        dnsTtl: Duration.seconds(60),
        dnsRecordType: servicediscovery.DnsRecordType.A, // A record
        routingPolicy: servicediscovery.RoutingPolicy.MULTIVALUE,
        healthCheck: {
          failureThreshold: 1,
        },
      }
    );
    // Define an IAM role for ECS task execution
    this.ClientTaskExecutionRole = new iam.Role(
      this,
      "ClientTaskExecutionRole",
      {
        assumedBy: new iam.ServicePrincipal("ecs-tasks.amazonaws.com"),
        managedPolicies: [
          iam.ManagedPolicy.fromAwsManagedPolicyName(
            "service-role/AmazonECSTaskExecutionRolePolicy"
          ),
          iam.ManagedPolicy.fromAwsManagedPolicyName(
            "AmazonEC2ContainerRegistryReadOnly"
          ),
        ],
      }
    );

    // Add tags to the IAM role
    // TBD

    // Security Group
    const securityGroup = new aws_ec2.SecurityGroup(
      this,
      "DefaultNetworkSecurityGroup",
      {
        vpc: this.Vpc,
        securityGroupName:
          "partner-meanstack-atlas-fargate Security Group for default network",
      }
    );

    // Define ingress rules for port 5200
    securityGroup.addIngressRule(
      aws_ec2.Peer.ipv4(props.WebAccessCIDR), // Replace with your desired IPv4 CIDR range
      aws_ec2.Port.tcp(5200),
      "Allow server:5200/tcp on default network"
    );

    // Define ingress rules for port 8080
    securityGroup.addIngressRule(
      aws_ec2.Peer.ipv4("your-ipv4-cidr"), // Replace with your desired IPv4 CIDR range
      aws_ec2.Port.tcp(8080),
      "Allow client:8080/tcp on default network"
    );

    // Define ingress rule for allowing communication within the security group
    securityGroup.addIngressRule(
      aws_ec2.Peer.anyIpv4(),
      aws_ec2.Port.allTraffic(),
      "Allow communication within network default"
    );

    // Create a target group
    this.ClientAppTCP8080TargetGroup = new elbv2.NetworkTargetGroup(
      this,
      "ClientTCP8080TargetGroup",
      {
        port: 8080,
        protocol: elbv2.Protocol.TCP, // HTTP or HTTPS depending on your target
        targetType: TargetType.IP,
        vpc: this.Vpc,
      }
    );

    this.ClientAppTCP8080TargetGroup.addTarget(this.ClientService);
    this.LoadBalancer.addListener("ClientServiceListener", {
      port: 8080,
      defaultTargetGroups: [this.ClientAppTCP8080TargetGroup],
    });

    //Server Service
    this.ServerServiceDiscoveryEntry = new servicediscovery.Service(
      this,
      "ServerServiceDiscoveryEntry",
      {
        name: "server",
        description: "Server service discovery entry in Cloud Map",
        namespace: this.CloudMapNameSpace,
        dnsTtl: Duration.seconds(60),
        dnsRecordType: servicediscovery.DnsRecordType.A, // A record
        routingPolicy: servicediscovery.RoutingPolicy.MULTIVALUE,
        healthCheck: {
          failureThreshold: 1,
        },
      }
    );

    // Define the Fargate task definition
    this.ServerTaskDefinition = new ecs.FargateTaskDefinition(
      this,
      "ServerTaskDefinition",
      {
        cpu: 256,
        memoryLimitMiB: 512,
        executionRole: this.ServerTaskExecutionRole,
        taskRole: this.ServerTaskExecutionRole,
        family: "partner-meanstack-atlas-fargate-server",
      }
    );

    // Client Service
    this.ClientService = new ecs.FargateService(this, "MyFargateService", {
      cloudMapOptions: {
        name: "client", // Service name in Cloud Map
        dnsTtl: Duration.seconds(60),
      },
      cluster: this.ECSCluster,
      desiredCount: 1, // Replace with your task definition ARN
      maxHealthyPercent: 200,
      minHealthyPercent: 100,
      platformVersion: ecs.FargatePlatformVersion.VERSION1_4,
      taskDefinition: this.ClientTaskDefinition,
      deploymentController: {
        type: ecs.DeploymentControllerType.ECS,
      },
      assignPublicIp: true,
      securityGroups: [securityGroup],
      vpcSubnets: {
        subnetType: aws_ec2.SubnetType.PUBLIC,
        subnets: [
          aws_ec2.Subnet.fromSubnetId(
            this,
            "Subnet1",
            publicSubnet1ID.toString()
          ),
          aws_ec2.Subnet.fromSubnetId(
            this,
            "Subnet2",
            publicSubnet2ID.toString()
          ),
        ],
      },
    });

    // Define the init container
    const initServerContainer = this.ServerTaskDefinition.addContainer(
      "Server_ResolvConf_InitContainer",
      {
        image: ecs.ContainerImage.fromRegistry(
          "docker/ecs-searchdomain-sidecar:1.0"
        ),
        essential: false,
        command: [
          "us-east-1.compute.internal",
          "partner-meanstack-atlas-fargate.local",
        ],
        environment: {
          ATLAS_URI: "http://${LoadBalancer.DNSName}:5200",
        },
        logging: new ecs.AwsLogDriver({
          streamPrefix: "partner-meanstack-atlas-fargate",
          logGroup: logs.LogGroup.fromLogGroupName(
            this,
            "LogGroup",
            this.LogGroup.logGroupName
          ),
        }),
      }
    );

    // Define the main application container
    const mainContainer = this.ServerTaskDefinition.addContainer(
      "ServerContainer",
      {
        image: ecs.ContainerImage.fromRegistry(props.ServerContainerImageURI),
        essential: true,
        environment: {
          ATLAS_URI: cdk.Fn.join("", [
            "mongodb+srv://",
            cdk.Fn.ref("DatabaseUserName"),
            ":",
            cdk.Fn.ref("DatabasePassword"),
            "@",
            cdk.Fn.select(1, cdk.Fn.split("//", props.AtlasServerAddress)),
          ]),
        },
        portMappings: [
          {
            containerPort: 5200,
            protocol: Protocol.TCP,
          },
        ],
      }
    );

    mainContainer.addContainerDependencies({
      container: initServerContainer,
      condition: ecs.ContainerDependencyCondition.SUCCESS,
    });

    // Server Task execution role
    this.ServerTaskExecutionRole = new iam.Role(
      this,
      "ServerTaskExecutionRole",
      {
        assumedBy: new iam.ServicePrincipal("ecs-tasks.amazonaws.com"),
        managedPolicies: [
          iam.ManagedPolicy.fromAwsManagedPolicyName(
            "AmazonECSTaskExecutionRolePolicy"
          ),
          iam.ManagedPolicy.fromAwsManagedPolicyName(
            "AmazonEC2ContainerRegistryReadOnly"
          ),
        ],
      }
    );

    // Create a target group
    this.ServerAppTCP5200TargetGroup = new elbv2.NetworkTargetGroup(
      this,
      "ServerAppTCP5200TargetGroup",
      {
        port: 5200,
        protocol: elbv2.Protocol.TCP, // HTTP or HTTPS depending on your target
        targetType: TargetType.IP,
        vpc: this.Vpc,
      }
    );

    this.ServerAppTCP5200TargetGroup.addTarget(this.ServerService);
    this.LoadBalancer.addListener("ServerServiceListener", {
      port: 5200,
      defaultTargetGroups: [this.ServerAppTCP5200TargetGroup],
    });

    // Define the Server Fargate service
    this.ServerService = new ecs.FargateService(this, "ServerService", {
      cloudMapOptions: {
        name: "server", // Service name in Cloud Map
        dnsTtl: Duration.seconds(60),
      },
      desiredCount: 1,
      maxHealthyPercent: 200,
      minHealthyPercent: 100,
      platformVersion: ecs.FargatePlatformVersion.VERSION1_4,
      taskDefinition: this.ServerTaskDefinition,
      cluster: this.ECSCluster,
      deploymentController: {
        type: ecs.DeploymentControllerType.ECS,
      },
      assignPublicIp: true,
      securityGroups: [securityGroup],
      vpcSubnets: {
        subnetType: aws_ec2.SubnetType.PUBLIC,
        subnets: [
          aws_ec2.Subnet.fromSubnetId(
            this,
            "Subnet1",
            publicSubnet1ID.toString()
          ),
          aws_ec2.Subnet.fromSubnetId(
            this,
            "Subnet2",
            publicSubnet2ID.toString()
          ),
        ],
      },
    });
  }
}

function randomNumber() {
  const min = 10;
  const max = 9999999;
  return Math.floor(Math.random() * (max - min + 1) + min);
}
