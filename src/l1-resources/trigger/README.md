# trigger

The official [MongoDB Atlas](https://www.mongodb.com/) AWS CDK resource for Node.js.

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `MongoDB::Atlas::Trigger` v1.0.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

View and manage your application's [triggers](https://www.mongodb.com/docs/atlas/app-services/triggers/overview/).

## MongoDB Atlas API Docs

For more information about the API refer to: [API Endpoints](https://www.mongodb.com/docs/atlas/reference/api-resources-spec/#tag/Events)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name MongoDB::Atlas::Trigger \
  --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/bb989456c78c398a858fef18f2ca1bfc1fbba082/MongoDB-Atlas-Trigger \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Exampple: [trigger.ts](../../../examples/l1-resources/trigger.ts)

```ts
import { CfnTrigger,  DatabaseConfigOperationTypes } from 'awscdk-resources-mongodbatlas';

const trigger = new CfnTrigger(this, 'ThirdPartyIntegration', {
    projectId: atlasProps.projId,
    profile: atlasProps.profile,
    type: "DATABASE",
    appId: atlasProps.appId,
    databaseTrigger: {
    operationTypes: [DatabaseConfigOperationTypes.INSERT],
    database: atlasProps.dbName,
    collection: atlasProps.collection,
    serviceId: atlasProps.serviceId,
    },
    eventProcessors: {
    function: {
        funcConfig: {
        functionId: atlasProps.functionId,
        functionName: atlasProps.functionName,
        }
    }
    }
});

```

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `MongoDB::Atlas::Trigger`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fmongodb-atlas-trigger+v1.0.0).
* Issues related to `MongoDB::Atlas::Trigger` should be reported to the [publisher](https://github.com/mongodb/mongodbatlas-cloudformation-resources/issues).
* Feature requests should be [reported here](https://feedback.mongodb.com/forums/924145-atlas?category_id=392596)

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.