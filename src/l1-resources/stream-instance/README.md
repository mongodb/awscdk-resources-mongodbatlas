# stream-instance

The official [MongoDB Atlas](https://www.mongodb.com/) AWS CDK resource for Node.js.

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `MongoDB::Atlas::StreamInstance`.
[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

> **NOTE**: 
> - **Atlas Streams functionality is currently in [Public Preview](https://www.mongodb.com/blog/post/atlas-stream-processing-now-in-public-preview).** 
> - Please review [Limitations](https://www.mongodb.com/docs/atlas/atlas-sp/limitations/#std-label-atlas-sp-limitations) of Atlas Streams Processing during this preview period.
> - Please refer [our example section](https://github.com/mongodb/mongodbatlas-cloudformation-resources/blob/master/examples/atlas-streams/README.md) for further details.

## Description

Returns, adds, edits, and removes stream instances.

## MongoDB Atlas API Docs

For more information about the API refer to: [API Endpoints](https://www.mongodb.com/docs/atlas/reference/api-resources-spec/v2/#tag/Streams)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name MongoDB::Atlas::StreamInstance \
  --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/bb989456c78c398a858fef18f2ca1bfc1fbba082/MongoDB-Atlas-StreamInstance \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Example: [stream-instance.ts](../../../examples/l1-resources/stream-instance.ts)
```ts
import { CfnStreamInstance } from 'awscdk-resources-mongodbatlas';

    const streamInstance = new CfnStreamInstance(this, "stream-instance-testing-stack", {
      profile: atlasProps.profile,
      instanceName: atlasProps.projectId,
      projectId: atlasProps.projectId,
      dataProcessRegion: {
        cloudProvider: StreamsDataProcessRegionCloudProvider.AWS,
        region: "VIRGINIA_USA",
      },
      streamConfig: {
        tier: "SP30",
      },
    });
```

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `MongoDB::Atlas::StreamInstance`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fmongodb-atlas-stream-instance+v1.0.0).
* Issues related to `MongoDB::Atlas::StreamInstance` should be reported to the [publisher](https://github.com/mongodb/mongodbatlas-cloudformation-resources/issues).
* Feature requests should be [reported here](https://feedback.mongodb.com/forums/924145-atlas?category_id=392596)

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.