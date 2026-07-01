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
- [ ] If changes include removal or addition of 3rd party GitHub actions, I updated our internal document. Reach out to the APIx Integration slack channel to get access to the internal document.

## Further comments
`;

const { awscdk, javascript, JsonFile } = require("projen");
const { ReleaseTrigger } = require("projen/lib/release");
const project = new awscdk.AwsCdkConstructLibrary({
  author: "MongoDB",
  authorAddress: "https://www.mongodb.com/",
  description:
    "MongoDB Atlas CDK Construct Library for AWS CloudFormation Resources",
  cdkVersion: "2.260.0",
  constructsVersion: "10.5.0",
  defaultReleaseBranch: "main",
  name: "awscdk-resources-mongodbatlas",
  repositoryUrl: "https://github.com/mongodb/awscdk-resources-mongodbatlas.git",
  packageManager: javascript.NodePackageManager.NPM,
  keywords: [
    "cdk",
    "aws-cdk",
    "awscdk",
    "cloudformation",
    "cfn",
    "extensions",
    "constructs",
    "cfn-resources",
    "cloudformation-registry",
    "l1",
    "l2",
    "l3",
    "mongodb",
    "atlas",
  ],
  npmAccess: javascript.NpmAccess.PUBLIC,
  prettier: true,
  docgen: true,
  releaseToNpm: true,
  publishToNuget: {
    dotNetNamespace: "MongoDB.AWSCDKResourcesMongoDBAtlas",
    packageId: "MongoDB.AWSCDKResourcesMongoDBAtlas",
  },
  publishToMaven: {
    javaPackage: "org.mongodb.awscdk.resources.mongodbatlas",
    mavenArtifactId: "awscdk-resources-mongodbatlas",
    mavenGroupId: "org.mongodb",
  },
  publishToPypi: {
    distName: "awscdk_resources_mongodbatlas",
    module: "awscdk_resources_mongodbatlas",
    homepage: "https://github.com/mongodb/awscdk-resources-mongodbatlas",
  },
  publishToGo: {
    moduleName: "github.com/mongodb/awscdk-resources-mongodbatlas-go",
    packageName: "awscdkresourcesmongodbatlas",
  },
  sampleCode: false,
  peerDeps: [],
  devDeps: [],
  pullRequestTemplateContents: [pullRequestTeamplateString],
  githubOptions: { workflows: false },
});

new JsonFile(project, "cdk.json", {
  obj: {
    app: "npx ts-node --prefer-ts-exts src/integ.default.ts",
  },
});

const common_exclude = [
  "cdk.out",
  "cdk.context.json",
  "npm-debug.log*",
  "*.DS_Store",
  "examples-bin",
  ".idea/",
  "*.secrets",
  ".vscode",
  ".windsurf",
  "CLAUDE.md",
  ".claude",
];
project.gitignore.exclude(...common_exclude);
project.npmignore.exclude(
  ...common_exclude,
  "/src/",
  "CONTRIBUTING.md",
  "TESTING.md",
  "CODE_OF_CONDUCT.md",
  "SECURITY.md",
  "cdk.json",
  "/scripts/",
  "/examples/"
);
// typescript-eslint's parserOptions.projectService can't type-check .projenrc.js
// since it isn't included in any tsconfig; register it as a loose default-project file.
project.eslint.allowDefaultProjectFiles(".projenrc.js");

project.tasks.tryFind("docgen").updateStep(0, {
  exec: "jsii-docgen -o API.md -r",
  say: "Generating API.md, using -r to include readme content",
});
// Force js-yaml >=4.2.0 to fix CVE-2026-53550 (GHSA-h67p-54hq-rp68). @istanbuljs/load-nyc-config
// pins ^3.13.1 and has no 4.x release yet, so an override is the only fix. Once that package
// updates its own dependency range this override becomes a harmless no-op and can be deleted.
project.package.addField("overrides", { "js-yaml": ">=4.2.0" });

project.synth();
