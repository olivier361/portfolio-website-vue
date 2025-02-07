<script setup>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { RouterView } from 'vue-router';
import { useI18n } from 'vue-i18n';
import NavHeader from './components/NavHeader.vue';

UIkit.use(Icons);
const { t } = useI18n();
</script>

<template>
  <header>
    <NavHeader />
  </header>
  {{ t('currentLanguage') }}
  <br><br>
  {{ t('test.hello3') }}
  <RouterView />
</template>

<style lang="less">
  @import "../node_modules/uikit/src/less/uikit.less";
</style>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  position: sticky;
  top: 0;
  z-index: 1000; /* Ensure the header is above everything else */
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
