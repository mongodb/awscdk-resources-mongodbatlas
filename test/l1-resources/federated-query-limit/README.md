# Federated Query Limit

## CFN resource type used

- MongoDB::Atlas::FederatedQueryLimit

This CFN resource must be active in your AWS account while using this constructor.

## Manual QA

- Follow prerequisite steps for testing a CDK construct in [TESTING.md](../../../TESTING.md).
- Follow prerequisite steps for the corresponding [Federated query limit CFN resource](https://github.com/mongodb/mongodbatlas-cloudformation-resources/blob/master/cfn-resources/federated-query-limit/test/README.md).
- Set any additional required configuration options/parameters as per your needs.
- Please, follows the steps in [TESTING.md](../../../TESTING.md).

### Success criteria when testing the resource

- Custom role should be available in the "Database Access" page:
  ![image](./test/readmeimages/federated-query-limit.png)

## Important Links

- [API Documentation](https://www.mongodb.com/docs/atlas/reference/api-resources-spec/v2/#tag/Data-Federation/operation/returnFederatedDatabaseQueryLimits)
- [Resource Usage Documentation](https://www.mongodb.com/docs/atlas/data-federation/query/manage-query-limits/)
