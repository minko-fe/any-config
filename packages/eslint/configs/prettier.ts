// @ts-expect-error missing types
import prettierConfig from '@minko-fe/prettier-config'
import { type Linter } from 'eslint'
import { pluginPrettier, pluginPrettierRecommended } from '../plugins'
import { interopDefault } from '../utils'

const rules = { ...pluginPrettierRecommended.rules }
delete rules['vue/html-self-closing']

export const prettier = (): Linter.Config[] => [
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...rules,
      'prettier/prettier': ['warn', interopDefault(prettierConfig)],
    },
  },
]
