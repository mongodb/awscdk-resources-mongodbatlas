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
import { CfnServiceAccountSecret } from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::ServiceAccountSecret";
const PROFILE = "default";
const ORG_ID = "64bad960538ae76ec5c70050";
const CLIENT_ID = "mcs_abcdefghijklmnop";
const SECRET_EXPIRES_AFTER_HOURS = 8760;

test("CfnServiceAccountSecret construct should contain required properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnServiceAccountSecret(stack, "service-account-secret-testing-stack", {
    profile: PROFILE,
    orgId: ORG_ID,
    clientId: CLIENT_ID,
    secretExpiresAfterHours: SECRET_EXPIRES_AFTER_HOURS,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    OrgId: ORG_ID,
    ClientId: CLIENT_ID,
    SecretExpiresAfterHours: SECRET_EXPIRES_AFTER_HOURS,
  });
});

test("CfnServiceAccountSecret construct should work without optional properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnServiceAccountSecret(stack, "service-account-secret-minimal-stack", {
    orgId: ORG_ID,
    clientId: CLIENT_ID,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    OrgId: ORG_ID,
    ClientId: CLIENT_ID,
  });
});

test("CfnServiceAccountSecret construct should support short-lived secrets", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnServiceAccountSecret(stack, "service-account-secret-short-stack", {
    orgId: ORG_ID,
    clientId: CLIENT_ID,
    secretExpiresAfterHours: 24,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    OrgId: ORG_ID,
    ClientId: CLIENT_ID,
    SecretExpiresAfterHours: 24,
  });
});
