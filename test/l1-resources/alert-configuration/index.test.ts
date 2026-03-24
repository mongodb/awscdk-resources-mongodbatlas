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
import {
  CfnAlertConfiguration,
  IntegerThresholdViewOperator,
  MatcherFieldName,
  MatcherOperator,
  MetricThresholdViewMode,
  MetricThresholdViewOperator,
  NotificationViewTypeName,
} from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::AlertConfiguration";
const PROFILE = "default";
const PROJECT_ID = "testProjectId";

test("CfnAlertConfiguration construct should support metric threshold with email notification", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnAlertConfiguration(stack, "alert-configuration-metric-stack", {
    profile: PROFILE,
    projectId: PROJECT_ID,
    eventTypeName: "OUTSIDE_METRIC_THRESHOLD",
    notifications: [
      {
        typeName: NotificationViewTypeName.EMAIL,
        delayMin: 0,
        emailAddress: "test@example.com",
        emailEnabled: true,
        intervalMin: 15,
      },
    ],
    metricThreshold: {
      metricName: "NORMALIZED_SYSTEM_CPU_USER",
      operator: MetricThresholdViewOperator.GREATER_THAN,
      threshold: 80,
      units: "RAW",
      mode: MetricThresholdViewMode.AVERAGE,
    },
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    ProjectId: PROJECT_ID,
    EventTypeName: "OUTSIDE_METRIC_THRESHOLD",
    Notifications: [
      {
        TypeName: NotificationViewTypeName.EMAIL,
        DelayMin: 0,
        EmailAddress: "test@example.com",
        EmailEnabled: true,
        IntervalMin: 15,
      },
    ],
    MetricThreshold: {
      MetricName: "NORMALIZED_SYSTEM_CPU_USER",
      Operator: MetricThresholdViewOperator.GREATER_THAN,
      Threshold: 80,
      Units: "RAW",
      Mode: MetricThresholdViewMode.AVERAGE,
    },
  });
});

test("CfnAlertConfiguration construct should support integer threshold with matchers", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnAlertConfiguration(stack, "alert-configuration-threshold-stack", {
    profile: PROFILE,
    projectId: PROJECT_ID,
    eventTypeName: "REPLICATION_OPLOG_WINDOW_RUNNING_OUT",
    matchers: [
      {
        fieldName: MatcherFieldName.CLUSTER_NAME,
        operator: MatcherOperator.EQUALS,
        value: "my-cluster",
      },
    ],
    threshold: {
      metricName: "OPLOG_REPLICATION_LAG_TIME",
      mode: "AVERAGE",
      operator: IntegerThresholdViewOperator.GREATER_THAN,
      threshold: 1,
      units: "HOURS",
    },
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    ProjectId: PROJECT_ID,
    EventTypeName: "REPLICATION_OPLOG_WINDOW_RUNNING_OUT",
    Matchers: [
      {
        FieldName: MatcherFieldName.CLUSTER_NAME,
        Operator: MatcherOperator.EQUALS,
        Value: "my-cluster",
      },
    ],
    Threshold: {
      MetricName: "OPLOG_REPLICATION_LAG_TIME",
      Mode: "AVERAGE",
      Operator: IntegerThresholdViewOperator.GREATER_THAN,
      Threshold: 1,
      Units: "HOURS",
    },
  });
});

test("CfnAlertConfiguration construct should work with minimal properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnAlertConfiguration(stack, "alert-configuration-minimal-stack", {
    projectId: PROJECT_ID,
    eventTypeName: "NO_PRIMARY",
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ProjectId: PROJECT_ID,
    EventTypeName: "NO_PRIMARY",
  });
});
