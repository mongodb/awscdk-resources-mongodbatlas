import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodeBuildStep, CodePipeline, CodePipelineSource } from 'aws-cdk-lib/pipelines';
import { LinuxBuildImage } from 'aws-cdk-lib/aws-codebuild';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';

let orgId = process.env.MONGODB_ATLAS_ORG_ID;

let cfPolicy = new PolicyStatement({
  resources:  ["*"],
  actions : ["cloudformation:*"],
});

let ssmPolicy = new PolicyStatement({
  resources:  ["*"],
  actions : ["ssm:*"],
});

let assumePolicy = new PolicyStatement({
  resources:  ["*"],
  actions: ["sts:AssumeRole"]
});

let s3Policy = new PolicyStatement({
  resources:  ["*"],
  actions: ["s3:PutLifecycleConfiguration"]
});

let ecrPolicy = new PolicyStatement({
  resources:  ["*"],
  actions: ["ecr:*"]
});

let iamPolicy = new PolicyStatement({
  resources:  ["*"],
  actions: ["iam:GetRole"]
});

export class CdkPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'Atlas-CDK-Pipeline',
      selfMutation: false,
      synth: new CodeBuildStep('Integ-Test', {
        input: CodePipelineSource.gitHub('ialek36/mern-cdk-ci-cd', 'main'),
        buildEnvironment: {
          buildImage: LinuxBuildImage.AMAZON_LINUX_2_4, 
          environmentVariables: {
            MONGODB_ATLAS_ORG_ID: {value: orgId},
          }
        },
        rolePolicyStatements: [
          cfPolicy,
          ssmPolicy,
          s3Policy,
          ecrPolicy,
          iamPolicy,
          assumePolicy
        ],
        primaryOutputDirectory: 'atlas-integ-infra/cdk.out',
        commands: ['pwd',
          'ls -la',
          'node --version',
          'wget -q https://fastdl.mongodb.org/tools/db/mongodb-database-tools-amazon2-x86_64-100.7.0.rpm',
          'sudo yum install -y mongodb-database-tools-*-100.7.0.rpm',
          'cd ./atlas-integ-infra',
          'npm install -g aws-cdk',
          'npm install',
          'cdk synth',
          'cdk bootstrap',
          'cdk deploy',
          'sh setup-env.sh',
          'cd ../mern/server',
          'npm install',
          'npm test tests/api.unit.test.js',
          'sh server.sh',
          'npm test tests/api.integ.test.js',
          'cd ../../atlas-integ-infra',
          'yes Y| cdk destroy']
      })
    });
  }
}
