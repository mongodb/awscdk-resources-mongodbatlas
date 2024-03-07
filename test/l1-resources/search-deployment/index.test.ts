// Copyright 2023 MongoDB Inc
//
// Licensed under the Apache License, Version 2.0 (the License");
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
import { CfnSearchDeployment } from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::SearchDeployment";
const PROJECT_ID = "63350255419cf25e3d511c95";
const PROFILE = "some-profile";
const CLUSTER_NAME = "Cluster0";
const INSTANCE_SIZE = "S30_HIGHCPU_NVME";
const NODE_COUNT = 3;

test("CfnSearchDeployment construct should contain default properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnSearchDeployment(stack, "testing-stack", {
    profile: PROFILE,
    clusterName: CLUSTER_NAME,
    projectId: PROJECT_ID,
    specs: [
      {
        instanceSize: INSTANCE_SIZE,
        nodeCount: NODE_COUNT,
      },
    ],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    ClusterName: CLUSTER_NAME,
    ProjectId: PROJECT_ID,
    Specs: [
      {
        InstanceSize: INSTANCE_SIZE,
        NodeCount: NODE_COUNT,
      },
    ],
  });
});
