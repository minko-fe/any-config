import { type ESLint, type Linter } from 'eslint'
import { GLOB_VUE } from '../globs'
import { parserVue, pluginVue, tseslint } from '../plugins'
import { typescriptCore } from './typescript'

const reactivityTransform: Linter.Config[] = [
  {
    languageOptions: {
      globals: {
        $: 'readonly',
        $$: 'readonly',
        $computed: 'readonly',
        $customRef: 'readonly',
        $ref: 'readonly',
        $shallowRef: 'readonly',
        $toRef: 'readonly',
      },
    },
    plugins: {
      vue: pluginVue,
    },
    rules: {
      'vue/no-setup-props-reactivity-loss': 'off',
    },
  },
]

const recommendedRules = pluginVue.configs['flat/recommended']
  .map((c) => c.rules)
  .reduce((acc, c) => ({ ...acc, ...c }), {}) as any

const vueTs: Linter.Config[] = typescriptCore
  .filter((config) => config.name !== 'typescript-eslint/base')
  .map((config) => {
    return {
      ...config,
      files: [GLOB_VUE],
    }
  })

export const vue = (): Linter.Config[] => [
  ...vueTs,
  {
    files: [GLOB_VUE],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: ['.vue'],
        parser: tseslint.parser,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin as ESLint.Plugin,
      'vue': pluginVue,
    },
    processor: pluginVue.processors['.vue'],
    rules: {
      ...recommendedRules,

      'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
      'vue/custom-event-name-casing': ['error', 'camelCase'],
      'vue/eqeqeq': ['error', 'smart'],

      'vue/html-self-closing': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-constant-condition': 'warn',
      'vue/no-empty-pattern': 'error',
      'vue/no-loss-of-precision': 'error',

      'vue/no-unused-refs': 'error',
      'vue/no-useless-v-bind': 'error',
      'vue/no-v-html': 'off',
      'vue/object-shorthand': [
        'error',
        'always',
        {
          avoidQuotes: true,
          ignoreConstructors: false,
        },
      ],
      'vue/one-component-per-file': 'off',
      'vue/padding-line-between-blocks': ['error', 'always'],
      'vue/prefer-template': 'error',
      'vue/require-default-prop': 'off',
      'vue/require-prop-types': 'off',
      'vue/singleline-html-element-content-newline': 'off',
    },
  },
  ...reactivityTransform,
]
