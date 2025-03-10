import { type Linter } from 'eslint'
import { GLOB_SRC } from '../globs'
import { pluginPerfectionist } from '../plugins'

export const sortImports = (): Linter.Config[] => [
  {
    plugins: {
      perfectionist: pluginPerfectionist,
    },
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: {
            type: {
              react: ['react', 'react-*'],
            },
            value: {
              react: ['react', 'react-*'],
            },
          },
          groups: [
            'type',
            'react',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'side-effect',
            'style',
            'object',
            'unknown',
          ],
          internalPattern: ['^[~@#]/.*'],
          newlinesBetween: 'never',
          order: 'asc',
          type: 'natural',
        },
      ],
      'perfectionist/sort-named-imports': [
        'error',
        {
          order: 'asc',
          type: 'natural',
        },
      ],
    },
  },
]

export const sortObjects = (): Linter.Config[] => [
  {
    files: [GLOB_SRC],
    plugins: {
      perfectionist: pluginPerfectionist,
    },
    rules: {
      'perfectionist/sort-objects': 'error',
    },
  },
]
