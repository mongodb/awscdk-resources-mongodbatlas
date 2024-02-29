// Copyright 2023 MongoDB Inc
//
// Licensed under the Apache License, Version 2.0 (the License");
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
import { Template } from "aws-cdk-lib/assertions";
import { CfnOrganization } from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::Organization";
const NAME = "testProjectId";
const ORG_OWNER_ID = "test";
const PROFILE = "default";
const AWS_SECRET_NAME = "secret_name_test";
const ROLES = ["ORG_OWNER", "ORG_GROUP_CREATOR"];
const API_KEY_DESC = "api key description";

test("CfnOrganization construct should contain default properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnOrganization(stack, "testing-stack", {
    orgOwnerId: ORG_OWNER_ID,
    name: NAME,
    apiKey: {
      roles: ROLES,
      description: API_KEY_DESC,
    },
    profile: PROFILE,
    awsSecretName: AWS_SECRET_NAME,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    OrgOwnerId: ORG_OWNER_ID,
    Name: NAME,
    APIKey: {
      Roles: ROLES,
      Description: API_KEY_DESC,
    },
    Profile: PROFILE,
    AwsSecretName: AWS_SECRET_NAME,
  });
});
