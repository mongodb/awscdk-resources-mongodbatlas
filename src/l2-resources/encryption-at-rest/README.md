# atlas-encryption-at-rest

The official [MongoDB Atlas](https://www.mongodb.com/) AWS CDK resource for Node.js.

> AWS CDK [L2 construct] and data structures for the [AWS CloudFormation Registry] type `MongoDB::Atlas::EncryptionAtRest`

[L2 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Returns and edits the Encryption at Rest using Customer Key Management configuration.

## MongoDB Atlas API Docs

For more information about the API refer to: [API Endpoints](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-encryption-at-rest-using-customer-key-management)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name MongoDB::Atlas::EncryptionAtRest \
  --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/bb989456c78c398a858fef18f2ca1bfc1fbba082/MongoDB-Atlas-EncryptionAtRest \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Example: [atlas-encryption-at-rest.ys](../../../examples/l2-resources/atlas-encryption-at-rest.ts)

```ts
import { AtlasEncryptionAtRest } from 'awscdk-resources-mongodbatlas';

const atlasEncryptionAtRest = new AtlasEncryptionAtRest(this, 'AtlasEncryptionAtRest', {
    projectId: atlasProps.projId,
    profile:  atlasProps.profile,
    roleId: atlasProps.roleId,
    customerMasterKeyId: atlasProps.customerMasterKeyId
});

```

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `MongoDB::Atlas::EncryptionAtRest`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fmongodb-atlas-encryptionatrest+v1.0.0).
* Issues related to `MongoDB::Atlas::EncryptionAtRest` should be reported to the [publisher](https://github.com/mongodb/mongodbatlas-cloudformation-resources/issues).
* Feature requests should be [reported here](https://feedback.mongodb.com/forums/924145-atlas?category_id=392596)

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.