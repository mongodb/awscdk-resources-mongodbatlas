import * as cdk from "aws-cdk-lib";
import { CfnAccessListApiKey } from "./index";

const app = new cdk.App();
const stack = new cdk.Stack(app, "access-list-api-key", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const orgId = "63350255419cf25e3d511c95";

new CfnAccessListApiKey(stack, "access-list-api-key", {
  orgId: orgId,
  apiUserId: "64ef512fab473831c9e73b58",
  profile: "default",
  ipAddress: "203.0.113.11",
});
