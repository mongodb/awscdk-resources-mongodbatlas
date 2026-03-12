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
  CfnBackupCompliancePolicy,
  OnDemandPolicyItemRetentionUnit,
  ScheduledPolicyItemRetentionUnit,
} from "../../../src";

const RESOURCE_NAME = "MongoDB::Atlas::BackupCompliancePolicy";
const PROFILE = "default";
const PROJECT_ID = "testProjectId";
const AUTHORIZED_EMAIL = "admin@example.com";
const FIRST_NAME = "John";
const LAST_NAME = "Doe";

test("CfnBackupCompliancePolicy construct should contain required properties", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnBackupCompliancePolicy(
    stack,
    "backup-compliance-policy-testing-stack",
    {
      profile: PROFILE,
      projectId: PROJECT_ID,
      authorizedEmail: AUTHORIZED_EMAIL,
      authorizedUserFirstName: FIRST_NAME,
      authorizedUserLastName: LAST_NAME,
    }
  );

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    Profile: PROFILE,
    ProjectId: PROJECT_ID,
    AuthorizedEmail: AUTHORIZED_EMAIL,
    AuthorizedUserFirstName: FIRST_NAME,
    AuthorizedUserLastName: LAST_NAME,
  });
});

test("CfnBackupCompliancePolicy construct should support protection flags and restore window", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnBackupCompliancePolicy(stack, "backup-compliance-policy-flags-stack", {
    projectId: PROJECT_ID,
    authorizedEmail: AUTHORIZED_EMAIL,
    authorizedUserFirstName: FIRST_NAME,
    authorizedUserLastName: LAST_NAME,
    copyProtectionEnabled: true,
    encryptionAtRestEnabled: true,
    pitEnabled: true,
    restoreWindowDays: 7,
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    CopyProtectionEnabled: true,
    EncryptionAtRestEnabled: true,
    PitEnabled: true,
    RestoreWindowDays: 7,
  });
});

test("CfnBackupCompliancePolicy construct should support onDemandPolicyItem", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnBackupCompliancePolicy(
    stack,
    "backup-compliance-policy-ondemand-stack",
    {
      projectId: PROJECT_ID,
      authorizedEmail: AUTHORIZED_EMAIL,
      authorizedUserFirstName: FIRST_NAME,
      authorizedUserLastName: LAST_NAME,
      onDemandPolicyItem: {
        frequencyInterval: 0,
        retentionUnit: OnDemandPolicyItemRetentionUnit.DAYS,
        retentionValue: 7,
      },
    }
  );

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    OnDemandPolicyItem: {
      FrequencyInterval: 0,
      RetentionUnit: OnDemandPolicyItemRetentionUnit.DAYS,
      RetentionValue: 7,
    },
  });
});

test("CfnBackupCompliancePolicy construct should support scheduled policy items", () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  new CfnBackupCompliancePolicy(
    stack,
    "backup-compliance-policy-scheduled-stack",
    {
      projectId: PROJECT_ID,
      authorizedEmail: AUTHORIZED_EMAIL,
      authorizedUserFirstName: FIRST_NAME,
      authorizedUserLastName: LAST_NAME,
      policyItemHourly: {
        frequencyInterval: 6,
        retentionUnit: ScheduledPolicyItemRetentionUnit.DAYS,
        retentionValue: 2,
      },
      policyItemDaily: {
        frequencyInterval: 1,
        retentionUnit: ScheduledPolicyItemRetentionUnit.DAYS,
        retentionValue: 7,
      },
      policyItemWeekly: [
        {
          frequencyInterval: 1,
          retentionUnit: ScheduledPolicyItemRetentionUnit.WEEKS,
          retentionValue: 4,
        },
      ],
      policyItemMonthly: [
        {
          frequencyInterval: 1,
          retentionUnit: ScheduledPolicyItemRetentionUnit.MONTHS,
          retentionValue: 12,
        },
      ],
      policyItemYearly: [
        {
          frequencyInterval: 1,
          retentionUnit: ScheduledPolicyItemRetentionUnit.YEARS,
          retentionValue: 1,
        },
      ],
    }
  );

  const template = Template.fromStack(stack);

  template.hasResourceProperties(RESOURCE_NAME, {
    PolicyItemHourly: {
      FrequencyInterval: 6,
      RetentionUnit: ScheduledPolicyItemRetentionUnit.DAYS,
      RetentionValue: 2,
    },
    PolicyItemDaily: {
      FrequencyInterval: 1,
      RetentionUnit: ScheduledPolicyItemRetentionUnit.DAYS,
      RetentionValue: 7,
    },
    PolicyItemWeekly: [
      {
        FrequencyInterval: 1,
        RetentionUnit: ScheduledPolicyItemRetentionUnit.WEEKS,
        RetentionValue: 4,
      },
    ],
    PolicyItemMonthly: [
      {
        FrequencyInterval: 1,
        RetentionUnit: ScheduledPolicyItemRetentionUnit.MONTHS,
        RetentionValue: 12,
      },
    ],
    PolicyItemYearly: [
      {
        FrequencyInterval: 1,
        RetentionUnit: ScheduledPolicyItemRetentionUnit.YEARS,
        RetentionValue: 1,
      },
    ],
  });
});
