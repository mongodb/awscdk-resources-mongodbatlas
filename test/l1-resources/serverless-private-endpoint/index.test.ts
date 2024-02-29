import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import {
  CfnServerlessPrivateEndpoint,
  AwsPrivateEndpointConfig,
} from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::ServerlessPrivateEndpoint";
const INSTANCE_NAME = "testserverlessprivateendpoint";
const PROJECT_ID = "64f0d46e7d714b7c26d984d8";
const PROFILE = "default";

test("CfnServerlessPrivateEndpoint construct should contain default properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  const awsPrivateEndpointConfig: AwsPrivateEndpointConfig = {
    vpcId: "vpc-078fe50fc2313c001",
    subnetIds: ["subnet-0a2f7a198e5d6d6a6"],
    region: "",
  };

  new CfnServerlessPrivateEndpoint(
    stack,
    "testing-serverlessPrivateEndpointWithAws",
    {
      projectId: PROJECT_ID,
      profile: PROFILE,
      instanceName: INSTANCE_NAME,
      createAndAssignAwsPrivateEndpoint: false,
      comment: "this is a comment",
      awsPrivateEndpointConfigurationProperties: awsPrivateEndpointConfig,
    }
  );

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ProjectId: PROJECT_ID,
    Profile: PROFILE,
    InstanceName: INSTANCE_NAME,
    CreateAndAssignAWSPrivateEndpoint: false,
    Comment: "this is a comment",
    AwsPrivateEndpointConfigurationProperties: {
      VpcId: "vpc-078fe50fc2313c001",
      SubnetIds: ["subnet-0a2f7a198e5d6d6a6"],
      Region: "",
    },
  });
});
