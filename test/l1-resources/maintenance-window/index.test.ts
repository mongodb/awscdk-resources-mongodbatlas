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
import { CfnMaintenanceWindow } from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::MaintenanceWindow";
const PROFILE = "default";
const PROJECT_ID = "testProjectId";
const DAY_OF_WEEK = 2; // Monday
const HOUR_OF_DAY = 3; // 3 AM

test("CfnMaintenanceWindow construct should contain required properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnMaintenanceWindow(stack, "maintenance-window-testing-stack", {
    profile: PROFILE,
    projectId: PROJECT_ID,
    dayOfWeek: DAY_OF_WEEK,
    hourOfDay: HOUR_OF_DAY,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    ProjectId: PROJECT_ID,
    DayOfWeek: DAY_OF_WEEK,
    HourOfDay: HOUR_OF_DAY,
  });
});

test("CfnMaintenanceWindow construct should support auto-defer flags", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnMaintenanceWindow(stack, "maintenance-window-defer-stack", {
    projectId: PROJECT_ID,
    dayOfWeek: DAY_OF_WEEK,
    hourOfDay: HOUR_OF_DAY,
    autoDeferOnceEnabled: true,
    autoDefer: true,
    defer: false,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    AutoDeferOnceEnabled: true,
    AutoDefer: true,
    Defer: false,
  });
});

test("CfnMaintenanceWindow construct should support protectedHours", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnMaintenanceWindow(stack, "maintenance-window-protected-stack", {
    projectId: PROJECT_ID,
    dayOfWeek: DAY_OF_WEEK,
    hourOfDay: HOUR_OF_DAY,
    protectedHours: {
      startHourOfDay: 8,
      endHourOfDay: 18,
    },
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ProtectedHours: {
      StartHourOfDay: 8,
      EndHourOfDay: 18,
    },
  });
});
