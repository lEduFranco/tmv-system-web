export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
    'scope-enum': [2, 'always', []],
    'scope-case': [2, 'always', 'camel-case'],
    'scope-min-length': [2, 'always', 0],
    'subject-max-length': [2, 'always', 72],
    'subject-min-length': [2, 'always', 4],
  },
}
