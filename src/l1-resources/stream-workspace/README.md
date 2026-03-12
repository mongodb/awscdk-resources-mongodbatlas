# stream-workspace

The official [MongoDB Atlas](https://www.mongodb.com/) AWS CDK resource for Node.js.

> AWS CDK [L1 construct](https://docs.aws.amazon.com/cdk/latest/guide/constructs.html) and data structures for the [AWS CloudFormation Registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html) type `MongoDB::Atlas::StreamWorkspace`.

## Description

Returns, adds, updates, and removes Atlas Stream Processing Workspaces. The `DataProcessRegion.Region` property can be updated after creation. Other properties (`WorkspaceName`, `ProjectId`, `Profile`, `StreamConfig`, `DataProcessRegion.CloudProvider`) are create-only and require resource replacement to change.

## MongoDB Atlas API Docs

For more information about the API refer to: [API Endpoints](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-streams)

## Usage

> [Using Atlas Streams with Cloudformation](https://github.com/mongodb/mongodbatlas-cloudformation-resources/blob/master/examples/atlas-streams/README.md)

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name MongoDB::Atlas::StreamWorkspace \
  --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/bb989456c78c398a858fef18f2ca1bfc1fbba082/MongoDB-Atlas-StreamWorkspace \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Example: [stream-workspace.ts](../../../examples/l1-resources/stream-workspace.ts)
```ts
import { CfnStreamWorkspace, StreamWorkspaceDataProcessRegionCloudProvider } from 'awscdk-resources-mongodbatlas';

    const streamWorkspace = new CfnStreamWorkspace(this, "stream-workspace-testing-stack", {
      profile: atlasProps.profile,
      workspaceName: atlasProps.workspaceName,
      projectId: atlasProps.projectId,
      dataProcessRegion: {
        cloudProvider: StreamWorkspaceDataProcessRegionCloudProvider.AWS,
        region: "VIRGINIA_USA",
      },
      streamConfig: {
        tier: "SP30",
      },
    });
```

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `MongoDB::Atlas::StreamWorkspace`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fmongodb-atlas-stream-workspace+v1.0.0).
* Issues related to `MongoDB::Atlas::StreamWorkspace` should be reported to the [publisher](https://github.com/mongodb/mongodbatlas-cloudformation-resources/issues).
* Feature requests should be [reported here](https://feedback.mongodb.com/ideas?category=7548141186718564699)

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
