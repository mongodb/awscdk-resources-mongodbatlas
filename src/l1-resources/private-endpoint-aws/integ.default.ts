import * as cdk from "aws-cdk-lib";
import { CfnPrivateEndpointAws } from "./index";

const app = new cdk.App();
const stack = new cdk.Stack(app, "atlas-privateEndpoint", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const atlasProject = "6536c77b1c203c46c251ff0b";

new CfnPrivateEndpointAws(stack, "AtlasPrivateEndpoint", {
  projectId: atlasProject,
  endpointServiceId: "6536c7814104246bc7d0e940",
  profile: "default",
  id: "vpce-097276cb6f9eab2f5",
  enforceConnectionSuccess: false,
});
