# Api Keys

## CFN resource type used

- MongoDB::Atlas::APIKey

This CFN resource must be active in your AWS account while using this constructor.

## Manual QA

- Follow prerequisite steps for testing a CDK construct in [TESTING.md](../../../TESTING.md).
- Follow prerequisite steps for the corresponding [Api Keys resource](https://github.com/mongodb/mongodbatlas-cloudformation-resources/blob/master/cfn-resources/api-key/test/README.md).
- Set any additional required configuration options/parameters as per your needs.
- Please, follows the steps in [TESTING.md](../../../TESTING.md).

### Success criteria when testing the resource

- go to https://cloud.mongodb.com/v2#/org/{OrgId}/access/apiKeys

and verify that the ApiKeys are present

## Important Links

- [API Documentation](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-programmatic-api-keys)
- [Resource Usage Documentation](https://www.mongodb.com/docs/atlas/data-federation/config/config-aws-s3/)
