# @awscdk-resources-mongodbatlas/encryption-at-rest-express

## CFN resource type used
- MongoDB::Atlas::EncryptionAtRest
- MongoDB::Atlas::Cluster
- MongoDB::Atlas::DatabaseUser
- MongoDB::Atlas::ProjectIpAccessList

These CFN resources must be active in your AWS account while using this constructor.

## Manual QA
### Prerequisite steps:
1. Create an Atlas Project.
2. Register the Cloud Provider Access role, create the AWS IAM role whose trust policy uses the registration outputs, and authorize the role. You can do all of it in one app with `CfnCloudProviderAccessSetup`, a native `AWS::IAM::Role`, and `CfnCloudProviderAccessAuthorization`; see [cloud-provider-access-full-chain.ts](../../../examples/l1-resources/cloud-provider-access-full-chain.ts). Note the `roleId` the setup resource returns.
3. Create a Key in AWS KMS: Follow UI prompts and on `Define key administrative permissions` page under `Key administrators` select your IAM role created in the last step.
4. Once the KMS key is created, note your Key ID. This is your Customer Master Key.

### Steps to test:
1. Follow prerequisite steps for testing a CDK construct in [TESTING.md](../../../TESTING.md).
2. Use the `roleId` from the setup resource as the role id param for this CDK construct.
3. Set any additional required configuration options/parameters as per your needs.
4. Please follow the steps in [TESTING.md](../../../TESTING.md).


### Success criteria when testing the resource
1. Ensure all underlying resources are configured correctly as specified (Atlas Cluster, EncryptionAtRest, Network IPAccessList and DatabaseUser):

![image](https://user-images.githubusercontent.com/122359335/228581798-691ab912-4397-4fd5-aa7d-237b88a46465.png)

![image](https://user-images.githubusercontent.com/122359335/228581863-e04ee602-68b7-4e70-a88f-96da4ea2535d.png)

![image](https://user-images.githubusercontent.com/122359335/228581979-615b19cb-4d72-47e6-8aca-44a8c3013825.png)

![image](https://user-images.githubusercontent.com/122359335/228582032-14ef9f65-dc8d-4bb4-b7b0-1ab77a6257e6.png)

2. Ensure general [CDK resource success criteria](../../../TESTING.md) for this resource is met.

## Important links
- [Resource Usage Documentation](https://www.mongodb.com/docs/atlas/security-aws-kms/#std-label-security-aws-kms)
