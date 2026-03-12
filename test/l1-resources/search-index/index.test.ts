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
import { CfnSearchIndex, TypeSet } from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::SearchIndex";
const PROJECT_ID = "projectId";
const CLUSTER_NAME = "testCluster";
const COLLECTION_NAME = "testCluster";
const DATABASE = "databaseName";
const INDEX_NAME = "testIndex";
const VECTOR_TYPE = "vectorSearch";
const FIELDS = JSON.stringify([
  {
    type: "vector",
    path: "plot_embedding",
    numDimensions: 1536,
    similarity: "euclidean",
  },
]);

test("CfnSearchIndex construct should contain default properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnSearchIndex(stack, "testing-stack", {
    projectId: PROJECT_ID,
    clusterName: CLUSTER_NAME,
    collectionName: COLLECTION_NAME,
    database: DATABASE,
    name: INDEX_NAME,
    mappings: { dynamic: true },
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ProjectId: PROJECT_ID,
    ClusterName: CLUSTER_NAME,
    CollectionName: COLLECTION_NAME,
    Database: DATABASE,
    Name: INDEX_NAME,
    Mappings: { Dynamic: true },
  });
});

test("CfnSearchIndex construct should allow to build vector search indexes", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnSearchIndex(stack, "testing-stack", {
    projectId: PROJECT_ID,
    clusterName: CLUSTER_NAME,
    collectionName: COLLECTION_NAME,
    database: DATABASE,
    name: INDEX_NAME,
    type: VECTOR_TYPE,
    fields: FIELDS,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ProjectId: PROJECT_ID,
    ClusterName: CLUSTER_NAME,
    CollectionName: COLLECTION_NAME,
    Database: DATABASE,
    Name: INDEX_NAME,
    Type: VECTOR_TYPE,
    Fields: FIELDS,
  });
});

test("CfnSearchIndex construct should support storedSource property", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  const STORED_SOURCE = JSON.stringify({ include: ["title", "year"] });

  new CfnSearchIndex(stack, "testing-stack", {
    projectId: PROJECT_ID,
    clusterName: CLUSTER_NAME,
    collectionName: COLLECTION_NAME,
    database: DATABASE,
    name: INDEX_NAME,
    mappings: { dynamic: true },
    storedSource: STORED_SOURCE,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Name: INDEX_NAME,
    StoredSource: STORED_SOURCE,
  });
});

test("CfnSearchIndex construct should support numPartitions property", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  const NUM_PARTITIONS = 4;

  new CfnSearchIndex(stack, "testing-stack", {
    projectId: PROJECT_ID,
    clusterName: CLUSTER_NAME,
    collectionName: COLLECTION_NAME,
    database: DATABASE,
    name: INDEX_NAME,
    mappings: { dynamic: true },
    numPartitions: NUM_PARTITIONS,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Name: INDEX_NAME,
    NumPartitions: NUM_PARTITIONS,
  });
});

test("CfnSearchIndex construct should support typeSets property", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  const typeSets: TypeSet[] = [
    {
      name: "employeeTypeSet",
      types: JSON.stringify([{ type: "string" }, { type: "number" }]),
    },
  ];

  new CfnSearchIndex(stack, "testing-stack", {
    projectId: PROJECT_ID,
    clusterName: CLUSTER_NAME,
    collectionName: COLLECTION_NAME,
    database: DATABASE,
    name: INDEX_NAME,
    mappings: { dynamic: true },
    typeSets,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Name: INDEX_NAME,
    TypeSets: [{ Name: "employeeTypeSet", Types: typeSets[0].types }],
  });
});

test("CfnSearchIndex construct should support dynamicConfig in mappings", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  const DYNAMIC_CONFIG = JSON.stringify({
    date: { type: "date" },
    numeric: { type: "number" },
  });

  new CfnSearchIndex(stack, "testing-stack", {
    projectId: PROJECT_ID,
    clusterName: CLUSTER_NAME,
    collectionName: COLLECTION_NAME,
    database: DATABASE,
    name: INDEX_NAME,
    mappings: { dynamicConfig: DYNAMIC_CONFIG },
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Name: INDEX_NAME,
    Mappings: { DynamicConfig: DYNAMIC_CONFIG },
  });
});
