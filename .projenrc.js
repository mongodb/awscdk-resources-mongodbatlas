const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'andreaangiolillo',
  authorAddress: 'andrea.angiolillo@mongodb.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'awscdk-resources-mongodbatlas',
  repositoryUrl: 'git@github.com:mongodb/awscdk-resources-mongodbatlas.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();