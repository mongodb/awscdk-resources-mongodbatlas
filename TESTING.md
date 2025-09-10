# Testing CDK Constructs

## Prerequisites for manual testing of a CDK construct:
1. Ensure AWS CLI is installed and configured correctly for your AWS account.
2. Configure an Atlas profile secret in your AWS account with your API keys. Refer README for more information on how to do this.
3. Install AWS CDK CLI.
4. Ensure required resources are activated in your AWS CloudFormation:
```
aws cloudformation activate-type \
  --type-name <resource-type-name> \
  --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 \
  --type RESOURCE \
  --execution-role-arn <role-arn>

For example, in order to activate MongoDB::Atlas::AlertConfiguration, run:
aws cloudformation activate-type \
  --type-name 
MongoDB::Atlas::AlertConfiguration \
  --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 \
  --type RESOURCE \
  --execution-role-arn <role-arn>
```
### Running unit tests:
5. Ensure unit tests for each resource (located in `/test/[resource-folder]/index.test.ts)` are updated and successful.
 - Run unit tests with `npx projen test` inside the resource folder
```
# if you created an L1 resource
cd test/l1-resources/[resource-folder]

# if you created an L2 resource
cd test/l2-resources/[resource-folder]

# if you created an L3 resource
cd test/l3-resources/[resource-folder]

npx projen test 
```

## Testing the resource in a CFN stack:
1. Build the construct by running `npx projen build`.
2. It will generate a `.tgz` file in `dist/js` that we will reference later.
3. Create a CDK test app: We will be using a CDK app to test our construct by using the app to create, update and delete AWS CloudFormation stacks.
Create the CDK app by running the following in a terminal: ([refer AWS walkthrough for details](https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html#hello_world_tutorial_create_app)):
```
mkdir hello-cdk
cd hello-cdk
cdk init app --language typescript
# build the app:
npm run build
```
4. Add a reference to the previous file in the `dependencies` section in `package.json` instead of using a published version, for example:
```
"awscdk-resources-mongodbatlas": "file:../dist/js/awscdk-resources-mongodbatlas@0.0.0.jsii.tgz"
```
5. Import your CDK construct in a testing project.
6. Use the construct in your app with appropriate parameters.
7. Build your app again.

#### Create a stack:
8. Create a CloudFormation stack by running the following ([refer AWS walkthrough for details](https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html#hello_world_tutorial_deploy)):
```
# view what changes will be deployed in your stack
cdk diff
# deploy changes
cdk deploy
```
9. You should now be able to see your stack created in the AWS CloudFormation console.

#### Update the stack:
10. Update any parameters in the construct in your CDK app.
11. Build your app by running `npm run build` and run `cdk diff` and `cdk deploy` again.
12. You should now be able to see your stack updated in the AWS CloudFormation console.

#### Delete the stack:
13. Remove usage of the construct from your CDK app.
14. Build your app by running `npm run build` and run `cdk diff` and `cdk deploy` again.
15. You should now be able to see your stack being deleted/updated in the AWS CloudFormation console.

### Success criteria to be satisfied when testing a construct:
1. Refer to the success criteria for your resource first.
2. Stack **Outputs** should show required data correctly.
3. **Create** - Stack should complete successfully and resource should be created and correctly configured in Atlas account.
4. **Update** - Stack should complete successfully and resource should be updated and correctly configured in Atlas account.
5. **Delete** - Stack should complete successfully and resource should be deleted from your Atlas account.
