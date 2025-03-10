import { type Linter } from 'eslint'
import {
  asyncSvelte,
  comments,
  gitignores,
  ignores,
  imports,
  javascript,
  jsonc,
  markdown,
  node,
  prettier,
  react,
  resolveAstro,
  sortImports,
  sortObjects,
  sortPackageJson,
  sortTsconfig,
  typescript,
  unicorn,
  vue,
  yml,
} from './configs'
import {
  hasAstro,
  hasAstroPrettier,
  hasReact,
  hasSvelte,
  hasSveltePrettier,
  hasTailwindcss,
  hasTailwindcssPrettire,
  hasTypeScript,
  hasVue,
} from './env'
import logger from './utils/logger'

const presetJavaScript = [...javascript(), ...comments(), ...imports(), ...unicorn(), ...node(), ...ignores()]

const presetJsonc = [...jsonc(), ...sortPackageJson()]

const presetTypescript = [...typescript(), ...sortTsconfig()]

export async function defineConfig(
  config: Linter.Config | Linter.Config[] = [],
  {
    astro: enableAstro = hasAstro,
    gitignore: enableGitignore = true,
    jsonc: enableJsonc = true,
    markdown: enableMarkdown = true,
    prettier: enablePrettier = true,
    react: enableReact = hasReact,
    sortImports: enableSortImports = true,
    sortObjects: enableSortObjects = false,
    svelte: enableSvelte = hasSvelte,
    typescript: enableTypescript = hasTypeScript,
    vue: enableVue = hasVue,
    yml: enableYml = true,
  }: Partial<{
    react: boolean
    vue: boolean
    astro: boolean
    svelte: boolean
    typescript: boolean
    sortImports: boolean
    sortObjects: boolean
    prettier: boolean
    markdown: boolean
    gitignore: boolean
    jsonc: boolean
    yml: boolean
  }> = {},
): Promise<Linter.Config[]> {
  const configs: Linter.Config[] = []

  configs.push(...presetJavaScript)

  if (enablePrettier && hasTailwindcss) {
    logger.debug('Tailwindcss enabled')
    if (!hasTailwindcssPrettire) {
      logger.warn(
        '[@minko-fe/eslint-config] Tailwindcss detected but "prettier-plugin-tailwindcss" not found, please install it to enable Tailwindcss support.',
      )
    }
  }

  if (enableGitignore) {
    logger.debug('Gitignore enabled')
    configs.push(...gitignores)
  }
  if (enableTypescript) {
    logger.debug('TypeScript enabled')
    configs.push(...presetTypescript)
  }
  if (enablePrettier) {
    logger.debug('Prettier enabled')
    configs.push(...prettier())
  }
  if (enableSortObjects) {
    logger.debug('Sort objects enabled')
    configs.push(...sortObjects())
  }
  if (enableSortImports) {
    logger.debug('Sort imports enabled')
    configs.push(...sortImports())
  }
  if (enableMarkdown) {
    logger.debug('Markdown enabled')
    configs.push(...markdown())
  }
  if (enableJsonc) {
    logger.debug('Jsonc enabled')
    configs.push(...presetJsonc)
  }
  if (enableYml) {
    logger.debug('Yml enabled')
    configs.push(...yml())
  }
  if (enableReact) {
    logger.debug('React enabled')
    configs.push(...react())
  }
  if (enableVue) {
    logger.debug('Vue enabled')
    configs.push(...vue())
  }
  if (enableAstro) {
    logger.debug('Astro enabled')
    if (!hasAstroPrettier) {
      logger.warn(
        '[@minko-fe/eslint-config] Astro detected but "prettier-plugin-astro" not found, please install it to enable Astro support.',
      )
    }
    configs.push(...(await resolveAstro()))
  }
  if (enableSvelte) {
    logger.debug('Svelte enabled')
    if (!hasSveltePrettier) {
      logger.warn(
        '[@minko-fe/eslint-config] Svelte detected but "prettier-plugin-svelte" not found, please install it to enable Svelte support.',
      )
    }
    configs.push(...(await asyncSvelte()))
  }

  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }
  return configs
}
