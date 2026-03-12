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
import { CfnMongoDbEmployeeAccessGrant } from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::MongoDbEmployeeAccessGrant";
const PROFILE = "default";
const PROJECT_ID = "64bad960538ae76ec5c70050";
const CLUSTER_NAME = "MyCluster";
const EXPIRATION_TIME = new Date("2025-12-31T23:59:59Z");

test("CfnMongoDbEmployeeAccessGrant construct should support CLUSTER_DATABASE_LOGS grant", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnMongoDbEmployeeAccessGrant(stack, "employee-access-logs-stack", {
    profile: PROFILE,
    projectId: PROJECT_ID,
    clusterName: CLUSTER_NAME,
    grantType: "CLUSTER_DATABASE_LOGS",
    expirationTime: EXPIRATION_TIME,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    ProjectId: PROJECT_ID,
    ClusterName: CLUSTER_NAME,
    GrantType: "CLUSTER_DATABASE_LOGS",
    ExpirationTime: EXPIRATION_TIME.toISOString(),
  });
});

test("CfnMongoDbEmployeeAccessGrant construct should support CLUSTER_INFRASTRUCTURE grant", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnMongoDbEmployeeAccessGrant(stack, "employee-access-infra-stack", {
    projectId: PROJECT_ID,
    clusterName: CLUSTER_NAME,
    grantType: "CLUSTER_INFRASTRUCTURE",
    expirationTime: EXPIRATION_TIME,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ProjectId: PROJECT_ID,
    ClusterName: CLUSTER_NAME,
    GrantType: "CLUSTER_INFRASTRUCTURE",
    ExpirationTime: EXPIRATION_TIME.toISOString(),
  });
});

test("CfnMongoDbEmployeeAccessGrant construct should support CLUSTER_INFRASTRUCTURE_AND_APP_SERVICES_SYNC_DATA grant", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnMongoDbEmployeeAccessGrant(stack, "employee-access-full-stack", {
    projectId: PROJECT_ID,
    clusterName: CLUSTER_NAME,
    grantType: "CLUSTER_INFRASTRUCTURE_AND_APP_SERVICES_SYNC_DATA",
    expirationTime: EXPIRATION_TIME,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    GrantType: "CLUSTER_INFRASTRUCTURE_AND_APP_SERVICES_SYNC_DATA",
    ExpirationTime: EXPIRATION_TIME.toISOString(),
  });
});

test("CfnMongoDbEmployeeAccessGrant construct should work without optional profile", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnMongoDbEmployeeAccessGrant(stack, "employee-access-minimal-stack", {
    projectId: PROJECT_ID,
    clusterName: CLUSTER_NAME,
    grantType: "CLUSTER_DATABASE_LOGS",
    expirationTime: EXPIRATION_TIME,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ProjectId: PROJECT_ID,
    ClusterName: CLUSTER_NAME,
    GrantType: "CLUSTER_DATABASE_LOGS",
    ExpirationTime: EXPIRATION_TIME.toISOString(),
  });
});
