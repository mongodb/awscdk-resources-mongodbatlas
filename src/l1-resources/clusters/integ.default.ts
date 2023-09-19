import * as cdk from "aws-cdk-lib";
import { CfnCluster } from "./index";

const app = new cdk.App();
const stack = new cdk.Stack(app, "atlas-test-cdk-test", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const atlasProject = "";

new CfnCluster(stack, "AtlasCluster", {
  projectId: atlasProject,
  name: "TestCluster",
  mongoDbMajorVersion: "6.0",
  clusterType: "REPLICASET",
  backupEnabled: true,
  tags: [
    {
      key: "env",
      value: "development",
    },
  ],
  replicationSpecs: [
    {
      numShards: 1,
      advancedRegionConfigs: [
        {
          autoScaling: {
            diskGb: {
              enabled: true,
            },
            compute: {
              enabled: true,
              scaleDownEnabled: false,
              maxInstanceSize: "M40",
            },
          },
          electableSpecs: {
            ebsVolumeType: "PROVISIONED",
            instanceSize: "M30",
            nodeCount: 3,
            diskIops: "2000",
          },
          priority: 7,
          regionName: "EU_WEST_1",
        },
      ],
    },
  ],
});
