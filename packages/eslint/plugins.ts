/* eslint-disable import/first  */
// @ts-nocheck

import * as _pluginAntfu from 'eslint-plugin-antfu'
import { interopDefault } from './utils'

export const pluginAntfu: typeof import('eslint-plugin-antfu').default = interopDefault(_pluginAntfu)

import * as _pluginComments from 'eslint-plugin-eslint-comments'
export const pluginComments = interopDefault(_pluginComments)

import * as _pluginMarkdown from 'eslint-plugin-markdown'
export const pluginMarkdown = interopDefault(_pluginMarkdown)

import * as _pluginUnicorn from 'eslint-plugin-unicorn'
export const pluginUnicorn = interopDefault(_pluginUnicorn)

export { default as pluginVue } from 'eslint-plugin-vue'
export * as parserVue from 'vue-eslint-parser'

import * as _pluginReact from 'eslint-plugin-react'
export const pluginReact = interopDefault(_pluginReact)

import * as _pluginReactHooks from 'eslint-plugin-react-hooks'
export const pluginReactHooks = interopDefault(_pluginReactHooks)

export * as pluginImport from 'eslint-plugin-import-x'
export * as pluginJsonc from 'eslint-plugin-jsonc'

import * as _pluginPerfectionist from 'eslint-plugin-perfectionist'
export const pluginPerfectionist: any = interopDefault(_pluginPerfectionist)

import * as _pluginUnusedImports from 'eslint-plugin-unused-imports'
export const pluginUnusedImports: any = interopDefault(_pluginUnusedImports)

export * as pluginYml from 'eslint-plugin-yml'
export * as parserJsonc from 'jsonc-eslint-parser'

export * as parserYml from 'yaml-eslint-parser'

import * as _pluginNode from 'eslint-plugin-n'
export const pluginNode = interopDefault(_pluginNode)

export { default as pluginPrettier } from 'eslint-plugin-prettier'
export { default as pluginPrettierRecommended } from 'eslint-plugin-prettier/recommended'

export { default as tseslint } from 'typescript-eslint'

import * as _pluginAstro from 'eslint-plugin-astro'
export const pluginAstro = interopDefault(_pluginAstro)

import * as _parserAstro from 'astro-eslint-parser'
export const parserAstro = interopDefault(_parserAstro)
