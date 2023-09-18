import * as cdk from "aws-cdk-lib";
import { CfnPrivateEndpoint } from "./index";

const app = new cdk.App();
const stack = new cdk.Stack(app, "atlas-privateEndpoint", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const atlasProject = "64bad960538ae76ec5c70050";

new CfnPrivateEndpoint(stack, "AtlasPrivateEndpoint", {
  projectId: atlasProject,
  endpointServiceId: "6506955dc24c6674dffe2201",
  profile: "default",
  interfaceEndpointId: "",
  cloudProvider: "AWS",
  enforceConnectionSuccess: true,
});
