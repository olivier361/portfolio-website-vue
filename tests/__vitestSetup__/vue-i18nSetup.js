// tests/__vitestSetup__/vue-i18nSetup.js
//
// This file sets up a basic vue-i18n instance for use in Vitest tests.
// In the real application, Vue i18n is configured in src/main.js but
// since tests mount components in isolation, we need to create
// a vue i18n instance here for components that depend on it to run.
// This setup file is run before each test file as defined in vitest.config.js.

import { createI18n } from 'vue-i18n';

import en from '@/locales/en/Global.i18n.en.js';
import fr from '@/locales/fr/Global.i18n.fr.js';

// IMPORTANT: Make sure the setup here stays in sync
// with the main app i18n setup in src/main.js
export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  // Below, we are loading the real localization files into the test suite.
  messages: {
    en: en.en,
    fr: fr.fr,
  },
});

// Uncomment to confirm when this setup file is run.
// console.log('Vue i18n vitest setup complete.');
