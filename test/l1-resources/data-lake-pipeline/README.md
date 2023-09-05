Datalake Pipeline 

## Impact 
The following components use this resource and are potentially impacted by any changes. They should also be validated to ensure the changes do not cause a regression.

## CFN resource type used
- MongoDB::Atlas::DataLakePipeline

This CFN resource must be active in your AWS account while using this constructor.


## Manual QA
- Follow prerequisite steps for testing a CDK construct in [TESTING.md](../../../TESTING.md).
- Follow prerequisite steps for the corresponding [Datalake Pipeline CFN resource](https://github.com/mongodb/mongodbatlas-cloudformation-resources/blob/master/cfn-resources/data-lake-pipeline/README.md).
- Set any additional required configuration options/parameters as per your needs.
- Please, follows the steps in [TESTING.md](../../../TESTING.md).


### Success criteria when testing the resource
- Once Datalake pipeline is created
     Open Project in the mongodAtlas : Select DataLake on the left panel -> Datalake Pipeline we created will get displayed.


## Important Links
- [API Documentation](https://docs-atlas-staging.mongodb.com/cloud-docs/docsworker-xlarge/openapi-docs-test/reference/api-resources-spec/#operation/createPipeline)
- [Resource Usage Documentation](https://www.mongodb.com/docs/datalake/tutorial/add-dataset-pipeline/)