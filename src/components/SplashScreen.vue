<script setup>

</script>

<template>

  <div class="splashscreen">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: pull; autoplay: true">
      <div class="uk-slideshow-items">
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
    
      <!-- <ul>
        <li uk-slideshow-item="0">0</li>
        <li uk-slideshow-item="1">1</li>
        <li uk-slideshow-item="2">2</li>
      </ul> -->

      <!-- <ul class="uk-slideshow-nav uk-dotnav uk-position-bottom-center uk-position-small"></ul> -->
    </div>

  </div>

</template>

<style scoped>

.splashscreen {
  .uk-slideshow-items {
    height: calc(100vh - var(--header-height));
    /* position: relative;
    overflow: hidden; */
  }
}

</style>