# federated-query-limit

The official [MongoDB Atlas](https://www.mongodb.com/) AWS CDK resource for Node.js.

> AWS CDK [L1 construct](https://docs.aws.amazon.com/cdk/latest/guide/constructs.html) and data structures for the [AWS CloudFormation Registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html) type `MongoDB::Atlas::FederatedQueryLimit`.

## Description

Creates and manages query limits for a federated database instance. Supports four limit scopes via `LimitName`: `bytesProcessed.query` (per-query), `bytesProcessed.daily`, `bytesProcessed.weekly`, and `bytesProcessed.monthly`. The `OverrunPolicy` controls what happens when the limit is exceeded (ignored for per-query limits, as the query is automatically stopped).

## MongoDB Atlas API Docs

For more information about the API refer to: [API Endpoints](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-data-federation)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name MongoDB::Atlas::FederatedQueryLimit \
  --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/bb989456c78c398a858fef18f2ca1bfc1fbba082/MongoDB-Atlas-FederatedQueryLimit \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Example: [federation-query-limit.ts](../../../examples/l1-resources/federation-query-limit.ts)
```ts
import { CfnFederatedQueryLimit, CfnFederatedQueryLimitPropsLimitName } from 'awscdk-resources-mongodbatlas';

    new CfnFederatedQueryLimit(this, 'Federation', {
      profile: atlasProps.profile,
      projectId: atlasProps.projectId,
      tenantName: atlasProps.tenantName,
      limitName: CfnFederatedQueryLimitPropsLimitName.BYTES_PROCESSED_MONTHLY,
      value: "2000000000",
      overrunPolicy: "BLOCK",
    });
```

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `MongoDB::Atlas::FederatedQueryLimit`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fmongodb-atlas-federatedquerylimit+v1.0.0).
* Issues related to `MongoDB::Atlas::FederatedQueryLimit` should be reported to the [publisher](https://github.com/mongodb/mongodbatlas-cloudformation-resources/issues).
* Feature requests should be [reported here](https://feedback.mongodb.com/ideas?category=7548141186718564699)

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
