import { type Linter } from 'eslint'
import { pluginNode } from '../plugins'

export const node = (): Linter.Config[] => [
  {
    plugins: {
      node: pluginNode,
    },
    rules: {
      'node/handle-callback-err': ['error', '^(err|error)$'],
      'node/no-deprecated-api': 'off',
      'node/no-exports-assign': 'error',
      'node/no-new-require': 'error',
      'node/no-path-concat': 'error',
      'node/no-unsupported-features/es-builtins': 'error',
      'node/process-exit-as-throw': 'error',
    },
  },
]
