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
  CfnThirdPartyIntegration,
  CfnThirdPartyIntegrationPropsServiceDiscovery,
  CfnThirdPartyIntegrationPropsType,
} from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::ThirdPartyIntegration";
const PROFILE = "default";
const PROJECT_ID = "testProjectId";

test("CfnThirdPartyIntegration construct should support WEBHOOK integration", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnThirdPartyIntegration(stack, "third-party-webhook-stack", {
    profile: PROFILE,
    projectId: PROJECT_ID,
    type: CfnThirdPartyIntegrationPropsType.WEBHOOK,
    url: "https://hooks.example.com/notify",
    secret: "webhookSecret",
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    ProjectId: PROJECT_ID,
    Type: CfnThirdPartyIntegrationPropsType.WEBHOOK,
    Url: "https://hooks.example.com/notify",
    Secret: "webhookSecret",
  });
});

test("CfnThirdPartyIntegration construct should support DATADOG integration", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnThirdPartyIntegration(stack, "third-party-datadog-stack", {
    projectId: PROJECT_ID,
    type: CfnThirdPartyIntegrationPropsType.DATADOG,
    apiKey: "datadogApiKey123",
    region: "US",
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Type: CfnThirdPartyIntegrationPropsType.DATADOG,
    ApiKey: "datadogApiKey123",
    Region: "US",
  });
});

test("CfnThirdPartyIntegration construct should support PAGER_DUTY integration", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnThirdPartyIntegration(stack, "third-party-pagerduty-stack", {
    projectId: PROJECT_ID,
    type: CfnThirdPartyIntegrationPropsType.PAGER_DUTY,
    serviceKey: "pagerdutyServiceKey",
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Type: CfnThirdPartyIntegrationPropsType.PAGER_DUTY,
    ServiceKey: "pagerdutyServiceKey",
  });
});

test("CfnThirdPartyIntegration construct should support MICROSOFT_TEAMS integration", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnThirdPartyIntegration(stack, "third-party-msteams-stack", {
    projectId: PROJECT_ID,
    type: CfnThirdPartyIntegrationPropsType.MICROSOFT_TEAMS,
    microsoftTeamsWebhookUrl: "https://outlook.office.com/webhook/abc123",
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Type: CfnThirdPartyIntegrationPropsType.MICROSOFT_TEAMS,
    MicrosoftTeamsWebhookUrl: "https://outlook.office.com/webhook/abc123",
  });
});

test("CfnThirdPartyIntegration construct should support PROMETHEUS integration", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnThirdPartyIntegration(stack, "third-party-prometheus-stack", {
    projectId: PROJECT_ID,
    type: CfnThirdPartyIntegrationPropsType.PROMETHEUS,
    userName: "prometheusUser",
    password: "prometheusPassword",
    serviceDiscovery: CfnThirdPartyIntegrationPropsServiceDiscovery.HTTP,
    enabled: true,
    listenAddress: ":9216",
    tlsPemPath: "/etc/ssl/tls.pem",
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Type: CfnThirdPartyIntegrationPropsType.PROMETHEUS,
    UserName: "prometheusUser",
    Password: "prometheusPassword",
    ServiceDiscovery: CfnThirdPartyIntegrationPropsServiceDiscovery.HTTP,
    Enabled: true,
    ListenAddress: ":9216",
    TlsPemPath: "/etc/ssl/tls.pem",
  });
});

test("CfnThirdPartyIntegration construct should support VICTOR_OPS integration with sendUserProvidedResourceTags", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnThirdPartyIntegration(stack, "third-party-victorops-stack", {
    projectId: PROJECT_ID,
    type: CfnThirdPartyIntegrationPropsType.VICTOR_OPS,
    routingKey: "victoropsRoutingKey",
    sendUserProvidedResourceTags: true,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Type: CfnThirdPartyIntegrationPropsType.VICTOR_OPS,
    RoutingKey: "victoropsRoutingKey",
    SendUserProvidedResourceTags: true,
  });
});

test("CfnThirdPartyIntegration construct should support DATADOG metrics flags", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnThirdPartyIntegration(stack, "third-party-datadog-metrics-stack", {
    projectId: PROJECT_ID,
    type: CfnThirdPartyIntegrationPropsType.DATADOG,
    apiKey: "datadogApiKey123",
    region: "EU",
    sendCollectionLatencyMetrics: true,
    sendDatabaseMetrics: true,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Type: CfnThirdPartyIntegrationPropsType.DATADOG,
    Region: "EU",
    SendCollectionLatencyMetrics: true,
    SendDatabaseMetrics: true,
  });
});
