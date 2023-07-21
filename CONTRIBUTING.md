# Contributing to MongoDB Atlas CDK
MongoDB welcomes community contributions! If you’re interested in making a contribution, please follow the steps below before you start writing any code:

1. Reach out by filing an [issue](https://github.com/mongodb/mongodbatlas-cloudformation-resources/issues) to discuss your proposed contribution, be it a bug fix or feature/other improvements.
1. Sign the [contributor's agreement](http://www.mongodb.com/contributor). This will allow us to review and accept contributions.

After the above steps are completed and we've agreed on a path forward:
1. Fork the repository on GitHub
2. Create a branch with a name that briefly describes your submission
3. Add comments around your new code that explain what's happening
4. Commit and push your changes to your branch then submit a pull request against the current release branch, not master. The naming scheme of the branch is `release-staging-v#.#.#`. **Note**: There will only be one release branch at a time.
5. A repo maintainer will review the your pull request, and may either request additional changes or merge the pull request.

## PR Title Format
We use [*Conventional Commits*](https://www.conventionalcommits.org/):
- `fix: description of the PR`: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
- `chore: description of the PR`: the commit includes a technical or preventative maintenance task that is necessary for managing the product or the repository, but it is not tied to any specific feature or user story (this correlates with PATCH in Semantic Versioning).
- `doc: description of the PR`: The commit adds, updates, or revises documentation that is stored in the repository (this correlates with PATCH in Semantic Versioning).
- `test: description of the PR`: The commit enhances, adds to, revised, or otherwise changes the suite of automated tests for the product (this correlates with PATCH in Semantic Versioning).
- `security: description of the PR`: The commit improves the security of the product or resolves a security issue that has been reported (this correlates with PATCH in Semantic Versioning).
- `refactor: description of the PR`: The commit refactors existing code in the product, but does not alter or change existing behavior in the product (this correlates with Minor in Semantic Versioning).
- `perf: description of the PR`: The commit improves the performance of algorithms or general execution time of the product, but does not fundamentally change an existing feature (this correlates with Minor in Semantic Versioning).
- `ci: description of the PR`: The commit makes changes to continuous integration or continuous delivery scripts or configuration files (this correlates with Minor in Semantic Versioning).
- `revert: description of the PR`: The commit reverts one or more commits that were previously included in the product, but were accidentally merged or serious issues were discovered that required their removal from the main branch (this correlates with Minor in Semantic Versioning).
- `style: description of the PR`: The commit updates or reformats the style of the source code, but does not otherwise change the product implementation (this correlates with Minor in Semantic Versioning).
- `feat: description of the PR`: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
- `deprecate: description of the PR`: The commit deprecates existing functionality, but does not remove it from the product (this correlates with MINOR in Semantic Versioning).
- `BREAKING CHANGE`: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
Examples:
  - `fix!: description of the ticket`
  - If the PR has `BREAKING CHANGE`: in its description is a breaking change
- `remove!: description of the PR`: The commit removes a feature from the product. Typically features are deprecated first for a period of time before being removed. Removing a feature is a breaking change (correlating with MAJOR in Semantic Versioning).


## Autoclose stale issues and PRs
- After 30 days of no activity (no comments or commits are on an issue or PR) we automatically tag it as “stale” and add a message: "This issue has gone 30 days without any activity and meets the project’s definition of ‘stale’. This will be auto-closed if there is no new activity over the next 30 days. If the issue is still relevant and active, you can simply comment with a “bump” to keep it open, or add the “[Status] Not Stale” label. Thanks for keeping our repository healthy!"
- After 30 more days of no activity we automatically close the issue / PR.

## Release and Publishing
### Manual Release
1. `projenrc` is set to do manual release.
2. The release process is based on [*Semantic Versioning*](https://semver.org/) and [*Conventional Commits*](https://www.conventionalcommits.org/).
3. Make sure to follow the above guidelines in order to bump appropriate part of the version (*MAJOR, MINOR, PATCH*).
4. Commit the changes with the message based on the conventional commits guidelines.

### Publish
1. Make sure to create an NPM account and generate an NPM token.
2. `export NPM_TOKEN=<>` to generated token.
3. You might also need to `export NPM_ACCESS_LEVEL=public` in case it is not set in `projenrc`.
4. Execute `./publish.sh private-endpoint` to publish the resource.

### Tagging
1. The version is bumped based on the previous release version, which is the tag in the git repository.
2. Release task looks for the previous tag in the git repository and bump the version based on the last commit message.