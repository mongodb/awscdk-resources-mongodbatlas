# alert-configuration

The official [MongoDB Atlas](https://www.mongodb.com/) AWS CDK resource for Node.js.

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `MongoDB::Atlas::AlertConfiguration` v1.0.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Returns and edits the conditions that trigger alerts and how MongoDB Cloud notifies users. This collection remains under revision and may change. Refer to the legacy documentation for this collection in the following link.

## MongoDB Atlas API Docs

For more information about the API refer to: [API Endpoints](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-alert-configurations)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name MongoDB::Atlas::AlertConfiguration \
  --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/bb989456c78c398a858fef18f2ca1bfc1fbba082/MongoDB-Atlas-AlertConfiguration \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).


## Example: [alert-configuration.ts](../../../examples/l1-resources/alert-configuration.ts)
```ts
  import { 
    CfnAlertConfiguration, NotificationViewTypeName, MetricThresholdViewOperator, MetricThresholdViewMode 
  } from 'awscdk-resources-mongodbatlas';

  const alert = new CfnAlertConfiguration(this, 'MyAlert', {
    profile: 'default-cfn-andrea-angiolillo',
    eventTypeName: 'OUTSIDE_METRIC_THRESHOLD', 
    notifications: [{
      typeName: NotificationViewTypeName.EMAIL,
      delayMin: 0,
      emailAddress: "test@test.com",
      emailEnabled: true,
      intervalMin: 15
    }],
    metricThreshold: {
      metricName:'NORMALIZED_SYSTEM_CPU_USER',
      operator: MetricThresholdViewOperator.GREATER_THAN,
      threshold: 5,
      units: 'RAW',
      mode: MetricThresholdViewMode.AVERAGE,
    }
  }); 
```


## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `MongoDB::Atlas::AlertConfiguration`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fmongodb-atlas-alertconfiguration+v1.0.0).
* Issues related to `MongoDB::Atlas::AlertConfiguration` should be reported to the [publisher](https://github.com/mongodb/mongodbatlas-cloudformation-resources/issues).
* Feature requests should be [reported here](https://feedback.mongodb.com/forums/924145-atlas?category_id=392596)

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
