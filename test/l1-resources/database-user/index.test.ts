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
  CfnDatabaseUser,
  CfnDatabaseUserPropsAwsiamType,
  CfnDatabaseUserPropsLdapAuthType,
  CfnDatabaseUserPropsOidcAuthType,
  CfnDatabaseUserPropsX509Type,
  ScopeDefinitionType,
} from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::DatabaseUser";
const PROFILE = "default";
const PROJECT_ID = "testProjectId";
const USERNAME = "testUser";
const PASSWORD = "testPassword";
const DATABASE_NAME = "admin";

test("CfnDatabaseUser construct should contain required properties with password auth", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnDatabaseUser(stack, "database-user-testing-stack", {
    profile: PROFILE,
    projectId: PROJECT_ID,
    username: USERNAME,
    password: PASSWORD,
    databaseName: DATABASE_NAME,
    roles: [
      { roleName: "readWrite", databaseName: "myDb" },
      { roleName: "read", databaseName: "anotherDb", collectionName: "myCol" },
    ],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    ProjectId: PROJECT_ID,
    Username: USERNAME,
    Password: PASSWORD,
    DatabaseName: DATABASE_NAME,
    Roles: [
      { RoleName: "readWrite", DatabaseName: "myDb" },
      { RoleName: "read", DatabaseName: "anotherDb", CollectionName: "myCol" },
    ],
  });
});

test("CfnDatabaseUser construct should support AWS IAM authentication", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  const IAM_ARN = "arn:aws:iam::123456789012:user/atlasUser";

  new CfnDatabaseUser(stack, "database-user-iam-stack", {
    projectId: PROJECT_ID,
    username: IAM_ARN,
    databaseName: "$external",
    awsiamType: CfnDatabaseUserPropsAwsiamType.USER,
    roles: [{ roleName: "readAnyDatabase", databaseName: "admin" }],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Username: IAM_ARN,
    DatabaseName: "$external",
    AWSIAMType: CfnDatabaseUserPropsAwsiamType.USER,
  });
});

test("CfnDatabaseUser construct should support OIDC IDP_GROUP authentication", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnDatabaseUser(stack, "database-user-oidc-stack", {
    projectId: PROJECT_ID,
    username: "oidc-group/engineers",
    databaseName: "$external",
    oidcAuthType: CfnDatabaseUserPropsOidcAuthType.IDP_GROUP,
    roles: [{ roleName: "readWrite", databaseName: "myDb" }],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    OIDCAuthType: CfnDatabaseUserPropsOidcAuthType.IDP_GROUP,
    DatabaseName: "$external",
  });
});

test("CfnDatabaseUser construct should support LDAP authentication", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnDatabaseUser(stack, "database-user-ldap-stack", {
    projectId: PROJECT_ID,
    username: "cn=John,dc=example,dc=com",
    databaseName: "$external",
    ldapAuthType: CfnDatabaseUserPropsLdapAuthType.USER,
    roles: [{ roleName: "readWrite", databaseName: "myDb" }],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    LdapAuthType: CfnDatabaseUserPropsLdapAuthType.USER,
    DatabaseName: "$external",
  });
});

test("CfnDatabaseUser construct should support X.509 authentication", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnDatabaseUser(stack, "database-user-x509-stack", {
    projectId: PROJECT_ID,
    username: "CN=myUser,OU=myOrg",
    databaseName: "$external",
    x509Type: CfnDatabaseUserPropsX509Type.MANAGED,
    roles: [{ roleName: "readWrite", databaseName: "myDb" }],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    X509Type: CfnDatabaseUserPropsX509Type.MANAGED,
    DatabaseName: "$external",
  });
});

test("CfnDatabaseUser construct should support scopes, labels and description", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnDatabaseUser(stack, "database-user-full-stack", {
    projectId: PROJECT_ID,
    username: USERNAME,
    password: PASSWORD,
    databaseName: DATABASE_NAME,
    description: "Test database user",
    roles: [{ roleName: "readWrite", databaseName: "myDb" }],
    scopes: [
      { name: "myCluster", type: ScopeDefinitionType.CLUSTER },
      { name: "myDataLake", type: ScopeDefinitionType.DATA_LAKE },
    ],
    labels: [{ key: "env", value: "production" }],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Description: "Test database user",
    Scopes: [
      { Name: "myCluster", Type: ScopeDefinitionType.CLUSTER },
      { Name: "myDataLake", Type: ScopeDefinitionType.DATA_LAKE },
    ],
    Labels: [{ Key: "env", Value: "production" }],
  });
});
