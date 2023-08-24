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
import { CfnFederatedDatabaseInstance } from "../../../src/l1-resources/federated-database-instance";

const RESOURCE_NAME = "MongoDB::Atlas::FederatedDatabaseInstance";
const PROJECT_ID = "testProjectId";
const ROLE_ID = "test_host_name";
const TESTS3_BUCKET = "cfn-boto-data-federation-test1-us-east-1";
const PROFILE = "default";
const TENANT_NAME = "cfn-test-data-federation-2";
const REGION = "VIRGINIA_USA";
const MAX_WILDCARD_COLLECTIONS = "50";
const NAME = "cfn-df-dbs";

test("Cluster construct should contain default properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnFederatedDatabaseInstance(
    stack,
    "Federated-Database-Instance-testing-stack",
    {
      tenantName: TENANT_NAME,
      projectId: PROJECT_ID,
      profile: PROFILE,
      cloudProviderConfig: {
        roleId: ROLE_ID,
        testS3Bucket: TESTS3_BUCKET,
      },
      dataProcessRegion: {
        region: REGION,
      },
      storage: {
        databases: [
          {
            maxWildcardCollections: MAX_WILDCARD_COLLECTIONS,
            name: NAME,
          },
        ],
      },
    }
  );

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    TenantName: TENANT_NAME,
    ProjectId: PROJECT_ID,
    Profile: PROFILE,
    CloudProviderConfig: {
      RoleId: ROLE_ID,
      TestS3Bucket: TESTS3_BUCKET,
    },
    DataProcessRegion: {
      Region: REGION,
    },
    Storage: {
      Databases: [
        {
          MaxWildcardCollections: MAX_WILDCARD_COLLECTIONS,
          Name: NAME,
        },
      ],
    },
  });
});
