<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="header">
    <img alt="Site logo" src="@/assets/ogg-logo-long.png" width="auto" height="26" />
    <div class="nav-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">Resume</RouterLink>
    </div>
  </div>
</template>

<style scoped>
a {
  color: white
}

a:hover {
  text-decoration: underline;
}

.header {
  width: 100%;
  height: 50px;
  background-color: #232323;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-links {
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

</style>