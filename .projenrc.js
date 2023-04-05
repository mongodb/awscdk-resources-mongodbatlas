const pullRequestTeamplateString = `<!--
Thanks for contributing to MongoDB Atlas AWS CDK Resources!
Before you submit your pull request, please review our contribution guidelines:
https://github.com/mongodb/awscdk-resources-mongodbatlas/blob/master/CONTRIBUTING.md
Please fill out the information below to help speed up the review process
and getting you pull request merged!
-->

## Proposed changes

<!-- 
Describe the big picture of your changes here and communicate why we should accept this pull request.
If it fixes a bug or resolves a feature request, be sure to link to that issue. 
-->
_Jira ticket:_ CLOUDP-#

Please include a summary of the fix/feature/change, including any relevant motivation and context.


Link to any related issue(s): 


<!--
Check the boxes that apply. If you're unsure about any of them, don't hesitate to ask!
We're here to help! This is simply a reminder of what we are going to look for before merging your code.
-->
## Type of change:

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as
  expected)
- [ ] This change requires a documentation update

## Required Checklist:

- [ ] I have signed the [MongoDB CLA](https://www.mongodb.com/legal/contributor-agreement)
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] I have added any necessary documentation (if appropriate)
- [ ] I have run \`make fmt\` and formatted my code
- [ ] I have tested the CDK constructor in a CFN stack. See [TESTING.md](../TESTING.md)

## Further comments
`;


const { awscdk, javascript, JsonFile } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'MongoDB',
  authorAddress: 'https://www.mongodb.com/',
  description: 'MongoDB Atlas CDK Construct Library for AWS CloudFormation Resources',
  cdkVersion: '2.64.0',
  defaultReleaseBranch: 'main',
  name: 'awscdk-resources-mongodbatlas',
  repositoryUrl: 'git@github.com:mongodb/awscdk-resources-mongodbatlas.git',
  keywords: ['cdk',
    'aws-cdk',
    'awscdk',
    'cloudformation',
    'cfn',
    'extensions',
    'constructs',
    'cfn-resources',
    'cloudformation-registry',
    'l2',
    'l3',
    'mongodb',
    'atlas'],
  npmAccess: javascript.NpmAccess.PUBLIC,
  releaseToNpm: true,
  sampleCode: false,
  peerDeps: [
    '@mongodbatlas-awscdk/atlas-basic@1.1.0',
    '@mongodbatlas-awscdk/encryption-at-rest@1.0.2',
    '@mongodbatlas-awscdk/cluster@1.1.0',
    '@mongodbatlas-awscdk/database-user@1.1.0',
    '@mongodbatlas-awscdk/project-ip-access-list@1.1.0',
    '@mongodbatlas-awscdk/project@1.1.0',
    '@mongodbatlas-awscdk/third-party-integration@1.1.0',
    '@mongodbatlas-awscdk/private-endpoint@1.1.0',
  ],
  devDeps: [
    '@mongodbatlas-awscdk/atlas-basic@1.1.0',
    '@mongodbatlas-awscdk/encryption-at-rest@1.0.2',
    '@mongodbatlas-awscdk/cluster@1.1.0',
    '@mongodbatlas-awscdk/database-user@1.1.0',
    '@mongodbatlas-awscdk/project-ip-access-list@1.1.0',
    '@mongodbatlas-awscdk/project@1.1.0',
    '@mongodbatlas-awscdk/third-party-integration@1.1.0',
    '@mongodbatlas-awscdk/private-endpoint@1.1.0',
  ],
  stability: 'experimental',
  pullRequestTemplateContents: [pullRequestTeamplateString],
});

new JsonFile(project, 'cdk.json', {
  obj: {
    app: 'npx ts-node --prefer-ts-exts src/integ.default.ts',
  },
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log'];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();
