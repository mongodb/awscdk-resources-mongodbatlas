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
import { Template } from "aws-cdk-lib/assertions";
import { CfnProjectServiceAccount } from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::ProjectServiceAccount";
const PROFILE = "default";
const PROJECT_ID = "64bad960538ae76ec5c70050";
const SA_NAME = "my-project-service-account";
const DESCRIPTION = "Service account for project-level automation";
const ROLES = ["GROUP_READ_ONLY"];
const SECRET_EXPIRES_AFTER_HOURS = 8760;

test("CfnProjectServiceAccount construct should contain required properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnProjectServiceAccount(stack, "project-sa-testing-stack", {
    profile: PROFILE,
    projectId: PROJECT_ID,
    name: SA_NAME,
    description: DESCRIPTION,
    roles: ROLES,
    secretExpiresAfterHours: SECRET_EXPIRES_AFTER_HOURS,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    ProjectId: PROJECT_ID,
    Name: SA_NAME,
    Description: DESCRIPTION,
    Roles: ROLES,
    SecretExpiresAfterHours: SECRET_EXPIRES_AFTER_HOURS,
  });
});

test("CfnProjectServiceAccount construct should support multiple project roles", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnProjectServiceAccount(stack, "project-sa-multi-role-stack", {
    projectId: PROJECT_ID,
    name: SA_NAME,
    description: DESCRIPTION,
    roles: ["GROUP_DATA_ACCESS_READ_WRITE", "GROUP_CLUSTER_MANAGER"],
    secretExpiresAfterHours: 720,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Roles: ["GROUP_DATA_ACCESS_READ_WRITE", "GROUP_CLUSTER_MANAGER"],
    SecretExpiresAfterHours: 720,
  });
});

test("CfnProjectServiceAccount construct should support secrets array", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnProjectServiceAccount(stack, "project-sa-secrets-stack", {
    projectId: PROJECT_ID,
    name: SA_NAME,
    description: DESCRIPTION,
    roles: ROLES,
    secretExpiresAfterHours: SECRET_EXPIRES_AFTER_HOURS,
    secrets: [
      {
        id: "secretId456",
        createdAt: "2024-01-01T00:00:00Z",
        expiresAt: "2025-01-01T00:00:00Z",
        maskedSecretValue: "mcs_****",
      },
    ],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Secrets: [
      {
        Id: "secretId456",
        CreatedAt: "2024-01-01T00:00:00Z",
        ExpiresAt: "2025-01-01T00:00:00Z",
        MaskedSecretValue: "mcs_****",
      },
    ],
  });
});

test("CfnProjectServiceAccount construct should work without optional properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnProjectServiceAccount(stack, "project-sa-minimal-stack", {
    projectId: PROJECT_ID,
    name: SA_NAME,
    description: DESCRIPTION,
    roles: ROLES,
    secretExpiresAfterHours: SECRET_EXPIRES_AFTER_HOURS,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ProjectId: PROJECT_ID,
    Name: SA_NAME,
    Description: DESCRIPTION,
    Roles: ROLES,
    SecretExpiresAfterHours: SECRET_EXPIRES_AFTER_HOURS,
  });
});
