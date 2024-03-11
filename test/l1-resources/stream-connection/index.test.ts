// Copyright 2024 MongoDB Inc
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
  CfnStreamConnection,
  CfnStreamConnectionPropsType,
  DbRoleToExecuteType,
} from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::StreamConnection";
const PROFILE = "default";
const PROJECT_ID = "testProjectId";
const INSTANCE_NAME = "testInstanceName";
const CONNECTION_NAME = "testConnectionName";
const CLUSTER_NAME = "testClusterName";
const ROLE = "testRole";
const PROTOCOL = "PLAINTEXT";
const MECHANISM = "PLAIN";
const USERNAME = "testUsername";
const PASSWORD = "testPassword";
const BOOTSTRAP_SERVER = "testBootstapServer";
const BROKER_PUBLIC_CERTIFICATE = "testBrokerPublicCertificate";

test("AtlasStreamConnection of type Cluster construct should contain default properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnStreamConnection(stack, "stream-connection-testing-stack", {
    profile: PROFILE,
    instanceName: INSTANCE_NAME,
    projectId: PROJECT_ID,
    connectionName: CONNECTION_NAME,
    type: CfnStreamConnectionPropsType.CLUSTER,
    clusterName: CLUSTER_NAME,
    dbRoleToExecute: {
      role: ROLE,
      type: DbRoleToExecuteType.BUILT_UNDERSCORE_IN,
    },
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    InstanceName: INSTANCE_NAME,
    ProjectId: PROJECT_ID,
    ConnectionName: CONNECTION_NAME,
    Type: CfnStreamConnectionPropsType.CLUSTER,
    ClusterName: CLUSTER_NAME,
    DbRoleToExecute: {
      Role: ROLE,
      Type: DbRoleToExecuteType.BUILT_UNDERSCORE_IN,
    },
  });
});

test("AtlasStreamConnection of type Kafka construct should contain default properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnStreamConnection(stack, "stream-connection-testing-stack", {
    profile: PROFILE,
    instanceName: INSTANCE_NAME,
    projectId: PROJECT_ID,
    connectionName: CONNECTION_NAME,
    type: CfnStreamConnectionPropsType.CLUSTER,
    authentication: {
      mechanism: MECHANISM,
      username: USERNAME,
      password: PASSWORD,
    },
    bootstrapServers: BOOTSTRAP_SERVER,
    security: {
      brokerPublicCertificate: BROKER_PUBLIC_CERTIFICATE,
      protocol: PROTOCOL,
    },
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    InstanceName: INSTANCE_NAME,
    ProjectId: PROJECT_ID,
    ConnectionName: CONNECTION_NAME,
    Type: CfnStreamConnectionPropsType.CLUSTER,
    Authentication: {
      Mechanism: MECHANISM,
      Username: USERNAME,
      Password: PASSWORD,
    },
    BootstrapServers: BOOTSTRAP_SERVER,
    Security: {
      BrokerPublicCertificate: BROKER_PUBLIC_CERTIFICATE,
      Protocol: PROTOCOL,
    },
  });
});
