import { type Linter } from 'eslint'
import { GLOB_SVELTE } from '../globs'
import { tseslint } from '../plugins'

export async function asyncSvelte(): Promise<Linter.Config[]> {
  // @ts-ignore
  const eslintPluginSvelte = await import('eslint-plugin-svelte')
  return [
    ...eslintPluginSvelte.configs.recommended,
    {
      files: GLOB_SVELTE,
      languageOptions: {
        parserOptions: {
          extraFileExtensions: ['.svelte'],
          parser: tseslint.parser,
          projectService: true,
        },
      },
    },
  ]
}
