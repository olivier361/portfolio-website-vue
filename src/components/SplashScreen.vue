<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>

  <div class="splashscreen">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: pull">
      <div class="uk-slideshow-items" uk-height-viewport>
        <div>
          <img src="@/assets/2D-Pixel-Game.png" alt="" uk-cover>
        </div>
        <div>
          <img src="@/assets/cube-game.png" alt="" uk-cover>
        </div>
        <div>
          <img src="@/assets/ruby-adventure.png" alt="" uk-cover>
        </div>
      </div>

      <!-- TODO: Added as a test -->
      <h1 class="uk-position-center" style="margin: 0;">Welcome to the Splash Screen</h1>

      <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
      <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>
    </div>

    <!-- <h1>Welcome to the Splash Screen</h1> -->
  </div>

</template>

<style scoped>

/* Placeholder for reference: */
/* img {
  height: 26px;
}

@media (min-width: 641px) {
  .header-mobile {
    display: none;
  }
} */
</style>