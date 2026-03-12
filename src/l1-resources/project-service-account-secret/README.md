# project-service-account-secret

The official [MongoDB Atlas](https://www.mongodb.com/) AWS CDK resource for Node.js.

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `MongoDB::Atlas::ProjectServiceAccountSecret` v1.0.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Creates a secret for an existing Service Account at the project level. This is the project-scoped counterpart to `MongoDB::Atlas::ServiceAccountSecret` (which operates at the org level). The secret expiry is configurable via `SecretExpiresAfterHours` (subject to organization policy limits). The plaintext `Secret` value is available only once as a CloudFormation output attribute (`attrSecret`) — it is never returned again on subsequent reads. Additional read-only outputs include `SecretId`, `MaskedSecretValue`, `CreatedAt`, `ExpiresAt`, and `LastUsedAt`. Typically used alongside `MongoDB::Atlas::ProjectServiceAccount`, passing its `attrClientId` output as the `clientId` input.

## MongoDB Atlas API Docs

For more information about the API refer to: [API Endpoints](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-service-accounts)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name MongoDB::Atlas::ProjectServiceAccountSecret \
  --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/bb989456c78c398a858fef18f2ca1bfc1fbba082/MongoDB-Atlas-ProjectServiceAccountSecret \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Example: [project-service-account-secret.ts](../../../examples/l1-resources/project-service-account-secret.ts)

```ts
import { CfnProjectServiceAccount, CfnProjectServiceAccountSecret } from 'awscdk-resources-mongodbatlas';

// Create the Project Service Account
const projectServiceAccount = new CfnProjectServiceAccount(this, 'ProjectServiceAccount', {
    profile: atlasProps.profile,
    projectId: atlasProps.projectId,
    name: 'my-project-service-account',
    description: 'Service account for project automation',
    roles: ['GROUP_READ_ONLY'],
    secretExpiresAfterHours: atlasProps.secretExpiresAfterHours,
});

// Create a secret using the Project Service Account's ClientId output
new CfnProjectServiceAccountSecret(this, 'ProjectServiceAccountSecret', {
    profile: atlasProps.profile,
    projectId: atlasProps.projectId,
    clientId: projectServiceAccount.attrClientId,
    secretExpiresAfterHours: atlasProps.secretExpiresAfterHours,
});
```

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `MongoDB::Atlas::ProjectServiceAccountSecret`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fmongodb-atlas-projectserviceaccountsecret+v1.0.0).
* Issues related to `MongoDB::Atlas::ProjectServiceAccountSecret` should be reported to the [publisher](https://github.com/mongodb/mongodbatlas-cloudformation-resources/issues).
* Feature requests should be [reported here](https://feedback.mongodb.com/ideas?category=7548141186718564699)

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
