// import './assets/main.css'; // See comment in App.vue for why this import was removed.

import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';

import en from './locales/en/Global.i18n.en.js';
import fr from './locales/fr/Global.i18n.fr.js';

// DOCS: https://vue-i18n.intlify.dev/guide/installation.html
const i18n = createI18n({
  // Setup vue-i18n options here...
  // Legacy API is deprecated but we must still
  // specify 'false' to use Composition API.
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: en.en,
    fr: fr.fr,
  },
});

const app = createApp(App);

app.use(i18n);
app.use(router);

app.mount('#app');
