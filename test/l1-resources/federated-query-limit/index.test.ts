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
import {
  CfnFederatedQueryLimit,
  CfnFederatedQueryLimitProps,
  CfnFederatedQueryLimitPropsLimitName,
} from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::FederatedQueryLimit";
const PROJECT_ID = "64bad960538ae76ec5c70050";
const TENANTNAME = "TestCloudFormation-tenant";
const PROFILE = "default";
const LIMITNAME = CfnFederatedQueryLimitPropsLimitName.BYTES_PROCESSED_QUERY;
const VALUE = "2000000000";

const propsQueryLimitProps: CfnFederatedQueryLimitProps = {
  profile: PROFILE,
  projectId: PROJECT_ID,
  tenantName: TENANTNAME,
  limitName: LIMITNAME,
  value: VALUE,
};

test("AtlasFederatedQueryLimit construct should contain default properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnFederatedQueryLimit(stack, "testing-stack", propsQueryLimitProps);

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    ProjectId: PROJECT_ID,
    TenantName: TENANTNAME,
    LimitName: LIMITNAME,
    Value: VALUE,
  });
});

test("AtlasFederatedQueryLimit construct should support overrunPolicy", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnFederatedQueryLimit(stack, "testing-stack", {
    projectId: PROJECT_ID,
    tenantName: TENANTNAME,
    limitName: CfnFederatedQueryLimitPropsLimitName.BYTES_PROCESSED_DAILY,
    value: VALUE,
    overrunPolicy: "BLOCK",
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    LimitName: CfnFederatedQueryLimitPropsLimitName.BYTES_PROCESSED_DAILY,
    OverrunPolicy: "BLOCK",
  });
});

test("AtlasFederatedQueryLimit construct should support weekly and monthly limit names", () => {
  const mockApp = new App();
  const stackWeekly = new Stack(mockApp);
  const stackMonthly = new Stack(new App());

  new CfnFederatedQueryLimit(stackWeekly, "testing-stack-weekly", {
    projectId: PROJECT_ID,
    tenantName: TENANTNAME,
    limitName: CfnFederatedQueryLimitPropsLimitName.BYTES_PROCESSED_WEEKLY,
    value: VALUE,
  });

  new CfnFederatedQueryLimit(stackMonthly, "testing-stack-monthly", {
    projectId: PROJECT_ID,
    tenantName: TENANTNAME,
    limitName: CfnFederatedQueryLimitPropsLimitName.BYTES_PROCESSED_MONTHLY,
    value: VALUE,
  });

  Template.fromStack(stackWeekly).hasResourceProperties(RESOURCE_NAME, {
    LimitName: CfnFederatedQueryLimitPropsLimitName.BYTES_PROCESSED_WEEKLY,
  });

  Template.fromStack(stackMonthly).hasResourceProperties(RESOURCE_NAME, {
    LimitName: CfnFederatedQueryLimitPropsLimitName.BYTES_PROCESSED_MONTHLY,
  });
});
