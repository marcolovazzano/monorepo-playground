// https://semantic-release.gitbook.io/semantic-release/

module.exports = {
  'branches': [
    'main',
    {
      'name': 'develop',
      'channel': 'channel-${name}',
      'prerelease': true
    },
    {
      'name': 'beta', 
      'channel': 'channel-${name}',
      'prerelease': true
    },
    {
      'name': 'alpha', 
      'channel': 'channel-${name}',
      'prerelease': true
    },
  ],
  'repositoryUrl': 'https://github.com/marcolovazzano/semantic-release',
  'tagFormat': 'v${version}',
  'preset': 'conventionalcommits',
  'plugins': [
    ['@semantic-release/commit-analyzer', {
      }
    ],
    ['@semantic-release/release-notes-generator', {
        'writerOpts': {
          'commitsSort': ['perf', 'feat', 'fix'],
        }
      }
    ],
    ['@semantic-release/exec', {
        'verifyReleaseCmd': 'echo ${nextRelease.version} > .VERSION',
      }
    ],
    ['@semantic-release/changelog', {
        'changelogFile': 'CHANGELOG.md',
        'changelogTitle': '# Release Changelog'
      }
    ],
    ['@semantic-release/git', {
        'assets': ['CHANGELOG.md']
      }
    ],
    ['@semantic-release/github', {
      'assets': [
        {'path': 'CHANGELOG.md'},
      ]
    }],
  ]
}
