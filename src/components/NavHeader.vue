<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMobileNavMenuOpen = ref(false)

function handleMobileNavMenu() {
  isMobileNavMenuOpen.value = !isMobileNavMenuOpen.value
}

function handleSetMobileNavMenu(state = true) {
  isMobileNavMenuOpen.value = state
}
</script>

<template>
  <div class="header header-desktop">
    <RouterLink to="/" style="height: 26px">
      <img alt="Site logo" src="@/assets/ogg-logo-long.png" width="auto" height="26" />
    </RouterLink>
    <div class="nav-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">Resume</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
  </div>
  <div class="header header-mobile">
    <RouterLink to="/" @click="handleSetMobileNavMenu(false)" style="height: 26px">
      <img alt="Site logo" src="@/assets/ogg-logo-long.png" width="auto" height="26" />
    </RouterLink>

    <!-- TODO: Rather than trying to use UK-toggle, use a Vue prop. It'll be simpler to coordinate everythin -->
    <!-- <button type="button" uk-toggle="target: #nav-links-mobile, #nav-menu; cls: show-nav-links mode: click">
      <span id="nav-menu" href="" uk-icon="icon: menu; ratio: 1.3"></span>
    </button> -->

    <button @click="handleMobileNavMenu" type="button">
      <span v-if="isMobileNavMenuOpen" id="nav-menu" href="" uk-icon="icon: close; ratio: 1.3"></span>
      <span v-else id="nav-menu" href="" uk-icon="icon: menu; ratio: 1.3"></span>
    </button>

    <!-- <a class="uk-navbar-toggle uk-navbar-toggle-animate" uk-navbar-toggle-icon href=""></a>
    <div uk-navbar>
      <div class="uk-navbar-left">
        <a class="uk-navbar-toggle uk-navbar-toggle-animate" uk-navbar-toggle-icon href="#"></a>
        <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
                <li class="uk-active"><a href="#">Active</a></li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
            </ul>
        </div>
      </div>
    </div> -->
    <!-- <div class="nav-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">Resume</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div> -->
  <!-- </div>
  <div class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
        <a class="uk-navbar-toggle" uk-navbar-toggle-icon href=""></a>
    </div> -->
  </div>
  <div v-if="isMobileNavMenuOpen" id="nav-links-mobile">
    <RouterLink to="/" @click="handleMobileNavMenu">Home</RouterLink>
    <RouterLink to="/about" @click="handleMobileNavMenu">Resume</RouterLink>
    <RouterLink to="/about" @click="handleMobileNavMenu">About</RouterLink>
    <button @click="handleMobileNavMenu" type="button">
      <span id="nav-mobile-close" href="" uk-icon="icon: close; ratio: 1.6"></span>
    </button>
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

img {
  height: 26px;
}

button {
  background-color: transparent;
  border-width: 0px;
}

span {
  stroke: white;
  color: white;
}

.header {
  width: 100%;
  height: 50px;
  background-color: #232323;
  /* background-color: #FFD700; */
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
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  /* border-bottom: 2px solid transparent; */
  display: inline-block;
  padding-bottom:2px;
  background-image: linear-gradient(to right, #FFD700 33%,#FFD700 33% 66%, transparent 66%);
  background-position: right bottom;
  background-size: 300% 2px;
  background-repeat: no-repeat;
  /* transition: color 200ms, border-bottom 200ms; */
  transition: color 200ms;

}

.nav-links > *:hover, #nav-links-mobile > *:hover {
  color: #FFD700;
  /* text-decoration: underline; */
  /* border-bottom: 2px solid #FFD700; */
  background-position: left bottom;
  transition: background-position 0.5s;
}

#nav-mobile-close {
  margin: 20px 0px;
  padding: 4px;
  border: white solid 2px;
  border-radius: 26px;
}

#nav-mobile-close:hover {
  border-color: #FFD700;
  stroke: #FFD700;
  color: #FFD700;
}

#nav-links-mobile {
  /* display: none; */
  display: flex;
  opacity:    0.85; 
  background: #000; 
  width:      100%;
  height:     100%; 
  z-index:    10;
  /* top:        0; /* TODO: Change to 50 for final */
  /* left:       0;  */
  position:   fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#nav-links-mobile > * {
  margin: 10px 0px;
  font-size: 24px;
}

@media (max-width: 640px) {
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