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
import { AtlasServerlessBasic } from "./index";
import * as atlas from "../../index";

const app = new cdk.App();
const stack = new cdk.Stack(app, "atlas-basic-default", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const orgId = "63350255419cf25e3d511c95";

new AtlasServerlessBasic(stack, "atlas-basic", {
  serverlessProps: {
    providerSettings: {
      providerName:
        atlas.ServerlessInstanceProviderSettingsProviderName.SERVERLESS,
      regionName: "US_EAST_1",
    },
    continuousBackupEnabled: false,
    terminationProtectionEnabled: false,
  },
  projectProps: {
    orgId: orgId,
    name: "AtlasServerlessBasicTest",
  },
  profile: "default",
  ipAccessListProps: {
    accessList: [
      {
        ipAddress: "10.10.0.0/24",
        comment: "open ip subnet",
      },
    ],
  },
});
