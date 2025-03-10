/** @type {import("prettier").Config} */
module.exports = {
  $schema: 'https://json.schemastore.org/prettierrc',
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'ignore',
  jsxSingleQuote: true,
  overrides: [
    {
      files: [
        '**/node_modules/**',
        '**/dist/**',
        '**/output/**',
        '**/coverage/**',
        '**/temp/**',
        '**/.vitepress/cache/**',
        '**/.nuxt/**',
        '**/.next/**',
        '**/.vercel/**',
        '**/.svelte-kit/**',
        '**/.astro/**',
        '**/.changeset/**',
        '**/.idea/**',
        '**/.output/**',
        '**/.vite-inspect/**',
        '**/CHANGELOG*.md',
        '**/*.min.*',
        '**/LICENSE*',
        '**/__snapshots__',
        '**/auto-import?(s).d.ts',
        '**/components.d.ts',
        '**/pnpm-lock.yaml',
      ],
      options: {
        requirePragma: true,
      },
    },
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
      },
    },
  ],
  plugins: [
    resolvePeerDependency('prettier-plugin-astro'),
    resolvePeerDependency('prettier-plugin-svelte'),
    resolvePeerDependency('prettier-plugin-tailwindcss'),
  ].filter(Boolean),
  printWidth: 120,
  quoteProps: 'consistent',
  semi: false,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 2,
  tailwindFunctions: ['tw', 'clsx', 'className', 'tv', 'class'],
  trailingComma: 'all',
}

function resolvePeerDependency(name) {
  try {
    return require.resolve(name)
  } catch {
    return ''
  }
}
