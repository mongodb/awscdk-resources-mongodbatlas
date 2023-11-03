import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import {
  CfnPrivateEndpointService,
  CfnPrivateEndpointServicePropsCloudProvider,
} from "./index";
import { CfnPrivateEndpointAws } from "../private-endpoint-aws";

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
  region: "us-east-1",
  cloudProvider: CfnPrivateEndpointServicePropsCloudProvider.AWS,
});

const awsPrivateEndpoint = new ec2.CfnVPCEndpoint(stack, "AWSPrivateEndpoint", {
  serviceName: atlasService.attrEndpointServiceName,
  subnetIds: [subnetId],
  vpcEndpointType: "Interface",
  vpcId: vpcId,
});

awsPrivateEndpoint.addDependency(atlasService);

const myPrivateEndpoint = new CfnPrivateEndpointAws(
  stack,
  "AtlasPrivateEndpoint",
  {
    projectId: atlasProject,
    endpointServiceId: atlasService.attrId,
    id: awsPrivateEndpoint.ref,
  }
);

myPrivateEndpoint.addDependency(myPrivateEndpoint);
