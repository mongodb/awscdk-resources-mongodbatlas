# Releasing


## Stable release

Stable releases are managed by the [Release GitHub Action](https://github.com/mongodb/awscdk-resources-mongodbatlas/actions/workflows/release.yml). You can release a new CDK version by manually trigger the action ([REMEMBER Manual Steps Below](#manual-steps)).

![Screenshot 2023-04-20 at 10 35 11](https://user-images.githubusercontent.com/5663078/233325734-0f469045-f91b-436c-8dd5-19d1e8f24c57.png)

### Manual Steps
After the action finishes successfully you have to manually release the Go package:
- Go to the [Go repo](https://github.com/mongodb/awscdk-resources-mongodbatlas-go) and check that the latest commit happened now with the same release as in this repo, e.g. `chore(release): v3.0.0`.
- Go to the [Go Repo release page](https://github.com/mongodb/awscdk-resources-mongodbatlas-go/releases).
- Select the latest release that has to be the same as the one in this repo, e.g. `awscdkresourcemongodbatlas/v3.0.0`, name will be like `v3.0.0`, click "Generate release notes" and make sure "Set as latest release" is checked.

Also, to ensure no silent errors, look for the specific `vX.Y.Z` language releases:
- [Javascript](https://www.npmjs.com/package/awscdk-resources-mongodbatlas?activeTab=versions)
- [Java](https://central.sonatype.com/artifact/org.mongodb/awscdk-resources-mongodbatlas/versions)
- [Python](https://pypi.org/project/awscdk-resources-mongodbatlas/#history)
- [Golang](https://github.com/mongodb/awscdk-resources-mongodbatlas-go/releases)
- [Nuget](https://www.nuget.org/packages/MongoDB.AWSCDKResourcesMongoDBAtlas#versions-body-tab)

## Versioning
The release version is determinated based on the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) in that release.

## Release troubleshooting
If the Release Gitub Action fails, it can happen that the new version is published only to some repositories, 
but the failing ones are still in the current version.

The current version is only updated when the Github Action is completely succesful. Also the action is retryable 
(all repository publishings are idempotent, if try to publish a version that is already published, it doesn't fail and behaves like a no-op). 
**That means that the offending issue can be fixed and run the action again.**

You can also do a manual release for the failing repository publishings.

## Manual Release

**Note, we should manual release a version only if one of the Publish step of the action failed.**

1. Download the latest changes from `main`
```bash
git fetch origin && git merge origin/main
```
2. Make sure that the release tag was not push to `main`. You have to delete the tag before starting the release. 
```bash
git tag -l # List the tags
git tag -d v1.0.1 # Delete the tag v1.0.1
``` 

3. Start the release
```bash
npx projen release
```

As a result within the `./dist` folder you will be able to verify the generated packages for each target, as well as the version and changelog.

4. Publish the artifacts to the package managers. Reach out to [APIx-Integration](https://github.com/orgs/mongodb/teams/apix-integrations/members) for the credentials.
```bash
# NPM
export NPM_TOKEN=******

npx -p publib@latest publib-npm

# Python
export TWINE_USERNAME=********
export TWINE_PASSWORD=********

npx -p publib@latest publib-pypi

# .Net
export NUGET_API_KEY=*********

npx -p publib@latest publib-nuget

# Maven
export MAVEN_USERNAME=*********
export MAVEN_PASSWORD=*********
export MAVEN_STAGING_PROFILE_ID=*********
export MAVEN_GPG_PRIVATE_KEY_PASSPHRASE=*********
export MAVEN_GPG_PRIVATE_KEY=*********

npx -p publib@latest publib-maven

# Golang
export GITHUB_TOKEN=*********
export GIT_USER_NAME=*********
export GIT_USER_EMAIL=*********

npx -p publib@latest publib-golang
```

##### Maven publishing considerations
- Make sure that your mvn version (`mvn --version`) is running the same java version that we use in the GitHub release workflow (currently temurin 11).
- It is possible that during the publishing process it will require to enter the gpg passphrase, in this case enter the value defined in `MAVEN_GPG_PRIVATE_KEY_PASSPHRASE`.

5. Create a new release in [awscdk-resources-mongodbatlas-go](https://github.com/mongodb/awscdk-resources-mongodbatlas-go).

6. If the initial release process failed, it is likely that the final step generating the GitHub release and version tag was not run. This can be done by creating a new release from the GitHub UI, defining the correct `vX.Y.Z` to be created, and copying the content of `./dist/changelog.md` for the release notes.
