# Cloud Provider Access Authorization

## Impact
The following components use this resource and are potentially impacted by any changes. They should also be validated to ensure the changes do not cause a regression.

- Encryption at rest L2 and L3 CDK constructors, which need the role to be authorized before they can use it.
- Every other consumer of the Cloud Provider Access role, which has to be removed before this resource so that deletion does not fail while the role is still in use.

## CFN resource type used
- MongoDB::Atlas::CloudProviderAccessAuthorization

This CFN resource must be active in your AWS account while using this constructor.

## Manual QA
- Follow prerequisite steps for testing a CDK construct in [TESTING.md](../../../TESTING.md).
- Follow prerequisite steps for the corresponding [Cloud Provider Access Authorization CFN resource](https://github.com/mongodb/mongodbatlas-cloudformation-resources/blob/master/cfn-resources/cloud-provider-access-authorization/test/README.md).
- Set any additional required configuration options/parameters as per your needs.
- Follow the steps in [TESTING.md](../../../TESTING.md).

### Success criteria when testing the resource
- The registration appears as authorized for the expected AWS IAM role in the project's Cloud Provider Access roles in the Atlas UI.
- Deleting the stack removes the authorization together with the Cloud Provider Access role registration.

## Important Links
- [API Documentation](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-cloud-provider-access)
- [Resource Usage Documentation](https://www.mongodb.com/docs/atlas/security/set-up-unified-aws-access/)
