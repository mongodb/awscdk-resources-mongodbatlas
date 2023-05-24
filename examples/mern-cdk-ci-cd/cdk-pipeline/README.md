# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## first time setup
* fork this repo
* create env variable for your org `export MONGODB_ATLAS_ORG_ID=XXXXXX`
* make sure you have GitHub access token stored in Secretes Manager with name `github-token`
* modify `input: CodePipelineSource.gitHub('YOUR-GITHUB-ID/REPO', 'main')` to point to your GitHub repo.  The code is in `cdk-pipeline-stacks.ts` file.
* run `cdk synth && cdk bootstrap && cdk deploy`
* if this is the first time using the custom Atlas resources in your account run the following
```bash
npx cdk bootstrap aws://XXXXACCOUNTIDXXXX/us-east-1 \
--cloudformation-execution-policies arn:aws:iam::aws:policy/XXXXYOUR-POLICYXXXX

npx cdk bootstrap aws://XXXXACCOUNTIDXXXX/us-east-1  --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess --trust XXXXACCOUNTIDXXXX

aws cloudformation activate-type  --type-name MongoDB::Atlas::Cluster --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 --type RESOURCE --execution-role-arn arn:aws:iam::XXXXACCOUNTIDXXXX:role/XXXXYOUR-ROLEXXXX


aws cloudformation activate-type --type-name MongoDB::Atlas::Project --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 --type RESOURCE --execution-role-arn arn:aws:iam::XXXXACCOUNTIDXXXX:role/XXXXYOUR-ROLEXXXX


aws cloudformation activate-type --type-name MongoDB::Atlas::DatabaseUser --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 --type RESOURCE --execution-role-arn arn:aws:iam::XXXXACCOUNTIDXXXX:role/XXXXYOUR-ROLEXXXX


aws cloudformation activate-type --type-name MongoDB::Atlas::ProjectIpAccessList --publisher-id bb989456c78c398a858fef18f2ca1bfc1fbba082 --type RESOURCE --execution-role-arn arn:aws:iam::XXXXACCOUNTIDXXXX:role/XXXXYOUR-ROLEXXXX

```

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
