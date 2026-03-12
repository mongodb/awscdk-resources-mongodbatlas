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
import { CfnLogIntegration } from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::LogIntegration";
const PROFILE = "default";
const PROJECT_ID = "testProjectId";
const BUCKET_NAME = "my-atlas-logs-bucket";
const IAM_ROLE_ID = "64f2c1e3a1b2c3d4e5f60001";
const PREFIX_PATH = "mongodb-logs/";

test("CfnLogIntegration construct should contain required properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnLogIntegration(stack, "log-integration-testing-stack", {
    profile: PROFILE,
    projectId: PROJECT_ID,
    type: "S3",
    bucketName: BUCKET_NAME,
    iamRoleId: IAM_ROLE_ID,
    prefixPath: PREFIX_PATH,
    logTypes: ["MONGOD", "MONGOS"],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    ProjectId: PROJECT_ID,
    Type: "S3",
    BucketName: BUCKET_NAME,
    IamRoleId: IAM_ROLE_ID,
    PrefixPath: PREFIX_PATH,
    LogTypes: ["MONGOD", "MONGOS"],
  });
});

test("CfnLogIntegration construct should work without optional properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnLogIntegration(stack, "log-integration-minimal-stack", {
    projectId: PROJECT_ID,
    type: "S3",
    bucketName: BUCKET_NAME,
    iamRoleId: IAM_ROLE_ID,
    prefixPath: PREFIX_PATH,
    logTypes: ["MONGOD"],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ProjectId: PROJECT_ID,
    Type: "S3",
    BucketName: BUCKET_NAME,
    IamRoleId: IAM_ROLE_ID,
    PrefixPath: PREFIX_PATH,
    LogTypes: ["MONGOD"],
  });
});

test("CfnLogIntegration construct should support kmsKey for server-side encryption", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  const KMS_KEY =
    "arn:aws:kms:us-east-1:123456789012:key/abc12345-1234-1234-1234-abcdef123456";

  new CfnLogIntegration(stack, "log-integration-kms-stack", {
    projectId: PROJECT_ID,
    type: "S3",
    bucketName: BUCKET_NAME,
    iamRoleId: IAM_ROLE_ID,
    prefixPath: PREFIX_PATH,
    logTypes: ["MONGOD", "MONGOS"],
    kmsKey: KMS_KEY,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    ProjectId: PROJECT_ID,
    KmsKey: KMS_KEY,
  });
});

test("CfnLogIntegration construct should support all audit log types", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnLogIntegration(stack, "log-integration-audit-stack", {
    projectId: PROJECT_ID,
    type: "S3",
    bucketName: BUCKET_NAME,
    iamRoleId: IAM_ROLE_ID,
    prefixPath: "audit-logs/",
    logTypes: ["MONGOD_AUDIT", "MONGOS_AUDIT"],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    PrefixPath: "audit-logs/",
    LogTypes: ["MONGOD_AUDIT", "MONGOS_AUDIT"],
  });
});
