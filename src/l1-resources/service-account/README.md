# service-account

The official [MongoDB Atlas](https://www.mongodb.com/) AWS CDK resource for Node.js.

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `MongoDB::Atlas::ServiceAccount` v1.0.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Creates and manages a Service Account for a MongoDB Atlas organization. Service Accounts represent non-human identities (e.g. CI/CD pipelines, automation tools) and are assigned organization-level roles. Each Service Account is issued a secret that expires after a configurable number of hours (`SecretExpiresAfterHours`). After creation, the read-only `ClientId` and `CreatedAt` attributes are available as CloudFormation outputs.

## MongoDB Atlas API Docs

For more information about the API refer to: [API Endpoints](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-service-accounts)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name MongoDB::Atlas::ServiceAccount \
  --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/bb989456c78c398a858fef18f2ca1bfc1fbba082/MongoDB-Atlas-ServiceAccount \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Example: [service-account.ts](../../../examples/l1-resources/service-account.ts)

```ts
import { CfnServiceAccount } from 'awscdk-resources-mongodbatlas';

const serviceAccount = new CfnServiceAccount(this, 'ServiceAccount', {
    profile: atlasProps.profile,
    orgId: atlasProps.orgId,
    name: atlasProps.name,
    description: atlasProps.description,
    roles: atlasProps.roles,
    secretExpiresAfterHours: atlasProps.secretExpiresAfterHours,
});
```

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `MongoDB::Atlas::ServiceAccount`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fmongodb-atlas-serviceaccount+v1.0.0).
* Issues related to `MongoDB::Atlas::ServiceAccount` should be reported to the [publisher](https://github.com/mongodb/mongodbatlas-cloudformation-resources/issues).
* Feature requests should be [reported here](https://feedback.mongodb.com/ideas?category=7548141186718564699)

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
