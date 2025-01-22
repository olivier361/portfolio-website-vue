import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

// IMPORTANT: To learn more about configuring Vitest, visit:
// Source: https://vitest.dev/guide/#configuring-vitest

// NOTE: We are currently using 'mergeConfig'
// to merge the Vite config with the Vitest config.

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'tests/e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  }),
)
