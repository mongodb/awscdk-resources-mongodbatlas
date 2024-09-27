// Copyright 2024 MongoDB Inc
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
import { CfnResourcePolicy } from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::ResourcePolicy";
const PROFILE = "default";
const ORG_ID = "60ddf55c27a5a20955a707d7";
const NAME = "test-cdk-policy";
const POLICY_BODY =
  'forbid (principal,action == cloud::Action::"cluster.createEdit",resource) when {context.cluster.cloudProviders.containsAny([cloud::cloudProvider::"aws"])};';

test("ResourcePolicy construct should contain default properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnResourcePolicy(stack, "resource-policy-testing-stack", {
    profile: PROFILE,
    name: NAME,
    orgId: ORG_ID,
    policies: [
      {
        body: POLICY_BODY,
      },
    ],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    Name: NAME,
    OrgId: ORG_ID,
    Policies: [
      {
        Body: POLICY_BODY,
      },
    ],
  });
});
