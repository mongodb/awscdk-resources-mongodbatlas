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
import { CfnServiceAccount } from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::ServiceAccount";
const PROFILE = "default";
const ORG_ID = "64bad960538ae76ec5c70050";
const SA_NAME = "my-service-account";
const DESCRIPTION = "Service account for CI/CD pipeline";
const ROLES = ["ORG_MEMBER"];
const SECRET_EXPIRES_AFTER_HOURS = 8760;

test("CfnServiceAccount construct should contain required properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnServiceAccount(stack, "service-account-testing-stack", {
    profile: PROFILE,
    orgId: ORG_ID,
    name: SA_NAME,
    description: DESCRIPTION,
    roles: ROLES,
    secretExpiresAfterHours: SECRET_EXPIRES_AFTER_HOURS,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    OrgId: ORG_ID,
    Name: SA_NAME,
    Description: DESCRIPTION,
    Roles: ROLES,
    SecretExpiresAfterHours: SECRET_EXPIRES_AFTER_HOURS,
  });
});

test("CfnServiceAccount construct should support multiple roles", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnServiceAccount(stack, "service-account-multi-role-stack", {
    orgId: ORG_ID,
    name: SA_NAME,
    description: DESCRIPTION,
    roles: ["ORG_OWNER", "ORG_BILLING_ADMIN"],
    secretExpiresAfterHours: 720,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Roles: ["ORG_OWNER", "ORG_BILLING_ADMIN"],
    SecretExpiresAfterHours: 720,
  });
});

test("CfnServiceAccount construct should support secrets array", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnServiceAccount(stack, "service-account-secrets-stack", {
    orgId: ORG_ID,
    name: SA_NAME,
    description: DESCRIPTION,
    roles: ROLES,
    secretExpiresAfterHours: SECRET_EXPIRES_AFTER_HOURS,
    secrets: [
      {
        id: "secretId123",
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
        Id: "secretId123",
        CreatedAt: "2024-01-01T00:00:00Z",
        ExpiresAt: "2025-01-01T00:00:00Z",
        MaskedSecretValue: "mcs_****",
      },
    ],
  });
});

test("CfnServiceAccount construct should work without optional properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnServiceAccount(stack, "service-account-minimal-stack", {
    orgId: ORG_ID,
    name: SA_NAME,
    description: DESCRIPTION,
    roles: ROLES,
    secretExpiresAfterHours: SECRET_EXPIRES_AFTER_HOURS,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    OrgId: ORG_ID,
    Name: SA_NAME,
    Description: DESCRIPTION,
    Roles: ROLES,
    SecretExpiresAfterHours: SECRET_EXPIRES_AFTER_HOURS,
  });
});
