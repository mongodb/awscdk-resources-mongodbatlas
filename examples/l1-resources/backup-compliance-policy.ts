import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
  CfnBackupCompliancePolicy,
  OnDemandPolicyItemRetentionUnit,
  ScheduledPolicyItemRetentionUnit,
} from 'awscdk-resources-mongodbatlas';

interface AtlasStackProps {
  readonly projectId: string;
  readonly profile: string;
  readonly authorizedEmail: string;
  readonly authorizedUserFirstName: string;
  readonly authorizedUserLastName: string;
}

export class CdkTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const atlasProps = this.getContextProps();
    new CfnBackupCompliancePolicy(this, "backup-compliance-policy-testing-stack", {
      profile: atlasProps.profile,
      projectId: atlasProps.projectId,
      authorizedEmail: atlasProps.authorizedEmail,
      authorizedUserFirstName: atlasProps.authorizedUserFirstName,
      authorizedUserLastName: atlasProps.authorizedUserLastName,
      copyProtectionEnabled: true,
      encryptionAtRestEnabled: true,
      pitEnabled: true,
      restoreWindowDays: 7,
      onDemandPolicyItem: {
        frequencyInterval: 0,
        retentionUnit: OnDemandPolicyItemRetentionUnit.DAYS,
        retentionValue: 7,
      },
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
    });
  }

  getContextProps(): AtlasStackProps {
    const profile = this.node.tryGetContext('profile') ?? 'default';
    const projectId = this.node.tryGetContext('projectId');
    const authorizedEmail = this.node.tryGetContext('authorizedEmail');
    const authorizedUserFirstName = this.node.tryGetContext('authorizedUserFirstName');
    const authorizedUserLastName = this.node.tryGetContext('authorizedUserLastName');

    if (!projectId) {
      throw "No context value specified for projectId. Please specify via the cdk context."
    }
    if (!authorizedEmail) {
      throw "No context value specified for authorizedEmail. Please specify via the cdk context."
    }
    if (!authorizedUserFirstName) {
      throw "No context value specified for authorizedUserFirstName. Please specify via the cdk context."
    }
    if (!authorizedUserLastName) {
      throw "No context value specified for authorizedUserLastName. Please specify via the cdk context."
    }

    return {
      projectId,
      profile,
      authorizedEmail,
      authorizedUserFirstName,
      authorizedUserLastName,
    }
  }
}
