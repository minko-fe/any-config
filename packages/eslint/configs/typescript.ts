import { type Linter } from 'eslint'
import { GLOB_JS, GLOB_TS, GLOB_TSX } from '../globs'
import { tseslint } from '../plugins'

export const typescriptCore = tseslint.config({
  extends: [...tseslint.configs.recommended],
  files: [GLOB_TS, GLOB_TSX],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      sourceType: 'module',
    },
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { disallowTypeAnnotations: false, fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    '@typescript-eslint/method-signature-style': ['error', 'property'], // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful

    '@typescript-eslint/naming-convention': [
      'error',
      {
        custom: {
          match: false,
          // no $ prefix
          regex: '^\\$[a-zA-Z][\\w\\d]*$',
        },
        format: null,
        selector: ['variable', 'variableLike'],
      },
    ],
    '@typescript-eslint/no-dynamic-delete': 'off',

    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-import-type-side-effects': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    // handled by unused-imports/no-unused-imports
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/parameter-properties': 'off',
    '@typescript-eslint/prefer-as-const': 'warn',
    '@typescript-eslint/prefer-literal-enum-member': ['error', { allowBitwiseExpressions: true }],
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    'no-restricted-syntax': 'off',
    'no-var': 'off',
    'prefer-const': ['warn', { destructuring: 'all', ignoreReadBeforeAssign: true }],
  },
}) as Linter.Config[]

export const typescript: Linter.Config[] = [
  ...typescriptCore,

  {
    files: ['**/*.d.ts'],
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
      'import/no-duplicates': 'off',
      'no-restricted-syntax': 'off',
      'no-var': 'off',
      'unused-imports/no-unused-vars': 'off',
      'vars-on-top': 'off',
    },
  },
  {
    files: ['**/*.{test,spec}.ts?(x)'],
    rules: {
      'no-unused-expressions': 'off',
    },
  },
  {
    files: [GLOB_JS, '**/*.cjs'],
    rules: {},
  },
]
