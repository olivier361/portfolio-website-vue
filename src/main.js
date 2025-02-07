import './assets/main.css';

import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';

// DOCS: https://vue-i18n.intlify.dev/guide/installation.html
const i18n = createI18n({
  // add vue-i18n options here...

  // TODO: for whatever reason, we need to specify legacy=false
  // as it uses the legacy API instead of Composition API by default
  // even though the legacy API is deprecated.
  // See the warning we get in the browser console when legacy=false not provided.

  // legacy: false, // Legacy API is deprecated but we must specify false to use Composition API.
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      test: {
        hello: 'hello world from i18n!',
      },
    },
    fr: {
      test: {
        hello: 'bonjour le monde de i18n!',
      },
    },
  },
});

console.log(i18n);

const app = createApp(App);

app.use(i18n);
app.use(router);

app.mount('#app');
