import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // Prevent Vite prod build from base64 inlining assets below 4kb in the code.
    // DOCS: https://vite.dev/config/build-options.html#build-assetsinlinelimit
    assetsInlineLimit: 0,
  },
});
