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
import { CfnServiceAccountProjectAssignment } from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::ServiceAccountProjectAssignment";
const PROFILE = "default";
const ORG_ID = "64bad960538ae76ec5c70050";
const PROJECT_ID = "64bad960538ae76ec5c70051";
const CLIENT_ID = "mcs_abcdefghijklmnop";

test("CfnServiceAccountProjectAssignment construct should contain required properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnServiceAccountProjectAssignment(stack, "sa-project-assignment-stack", {
    profile: PROFILE,
    orgId: ORG_ID,
    clientId: CLIENT_ID,
    projectId: PROJECT_ID,
    roles: ["GROUP_READ_ONLY"],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    OrgId: ORG_ID,
    ClientId: CLIENT_ID,
    ProjectId: PROJECT_ID,
    Roles: ["GROUP_READ_ONLY"],
  });
});

test("CfnServiceAccountProjectAssignment construct should support multiple project roles", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnServiceAccountProjectAssignment(stack, "sa-project-multi-role-stack", {
    clientId: CLIENT_ID,
    projectId: PROJECT_ID,
    roles: ["GROUP_DATA_ACCESS_READ_WRITE", "GROUP_CLUSTER_MANAGER"],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ClientId: CLIENT_ID,
    ProjectId: PROJECT_ID,
    Roles: ["GROUP_DATA_ACCESS_READ_WRITE", "GROUP_CLUSTER_MANAGER"],
  });
});

test("CfnServiceAccountProjectAssignment construct should work without optional orgId and profile", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnServiceAccountProjectAssignment(stack, "sa-project-minimal-stack", {
    clientId: CLIENT_ID,
    projectId: PROJECT_ID,
    roles: ["GROUP_OWNER"],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ClientId: CLIENT_ID,
    ProjectId: PROJECT_ID,
    Roles: ["GROUP_OWNER"],
  });
});
