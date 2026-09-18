# Contributing

Thanks for contributing to `@abisai7/pass-generator`. External contributions are submitted through forks and pull requests.

## Requirements

- Node.js 16 or later
- npm 8 or later

Install the locked dependency versions:

```bash
npm ci
```

## Contribution Workflow

1. Fork [the repository](https://github.com/abisai7/pass-generator) on GitHub.
2. Clone your fork and create a branch from `main`:

    ```bash
    git checkout -b fix/descriptive-name
    ```

3. Make the change and add or update tests.
4. Run the local checks.
5. Push the branch to your fork and open a pull request targeting the upstream `main` branch.

Keep each pull request focused on one change. Explain the problem it solves, the behavior it changes, and any relevant test coverage.

## Development

The library source code is in `src/`. Add or update tests in `src/index.test.ts` when changing behavior.

Run the complete local validation before opening a pull request:

```bash
npm run ci
```

This builds the distributable files, checks formatting, and runs the Vitest suite. To format files locally:

```bash
npm run format
```

## Versioned Changes

Changes that alter the published package must include a Changeset. From the repository root, run:

```bash
npx changeset
```

Choose `@abisai7/pass-generator`, select the appropriate version type, and write a concise description of the user-facing change. Commit the generated Markdown file in `.changeset/` with the implementation and tests, then include it in the pull request.

Use semantic versioning:

- `patch`: compatible bug fixes and small corrections.
- `minor`: compatible features.
- `major`: breaking API or behavior changes.

Documentation, CI, and repository-only changes do not need a Changeset unless they should cause an npm release. When uncertain, omit it and mention the change in the pull request for maintainer review.

## After Your Pull Request Is Merged

GitHub Actions runs CI for every pull request. After a maintainer merges a pull request to `main`, the release workflow processes any included Changesets:

1. It creates or updates a release pull request.
2. That pull request updates `package.json`, `package-lock.json`, and `CHANGELOG.md`.
3. A maintainer merges that release pull request.
4. GitHub pauses the npm publish job until a required reviewer approves the `npm-publish` environment.
5. After approval, GitHub publishes the package to npm using Trusted Publishing.

External contributors do not need npm credentials or permission to publish. Do not run `npm publish` or `npm run local-release` as part of a contribution.

## Maintainer Release Setup

To require approval before publishing, create the `npm-publish` environment in **Settings > Environments** and add the release maintainers as required reviewers. The release workflow uses that environment to pause the publish job after the release pull request is merged.

Configure npm Trusted Publishing for the `abisai7/pass-generator` repository and the `release.yml` workflow. Allow `npm publish` for that trusted publisher; GitHub Environment approval is the manual control that prevents unattended publication.
