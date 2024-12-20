import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

// IMPORTANT: since we have a separate config file for Vite and Vitest,
// make sure to define the same Vite options in your Vitest config file
// since it will override your Vite file, not extend it.
// Source: https://vitest.dev/guide/#configuring-vitest

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      // include: [...configDefaults.include],
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)
