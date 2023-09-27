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
import { CfnDataLakePipeline } from "../../../src/l1-resources/data-lake-pipeline";

const RESOURCE_NAME = "MongoDB::Atlas::DataLakePipeline";
const PROJECT_ID = "testProjectId";
const CLUSTER_NAME = "testclusterdatalakepipeline";
const PROFILE = "default";
const DBNAME = "testdatabase4";
const COLLECTIONNAME = "testcollection3";
const NAME = "testdatalakepipeline1";

const sink = {
  partitionFields: [
    {
      fieldName: "testpartition2",
      order: 0,
    },
  ],
};

const transform = [
  {
    field: "testtransformFeild",
    type: "EXCLUDE",
  },
];

test("Datalake pipeline construct should contain default properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnDataLakePipeline(stack, "Data-lake-pipeline-stack", {
    projectId: PROJECT_ID,
    name: NAME,
    profile: PROFILE,
    sink: sink,
    source: {
      clusterName: CLUSTER_NAME,
      collectionName: COLLECTIONNAME,
      databaseName: DBNAME,
    },
    transformations: transform,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ProjectId: PROJECT_ID,
    Name: NAME,
    Profile: PROFILE,
    Sink: {
      PartitionFields: [
        {
          FieldName: "testpartition2",
          Order: 0,
        },
      ],
    },
    Source: {
      ClusterName: CLUSTER_NAME,
      CollectionName: COLLECTIONNAME,
      DatabaseName: DBNAME,
    },
    Transformations: [
      {
        Field: "testtransformFeild",
        Type: "EXCLUDE",
      },
    ],
  });
});
