// Copyright 2023 MongoDB Inc
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as cdk from "aws-cdk-lib";
import { aws_ec2 } from "aws-cdk-lib";
import { FargateIntegration } from "./index";
import { AtlasBasic } from "../atlas-basic";
const app = new cdk.App();
const stack = new cdk.Stack(app, "ecs-mean-stack-fargate-cdk", {
  env: {
    region: process.env.CDK_DEFAULT_REGION ?? "us-east-1",
    account: process.env.CDK_DEFAULT_ACCOUNT ?? "711489243244",
  },
});

// const orgId =
//   stack.node.tryGetContext("MONGODB_ATLAS_ORG_ID") ||
//   "63350255419cf25e3d511c95";
//process.env.MONGODB_ATLAS_ORG_ID;
//
// const replicationSpecs = [
//   {
//     numShards: 1,
//     advancedRegionConfigs: [
//       {
//         analyticsSpecs: {
//           ebsVolumeType: "STANDARD",
//           instanceSize: "M10",
//           nodeCount: 1,
//         },
//         electableSpecs: {
//           ebsVolumeType: "STANDARD",
//           instanceSize: "M10",
//           nodeCount: 3,
//         },
//         priority: 7,
//         regionName: "US_EAST_1",
//       },
//     ],
//   },
// ];
//
// const dbUsername = "atlas-user";
// const dbPassword = "atlas-pwd";
// const atlasBasic = new AtlasBasic(stack, "atlas-basic", {
//   clusterProps: {
//     replicationSpecs: replicationSpecs,
//   },
//   projectProps: {
//     orgId: orgId,
//   },
//   ipAccessListProps: {
//     accessList: [
//       {
//         ipAddress: "0.0.0.0/0",
//         comment: "open ip subnet",
//       },
//     ],
//   },
// });

const fargate = new FargateIntegration(stack, "fargate-integration", {
  Subnet1CIDR: "11.0.128.0/20",
  Subnet2CIDR: "11.0.144.0/20",
  ClientContainerImageURI:
    "711489243244.dkr.ecr.us-east-1.amazonaws.com/partner-meanstack-atlas-fargate-client:latest",
  ServerContainerImageURI:
    "711489243244.dkr.ecr.us-east-1.amazonaws.com/partner-meanstack-atlas-fargate-server:latest",
  WebAccessCIDR: "0.0.0.0/0",
  VpcCidr: "11.0.0.0/16",
  AZ1: "us-east-1a",
  AZ2: "us-east-1b",
  MongoDBEndpoint:"",

  // MongoDBEndpoint: atlasBasic.mCluster.connectionStrings?.standardSrv?.replace(
  //   "mongodb+srv://",
  //   `mongodb+srv://${atlasBasic.mDBUser.props.username}:${atlasBasic.mDBUser.props.password}@`
  // ),
  // AtlasBasic: atlasBasic,
});
