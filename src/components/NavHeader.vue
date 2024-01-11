<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="header">
    <RouterLink to="/" style="height: 26px">
      <img alt="Site logo" src="@/assets/ogg-logo-long.png" width="auto" height="26" />
    </RouterLink>
    <div class="nav-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">Resume</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  border-bottom: 2px solid transparent;
  transition: color 200ms, border-bottom 200ms;
}

a:hover {
  color: #FFD700;
  /* text-decoration: underline;
  border-bottom: 2px solid #FFD700;
} */

.header {
  width: 100%;
  height: 50px;
  background-color: #232323;
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

.nav-links > * {
  margin-left: 20px;
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  border-bottom: 2px solid transparent;
  transition: color 200ms, border-bottom 200ms;
}

.nav-links > *:hover {
  color: #FFD700;
  /* text-decoration: underline; */
  border-bottom: 2px solid #FFD700;
}
</style>