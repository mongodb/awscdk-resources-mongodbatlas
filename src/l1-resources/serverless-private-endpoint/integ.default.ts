import * as cdk from "aws-cdk-lib";
import {
  CfnServerlessPrivateEndpoint,
  CfnServerlessPrivateEndpointProps,
  AwsPrivateEndpointConfig,
} from "./index";

const app = new cdk.App();
const stack = new cdk.Stack(app, "serverless-private-endpoint-with-aws", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const awsPrivateEndpointConfig: AwsPrivateEndpointConfig = {
  vpcId: "vpc-",
  subnetIds: ["subnet-"],
  region: "us-east-1",
};

const serverlessPrivateEndpointProps: CfnServerlessPrivateEndpointProps = {
  profile: "default",
  instanceName: "ServerlessInstance0",
  projectId: "",
  comment: "this is a comment",
  createAndAssignAwsPrivateEndpoint: true,
  awsPrivateEndpointConfigurationProperties: awsPrivateEndpointConfig,
};

new CfnServerlessPrivateEndpoint(
  stack,
  "cloud-outstage-simulation",
  serverlessPrivateEndpointProps
);
