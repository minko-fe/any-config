import { type Linter } from 'eslint'
import { pluginUnicorn } from '../plugins'

export const unicorn = (): Linter.Config[] => [
  {
    plugins: {
      unicorn: pluginUnicorn,
    },
    rules: {
      // Pass error message when throwing errors
      'unicorn/error-message': 'error',
      // Uppercase regex escapes
      'unicorn/escape-case': 'error',
      // Prevent deprecated `new Buffer()`
      'unicorn/no-new-buffer': 'error',
      // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
      'unicorn/number-literal-case': 'error',
      // Prefer using the node: protocol
      'unicorn/prefer-node-protocol': 'error',
      // Prefer using number properties like `Number.isNaN` rather than `isNaN`
      'unicorn/prefer-number-properties': 'error',
      // String methods startsWith/endsWith instead of more complicated stuff
      'unicorn/prefer-string-starts-ends-with': 'error',
      // Enforce throwing type error when throwing error while checking typeof
      'unicorn/prefer-type-error': 'error',
      // Use new when throwing error
      'unicorn/throw-new-error': 'error',
    },
  },
]
