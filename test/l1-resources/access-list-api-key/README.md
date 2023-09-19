# Api Keys Access List

## CFN resource type used

- MongoDB::Atlas::AccessListAPIKey

This CFN resource must be active in your AWS account while using this constructor.

## Manual QA

- Follow prerequisite steps for testing a CDK construct in [TESTING.md](../../../TESTING.md).
- Follow prerequisite steps for the corresponding [Api Keys resource](https://github.com/mongodb/mongodbatlas-cloudformation-resources/blob/master/cfn-resources/access-list-api-key/README.md).
- Set any additional required configuration options/parameters as per your needs.
- Please, follows the steps in [TESTING.md](../../../TESTING.md).

### Success criteria when testing the resource

1- go to https://cloud.mongodb.com/v2#/org/{OrgId}/access/apiKeys
2- find the key created as a prerequisites
3- in the column Actions click on the "..." button, and select "View Details"
4- the API access List should be completed with the specified IPS

## Important Links

- [API Documentation](https://www.mongodb.com/docs/atlas/reference/api-resources-spec/v2/#tag/Programmatic-API-Keys)
- [Resource Usage Documentation](https://www.mongodb.com/docs/atlas/data-federation/config/config-aws-s3/)
