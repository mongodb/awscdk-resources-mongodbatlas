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
import { CfnCloudProviderAccessSetup } from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::CloudProviderAccessSetup";
const PROFILE = "default";
const PROJECT_ID = "64d5c0d1e2f3a4b5c6d7e8f9";

test("CloudProviderAccessSetup construct should contain the required properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnCloudProviderAccessSetup(stack, "testing-stack", {
    projectId: PROJECT_ID,
    profile: PROFILE,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ProjectId: PROJECT_ID,
    Profile: PROFILE,
  });
});

test("CloudProviderAccessSetup construct should omit the profile when it is not set", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnCloudProviderAccessSetup(stack, "testing-stack-no-profile", {
    projectId: PROJECT_ID,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ProjectId: PROJECT_ID,
    Profile: Match.absent(),
  });
});
