# stream-processor

The official [MongoDB Atlas](https://www.mongodb.com/) AWS CDK resource for Node.js.

> AWS CDK [L1 construct](https://docs.aws.amazon.com/cdk/latest/guide/constructs.html) and data structures for the [AWS CloudFormation Registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html) type `MongoDB::Atlas::StreamProcessor`.

## Description

Returns, adds, edits, and removes Atlas Stream Processors. A Stream Processor applies an aggregation pipeline to streaming data within a Stream Processing Workspace. Supports lifecycle management via `DesiredState` (`CREATED`, `STARTED`, `STOPPED`), optional Dead Letter Queue (DLQ) configuration via `Options`, and configurable create timeouts via `Timeouts`.

## MongoDB Atlas API Docs

For more information about the API refer to: [API Endpoints](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-streams)

## Usage

> [Using Atlas Streams with Cloudformation](https://github.com/mongodb/mongodbatlas-cloudformation-resources/blob/master/examples/atlas-streams/README.md)

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name MongoDB::Atlas::StreamProcessor \
  --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/bb989456c78c398a858fef18f2ca1bfc1fbba082/MongoDB-Atlas-StreamProcessor \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Example: [stream-processor.ts](../../../examples/l1-resources/stream-processor.ts)
```ts
import { CfnStreamProcessor, CfnStreamProcessorPropsDesiredState } from 'awscdk-resources-mongodbatlas';

    const streamProcessor = new CfnStreamProcessor(this, "stream-processor-testing-stack", {
      profile: atlasProps.profile,
      projectId: atlasProps.projectId,
      workspaceName: atlasProps.workspaceName,
      processorName: atlasProps.processorName,
      pipeline: JSON.stringify([
        { $source: { connectionName: "kafka-connection" } },
        {
          $emit: {
            connectionName: "atlas-connection",
            db: "myDb",
            coll: "myCol",
            timeseries: { timeField: "ts" },
          },
        },
      ]),
      desiredState: CfnStreamProcessorPropsDesiredState.STARTED,
      options: {
        dlq: {
          coll: "dlqCollection",
          connectionName: "atlas-connection",
          db: "dlqDatabase",
        },
      },
      timeouts: { create: "20m" },
      deleteOnCreateTimeout: true,
    });
```

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `MongoDB::Atlas::StreamProcessor`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fmongodb-atlas-stream-processor+v1.0.0).
* Issues related to `MongoDB::Atlas::StreamProcessor` should be reported to the [publisher](https://github.com/mongodb/mongodbatlas-cloudformation-resources/issues).
* Feature requests should be [reported here](https://feedback.mongodb.com/ideas?category=7548141186718564699)

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
