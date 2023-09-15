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
import {
  AtlasBasicServerlessPrivateEndpoint,
  AtlasServerlessBasicPrivateEndpointProps,
  ServerlessPrivateEndpointProps,
} from "./index";
import * as atlas from "../../index";
import { AtlasServerlessBasicProps } from "../common/props";

const app = new cdk.App();

export const stack = new cdk.Stack(
  app,
  "atlas-basic-serverless-private-endpoint",
  {
    env: {
      region: process.env.CDK_DEFAULT_REGION,
      account: process.env.CDK_DEFAULT_ACCOUNT,
    },
  }
);

const orgId =
  stack.node.tryGetContext("MONGODB_ATLAS_ORG_ID") ||
  process.env.MONGODB_ATLAS_ORG_ID;
const vpcId = stack.node.tryGetContext("AWS_VPC_ID") || process.env.AWS_VPC_ID;
const subnetId =
  stack.node.tryGetContext("AWS_SUBNET_ID") || process.env.AWS_SUBNET_ID;
const awsRegion =
  stack.node.tryGetContext("AWS_REGION") || process.env.AWS_REGION;

const instanceName = "aws-quickstart-serverless-pe";

const atlasServerlessBasicProps: AtlasServerlessBasicProps = {
  serverlessProps: {
    name: instanceName,
    providerSettings: {
      providerName:
        atlas.ServerlessInstanceProviderSettingsProviderName.SERVERLESS,
      regionName: "US_EAST_1",
    },
    continuousBackupEnabled: false,
    terminationProtectionEnabled: false,
  },
  projectProps: {
    name: "aws-quickstart-serverless-pe",
    orgId: orgId,
  },
  ipAccessListProps: {
    accessList: [
      {
        ipAddress: "10.10.0.0/24",
        comment: "Open Subnets",
      },
    ],
  },
};

const serverlessPrivateEndpointProps: ServerlessPrivateEndpointProps = {
  awsPrivateEndpointConfigurationProperties: {
    vpcId: vpcId,
    subnetIds: [subnetId],
    region: awsRegion,
  },
  createAndAssignAwsPrivateEndpoint: true,
  comment: "Serverless Private endpoint by CDK",
};

export const props: AtlasServerlessBasicPrivateEndpointProps = {
  atlasServerlessBasicProps: atlasServerlessBasicProps,
  serverlessPrivateEndpointProps: serverlessPrivateEndpointProps,
  instanceName: instanceName,
};

new AtlasBasicServerlessPrivateEndpoint(
  stack,
  "atlas-basic-serverless-private-endpoint",
  props
);
