import { type Linter } from 'eslint'
import { GLOB_JSX, GLOB_TSX } from '../globs'
import { pluginReact, pluginReactHooks } from '../plugins'

export const react = (): Linter.Config[] => [
  {
    files: [GLOB_JSX, GLOB_TSX],
    languageOptions: {
      ...pluginReact.configs.flat?.['jsx-runtime'].languageOptions,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      ...pluginReact.configs.flat?.recommended.plugins,
    },
    rules: {
      ...pluginReact.configs.flat?.recommended.rules,
      ...pluginReact.configs.flat?.['jsx-runtime'].rules,
      'react/display-name': 'off',
      'react/jsx-child-element-spacing': 'off',
      'react/jsx-closing-tag-location': 'off',
      'react/jsx-key': 'off',
      'react/jsx-no-target-blank': 'off',
      'react/no-danger': 'off',
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  } as Linter.Config,
  {
    files: [GLOB_JSX, GLOB_TSX],
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'react-hooks/exhaustive-deps': 'off',
    },
  },
]
