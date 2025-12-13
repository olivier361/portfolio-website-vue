// tests/__vitestSetup__/globalSetup.js
//
// This file is run before each test file by Vitest as defined in vitest.config.js.

import { config, RouterLinkStub } from '@vue/test-utils';
import { i18n } from './vue-i18nSetup.js';

// Install an i18n instance globally for all Vue Test Utils mounts
config.global.plugins = config.global.plugins || [];
config.global.plugins.push(i18n);

// Setup a global stub for RouterLink to avoid
// needing a real Vue Router instance in tests.
config.global.stubs = config.global.stubs || {};
config.global.stubs.RouterLink = RouterLinkStub;

// Uncomment to confirm when this global setup file is run.
// console.log('Global Vitest setup complete.');
