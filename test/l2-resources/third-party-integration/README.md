# @awscdk-resources-mongodbatlas/atlas-integrations

## CFN resource type used
- MongoDB::Atlas::ThirdPartyIntegration

This CFN resource must be active in your AWS account while using this constructor.

## Manual QA
- Follow prerequisite steps for testing a CDK construct in [TESTING.md](../../../TESTING.md).
- Follow prerequisite steps for the corresponding [Third Party Integration CFN resource](https://github.com/mongodb/mongodbatlas-cloudformation-resources/tree/master/cfn-resources/third-party-inetgration/test/README.md).
- Set any additional required configuration options/parameters as per your needs.
- Please follow the steps in [TESTING.md](../../../TESTING.md).


### Success criteria when testing the resource
1. Atlas Project should show correctly configured integration with chosen third-party service, for example DatadogIntegration(..):

![image](https://user-images.githubusercontent.com/122359335/227501805-7eee80cc-12a0-4a80-8400-09a283655187.png)

2. Ensure general [CDK resource success criteria](https://github.com/mongodb/mongodbatlas-cloudformation-resources/tree/master/TESTING.md) for this resource is met.

## Important Links
- [API Documentation](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/operation/operation-createthirdpartyintegration)
- [Resource Usage Documentation](https://www.mongodb.com/docs/atlas/tutorial/third-party-service-integrations/)
