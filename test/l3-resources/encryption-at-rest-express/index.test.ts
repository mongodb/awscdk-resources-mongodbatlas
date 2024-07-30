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
import * as l3 from "../../../src";

const PROJECT_ID = "PROJ_ID";
const PROJECT_NAME = "TEST";
const BACKUP_ENABLED = false;
const ROLE_ID = "ROLE_ID";
const CUSTOMER_MASTER_KEY = "MASTER_KEY";
const DATABASE_NAME = "DATABASE_NAME";
const PASSWORD = "PASSWORD";
const DATABASE_USER_NAME = "atlas-user";
const RESOURCE_NAME_CLUSTER = "MongoDB::Atlas::Cluster";
const RESOURCE_NAME_DB_USER = "MongoDB::Atlas::DatabaseUser";
const RESOURCE_ENCRYPTION_AT_REST = "MongoDB::Atlas::EncryptionAtRest";
const RESOURCE_ACCESS_LIST = "MongoDB::Atlas::ProjectIpAccessList";
const REGION = "US_EAST_1";
const INSTANCE_SIZE = "M30";
const ADMIN_DB = "admin";
const ROLE_NAME = "atlasAdmin";
const EBS_VOLUME_TYPE = "STANDARD";
const IP_ADDRESS = "190.0.0.1";

test("Encryption at rest express construct should contain default properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new l3.AtlasEncryptionAtRestExpress(stack, "testing-stack", {
    cluster: {
      name: PROJECT_NAME,
      backupEnabled: BACKUP_ENABLED,
    },

    accessList: {
      accessList: [
        {
          ipAddress: IP_ADDRESS,
        },
      ],
    },

    databaseUser: {
      databaseName: DATABASE_NAME,
      username: DATABASE_USER_NAME,
      password: PASSWORD,
    },

    projectId: PROJECT_ID,

    encryptionAtRest: {
      roleId: ROLE_ID,
      customerMasterKeyId: CUSTOMER_MASTER_KEY,
    },
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME_CLUSTER, {
    ClusterType: "REPLICASET",
    Name: PROJECT_NAME,
    BackupEnabled: BACKUP_ENABLED,
    ReplicationSpecs: [
      {
        NumShards: 1,
        AdvancedRegionConfigs: [
          {
            RegionName: REGION,
            ElectableSpecs: {
              EbsVolumeType: EBS_VOLUME_TYPE,
              InstanceSize: INSTANCE_SIZE,
              NodeCount: 3,
            },
            AnalyticsSpecs: {
              EbsVolumeType: EBS_VOLUME_TYPE,
              InstanceSize: INSTANCE_SIZE,
              NodeCount: 1,
            },
          },
        ],
      },
    ],
  });

  template.hasResourceProperties(RESOURCE_NAME_DB_USER, {
    ProjectId: PROJECT_ID,
    DatabaseName: DATABASE_NAME,
    Password: PASSWORD,
    Username: DATABASE_USER_NAME,
    Roles: [
      {
        DatabaseName: ADMIN_DB,
        RoleName: ROLE_NAME,
      },
    ],
  });

  template.hasResourceProperties(RESOURCE_ENCRYPTION_AT_REST, {
    AwsKmsConfig: {
      Region: REGION,
      RoleID: ROLE_ID,
      Enabled: true,
      CustomerMasterKeyID: CUSTOMER_MASTER_KEY,
    },
  });

  template.hasResourceProperties(RESOURCE_ACCESS_LIST, {
    AccessList: [
      {
        IPAddress: IP_ADDRESS,
      },
    ],
  });
});
