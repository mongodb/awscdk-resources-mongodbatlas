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
import { AtlasEncryptionAtRestExpress } from "./index";

const app = new cdk.App();
const stack = new cdk.Stack(app, "atlas-encryption-at-rest-express", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const PROJECT_ID =
  stack.node.tryGetContext("MONGODB_ATLAS_PROJECT_ID") ||
  process.env.MONGODB_ATLAS_PROJECT_ID;
const ROLE_ID =
  stack.node.tryGetContext("MONGODB_ATLAS_ROLE_ID") ||
  process.env.MONGODB_ATLAS_ROLE_ID;
const MASTER_KEY_ID =
  stack.node.tryGetContext("MONGODB_ATLAS_MASTER_KEY_ID") ||
  process.env.MONGODB_ATLAS_MASTER_KEY_ID;
const DB_USER_PASSWORD =
  stack.node.tryGetContext("MONGODB_ATLAS_DB_USER_PASSWORD") ||
  process.env.MONGODB_ATLAS_DB_USER_PASSWORD;
const DB_USER_USERNAME =
  stack.node.tryGetContext("MONGODB_ATLAS_DB_USER_USERNAME") ||
  process.env.MONGODB_ATLAS_DB_USER_USERNAME;

new AtlasEncryptionAtRestExpress(stack, "atlas-encryption-at-rest-express", {
  projectId: PROJECT_ID,

  encryptionAtRest: {
    roleId: ROLE_ID,
    customerMasterKeyId: MASTER_KEY_ID,
  },

  cluster: {
    name: "ClusterCDK",
    backupEnabled: false,
    mongoDbMajorVersion: "6.0",
    replicationSpecs: [
      {
        numShards: 1,
        advancedRegionConfigs: [
          {
            regionName: "US_WEST_1",
            electableSpecs: {
              instanceSize: "M10",
              nodeCount: 3,
              ebsVolumeType: "STANDARD",
            },
            priority: 7,
          },
        ],
      },
    ],
  },

  accessList: {
    accessList: [
      {
        ipAddress: "192.0.0.1",
      },
    ],
  },

  databaseUser: {
    username: DB_USER_USERNAME,
    password: DB_USER_PASSWORD,
  },

  profile: "default",
});
