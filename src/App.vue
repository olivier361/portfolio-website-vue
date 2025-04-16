<script setup>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { RouterView } from 'vue-router';
import NavHeader from '@/components/NavHeader.vue';
import NavFooter from '@/components/NavFooter.vue';

UIkit.use(Icons);
</script>

<template>
  <header>
    <NavHeader />
  </header>

  <RouterView />

  <footer>
    <NavFooter />
  </footer>
</template>

<style lang="less">
  @import "../node_modules/uikit/src/less/uikit.less";
</style>

<!--
  The import of main.css has been moved from main.js to here.
  This is because uikit default styles (above) were being loaded after main.css
  causing uikit default styles to override our own custom default styles.
  By loading main.css here, it will be loaded after uikit default styles
  allowing our custom styles to correctly override uikit defaults.
  This change doesn't seem to be causing any unexpected issues so far.
-->
<style lang="css">
  @import './assets/main.css';
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
