# mongodb-employee-access-grant

The official [MongoDB Atlas](https://www.mongodb.com/) AWS CDK resource for Node.js.

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `MongoDB::Atlas::MongoDbEmployeeAccessGrant` v1.0.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Grants temporary access to MongoDB support engineers for a specific cluster. Used when MongoDB Atlas support requires infrastructure access to troubleshoot issues. The `GrantType` controls the scope of access: `CLUSTER_DATABASE_LOGS` (log access only), `CLUSTER_INFRASTRUCTURE` (infrastructure access), or `CLUSTER_INFRASTRUCTURE_AND_APP_SERVICES_SYNC_DATA` (full infrastructure + App Services sync data access). Access automatically expires at `ExpirationTime` (ISO 8601 UTC). The `expirationTime` is a `Date` object serialized to ISO 8601 format. This resource has no output attributes.

## MongoDB Atlas API Docs

For more information about the API refer to: [API Endpoints](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-mongodb-cloud-users)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name MongoDB::Atlas::MongoDbEmployeeAccessGrant \
  --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/bb989456c78c398a858fef18f2ca1bfc1fbba082/MongoDB-Atlas-MongoDbEmployeeAccessGrant \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Example: [mongodb-employee-access-grant.ts](../../../examples/l1-resources/mongodb-employee-access-grant.ts)

```ts
import { CfnMongoDbEmployeeAccessGrant } from 'awscdk-resources-mongodbatlas';

new CfnMongoDbEmployeeAccessGrant(this, 'MongoDbEmployeeAccessGrant', {
    profile: atlasProps.profile,
    projectId: atlasProps.projectId,
    clusterName: atlasProps.clusterName,
    grantType: 'CLUSTER_DATABASE_LOGS',
    expirationTime: new Date('2025-12-31T23:59:59Z'),
});
```

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `MongoDB::Atlas::MongoDbEmployeeAccessGrant`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fmongodb-atlas-mongodbemployeeaccessgrant+v1.0.0).
* Issues related to `MongoDB::Atlas::MongoDbEmployeeAccessGrant` should be reported to the [publisher](https://github.com/mongodb/mongodbatlas-cloudformation-resources/issues).
* Feature requests should be [reported here](https://feedback.mongodb.com/ideas?category=7548141186718564699)

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
