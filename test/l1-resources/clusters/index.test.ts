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
import { CfnCluster } from "../../../src/l1-resources/clusters";

const RESOURCE_NAME = "MongoDB::Atlas::Cluster";
const PROJECT_ID = "testProjectId";
const CLUSTER_NAME = "test_host_name";
const PROFILE = "default";

test("Cluster construct should contain default properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnCluster(stack, "cluster-testing-stack", {
    projectId: PROJECT_ID,
    name: CLUSTER_NAME,
    mongoDbMajorVersion: "6.0",
    clusterType: "REPLICASET",
    backupEnabled: true,
    profile: PROFILE,
    replicationSpecs: [
      {
        numShards: 1,
        advancedRegionConfigs: [
          {
            autoScaling: {
              diskGb: {
                enabled: true,
              },
              compute: {
                enabled: true,
                scaleDownEnabled: false,
                maxInstanceSize: "M40",
              },
            },
            electableSpecs: {
              ebsVolumeType: "PROVISIONED",
              instanceSize: "M30",
              nodeCount: 3,
              diskIops: "2000",
            },
            priority: 7,
            regionName: "EU_WEST_1",
          },
        ],
      },
    ],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ProjectId: PROJECT_ID,
    Name: CLUSTER_NAME,
    MongoDBMajorVersion: "6.0",
    ClusterType: "REPLICASET",
    BackupEnabled: true,
    Profile: PROFILE,
    ReplicationSpecs: [
      {
        NumShards: 1,
        AdvancedRegionConfigs: [
          {
            AutoScaling: {
              DiskGB: {
                Enabled: true,
              },
              Compute: {
                Enabled: true,
                ScaleDownEnabled: false,
                MaxInstanceSize: "M40",
              },
            },
            ElectableSpecs: {
              EbsVolumeType: "PROVISIONED",
              InstanceSize: "M30",
              NodeCount: 3,
              DiskIOPS: "2000",
            },
            Priority: 7,
            RegionName: "EU_WEST_1",
          },
        ],
      },
    ],
  });
});
