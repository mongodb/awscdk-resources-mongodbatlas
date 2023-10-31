import { aws_ec2, aws_ecs, Duration } from "aws-cdk-lib";
import * as ecs from "aws-cdk-lib/aws-ecs";
import { Protocol } from "aws-cdk-lib/aws-ecs";
import * as elbv2 from "aws-cdk-lib/aws-elasticloadbalancingv2";
import { TargetType } from "aws-cdk-lib/aws-elasticloadbalancingv2";
import * as iam from "aws-cdk-lib/aws-iam";
import * as logs from "aws-cdk-lib/aws-logs";
import * as servicediscovery from "aws-cdk-lib/aws-servicediscovery";
import { Construct } from "constructs";

/**
 * @description
 * @export
 * @interface FargateIntegrationProps
 */
export interface FargateIntegrationProps {
  readonly ServerContainerImageURI: string;
  readonly ClientContainerImageURI: string;
  readonly WebAccessCIDR: string;
  readonly VpcCidr: string;
  readonly Subnet1CIDR: string;
  readonly Subnet2CIDR: string;
  readonly MongoDBEndpoint?: string;
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
   * @type {aws_ecs.CfnService}
   * @memberof FargateIntegration
   */
  readonly ClientService: aws_ecs.FargateService;

  /**
   * @description
   * @type {servicediscovery.CfnService}
   * @memberof FargateIntegration
   */
  readonly ClientServiceDiscoveryEntry: servicediscovery.Service;

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
   * @type {ecs.Cluster}
   * @memberof FargateIntegration
   */
  readonly ECSCluster: ecs.Cluster;

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
   * @description
   * @type {aws_ec2.Vpc}
   * @memberof FargateIntegration
   */
  readonly Vpc: aws_ec2.Vpc;

