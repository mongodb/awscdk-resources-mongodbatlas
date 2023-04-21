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
  MicrosoftTeamsIntegration,
  MicrosoftTeamsIntegrationProps,
} from "./microsoftTeamsIntegration";

const app = new cdk.App();
const stack = new cdk.Stack(app, "third-party-integration", {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const projectId =
  stack.node.tryGetContext("MONGODB_ATLAS_PROJECT_ID") ||
  process.env.MONGODB_ATLAS_PROJECT_ID;
const webhookURL =
  stack.node.tryGetContext("TEAMS_WEBHOOK_URL") ||
  process.env.TEAMS_WEBHOOK_URL;

const props: MicrosoftTeamsIntegrationProps = {
  microsoftTeamsWebhookUrl: webhookURL,
  projectId: projectId,
};

new MicrosoftTeamsIntegration(stack, "teams-integration", props);
