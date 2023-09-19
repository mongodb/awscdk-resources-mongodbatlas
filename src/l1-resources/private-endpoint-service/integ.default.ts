import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { CfnPrivateEndpointService } from "./index";
import { CfnPrivateEndpoint } from "../private-endpoint/index";

const app = new cdk.App();
const stack = new cdk.Stack(app, "atlas-test-cdk-test", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const atlasProject = "";
const vpcId = "";
const subnetId = "";

const atlasService = new CfnPrivateEndpointService(stack, "AtlasCluster", {
  projectId: atlasProject,
  region: "US_EAST_1",
});

const awsPrivateEndpoint = new ec2.CfnVPCEndpoint(stack, "AWSPrivateEndpoint", {
  serviceName: atlasService.attrEndpointServiceName,
  subnetIds: [subnetId],
  vpcEndpointType: "Interface",
  vpcId: vpcId,
});

awsPrivateEndpoint.addDependency(atlasService);

const myPrivateEndpoint = new CfnPrivateEndpoint(
  stack,
  "AtlasPrivateEndpoint",
  {
    projectId: atlasProject,
    endpointServiceId: atlasService.attrId,
    cloudProvider: "AWS",
    interfaceEndpointId: awsPrivateEndpoint.ref,
  }
);

myPrivateEndpoint.addDependency(myPrivateEndpoint);
