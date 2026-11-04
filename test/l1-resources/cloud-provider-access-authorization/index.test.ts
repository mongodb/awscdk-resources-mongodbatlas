// Copyright 2026 MongoDB Inc
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

import { App, Stack } from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import { CfnCloudProviderAccessAuthorization } from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::CloudProviderAccessAuthorization";
const PROFILE = "default";
const PROJECT_ID = "64d5c0d1e2f3a4b5c6d7e8f9";
const ROLE_ID = "65e6d1e2f3a4b5c6d7e8f9a0";
const IAM_ASSUMED_ROLE_ARN =
  "arn:aws:iam::123456789012:role/atlas-cloud-provider-access";

test("CloudProviderAccessAuthorization construct should contain the required properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnCloudProviderAccessAuthorization(stack, "testing-stack", {
    projectId: PROJECT_ID,
    profile: PROFILE,
    roleId: ROLE_ID,
    iamAssumedRoleArn: IAM_ASSUMED_ROLE_ARN,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ProjectId: PROJECT_ID,
    Profile: PROFILE,
    RoleId: ROLE_ID,
    IamAssumedRoleArn: IAM_ASSUMED_ROLE_ARN,
  });
});

test("CloudProviderAccessAuthorization construct should omit the profile when it is not set", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnCloudProviderAccessAuthorization(stack, "testing-stack-no-profile", {
    projectId: PROJECT_ID,
    roleId: ROLE_ID,
    iamAssumedRoleArn: IAM_ASSUMED_ROLE_ARN,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ProjectId: PROJECT_ID,
    RoleId: ROLE_ID,
    IamAssumedRoleArn: IAM_ASSUMED_ROLE_ARN,
    Profile: Match.absent(),
  });
});
