# project-service-account

The official [MongoDB Atlas](https://www.mongodb.com/) AWS CDK resource for Node.js.

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `MongoDB::Atlas::ProjectServiceAccount` v1.0.0.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Creates a Service Account and assigns it to a project in a single operation. Unlike `MongoDB::Atlas::ServiceAccount` (org-scoped) combined with `MongoDB::Atlas::ServiceAccountProjectAssignment`, this resource handles both creation and project assignment together. Project-level roles are assigned at creation time. **Important:** deleting this resource only unassigns the Service Account from the project — it does not delete the underlying Service Account from the organization. Read-only outputs include `ClientId` and `CreatedAt`.

## MongoDB Atlas API Docs

For more information about the API refer to: [API Endpoints](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-service-accounts)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name MongoDB::Atlas::ProjectServiceAccount \
  --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/bb989456c78c398a858fef18f2ca1bfc1fbba082/MongoDB-Atlas-ProjectServiceAccount \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Example: [project-service-account.ts](../../../examples/l1-resources/project-service-account.ts)

```ts
import { CfnProjectServiceAccount } from 'awscdk-resources-mongodbatlas';

const projectServiceAccount = new CfnProjectServiceAccount(this, 'ProjectServiceAccount', {
    profile: atlasProps.profile,
    projectId: atlasProps.projectId,
    name: atlasProps.name,
    description: atlasProps.description,
    roles: ['GROUP_READ_ONLY', 'GROUP_DATA_ACCESS_READ_WRITE'],
    secretExpiresAfterHours: atlasProps.secretExpiresAfterHours,
});
```

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `MongoDB::Atlas::ProjectServiceAccount`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fmongodb-atlas-projectserviceaccount+v1.0.0).
* Issues related to `MongoDB::Atlas::ProjectServiceAccount` should be reported to the [publisher](https://github.com/mongodb/mongodbatlas-cloudformation-resources/issues).
* Feature requests should be [reported here](https://feedback.mongodb.com/ideas?category=7548141186718564699)

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
