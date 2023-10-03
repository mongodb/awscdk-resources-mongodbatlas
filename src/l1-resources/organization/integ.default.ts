import * as cdk from "aws-cdk-lib";
import { CfnOrganization } from "./index";

const app = new cdk.App();
const stack = new cdk.Stack(app, "atlas-organization-cdk-test", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const awsSecretName =
  stack.node.tryGetContext("AWS_SECRET_NAME") || process.env.AWS_SECRET_NAME;
const orgOwnerId =
  stack.node.tryGetContext("MONGODB_ATLAS_ORG_OWNER_ID") ||
  process.env.MONGODB_ATLAS_ORG_OWNER_ID;
const name = stack.node.tryGetContext("NAME") || process.env.NAME;
const profile = stack.node.tryGetContext("PROFILE") || process.env.PROFILE;

new CfnOrganization(stack, "organization", {
  name: name,
  orgOwnerId: orgOwnerId,
  awsSecretName: awsSecretName,
  profile: profile,
  apiKey: {
    roles: ["ORG_OWNER"],
    description: "test-cdk",
  },
});
