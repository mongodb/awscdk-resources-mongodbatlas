Cloud Outrage Simulation

## Impact

The following components use this resource and are potentially impacted by any changes. They should also be validated to ensure the changes do not cause a regression.

Cloud Outrage Simulation L1 CDK

## CFN resource type used

- MongoDB::Atlas::CloudOutageSimulation

This CFN resource must be active in your AWS account while using this constructor.

## Manual QA

- Follow prerequisite steps for testing a CDK construct in [TESTING.md](../../../TESTING.md).
- Follow prerequisite steps for the corresponding [CloudOutageSimulation CFN resource](https://github.com/mongodb/mongodbatlas-cloudformation-resources/blob/Feature/intmdb-1007-cloud-outage/cfn-resources/cloud-outage-simulation/README.md).
- Set any additional required configuration options/parameters as per your needs.
- Please, follows the steps in [TESTING.md](../../../TESTING.md).

### Success criteria when testing the resource

- To simulate a Regional Outage in the Atlas UI:
  Log in to the Atlas UI.
  Click Database.
  For the cluster you wish to perform outage testing, click the ... button.
  Click Test Resilience.
  Select Regional Outage. Atlas displays a Test Resilience modal with the steps Atlas takes to simulate an outage event. To learn more, see
  Simulate Regional Outage Process.
  Click Select Regions.
  Select the tab corresponding to the type of outage you want to simulate:
  Select Simulate Regional Outage to begin the test. Atlas notifies you when the outage occurs.
  Select a tab corresponding to the type of outage you are performing:
  When you finish testing the outage, click End Simulation.

## Important Links

- [API Documentation](https://docs-atlas-staging.mongodb.com/cloud-docs/docsworker-xlarge/openapi-docs-test/reference/api-resources-spec/#operation/startOutageSimulation)
- [Resource Usage Documentation](https://www.mongodb.com/docs/atlas/cloud-providers-regions/)
