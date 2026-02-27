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
import { CfnServiceAccountAccessListEntry } from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::ServiceAccountAccessListEntry";
const PROFILE = "default";
const ORG_ID = "64bad960538ae76ec5c70050";
const CLIENT_ID = "mcs_abcdefghijklmnop";

test("CfnServiceAccountAccessListEntry construct should support IP address entry", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnServiceAccountAccessListEntry(stack, "access-list-ip-stack", {
    profile: PROFILE,
    orgId: ORG_ID,
    clientId: CLIENT_ID,
    ipAddress: "192.168.1.10",
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    OrgId: ORG_ID,
    ClientId: CLIENT_ID,
    IPAddress: "192.168.1.10",
  });
});

test("CfnServiceAccountAccessListEntry construct should support CIDR block entry", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnServiceAccountAccessListEntry(stack, "access-list-cidr-stack", {
    orgId: ORG_ID,
    clientId: CLIENT_ID,
    cidrBlock: "10.0.0.0/24",
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    OrgId: ORG_ID,
    ClientId: CLIENT_ID,
    CIDRBlock: "10.0.0.0/24",
  });
});

test("CfnServiceAccountAccessListEntry construct should work without optional properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnServiceAccountAccessListEntry(stack, "access-list-minimal-stack", {
    orgId: ORG_ID,
    clientId: CLIENT_ID,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    OrgId: ORG_ID,
    ClientId: CLIENT_ID,
  });
});
