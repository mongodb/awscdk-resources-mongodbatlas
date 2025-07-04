# Project Invitation

## CFN resource type used
- MongoDB::Atlas::ProjectInvitation

This CFN resource must be active in your AWS account while using this constructor.

## Manual QA
- Follow prerequisite steps for testing a CDK construct in [TESTING.md](../../../TESTING.md).
- Follow prerequisite steps for the corresponding [ProjectInvitation CFN resource](https://github.com/mongodb/mongodbatlas-cloudformation-resources/blob/master/cfn-resources/project-invitation/test/README.md).
- Set any additional required configuration options/parameters as per your needs.
- Please follow the steps in [TESTING.md](../../../TESTING.md).


### Success criteria when testing the resource
- Atlas Project Access Manager should show `PENDING INVITE` for invited user:

![image](https://user-images.githubusercontent.com/122359335/227505950-afc41fa7-abb5-478b-807d-c9510a40888c.png)

2. Ensure general [CDK resource success criteria](../../../TESTING.md) for this resource is met.

## Important Links
- [API Documentation](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/operation/operation-createprojectinvitation)
- [Resource Usage Documentation](https://www.mongodb.com/docs/atlas/invitations/)