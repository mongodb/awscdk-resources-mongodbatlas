import * as cdk from "aws-cdk-lib";
import { CfnFlexCluster } from "./index";

const app = new cdk.App();
const stack = new cdk.Stack(app, "atlas-flex-cluster-test", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const atlasProject = "";

new CfnFlexCluster(stack, "AtlasFlexCluster", {
  projectId: atlasProject,
  name: "TestFlexCluster",
  providerSettings: {
    backingProviderName: "AWS",
    regionName: "US_EAST_1",
  },
  tags: [
    {
      key: "env",
      value: "development",
    },
  ],
});
