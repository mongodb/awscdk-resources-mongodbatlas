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
import { AtlasBasic } from "../atlas-basic";

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
  readonly AZ1: string;
  readonly AZ2: string;
  readonly Subnet1CIDR: string;
  readonly Subnet2CIDR: string;
  readonly MongoDBEndpoint?: string;
  // readonly AtlasBasic: AtlasBasic;
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
   * @type {eventbus.EventBus}
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
   * Creates an instance of AtlasBasic.
   * @param {Construct} scope
   * @param {string} id
   * @param {FargateIntegrationProps} props
   * @memberof FargateIntegration
   */
  constructor(scope: Construct, id: string, props: FargateIntegrationProps) {
    super(scope, id);

    const namespace = "partner-atlas-fargate-mean-stack";
    // Create VPC for fargate service
    this.Vpc = new aws_ec2.Vpc(this, "mean-stack-fargate-vpc", {
      maxAzs: 2,
      cidr: props.VpcCidr,
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
    // const subnet1 = new aws_ec2.PublicSubnet(this, "PublicSubnet1", {
    //   availabilityZone: props.AZ1,
    //   vpcId: this.Vpc.vpcId,
    //   cidrBlock: props.Subnet1CIDR,
    // });
    //
    // const subnet2 = new aws_ec2.PublicSubnet(this, "PublicSubnet2", {
    //   availabilityZone: props.AZ2,
    //   vpcId: this.Vpc.vpcId,
    //   cidrBlock: props.Subnet2CIDR,
    // });

    // Create DHCP options
    const domainName =
      cdk.Stack.of(this).region === "us-east-1"
        ? "ec2.internal"
        : `${cdk.Stack.of(this).region}.compute.internal`;
    const dhcpOptions = new aws_ec2.CfnDHCPOptions(this, "MyDHCPOptions", {
      domainName: domainName,
      domainNameServers: ["AmazonProvidedDNS"],
      tags: [
        {
          key: "Name",
          value: cdk.Fn.sub("${AWS::StackName} stack DHCPOptions"),
        },
        {
          key: "StackName",
          value: cdk.Fn.ref("AWS::StackName"),
        },
      ],
    });

    // Associate DHCP options with the VPC
    new aws_ec2.CfnVPCDHCPOptionsAssociation(this, "MyDHCPOptionsAssociation", {
      vpcId: this.Vpc.vpcId,
      dhcpOptionsId: dhcpOptions.ref,
    });

    // this.Vpc.publicSubnets.forEach((subnet, index) => {
    //   const routeTable = subnet.routeTable;
    //   new aws_ec2.CfnRoute(this, `RouteToIGW${index}`, {
    //     routeTableId: routeTable.routeTableId,
    //     destinationCidrBlock: "0.0.0.0/0",
    //     gatewayId: this.Vpc.internetGatewayId,
    //   });
    // });

    const existingSubnetIds = [
      "subnet-0b4b72f62625b06c2",
      "subnet-0cdc42b2b52c812bf",
    ]; // Specify your subnet IDs

    // Accessing the default VPC DHCP options

    // const existingVpc = aws_ec2.Vpc.fromVpcAttributes(this, "MyExistingVpc", {
    //   vpcId: "vpc-05535f04b8eab37bf",
    //   availabilityZones: ["us-east-1a", "us-east-1b"], // Specify your AZs
    //   publicSubnetIds: existingSubnetIds, // Use existing public subnet IDs
    //   // Other VPC attributes as needed
    // });
    //
    // const subnet1 = aws_ec2.Subnet.fromSubnetId(
    //   this,
    //   "subnet1",
    //   existingSubnetIds[0]
    // );
    //
    // const subnet2 = aws_ec2.Subnet.fromSubnetId(
    //   this,
    //   "subnet2",
    //   existingSubnetIds[1]
    // );

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
          subnets: [this.Vpc.publicSubnets[0], this.Vpc.publicSubnets[1]],
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
    // const initContainer = this.ClientTaskDefinition.addContainer(
    //   "client-app-init-container",
    //   {
    //     image: ecs.ContainerImage.fromRegistry(
    //       "docker/ecs-searchdomain-sidecar:1.0"
    //     ),
    //     essential: false,
    //     command: ["us-east-1.compute.internal", namespace.concat(".local")],
    //     environment: {
    //       ATLAS_URI: "http://${LoadBalancer.DNSName}:5200",
    //     },
    //     logging: new ecs.AwsLogDriver({
    //       streamPrefix: namespace,
    //       logGroup: this.LogGroup,
    //     }),
    //   }
    // );

    // create container
    this.ClientTaskDefinition.addContainer("client-container", {
      image: ecs.ContainerImage.fromRegistry(props.ClientContainerImageURI), // You can specify your Docker image here
      portMappings: [
        { containerPort: 8080, hostPort: 8080, protocol: Protocol.TCP },
      ],
      containerName: "client",
      //command: ["us-east-1.compute.internal", namespace.concat(".local")],
      essential: true,
      environment: {
        ATLAS_URI: `http://${this.LoadBalancer.loadBalancerDnsName}:5200`,
      },
      logging: new ecs.AwsLogDriver({
        streamPrefix: "partner-meanstack-atlas-fargate",
        logGroup: this.LogGroup,
      }),
      // }).addContainerDependencies({
      //   container: initContainer,
      //   condition: ecs.ContainerDependencyCondition.SUCCESS,
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
        subnets: [this.Vpc.publicSubnets[0], this.Vpc.publicSubnets[1]],
      },
    });

    this.ClientService.associateCloudMapService({
      service: this.ClientServiceDiscoveryEntry,
    });

    this.ClientService.node.addDependency(clientListener);
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

    // Define the init container
    // const initServerContainer = this.ServerTaskDefinition.addContainer(
    //   "Server_ResolvConf_InitContainer",
    //   {
    //     image: ecs.ContainerImage.fromRegistry(
    //       "docker/ecs-searchdomain-sidecar:1.0"
    //     ),
    //     essential: false,
    //     //command: ["us-east-1.compute.internal", namespace.concat(".local")],
    //     // environment: {
    //     //   ATLAS_URI: "http://${LoadBalancer.DNSName}:5200",
    //     // },
    //     logging: new ecs.AwsLogDriver({
    //       streamPrefix: namespace,
    //       logGroup: this.LogGroup,
    //     }),
    //   }
    // );

    // Define the main application container
    this.ServerTaskDefinition.addContainer("server", {
      image: ecs.ContainerImage.fromRegistry(props.ServerContainerImageURI),
      //image: ecs.ContainerImage.fromRegistry("nginx:latest"), // Use the NGINX image
      // portMappings: portMappingsΩ[{ containerPort: 80 }], //
      essential: true,
      environment: {
        ATLAS_URI: props.MongoDBEndpoint ?? "",
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
      // }).addContainerDependencies({
      //   container: initServerContainer,
      //   condition: ecs.ContainerDependencyCondition.SUCCESS,
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
        subnets: [this.Vpc.publicSubnets[0], this.Vpc.publicSubnets[1]],
      },
    });
    this.ServerService.associateCloudMapService({
      service: this.ServerServiceDiscoveryEntry,
    });

    this.ServerService.node.addDependency(serverListener);
    this.ServerService.attachToNetworkTargetGroup(
      this.ServerAppTCP5200TargetGroup
    );
    // Add the target group to the listener
    //this.ServerAppTCP5200TargetGroup.addTarget(this.ServerService);
  }
}

function randomNumber() {
  const min = 10;
  const max = 9999999;
  return Math.floor(Math.random() * (max - min + 1) + min);
}
