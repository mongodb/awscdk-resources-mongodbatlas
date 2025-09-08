# flex-cluster

The official [MongoDB Atlas](https://www.mongodb.com/) AWS CDK resource for Node.js.

> AWS CDK [L1 construct] and data structures for the [AWS CloudFormation Registry] type `MongoDB::Atlas::FlexCluster`.

[L1 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

The flex cluster resource provides access to your flex cluster configurations. The resource lets you create, edit and delete flex clusters. The resource requires your Project ID.

MongoDB Atlas Flex clusters provide a flexible, scalable, and cost-optimized solution for low-traffic applications and variable workloads. Flex clusters automatically scale compute and storage resources based on demand, offering a pay-as-you-go model.

## MongoDB Atlas API Docs

For more information about the API refer to: [API Endpoints](https://www.mongodb.com/docs/atlas/reference/api-resources-spec/v2/#tag/Flex-Clusters)

## Usage

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. You can do this via the AWS Management Console or using the [AWS CLI](https://aws.amazon.com/cli/) using the following command:

```sh
aws cloudformation activate-type \
  --type-name MongoDB::Atlas::FlexCluster \
  --publisher-id <PUBLISHER_ID> \
  --type RESOURCE \
  --execution-role-arn ROLE-ARN
```

Alternatively:

```sh
aws cloudformation activate-type \
  --public-type-arn arn:aws:cloudformation:us-east-1::type/resource/<PUBLISHER_ID>/MongoDB-Atlas-FlexCluster \
  --execution-role-arn ROLE-ARN
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Example: [flex-cluster.ts](../../../examples/l1-resources/flex-cluster.ts)

```ts
import { CfnFlexCluster } from 'awscdk-resources-mongodbatlas';

const flexClusterRes = new CfnFlexCluster(this, 'FlexClusterResource', {
  name: atlasProps.clusterName,
  projectId: projectRes.attrId,
  profile: atlasProps.profile,
  providerSettings: {
    backingProviderName: atlasProps.backingProvider,
    regionName: atlasProps.region,
  },
  tags: [
    {
      key: "env",
      value: "development",
    },
  ],
});
```

## Feedback

This library is auto-generated and published to all supported programming languages by the [cdklabs/cdk-cloudformation] project based on the API schema published for `MongoDB::Atlas::FlexCluster`.

* Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fmongodb-atlas-flexcluster+v1.0.0).
* Issues related to `MongoDB::Atlas::FlexCluster` should be reported to the [publisher](https://github.com/mongodb/mongodbatlas-cloudformation-resources/issues).
* Feature requests should be [reported here](https://feedback.mongodb.com/forums/924145-atlas?category_id=392596)

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
