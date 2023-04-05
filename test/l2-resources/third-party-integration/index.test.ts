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

import * as atlas_tpi from '@mongodbatlas-awscdk/third-party-integration';
import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as constants from './constants';
import * as l2 from '../../../src';
import * as util from '../../../src/l2-resources/third-party-integration/util';

test('MicrosoftTeamsIntegration construct should be configured with properties', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new l2.MicrosoftTeamsIntegration(stack, 'testing-stack', {
    projectId: constants.TEST_PROJECT_ID,
    microsoftTeamsWebhookUrl: constants.TEST_WEBHOOK_URL,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(constants.THIRD_PARTY_INTEGRATION_RESOURCE_NAME, {
    MicrosoftTeamsWebhookUrl: constants.TEST_WEBHOOK_URL,
    Type: atlas_tpi.CfnThirdPartyIntegrationPropsType.MICROSOFT_TEAMS,
  });
});


test('DatadogIntegration construct should be configured with properties', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new l2.DatadogIntegration(stack, 'testing-stack', {
    projectId: constants.TEST_PROJECT_ID,
    apiKey: constants.TEST_KEY,
    region: l2.DatadogRegion.US,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(constants.THIRD_PARTY_INTEGRATION_RESOURCE_NAME, {
    ApiKey: constants.TEST_KEY,
    Region: l2.DatadogRegion.US,
    Type: atlas_tpi.CfnThirdPartyIntegrationPropsType.DATADOG,
  });
});


test('PagerDutyIntegration construct should be configured with properties', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new l2.PagerDutyIntegration(stack, 'testing-stack', {
    projectId: constants.TEST_PROJECT_ID,
    serviceKey: constants.TEST_KEY,
    region: l2.PagerDutyRegion.EU,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(constants.THIRD_PARTY_INTEGRATION_RESOURCE_NAME, {
    ServiceKey: constants.TEST_KEY,
    Region: l2.PagerDutyRegion.EU,
    Type: atlas_tpi.CfnThirdPartyIntegrationPropsType.PAGER_DUTY,
  });
});

test('PagerDutyIntegration construct should throw exceptions when required params are not provided', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  expect(() => {
    new l2.PagerDutyIntegration(stack, 'testing-stack-no-project-id', {
      projectId: '',
      serviceKey: constants.TEST_KEY,
      region: l2.PagerDutyRegion.EU,
    });
  }).toThrow(util.getPropUndefinedMsg('projectId'));

  expect(() => {
    new l2.PagerDutyIntegration(stack, 'testing-stack-no-service-key', {
      projectId: constants.TEST_PROJECT_ID,
      serviceKey: '',
      region: l2.PagerDutyRegion.EU,
    });
  }).toThrow(util.getPropUndefinedMsg('serviceKey'));
});

test('MicrosoftTeamsIntegration construct should throw exceptions when required params are not provided', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  expect(() => {
    new l2.MicrosoftTeamsIntegration(stack, 'testing-stack-no-microsoftTeamsWebhookUrl', {
      projectId: constants.TEST_PROJECT_ID,
      microsoftTeamsWebhookUrl: '',
    });
  }).toThrow(util.getPropUndefinedMsg('microsoftTeamsWebhookUrl'));
});

test('DatadogIntegration construct should throw exceptions when required params are not provided', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  expect(() => {
    new l2.DatadogIntegration(stack, 'testing-stack-no-apiKey', {
      projectId: constants.TEST_PROJECT_ID,
      apiKey: '',
      region: l2.DatadogRegion.EU,
    });
  }).toThrow(util.getPropUndefinedMsg('apiKey'));
});

