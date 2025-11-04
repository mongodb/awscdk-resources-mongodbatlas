# @mongodbatlas-awscdk/atlas-bootstrap

The official [MongoDB Atlas](https://www.mongodb.com/) AWS CDK resource for Node.js.

[aws cloudformation registry]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

## Description

The atlas-cdk-bootstrap AWS Cloud Development Kit (CDK) construct was designed to facilitate the smooth configuration and setup of the MongoDB Atlas CDK framework. This construct simplifies the process of preparing your environment to run the Atlas CDK by automating essential configurations and resource provisioning.

Key Features:

- User Provisioning: The atlas-cdk-bootstrap construct creates a dedicated execution role within AWS Identity and Access Management (IAM) for executing CloudFormation Extension resources. This helps maintain security and isolation for Atlas CDK operations.

- API Key Management: It sets up an Amazon Secret Manager to securely store and manage API keys required for interacting with the Atlas services. This ensures sensitive credentials are protected and can be easily rotated.

- CloudFormation Extensions Activation: This construct streamlines the activation of CloudFormation public extensions essential for Atlas CDK. It provides a seamless interface for users to specify the specific CloudFormation resources that need to be deployed and configured.

With atlas-cdk-bootstrap, you can accelerate the onboarding process for Atlas CDK and significantly reduce the complexity of environment setup. By automating user provisioning, credential management, and resource activation, this CDK construct empowers developers to focus on building and deploying applications using Atlas CDK without getting bogged down by manual configuration tasks.

Whether you're a seasoned developer or just starting with Atlas CDK, atlas-cdk-bootstrap offers a convenient and efficient way to kickstart your projects, enhance security, and ensure a smooth development experience. Streamline your Atlas CDK setup today and unlock the true potential of cloud application development.

## Usage

In order to use this library, you will need to provide the next properties

- roleName (mandatory): The IAM role name for CloudFormation Extension Execution.
- secretProfile (mandatory): The secret profile name for MongoDB Atlas, example:"default"
- typesToActivate (optional): List of strings representing mongoDB atlas types to activate, if not provided non resources will be activated. example: typesToActivate=["Cluster","Project"] this will actiate MongoDB::Atlas::Project && MongoDB::Atlas::Cluster
- atlasPublicKey: MongoDB Atlas Public Key: the public key acts as the username when making API requests. Input as CFNParameter and allways use noEcho: true for safety. example: new cdk.CfnParameter(stack, "atlasPrivateKey", {noEcho: true,type: "String",});
- atlasPrivateKey: MongoDB Atlas Public Key: the public key acts as the username when making API requests. Input as CFNParameter and allways use noEcho: true for safety. example: new cdk.CfnParameter(stack, "atlasPrivateKey", {noEcho: true,type: "String",});

The stack can be called like this:

```bash
cdk deploy atlas-cdk-bootstrap --parameters atlasPublicKey=theatlaspublickey --parameters atlasPrivateKey=theatlasprivatekey
```

## Example: [atlas-basic.ts](../../../examples/l3-resources/atlas-bootstrap.ts)

### Minimal configuration to use this app

create a new folder (example: L3CDK) and initate a new app using the CDK client:

```bash
cdk init app --language=typescript
```

locate the stack typescript file in this example (lib/l3_cdks-stack.ts)

use the next code to create a new stack

```ts
import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import {
  MongoAtlasBootstrap,
  MongoAtlasBootstrapProps,
  AtlasBasicResources
} from 'awscdk-resources-mongodbatlas'

export class AtlasBoostrapExample extends cdk.Stack {
  constructor (scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const mongoDBProfile = 'development'
    const roleName = 'MongoDB-Atlas-CDK-Excecution'

    const publicKey = new cdk.CfnParameter(this, 'atlasPublicKey', {
      noEcho: true,
      type: 'String'
    })
    const privateKey = new cdk.CfnParameter(this, 'atlasPrivateKey', {
      noEcho: true,
      type: 'String'
    })

    const bootstrapProperties: MongoAtlasBootstrapProps = {
      roleName: roleName,
      secretProfile: mongoDBProfile,
      typesToActivate: AtlasBasicResources,
      atlasPublicKey: publicKey,
      atlasPrivateKey: privateKey
    }

    new MongoAtlasBootstrap(this, 'cdk-bootstrap', bootstrapProperties)
  }
}
```

You can find more information about activating this type in the [AWS CloudFormation documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html).

## Feedback

- Issues related to this generated library should be [reported here](https://github.com/cdklabs/cdk-cloudformation/issues/new?title=Issue+with+%40cdk-cloudformation%2Fmongodb-atlas-cluster+v1.0.0).
- Issues related to this library should be reported to the [publisher](https://github.com/mongodb/mongodbatlas-cloudformation-resources/issues).
- Feature requests should be [reported here](https://feedback.mongodb.com/ideas?category=7548141186718564699)

[cdklabs/cdk-cloudformation]: https://github.com/cdklabs/cdk-cloudformation

## License

Distributed under the Apache-2.0 License.
