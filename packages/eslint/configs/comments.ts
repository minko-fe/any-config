import type { Linter } from 'eslint'
import { pluginComments } from '../plugins'

export const comments = (): Linter.Config[] => [
  {
    plugins: {
      'eslint-comments': pluginComments,
    },
    rules: {
      ...pluginComments.configs.recommended.rules,
      'eslint-comments/disable-enable-pair': 'off',
      'eslint-comments/no-aggregating-enable': 'error',
      'eslint-comments/no-duplicate-disable': 'error',
      'eslint-comments/no-unlimited-disable': 'off',
      'eslint-comments/no-unused-enable': 'error',
    },
  },
]
