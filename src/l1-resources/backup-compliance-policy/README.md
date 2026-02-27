# backup-compliance-policy

The official [MongoDB Atlas](https://www.mongodb.com/) AWS CDK resource for Node.js.

> AWS CDK [L1 construct](https://docs.aws.amazon.com/cdk/latest/guide/constructs.html) and data structures for the [AWS CloudFormation Registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html) type `MongoDB::Atlas::BackupCompliancePolicy`.

## Description

Resource for managing a MongoDB Atlas Backup Compliance Policy. A Backup Compliance Policy prevents any user, regardless of role, from modifying or deleting specific cluster settings, backups, and backup configurations. Once enabled, the policy is applied as the minimum backup policy for all clusters in the project. Supports on-demand and scheduled (hourly, daily, weekly, monthly, yearly) policy items, point-in-time restore, copy protection, and encryption-at-rest enforcement.

## MongoDB Atlas API Docs

For more information about the API refer to: [API Endpoints](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-cloud-backups)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name MongoDB::Atlas::BackupCompliancePolicy \
  --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/bb989456c78c398a858fef18f2ca1bfc1fbba082/MongoDB-Atlas-BackupCompliancePolicy \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Example: [backup-compliance-policy.ts](../../../examples/l1-resources/backup-compliance-policy.ts)
```ts
import {
  CfnBackupCompliancePolicy,
  OnDemandPolicyItemRetentionUnit,
  ScheduledPolicyItemRetentionUnit,
} from 'awscdk-resources-mongodbatlas';

    const backupCompliancePolicy = new CfnBackupCompliancePolicy(this, "backup-compliance-policy-testing-stack", {
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
      policyItemMonthly: [
        {
          frequencyInterval: 1,
          retentionUnit: ScheduledPolicyItemRetentionUnit.MONTHS,
          retentionValue: 12,
        },
      ],
    });
```

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `MongoDB::Atlas::BackupCompliancePolicy`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fmongodb-atlas-backupcompliancepolicy+v1.0.0).
* Issues related to `MongoDB::Atlas::BackupCompliancePolicy` should be reported to the [publisher](https://github.com/mongodb/mongodbatlas-cloudformation-resources/issues).
* Feature requests should be [reported here](https://feedback.mongodb.com/ideas?category=7548141186718564699)

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
