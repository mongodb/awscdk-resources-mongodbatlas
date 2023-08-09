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

/**
 * This sample deploys a MongoDB Atlas replicaset cluster with optional VPC peering or private endpoint with your AWS VPC.
 *
 * Deploy this sample with:
 * npx cdk -a "npx ts-node ./integ.default.ts" deploy
 *
 * context variables:
 * use_default_vpc=1 -> deploy into your existing default VPC
 * use_vpc_id=vpc-xxxxx -> deploy into your existing VPC vpc-xxxxx
 * MONGODB_ATLAS_ORG_ID=xxxxx -> deploy with the Organization ID
 */

import { App, Stack, aws_ec2 as ec2 } from "aws-cdk-lib";
import { Construct } from "constructs";
import { AtlasBasic, AtlasRegion } from "../../index";

const app = new App();
const stack = new Stack(app, "atlas-basic-default", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const orgId =
  stack.node.tryGetContext("MONGODB_ATLAS_ORG_ID") ||
  process.env.MONGODB_ATLAS_ORG_ID;

// customize the replication specs
const replicationSpecs = [
  {
    numShards: 1,
    advancedRegionConfigs: [
      {
        analyticsSpecs: {
          ebsVolumeType: "STANDARD",
          instanceSize: "M10",
          nodeCount: 1,
        },
        electableSpecs: {
          ebsVolumeType: "STANDARD",
          instanceSize: "M10",
          nodeCount: 3,
        },
        priority: 7,
        regionName: "US_EAST_1",
      },
    ],
  },
];

// create a basic replicaset cluster
const cluster = new AtlasBasic(stack, "atlas-basic-cluster", {
  orgId,
  accessList: [{ ipAddress: "0.0.0.0/0", comment: "public to all" }],
  profile: "my-mongo-profile",
  region: AtlasRegion.US_EAST_1,
  clusterOptions: {
    replicationSpecs,
  },
  databaseUserOptions: {
    databaseName: "admin",
    username: "my-username",
    password: "my-passwd-to-change",
    roles: [{ roleName: "atlasAdmin", databaseName: "admin" }],
  },
});

// create a Vpc
const vpc = getVpc(stack);

// add a private endpoint for it
cluster.addPrivateEndpoint({
  vpc,
  vpcSubnets: [
    { subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS, onePerAz: true },
  ],
});

// cluster.addVpcPeering({ vpc, cidr: "192.168.248.0/21" });

function getVpc(scope: Construct): ec2.IVpc {
  return scope.node.tryGetContext("use_default_vpc") === "1"
    ? ec2.Vpc.fromLookup(scope, "Vpc", { isDefault: true })
    : scope.node.tryGetContext("use_vpc_id") != undefined
    ? ec2.Vpc.fromLookup(scope, "Vpc", {
        vpcId: scope.node.tryGetContext("use_vpc_id"),
      })
    : new ec2.Vpc(scope, "Vpc", { natGateways: 1 });
}
