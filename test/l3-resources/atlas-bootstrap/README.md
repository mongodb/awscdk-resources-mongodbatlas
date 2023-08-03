# @awscdk-resources-mongodbatlas/atlas-basic

## CFN resource type used

- AWS::IAM::Role
- AWS::IAM::Policy
- AWS::CloudFormation::TypeActivation
- AWS::SecretsManager::Secret

These CFN resources must be active in your AWS account while using this constructor.

## Manual QA

- Follow prerequisite steps for testing a CDK construct in [TESTING.md](https://github.com/mongodb/mongodbatlas-cloudformation-resources/tree/master/TESTING.md).
- Set any additional required configuration options/parameters as per your needs.
- Please follow the steps in [TESTING.md](../../../TESTING.md).

### Success criteria when testing the resource

1. Ensure all underlying resources are configured correctly as specified (Atlas Project, Cluster, Network IPAccessList and DatabaseUser):

2) Ensure general [CDK resource success criteria](../../../TESTING.md) for this resource is met.
