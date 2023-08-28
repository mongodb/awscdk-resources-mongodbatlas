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

import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as l3 from "../../../src";
import {ServerlessInstanceProviderSettingsProviderName} from "../../../src/index";

const RESOURCE_NAME_PROJECT = "MongoDB::Atlas::Project";
const RESOURCE_NAME_SERVERLESS_INSTANCE = "MongoDB::Atlas::ServerlessInstance";
const RESOURCE_NAME_DB_USER = "MongoDB::Atlas::DatabaseUser";
const PROJECT_ID = "testProjectId";
const ORG_ID = "testProjectId";
const PROJECT_NAME = "test";
const DATABASE_NAME = "test";
const DATABASE_USER_NAME = "atlas-user";
const ADMIN_DB = "admin";
const ROLE_NAME = "atlasAdmin";
const PWD = "test";

test("AtlasBasis construct should contain default properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new l3.AtlasServerlessBasic(stack, "testing-stack", {
    serverlessProps: {
      profile:"default",
      projectId: PROJECT_ID,
      providerSettings : {
        providerName: ServerlessInstanceProviderSettingsProviderName.SERVERLESS
        },
      continuousBackupEnabled : false,
      terminationProtectionEnabled: true
    },
    projectProps: {
      orgId: ORG_ID,
      name: PROJECT_NAME,
    },
    dbUserProps: {
      projectId: PROJECT_ID,
      databaseName: DATABASE_NAME,
      password: PWD,
    },
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME_PROJECT, {
    OrgId: ORG_ID,
    Name: PROJECT_NAME,
  });

  template.hasResourceProperties(RESOURCE_NAME_SERVERLESS_INSTANCE, {
      Profile:"default",
      ProjectID: PROJECT_ID,
      ProviderSettings : {
        ProviderName: ServerlessInstanceProviderSettingsProviderName.SERVERLESS
        },
      ContinuousBackupEnabled : false,
      TerminationProtectionEnabled: true
  });

  template.hasResourceProperties(RESOURCE_NAME_DB_USER, {
    ProjectId: PROJECT_ID,
    DatabaseName: DATABASE_NAME,
    Password: PWD,
    Username: DATABASE_USER_NAME,
    Roles: [
      {
        DatabaseName: ADMIN_DB,
        RoleName: ROLE_NAME,
      },
    ],
  });
});
