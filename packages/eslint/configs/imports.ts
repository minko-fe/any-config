import { type Linter } from 'eslint'
import { GLOB_MARKDOWN, GLOB_SRC, GLOB_SRC_EXT } from '../globs'
import { pluginAntfu, pluginImport } from '../plugins'

export const imports = (): Linter.Config[] => [
  {
    plugins: {
      antfu: pluginAntfu,
      import: pluginImport as any,
    },
    rules: {
      'antfu/import-dedupe': 'error',
      'import/first': 'error',
      'import/namespace': 'off',
      'import/no-absolute-path': 'off',
      'import/no-default-export': 'off',
      'import/no-duplicates': ['error'],
      'import/no-mutable-exports': 'off',
      'import/no-named-default': 'off',
      'import/no-self-import': 'error',
      'import/no-unresolved': 'off',
      'import/no-webpack-loader-syntax': 'error',
      'import/order': 'off',
    },
  },
  {
    files: [
      `**/src/${GLOB_SRC}`,
      `**/*config*.${GLOB_SRC_EXT}`,
      `**/{views,pages,routes,middleware,plugins,api}/${GLOB_SRC}`,
      `**/{index,vite,esbuild,rollup,rolldown,webpack,rspack}.ts`,
      '**/*.d.ts',
      `${GLOB_MARKDOWN}/**`,
      '**/.prettierrc*',
    ],
    plugins: {
      import: pluginImport as any,
    },
    rules: {
      'import/no-default-export': 'off',
    },
  },
]
