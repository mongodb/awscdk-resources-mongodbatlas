import * as cdk from "aws-cdk-lib";
import {CfnServerlessPrivateEndpoint, CfnServerlessPrivateEndpointProps, AwsPrivateEndpointConfig
} from "./index";


const app = new cdk.App();
const stack = new cdk.Stack(app, "serverless-private-endpoint-with-aws", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const awsPrivateEndpointConfig : AwsPrivateEndpointConfig = {
    vpcId: "vpc-078fe50fc2313c001",
    subnetIds:["subnet-0a2f7a198e5d6d6a6"],
    region:""
}

const serverlessPrivateEndpointProps: CfnServerlessPrivateEndpointProps = {
    profile : "default",
    instanceName: "testserverlessprivateendpoint",
    projectId:"64f0d46e7d714b7c26d984d8",
    comment : "this is a comment",
    createAndAssignAwsPrivateEndpoint:false,
    awsPrivateEndpointConfigurationProperties: awsPrivateEndpointConfig
};


new CfnServerlessPrivateEndpoint(stack, "cloud-outstage-simulation", serverlessPrivateEndpointProps);