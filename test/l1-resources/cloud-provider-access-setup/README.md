# Cloud Provider Access Setup

## Impact
The following components use this resource and are potentially impacted by any changes. They should also be validated to ensure the changes do not cause a regression.

- Cloud Provider Access Authorization L1 CDK constructor, which needs the role id this resource returns.
- Encryption at rest L2 and L3 CDK constructors, when their role id comes from this resource.

## CFN resource type used
- MongoDB::Atlas::CloudProviderAccessSetup

This CFN resource must be active in your AWS account while using this constructor.

## Manual QA
- Follow prerequisite steps for testing a CDK construct in [TESTING.md](../../../TESTING.md).
- Follow prerequisite steps for the corresponding [Cloud Provider Access Setup CFN resource](https://github.com/mongodb/mongodbatlas-cloudformation-resources/blob/master/cfn-resources/cloud-provider-access-setup/test/README.md).
- Set any additional required configuration options/parameters as per your needs.
- Follow the steps in [TESTING.md](../../../TESTING.md).

### Success criteria when testing the resource
- The registration appears in the project's Cloud Provider Access roles in the Atlas UI and is not yet authorized.
- The stack outputs show the Atlas principal ARN, the external ID, and the role id.

## Important Links
- [API Documentation](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-cloud-provider-access)
- [Resource Usage Documentation](https://www.mongodb.com/docs/atlas/security/set-up-unified-aws-access/)
