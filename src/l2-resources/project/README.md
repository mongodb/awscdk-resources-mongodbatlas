# Project

AWS CDK [L2 construct] and data structures for the [AWS CloudFormation Registry] type `MongoDB::Atlas::Project` resource.

[L2 construct]: https://docs.aws.amazon.com/cdk/latest/guide/constructs.html
[AWS CloudFormation Registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html
[MongoDB Atlas]:https://www.mongodb.com/

In order to use this library, you will need to activate this AWS CloudFormation Registry type in your account. Read [here](../../l1-resources/project/README.md#Usage) for more details.

## Usage

To create a new Project:

```ts
import { Project } from 'awscdk-resources-mongodbatlas';

new Project(scope, id, {
  orgId: "mock",
  profile: "default",
})
```

To create a reference object for an existing Project:

```ts
Project.fromProjectAttributes(scope, id, {
  projectId: "mock-id",
  projectName: "mock-name",
  projectOwnerId: "mock-owner-id",
});
```
## MongoDB Atlas API Docs

For more information about the API refer to: [Projects](https://www.mongodb.com/docs/atlas/reference/api-resources-spec/v2/#tag/Projects)

## License

Distributed under the Apache-2.0 License.