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
  CfnStreamProcessor,
  CfnStreamProcessorPropsDesiredState,
} from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::StreamProcessor";
const PROFILE = "default";
const PROJECT_ID = "testProjectId";
const WORKSPACE_NAME = "testWorkspace";
const PROCESSOR_NAME = "testProcessor";
const PIPELINE = JSON.stringify([
  { $source: { connectionName: "kafka-connection" } },
  {
    $emit: {
      connectionName: "atlas-connection",
      db: "myDb",
      coll: "myCol",
      timeseries: { timeField: "ts" },
    },
  },
]);

test("CfnStreamProcessor construct should contain required properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnStreamProcessor(stack, "stream-processor-testing-stack", {
    profile: PROFILE,
    projectId: PROJECT_ID,
    workspaceName: WORKSPACE_NAME,
    processorName: PROCESSOR_NAME,
    pipeline: PIPELINE,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    ProjectId: PROJECT_ID,
    WorkspaceName: WORKSPACE_NAME,
    ProcessorName: PROCESSOR_NAME,
    Pipeline: PIPELINE,
  });
});

test("CfnStreamProcessor construct should support desiredState STARTED", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnStreamProcessor(stack, "stream-processor-started-stack", {
    projectId: PROJECT_ID,
    workspaceName: WORKSPACE_NAME,
    processorName: PROCESSOR_NAME,
    pipeline: PIPELINE,
    desiredState: CfnStreamProcessorPropsDesiredState.STARTED,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    DesiredState: CfnStreamProcessorPropsDesiredState.STARTED,
  });
});

test("CfnStreamProcessor construct should support desiredState STOPPED", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnStreamProcessor(stack, "stream-processor-stopped-stack", {
    projectId: PROJECT_ID,
    workspaceName: WORKSPACE_NAME,
    processorName: PROCESSOR_NAME,
    pipeline: PIPELINE,
    desiredState: CfnStreamProcessorPropsDesiredState.STOPPED,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    DesiredState: CfnStreamProcessorPropsDesiredState.STOPPED,
  });
});

test("CfnStreamProcessor construct should support options with DLQ", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnStreamProcessor(stack, "stream-processor-dlq-stack", {
    projectId: PROJECT_ID,
    workspaceName: WORKSPACE_NAME,
    processorName: PROCESSOR_NAME,
    pipeline: PIPELINE,
    options: {
      dlq: {
        coll: "dlqCollection",
        connectionName: "atlas-connection",
        db: "dlqDatabase",
      },
    },
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Options: {
      Dlq: {
        Coll: "dlqCollection",
        ConnectionName: "atlas-connection",
        Db: "dlqDatabase",
      },
    },
  });
});

test("CfnStreamProcessor construct should support timeouts and deleteOnCreateTimeout", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnStreamProcessor(stack, "stream-processor-timeout-stack", {
    projectId: PROJECT_ID,
    workspaceName: WORKSPACE_NAME,
    processorName: PROCESSOR_NAME,
    pipeline: PIPELINE,
    timeouts: { create: "30m" },
    deleteOnCreateTimeout: false,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Timeouts: { Create: "30m" },
    DeleteOnCreateTimeout: false,
  });
});
