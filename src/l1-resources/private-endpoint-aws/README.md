# private-endpoint

The official [MongoDB Atlas](https://www.mongodb.com/) AWS CDK resource for Node.js.

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `MongoDB::Atlas::PrivateEndpointAWS` v1.0.0.

[l1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[aws cloudformation registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

Creates one private endpoint for the specified cloud service provider. This cloud service provider manages the private endpoint service, which in turn manages the private endpoints for the project. To use this resource, the requesting API Key must have the Project Owner role. To learn more about considerations, limitations, and prerequisites, see the MongoDB documentation for setting up a private endpoint.

## MongoDB Atlas API Docs

For more information about the API refer to: [API Endpoints](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-private-endpoint-services)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name MongoDB::Atlas::PrivateEndpointAWS \
  --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/bb989456c78c398a858fef18f2ca1bfc1fbba082/MongoDB-Atlas-PrivateEndpointAWS \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Example: [private-endpoint.ts](../../../examples/l1-resources/private-endpoint.ts)

```ts
import { CfnPrivateEndpoint } from 'awscdk-resources-mongodbatlas'

const myPrivateEndpoint = new CfnPrivateEndpointAws(this, 'privateEndpoint', {
  projectId: atlasProject,
  endpointServiceId: 'endpointServiceId' /*Id of the PrivateEndpointService*/,
  profile: 'default',
  id: ''
})
```

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `MongoDB::Atlas::PrivateEndpointAWS`.

- Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fmongodb-atlas-privateendpoint+v1.0.0).
- Issues related to `MongoDB::Atlas::PrivateEndpointAWS` should be reported to the [publisher](https://github.com/mongodb/mongodbatlas-cloudformation-resources/issues).
- Feature requests should be [reported here](https://feedback.mongodb.com/forums/924145-atlas?category_id=392596)

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
