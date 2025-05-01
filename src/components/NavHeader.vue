<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMobileNavMenuOpen = ref(false);

function handleMobileNavMenu() {
  isMobileNavMenuOpen.value = !isMobileNavMenuOpen.value;
}

function handleSetMobileNavMenu(state = true) {
  isMobileNavMenuOpen.value = state;
}
</script>

<template>
  <div class="header header-desktop">
    <RouterLink to="/" @click="handleSetMobileNavMenu(false)" style="height: 26px">
      <img alt="Site logo" src="@/assets/ogg-logo-long.png">
    </RouterLink>
    <div class="nav-links">
      <RouterLink to="/" @click="handleSetMobileNavMenu(false)">Home</RouterLink>
      <RouterLink to="/projects" @click="handleSetMobileNavMenu(false)">Projects</RouterLink>
      <!-- TODO: re-enable nav links when either resume or about the site pages are implemented -->
      <!-- <RouterLink to="/resume" @click="handleSetMobileNavMenu(false)">Resume</RouterLink> -->
      <!-- <RouterLink to="/about" @click="handleSetMobileNavMenu(false)">About</RouterLink> -->
      <RouterLink to="/about-me" @click="handleSetMobileNavMenu(false)">About</RouterLink>
      <RouterLink to="/contact" @click="handleSetMobileNavMenu(false)">Contact</RouterLink>
    </div>
  </div>
  <div class="header header-mobile">
    <RouterLink to="/" @click="handleSetMobileNavMenu(false)" style="height: 26px">
      <img id="nav-logo" alt="Site logo" src="@/assets/ogg-logo-long.png">
    </RouterLink>
    <button @click="handleMobileNavMenu" type="button">
      <span v-if="isMobileNavMenuOpen" id="nav-menu" href="" uk-icon="icon: close; ratio: 1.3" />
      <span v-else id="nav-menu" href="" uk-icon="icon: menu; ratio: 1.3" />
    </button>
  </div>
  <div v-if="isMobileNavMenuOpen" id="nav-links-mobile">
    <RouterLink to="/" @click="handleSetMobileNavMenu(false)">Home</RouterLink>
    <RouterLink to="/projects" @click="handleSetMobileNavMenu(false)">Projects</RouterLink>
    <!-- TODO: re-enable nav links when either resume or about the site pages are implemented -->
    <!-- <RouterLink to="/resume" @click="handleSetMobileNavMenu(false)">Resume</RouterLink> -->
    <!-- <RouterLink to="/about" @click="handleSetMobileNavMenu(false)">About</RouterLink> -->
    <RouterLink to="/about-me" @click="handleSetMobileNavMenu(false)">About</RouterLink>
    <RouterLink to="/contact" @click="handleSetMobileNavMenu(false)">Contact</RouterLink>
    <button id="nav-mobile-close" @click="handleSetMobileNavMenu(false)" type="button">
      <span href="" uk-icon="icon: close; ratio: 1.6" />
    </button>
  </div>
</template>

<!-- eslint-disable @stylistic/max-len -->
<!-- SEE: https://github.com/eslint/eslint/issues/11138
          https://github.com/vuejs/vue-eslint-parser#%EF%B8%8F-known-limitations
     (explanation for why we must disable this rule for the entire style block
      rather than just the specific line.)
-->
<style scoped>
img {
  height: 26px;
  width: auto;
}

button {
  padding: 0px;
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
}

span {
  stroke: var(--color-header-button);
  color: var(--color-header-button);
}

.header {
  width: 100%;
  height: var(--header-height);
  background-color: var(--color-header-background);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
}

.nav-links {
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.nav-links > *, #nav-links-mobile > * {
  margin-left: 20px;
  color: var(--color-header-link);
  text-decoration: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  display: inline-block;
  padding-bottom:2px;
  background-image: linear-gradient(to right, var(--color-header-link-hover) 33%,var(--color-header-link-hover) 33% 66%, transparent 66%);
  background-position: right bottom;
  background-size: 300% 2px;
  background-repeat: no-repeat;
  transition: color 200ms;
}

.nav-links > *:hover, #nav-links-mobile > *:hover {
  color: var(--color-header-link-hover);
  background-position: left bottom;
  transition: background-position 0.5s;
}

#nav-logo {
  margin: 0;
  position: absolute;
  left: 50%;
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
}

#nav-mobile-close {
  margin: 30px 0px;
  background-image: none;
}

#nav-mobile-close > span {
  padding: 4px;
  border: var(--color-header-button) solid 2px;
  border-radius: 26px;
}

#nav-mobile-close > span:hover {
  border-color: var(--color-header-button-click);
  stroke: var(--color-header-button-click);
  color: var(--color-header-button-click);
}

#nav-links-mobile {
  display: flex;
  opacity:    0.85;
  background: var(--color-page-overlay);
  width:      100%;
  height:     100%;
  z-index:    10;
  position:   fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#nav-links-mobile > a {
  margin: 10px 0px;
  font-size: 24px;
}

@media (max-width: 640px) {
  .header {
    padding: 0px 12px;
  }

  .header-desktop {
    display: none;
  }

  #nav-links-mobile.show-nav-links {
    display: flex;
  }
}

@media (min-width: 641px) {
  .header-mobile {
    display: none;
  }
}
</style>
