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
import { CfnProject } from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::Project";
const PROJECT_ID = "63350255419cf25e3d511c95";
const PROFILE = "default";
const NAME = "ATLAS_ORG_ID";

test("Projects construct should contain default properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnProject(stack, "project-region-usage-restriction-stack", {
    orgId: PROJECT_ID,
    name: NAME,
    profile: PROFILE,
    regionUsageRestrictions: "NONE",
    projectSettings: {
      isCollectDatabaseSpecificsStatisticsEnabled: false,
      isDataExplorerEnabled: false,
      isPerformanceAdvisorEnabled: false,
      isRealtimePerformancePanelEnabled: false,
      isSchemaAdvisorEnabled: true,
      isExtendedStorageSizesEnabled: true,
    },
    projectApiKeys: [
      {
        key: "64f75b66e205b21647ae1e58",
        roleNames: ["GROUP_CLUSTER_MANAGER"],
      },
    ],
    projectTeams: [
      {
        teamId: "647a04045878135ce0e8bfff",
        roleNames: ["GROUP_OWNER"],
      },
    ],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    OrgId: PROJECT_ID,
    Name: NAME,
    Profile: PROFILE,
    RegionUsageRestrictions: "NONE",
    ProjectSettings: {
      IsCollectDatabaseSpecificsStatisticsEnabled: false,
      IsDataExplorerEnabled: false,
      IsPerformanceAdvisorEnabled: false,
      IsRealtimePerformancePanelEnabled: false,
      IsSchemaAdvisorEnabled: true,
      IsExtendedStorageSizesEnabled: true,
    },
    ProjectApiKeys: [
      {
        Key: "64f75b66e205b21647ae1e58",
        RoleNames: ["GROUP_CLUSTER_MANAGER"],
      },
    ],
    ProjectTeams: [
      {
        TeamId: "647a04045878135ce0e8bfff",
        RoleNames: ["GROUP_OWNER"],
      },
    ],
  });
});
