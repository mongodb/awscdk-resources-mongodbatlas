# Serverless Private Endpoint

## Impact

The following components use this resource and are potentially impacted by any changes. They should also be validated to ensure the changes do not cause a regression.

- Serverless private endpoint L1 CDK constructor

## CFN resource type used

- MongoDB::Atlas::ServerlessPrivateEndpoint

This CFN resource must be active in your AWS account while using this constructor.

## Manual QA

- Follow prerequisite steps for testing a CDK construct in [TESTING.md](../../../TESTING.md).
- Follow prerequisite steps for the corresponding [Network container CFN resource](https://github.com/mongodb/mongodbatlas-cloudformation-resources/blob/master/cfn-resources/serverless-private-endpoint/test/README.md).
- Set any additional required configuration options/parameters as per your needs.
- Please follow the steps in [TESTING.md](../../../TESTING.md).

### Success criteria when testing the resource

1. Go to https://cloud.mongodb.com/v2/{projectId}/security/network/privateEndpoint
2. go to the private ednpoint tab
3. go to the Serverless Instance tab
4. validate that the private endpoint is created and available

## Important Links

- [API Documentation](https://www.mongodb.com/docs/atlas/reference/api-resources-spec/#tag/Network-Peering)
- [Resource Usage Documentation](https://www.mongodb.com/docs/atlas/reference/atlas-operator/ak8so-network-peering/)
