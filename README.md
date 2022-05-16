# semantic-release playground

sample repo using [semantic-release](https://github.com/semantic-release/semantic-release) and [commitlint](https://commitlint.js.org/) with [conventionalcommit](https://www.conventionalcommits.org/en/v1.0.0/) settings.

## workflows
- `commitlint.yml`: dispatch on push (feat/**), on pull_request and checks the commit messages associated if they are conform to the conventional commmit specs
- `release`: dispatch manually, performs the release process