  /**
   * Creates an instance of AtlasBasic.
   * @param {Construct} scope
   * @param {string} id
   * @param {FargateIntegrationProps} props
   * @memberof FargateIntegration
   */
  constructor(scope: Construct, id: string, props: FargateIntegrationProps) {
    super(scope, id);

    const namespace = "partner-atlas-fargate-integration";

    // Create VPC for fargate service
    this.Vpc = new aws_ec2.Vpc(this, "mean-stack-fargate-vpc", {
      ipAddresses: aws_ec2.IpAddresses.cidr(props.VpcCidr),
      maxAzs: 2,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: "publicsubnet1",
          subnetType: aws_ec2.SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: "PublicSubnet2",
          subnetType: aws_ec2.SubnetType.PUBLIC,
        },
      ],
    });

    // Create log group
    this.LogGroup = new logs.LogGroup(this, "LogGroup", {
      logGroupName: "/docker-compose/partner-mean-stack-atlas-fargate".concat(
        randomNumber().toString()
      ),
    });

    // // Create a Cloud Map namespace
    this.CloudMapNameSpace = new servicediscovery.PrivateDnsNamespace(
      this,
      "mean-stack-atlas-fargate-namespace",
      {
        name: namespace.concat(".local"),
        vpc: this.Vpc,
      }
    );

    // Create ecs cluster
    this.ECSCluster = new ecs.Cluster(
      this,
      "mean-stack-fargate-integration-example",
      {
        vpc: this.Vpc,
        clusterName: namespace.concat("-cluster"),
      }
    );

    // Network Load balancer
    this.LoadBalancer = new elbv2.NetworkLoadBalancer(
      this,
      "mean-stack-atlas-fargate-load-balancer",
      {
        vpc: this.Vpc,
        internetFacing: true,
        crossZoneEnabled: true,
        vpcSubnets: {
          subnets: this.Vpc.publicSubnets,
        },
      }
    );

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
      aws_ec2.Peer.ipv4(props.WebAccessCIDR), // Replace with your desired IPv4 CIDR range
      aws_ec2.Port.tcp(8080),
      "Allow client:8080/tcp on default network"
    );

    // Define ingress rule for allowing communication within the security group
    securityGroup.addIngressRule(
      securityGroup,
      aws_ec2.Port.allTraffic(),
      "Allow communication within network default"
    );

    // Define an IAM role for ECS task execution
    this.ClientTaskExecutionRole = new iam.Role(
      this,
      "client-task-execution-role",
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
    // Create ecs task definition
    this.ClientTaskDefinition = new ecs.FargateTaskDefinition(
      this,
      "clientApp-TaskDefinition",
      {
        memoryLimitMiB: 512,
        cpu: 256,
        taskRole: this.ClientTaskExecutionRole,
        executionRole: this.ClientTaskExecutionRole,
        family: namespace.concat("-client"),
      }
    );
    // Create a target group
    this.ClientAppTCP8080TargetGroup = new elbv2.NetworkTargetGroup(
      this,
      "ClientAppTCP8080TargetGroup",
      {
        port: 8080,
        targetType: TargetType.IP,
        vpc: this.Vpc,
      }
    );

    // listener for client
    const clientListener = new elbv2.NetworkListener(
      this,
      "ClientTCP8080Listener",
      {
        loadBalancer: this.LoadBalancer,
        port: 8080,
        protocol: elbv2.Protocol.TCP,
        defaultTargetGroups: [this.ClientAppTCP8080TargetGroup],
      }
    );
    // Define the init container
    const initContainer = this.ClientTaskDefinition.addContainer(
      "client-app-init-container",
      {
        image: ecs.ContainerImage.fromRegistry(
          "docker/ecs-searchdomain-sidecar:1.0"
        ),
        essential: false,
        command: ["us-east-1.compute.internal", namespace.concat(".local")],
        logging: new ecs.AwsLogDriver({
          streamPrefix: namespace,
          logGroup: this.LogGroup,
        }),
      }
    );

    // create container
    this.ClientTaskDefinition.addContainer("client-container", {
      image: ecs.ContainerImage.fromRegistry(props.ClientContainerImageURI), // You can specify your Docker image here
      portMappings: [
        { containerPort: 8080, hostPort: 8080, protocol: Protocol.TCP },
      ],
      containerName: "client",
      essential: true,
      environment: {
        ATLAS_URI: `http://${this.LoadBalancer.loadBalancerDnsName}:5200`,
      },
      logging: new ecs.AwsLogDriver({
        streamPrefix: "partner-meanstack-atlas-fargate",
        logGroup: this.LogGroup,
      }),
    }).addContainerDependencies({
      container: initContainer,
      condition: ecs.ContainerDependencyCondition.SUCCESS,
    });

    // Create a client discovery entry
    this.ClientServiceDiscoveryEntry = new servicediscovery.Service(
      this,
      "ClientServiceDiscoveryEntry",
      {
        name: "client",
        description: "Client service discovery entry in Cloud Map",
        namespace: this.CloudMapNameSpace,
        dnsTtl: Duration.seconds(60),
        dnsRecordType: servicediscovery.DnsRecordType.A, // A record
        routingPolicy: servicediscovery.RoutingPolicy.MULTIVALUE,
        customHealthCheck: {
          failureThreshold: 1,
        },
      }
    );

    // Client Service
    this.ClientService = new ecs.FargateService(this, "MyFargateService", {
      serviceName: "client",
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
        subnets: this.Vpc.publicSubnets,
      },
    });

    this.ClientService.associateCloudMapService({
      service: this.ClientServiceDiscoveryEntry,
    });

    // dependency for client
    this.ClientService.node.addDependency(clientListener);
    // assign target group to client
    this.ClientService.attachToNetworkTargetGroup(
      this.ClientAppTCP8080TargetGroup
    );
    // Server Service
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
        customHealthCheck: {
          failureThreshold: 1,
        },
      }
    );

    // Server Task execution role
    this.ServerTaskExecutionRole = new iam.Role(
      this,
      "ServerTaskExecutionRole",
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

    // Define the Fargate task definition
    this.ServerTaskDefinition = new ecs.FargateTaskDefinition(
      this,
      "ServerTaskDefinition",
      {
        cpu: 256,
        memoryLimitMiB: 512,
        executionRole: this.ServerTaskExecutionRole,
        taskRole: this.ServerTaskExecutionRole,
        family: namespace.concat("-server"),
      }
    );

    // Create a target group
    this.ServerAppTCP5200TargetGroup = new elbv2.NetworkTargetGroup(
      this,
      "ServerAppTCP5200TargetGroup",
      {
        port: 5200,
        targetType: TargetType.IP,
        vpc: this.Vpc,
      }
    );
    //
    // // Add the target group to the listener
    const serverListener = new elbv2.NetworkListener(
      this,
      "ServerTCP5200Listener",
      {
        loadBalancer: this.LoadBalancer,
        port: 5200,
        protocol: elbv2.Protocol.TCP,
        defaultTargetGroups: [this.ServerAppTCP5200TargetGroup],
      }
    );

    // Define the main application container
    this.ServerTaskDefinition.addContainer("server", {
      image: ecs.ContainerImage.fromRegistry(props.ServerContainerImageURI),
      essential: true,
      environment: {
        ATLAS_URI: props.MongoDBEndpoint || "",
      },
      portMappings: [
        {
          containerPort: 5200,
          hostPort: 5200,
          protocol: Protocol.TCP,
        },
      ],
      logging: new ecs.AwsLogDriver({
        streamPrefix: namespace,
        logGroup: this.LogGroup,
      }),
    });

    // Define the Server Fargate service
    this.ServerService = new ecs.FargateService(this, "ServerService", {
      serviceName: "server",
      desiredCount: 1,
      maxHealthyPercent: 200,
      minHealthyPercent: 100,
      platformVersion: ecs.FargatePlatformVersion.VERSION1_4,
      taskDefinition: this.ServerTaskDefinition,
      cluster: this.ECSCluster,
      deploymentController: {
        type: ecs.DeploymentControllerType.ECS,
      },
      propagateTags: ecs.PropagatedTagSource.SERVICE,
      assignPublicIp: true,
      securityGroups: [securityGroup],
      vpcSubnets: {
        subnets: this.Vpc.publicSubnets,
      },
    });
    this.ServerService.associateCloudMapService({
      service: this.ServerServiceDiscoveryEntry,
    });

    // dependency for server
    this.ServerService.node.addDependency(serverListener);
    // assign target group to server
    this.ServerService.attachToNetworkTargetGroup(
      this.ServerAppTCP5200TargetGroup
    );
  }
}

function randomNumber() {
  const min = 10;
  const max = 9999999;
  return Math.floor(Math.random() * (max - min + 1) + min);
}
