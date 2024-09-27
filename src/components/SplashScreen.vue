<script setup>

</script>

<template>

  <div class="splashscreen">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: pull; autoplay: true; pause-on-hover: false">
      <div class="uk-slideshow-items">
        <div>
          <img src="@/assets/2D-Pixel-Game.png" alt="2D Pixel Platformer Game" uk-cover>
        </div>
        <div>
          <img src="@/assets/cube-game.png" alt="Cube Game" uk-cover>
        </div>
        <div>
          <img src="@/assets/ruby-adventure.png" alt="Ruby's Adventure Game" uk-cover>
        </div>
      </div>

      <div class="splashscreen-content-wrapper uk-position-center" style="width: 100%;">
        <div class="splashscreen-banner uk-position-center">
          <img id="main-logo" src="@/assets/ogg-logo-tall.png" alt="Olivier Gervais-Gougeon" width="100%">
        </div>

        <h3 class="uk-position-center">Software and Game Developer - Video Content Creator - Design and Marketing</h3>
      </div>
      
      <a class="uk-position-center-left uk-position-small uk-hidden-hover" uk-slidenav-previous uk-slideshow-item="previous"></a>
      <a class="uk-position-center-right uk-position-small uk-hidden-hover" uk-slidenav-next uk-slideshow-item="next"></a>
    
      <ul class="uk-slideshow-nav uk-dotnav uk-position-bottom-center uk-position-small"></ul>
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

.splashscreen-content-wrapper {
  h3 {
    position: absolute;
    top: 22vh;
    margin: 0px;
  }
}

.splashscreen-banner {
	display: flex;
	justify-content: center;
  width: 100%;
	border-top: 5px solid white;
	border-bottom: 5px solid white;
	background-color: rgba(0,0,0,0.65);
  pointer-events: none;
}

#main-logo {
  max-width: 40%;
  max-height: 25vh;
  object-fit: contain;
}

@media (max-width: 640px) {
  #main-logo {
    max-width: 60%;
  }
}

@media (max-width: 480px) {
  #main-logo {
    max-width: 80%;
  }
}

</style>