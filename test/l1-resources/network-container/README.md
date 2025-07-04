# Network Container

## Impact
The following components use this resource and are potentially impacted by any changes. They should also be validated to ensure the changes do not cause a regression.
- Network container L1 CDK constructor


## CFN resource type used
- MongoDB::Atlas::NetworkContainer

This CFN resource must be active in your AWS account while using this constructor.

## Manual QA
- Follow prerequisite steps for testing a CDK construct in [TESTING.md](../../../TESTING.md).
- Follow prerequisite steps for the corresponding [Network container CFN resource](https://github.com/mongodb/mongodbatlas-cloudformation-resources/blob/master/cfn-resources/network-container/test/README.md).
- Set any additional required configuration options/parameters as per your needs.
- Please follow the steps in [TESTING.md](../../../TESTING.md).



### Success criteria when testing the resource
1. You should be able to see the container created when running the following Atlas CLI command:
```bash
atlas networking container ls --projectId 641d818e36e2eb47d038f8c2
[
  {
    "atlasCidrBlock": "10.8.2.0/24",
    "id": "<network-container-id>",
    "providerName": "AWS",
    "provisioned": false,
    "regionName": "US_EAST_1"
  }
]
```
2. Ensure general [CDK resource success criteria](../../../TESTING.md) for this resource is met.



## Important Links
- [API Documentation](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-network-peering)
- [Resource Usage Documentation](https://www.mongodb.com/docs/atlas/reference/atlas-operator/ak8so-network-peering/)
