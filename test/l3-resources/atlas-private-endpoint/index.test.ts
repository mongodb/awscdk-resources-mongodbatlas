import { App, Stack } from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import * as l3 from "../../../src";
import { PrivateEndpointProps } from "../../../src/l3-resources/atlas-basic-private-endpoint";

const RESOURCE_NAME_PROJECT = "MongoDB::Atlas::Project";
const RESOURCE_NAME_CLUSTER = "MongoDB::Atlas::Cluster";
const RESOURCE_NAME_DB_USER = "MongoDB::Atlas::DatabaseUser";
const RESOURCE_NAME_PROJECT_IP_ACCESS_LIST =
  "MongoDB::Atlas::ProjectIpAccessList";
const RESOURCE_NAME_PRIVATE_ENDPOINT_AWS = "MongoDB::Atlas::PrivateEndpointAWS";
const RESOURCE_NAME_PRIVATE_ENDPOINT_SERVICE =
  "MongoDB::Atlas::PrivateEndpointService";
const ORG_ID = "testProjectId";
const PROJECT_NAME = "test";
const INSTANCE_SIZE = "M30";
const REGION = "US_EAST_1";
const DATABASE_USER_NAME = "atlas-user";
const ACCESS_LIST_IP_ADDR = "10.10.0.0/24";
const ACCESS_LIST_COMMENT = "Open subnets";
const AWS_VPC_ID = "vpc-112233445566";
const AWS_SUBNET_ID = '"subnet-112233445566';
const ADMIN_DB = "admin";
const ROLE_NAME = "atlasAdmin";
const PWD = "atlas-pwd";

test("AtlasBasicPrivateEndpoint construct should contain default properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  const atlasBasicProps: l3.AtlasBasicProps = {
    clusterProps: {
      replicationSpecs: [
        {
          numShards: 3,
          advancedRegionConfigs: [
            {
              regionName: REGION,
              electableSpecs: {
                instanceSize: INSTANCE_SIZE,
                nodeCount: 3,
              },
            },
          ],
        },
      ],
      name: PROJECT_NAME,
    },
    projectProps: {
      orgId: ORG_ID,
      name: PROJECT_NAME,
    },
    ipAccessListProps: {
      accessList: [
        {
          ipAddress: ACCESS_LIST_IP_ADDR,
          comment: ACCESS_LIST_COMMENT,
        },
      ],
    },
  };

  const privateEndpointProps: PrivateEndpointProps = {
    awsVpcId: AWS_VPC_ID,
    awsSubnetId: AWS_SUBNET_ID,
  };

  new l3.AtlasBasicPrivateEndpoint(stack, "testing-stack", {
    atlasBasicProps: atlasBasicProps,
    privateEndpointProps: privateEndpointProps,
    region: REGION,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME_PROJECT, {
    OrgId: ORG_ID,
    Name: PROJECT_NAME,
  });

  template.hasResourceProperties(RESOURCE_NAME_CLUSTER, {
    ProjectId: { "Fn::GetAtt": [Match.anyValue(), "Id"] },
    ClusterType: "REPLICASET",
    Name: PROJECT_NAME,
    ReplicationSpecs: [
      {
        NumShards: 3,
        AdvancedRegionConfigs: [
          {
            RegionName: REGION,
            ElectableSpecs: {
              InstanceSize: INSTANCE_SIZE,
              NodeCount: 3,
            },
          },
        ],
      },
    ],
  });

  template.hasResourceProperties(RESOURCE_NAME_DB_USER, {
    ProjectId: { "Fn::GetAtt": [Match.anyValue(), "Id"] },
    DatabaseName: ADMIN_DB,
    Password: PWD,
    Username: DATABASE_USER_NAME,
    Roles: [
      {
        DatabaseName: ADMIN_DB,
        RoleName: ROLE_NAME,
      },
    ],
  });

  template.hasResourceProperties(RESOURCE_NAME_PROJECT_IP_ACCESS_LIST, {
    ProjectId: { "Fn::GetAtt": [Match.anyValue(), "Id"] },
    AccessList: [
      {
        Comment: ACCESS_LIST_COMMENT,
        IPAddress: ACCESS_LIST_IP_ADDR,
      },
    ],
  });

  template.hasResourceProperties(RESOURCE_NAME_PRIVATE_ENDPOINT_SERVICE, {
    ProjectId: { "Fn::GetAtt": [Match.anyValue(), "Id"] },
    Region: REGION,
    CloudPrivider: "AWS",
  });

  template.hasResourceProperties(RESOURCE_NAME_PRIVATE_ENDPOINT_AWS, {
    ProjectId: { "Fn::GetAtt": [Match.anyValue(), "Id"] },
  });
});
