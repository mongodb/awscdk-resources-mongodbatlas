# MongoDB Atlas AWS CDK Resources
[![Code Health](https://github.com/mongodb/awscdk-resources-mongodbatlas/actions/workflows/code-health.yml/badge.svg?event=push)](https://github.com/mongodb/awscdk-resources-mongodbatlas/actions/workflows/code-health.yml)
[![Package CDK](https://github.com/mongodb/awscdk-resources-mongodbatlas/actions/workflows/package.yml/badge.svg?branch=main)](https://github.com/mongodb/awscdk-resources-mongodbatlas/actions/workflows/package.yml)
[![npm version](https://badge.fury.io/js/awscdk-resources-mongodbatlas.svg)](https://badge.fury.io/js/awscdk-resources-mongodbatlas)
[![PyPI version](https://badge.fury.io/py/awscdk-resources-mongodbatlas.svg)](https://badge.fury.io/py/awscdk-resources-mongodbatlas)
[![NuGet version](https://badge.fury.io/nu/MongoDB.AWSCDKResourcesMongoDBAtlas.svg)](https://badge.fury.io/nu/MongoDB.AWSCDKResourcesMongoDBAtlas)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.mongodb/awscdk-resources-mongodbatlas/badge.svg)](https://central.sonatype.com/artifact/org.mongodb/awscdk-resources-mongodbatlas)
[![Go Reference](https://pkg.go.dev/badge/github.com/mongodb/awscdk-resources-mongodbatlas-go/awscdkresourcesmongodbatlas.svg)](https://pkg.go.dev/github.com/mongodb/awscdk-resources-mongodbatlas-go/awscdkresourcesmongodbatlas)

[![View on Construct Hub](https://constructs.dev/badge?package=aws-cdk-lib)](https://constructs.dev/packages/awscdk-resources-mongodbatlas)

Use MongoDB Atlas [AWS CDK](https://aws.amazon.com/cdk/) (or Cloud Development Kit) constructs to manage [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). The AWS CDK is a framework for defining infrastructure as code (IaC). It allows developers to write code in their preferred programming language, such as TypeScript for example, to define and deploy infrastructure. AWS CDK gets synthesized down into [AWS CloudFormation](https://aws.amazon.com/cloudformation/) templates at deployment so users no longer have to write or maintain YAML/JSON based CloudFormation templates. 

## Available Packages

### NPM
The npm package is available at [awscdk-resources-mongodbatlas](https://www.npmjs.com/package/awscdk-resources-mongodbatlas)
```bash
npm i awscdk-resources-mongodbatlas
```

### PyPI
The PyPI package is available at [awscdk-resources-mongodbatlas](https://pypi.org/project/awscdk-resources-mongodbatlas/)
```bash
pip install awscdk-resources-mongodbatlas
```

### Nuget
The Nuget package is available at [MongoDB.AWSCDKResourcesMongoDBAtlas](https://www.nuget.org/packages/MongoDB.AWSCDKResourcesMongoDBAtlas)
```bash
dotnet add package MongoDB.AWSCDKResourcesMongoDBAtlas --version 1.0.0
```

### Maven
The Maven package is available at [awscdk-resources-mongodbatlas](https://central.sonatype.com/artifact/org.mongodb/awscdk-resources-mongodbatlas/1.0.0)

```Maven
<dependency>
    <groupId>org.mongodb</groupId>
    <artifactId>awscdk-resources-mongodbatlas</artifactId>
    <version>1.0.0</version>
</dependency>
```

### Go
The go package is generated into the [github.com/mongodb/awscdk-resources-mongodbatlas-go](https://github.com/mongodb/awscdk-resources-mongodbatlas-go) package.
```bash
go get github.com/mongodb/awscdk-resources-mongodbatlas-go/awscdkresourcesmongodbatlas
```   



## Available Constructors
MongoDB Atlas AWS CDK Resources provides L1, L2 and L3 CDK constructors. Please, have a look at [README.md](src/README.md#cdk-constructors) for a full lists of constructors and examples.
## Getting Started
See the [cdk examples](examples/README.md) for how to setup prerequisites & get started with your first cluster, using our AWS CDK sample code. We also provide a quick guide on [How to Deploy MongoDB Atlas with AWS CDK in TypeScript](https://www.mongodb.com/developer/products/atlas/deploy-mongodb-atlas-aws-cdk-typescript/).

## Limitations
1. [Resource import](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import.html) is not supported for third-party resources.

2. Any third-party resource must support all CRUD operations. MongoDB Atlas for CloudFormation does not support the following MongoDB Atlas resources because they do not support all CRUD operations:

* cloud-backup-snapshot-export-job
* cloud-provider-access
* federated-settings-identity-provider
* federated-settings-org-configs


## Support, Bugs, Feature Requests
Feature requests can be submitted at [feedback.mongodb.com](https://feedback.mongodb.com/forums/924145-atlas/category/392596-atlas-cloudformation-resources) - just select "Atlas CloudFormation Resources" as the category or vote for an already suggested feature.

Support for the MongoDB Atlas Resource Provider for CloudFormation is provided under MongoDB Atlas support plans, starting with Developer. Please submit support questions within the Atlas UI. In addition, support questions submitted under the Issues section of this repo are also being monitored. Bugs should be filed under the Issues section of this repo.

## MongoDB Atlas API Keys Credential Management
Atlas API keys Configuration are required for both CloudFormation and CDK resources, and this Atlas API key pair are provided as input by the use of a Profile

AWS CloudFormation limits Third Parties from using non-AWS API Keys as either hardcoded secrets in CloudFormation templates or via CDK, hence we now require all the users store MongoDB Atlas API Keys via [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/).

`NOTE: the process for configuring the PROFILE is the same and is required both for CloudFormation and CDK`

### 1. Configure your MongoDB Atlas API Keys
You'll need to generate an API key pair (public and private keys) for your Atlas organization and configure them to grant CloudFormation access to your Atlas project.
Refer to the [Atlas documentation](https://www.mongodb.com/docs/atlas/configure-api-access/#manage-programmatic-access-to-an-organization) for detailed instructions.

### 2. Configure your Profile
To use Atlas CloudFormation resources, you must configure a "profile" with your API keys using [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/).

The secret should follow this format:
```
SecretName: cfn/atlas/profile/{ProfileName}
SecretValue: {"PublicKey": "YourPublicKey", "PrivateKey": "YourPrivateKey"}
```

To create a new secret for a default profile, use the [PROFILE SECRET TEMPLATE](/examples/profile-secret.yaml) file provided in this repository.

Here are some examples of how to use this template:

#### example 1:
```
  ProfileName: default
  SecretName: cfn/atlas/profile/default
  SecretValue: {"PublicKey": "YourPublicKey", "PrivateKey": "YourPrivateKey"}
```
#### example 2:
```
  ProfileName: testProfile
  SecretName: cfn/atlas/profile/testProfile
  SecretValue: {"PublicKey": "YourPublicKey", "PrivateKey": "YourPrivateKey"}
```

## Contributing
See our [CONTRIBUTING.md](CONTRIBUTING.md) guide.
