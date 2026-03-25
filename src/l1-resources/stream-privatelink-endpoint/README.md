# stream-privatelink-endpoint

The official [MongoDB Atlas](https://www.mongodb.com/) AWS CDK resource for Node.js.

> AWS CDK [L1 construct](https://docs.aws.amazon.com/cdk/latest/guide/constructs.html) and data structures for the [AWS CloudFormation Registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html) type `MongoDB::Atlas::StreamPrivatelinkEndpoint`.

## Description

Returns, adds, and removes Atlas Stream Processing Private Link Endpoints. This resource supports AWS only. Supports three vendor types: **MSK** (requires `Arn`), **CONFLUENT** (requires `Region`, `ServiceEndpointId`, `DnsDomain`, and `DnsSubDomain`), and **S3** (requires `Region` and `ServiceEndpointId` in the format `com.amazonaws.<region>.s3`).

## MongoDB Atlas API Docs

For more information about the API refer to: [API Endpoints](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-streams)

## Usage

> [Using Atlas Streams with Cloudformation](https://github.com/mongodb/mongodbatlas-cloudformation-resources/blob/master/examples/atlas-streams/README.md)

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name MongoDB::Atlas::StreamPrivatelinkEndpoint \
  --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/bb989456c78c398a858fef18f2ca1bfc1fbba082/MongoDB-Atlas-StreamPrivatelinkEndpoint \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Example: [stream-privatelink-endpoint.ts](../../../examples/l1-resources/stream-privatelink-endpoint.ts)
```ts
import { CfnStreamPrivatelinkEndpoint } from 'awscdk-resources-mongodbatlas';

    // MSK vendor — uses ARN
    const mskEndpoint = new CfnStreamPrivatelinkEndpoint(this, "stream-privatelink-msk", {
      profile: atlasProps.profile,
      projectId: atlasProps.projectId,
      providerName: "AWS",
      vendor: "MSK",
      arn: "arn:aws:kafka:us-east-1:123456789012:cluster/test-cluster/abc123",
    });

    // CONFLUENT vendor — uses ServiceEndpointId, DnsDomain, DnsSubDomain
    const confluentEndpoint = new CfnStreamPrivatelinkEndpoint(this, "stream-privatelink-confluent", {
      profile: atlasProps.profile,
      projectId: atlasProps.projectId,
      providerName: "AWS",
      vendor: "CONFLUENT",
      region: "us-east-1",
      serviceEndpointId: "com.amazonaws.vpce.us-east-1.vpce-svc-0abc123",
      dnsDomain: "abc123.us-east-1.aws.confluent.cloud",
      dnsSubDomain: ["az1.abc123.us-east-1.aws.confluent.cloud"],
    });

    // S3 vendor — uses ServiceEndpointId in com.amazonaws.<region>.s3 format
    const s3Endpoint = new CfnStreamPrivatelinkEndpoint(this, "stream-privatelink-s3", {
      profile: atlasProps.profile,
      projectId: atlasProps.projectId,
      providerName: "AWS",
      vendor: "S3",
      region: "us-east-1",
      serviceEndpointId: "com.amazonaws.us-east-1.s3",
    });
```

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `MongoDB::Atlas::StreamPrivatelinkEndpoint`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fmongodb-atlas-stream-privatelink-endpoint+v1.0.0).
* Issues related to `MongoDB::Atlas::StreamPrivatelinkEndpoint` should be reported to the [publisher](https://github.com/mongodb/mongodbatlas-cloudformation-resources/issues).
* Feature requests should be [reported here](https://feedback.mongodb.com/ideas?category=7548141186718564699)

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
