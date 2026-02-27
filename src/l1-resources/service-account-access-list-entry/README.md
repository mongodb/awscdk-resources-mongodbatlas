# service-account-access-list-entry

The official [MongoDB Atlas](https://www.mongodb.com/) AWS CDK resource for Node.js.

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `MongoDB::Atlas::ServiceAccountAccessListEntry` v1.0.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Manages IP access list entries for MongoDB Atlas Service Accounts at the organization level. Each entry allows API requests from either a single IP address (`IPAddress`) or a CIDR block (`CIDRBlock`) — exactly one of the two must be specified per entry. This resource is typically used together with `MongoDB::Atlas::ServiceAccount`, passing the service account's `ClientId` as input. Read-only outputs include `CreatedAt`, `LastUsedAddress`, `LastUsedAt`, and `RequestCount`.

## MongoDB Atlas API Docs

For more information about the API refer to: [API Endpoints](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-service-accounts)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name MongoDB::Atlas::ServiceAccountAccessListEntry \
  --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/bb989456c78c398a858fef18f2ca1bfc1fbba082/MongoDB-Atlas-ServiceAccountAccessListEntry \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Example: [service-account-access-list-entry.ts](../../../examples/l1-resources/service-account-access-list-entry.ts)

```ts
import { CfnServiceAccount, CfnServiceAccountAccessListEntry } from 'awscdk-resources-mongodbatlas';

const serviceAccount = new CfnServiceAccount(this, 'ServiceAccount', { ... });

// Allow a single IP address
new CfnServiceAccountAccessListEntry(this, 'AccessListIpEntry', {
    profile: atlasProps.profile,
    orgId: atlasProps.orgId,
    clientId: serviceAccount.attrClientId,
    ipAddress: '192.168.1.10',
});

// Allow a CIDR block
new CfnServiceAccountAccessListEntry(this, 'AccessListCidrEntry', {
    profile: atlasProps.profile,
    orgId: atlasProps.orgId,
    clientId: serviceAccount.attrClientId,
    cidrBlock: '10.0.0.0/24',
});
```

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `MongoDB::Atlas::ServiceAccountAccessListEntry`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fmongodb-atlas-serviceaccountaccesslistentry+v1.0.0).
* Issues related to `MongoDB::Atlas::ServiceAccountAccessListEntry` should be reported to the [publisher](https://github.com/mongodb/mongodbatlas-cloudformation-resources/issues).
* Feature requests should be [reported here](https://feedback.mongodb.com/ideas?category=7548141186718564699)

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
