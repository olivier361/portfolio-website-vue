<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const headingEntries = ref([
  'Software & Game Developer',
  'Video Content Creator',
  'Design and Marketing'
]);

const windowWidth = ref(window.innerWidth);

function handleResize() {
  return windowWidth.value = window.innerWidth;
}

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);

});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

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
        <div class="match-height uk-flex uk-flex-column uk-flex-right">
          <ul class="social-links">
            <li><a href="https://www.linkedin.com/in/olivier-gg/" target="_blank"><img src="@/assets/linkedin-logo.png" alt="LinkedIn"></a></li>
            <li><a href="https://twitter.com/oliviergg" target="_blank"><img src="@/assets/twitter-logo.png" alt="Twitter/X"></a></li>
            <li><a href="https://github.com/olivier361" target="_blank"><img src="@/assets/github-logo.png" alt="GitHub"></a></li>
            <li><a href="https://youtube.com/SkullkidGamingOfficial" target="_blank"><img src="@/assets/youtube-logo.png" alt="YouTube"></a></li>
          </ul>
        </div>

        <div class="splashscreen-banner">
          <img id="main-logo" src="@/assets/ogg-logo-tall.png" alt="Olivier Gervais-Gougeon" width="100%">
        </div>

        <div class="match-height">
          <h3 v-if="windowWidth > 960">
            {{headingEntries[0]}} • {{headingEntries[1]}} • {{headingEntries[2]}}
          </h3>
          <h3 v-else-if="640 < windowWidth && windowWidth <= 960">
            {{headingEntries[0]}} • {{headingEntries[1]}}<br>{{headingEntries[2]}}
          </h3>
          <h3 style="line-height: 0.8;" v-else>
            {{headingEntries[0]}}<br>—<br>{{headingEntries[1]}}<br>—<br>{{headingEntries[2]}}
          </h3>
        </div>
      </div>
      
      <a class="uk-position-center-left uk-position-small uk-hidden-hover" uk-slidenav-previous uk-slideshow-item="previous"></a>
      <a class="uk-position-center-right uk-position-small uk-hidden-hover" uk-slidenav-next uk-slideshow-item="next"></a>
    
      <div class="uk-position-bottom-center uk-flex uk-flex-column uk-flex-middle">
        <ul class="uk-slideshow-nav uk-dotnav uk-margin-small-bottom"></ul>

        <p id="splashscreen-cta">Check out my work</p>

        <a href="#homepage-section1" uk-icon="icon: chevron-down; ratio: 2.5"></a>
      </div>

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

.match-height {
  flex: 1;
}

.splashscreen-content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  h3 {
    margin: 30px 0px 0px 0px;  
    color: var(--color-splashscreen-text);
    text-shadow: 2px 2px 10px rgba(0,0,0,0.70); /* Horizontal, Vertical, Blur, Color */
    text-align: center;
  }

  .social-links {
    margin-bottom: 30px;
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

.social-links {
	list-style: none;	
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: flex-end;
  padding: 0px;
}
	
.social-links img {
	background-color: var(--color-splashscreen-social-links-background);
	border: 1px var(--color-splashscreen-social-links-border) solid;
	width: 50px;
  height: 50px;
  object-fit: contain;
}

.social-links a {
  margin: 10px 13px;
}

#splashscreen-cta {
  color: var(--color-splashscreen-text);
  font-family: 'Roboto', sans-serif; /* TODO: implement proper fonts */
  font-size: 1.2rem;
  margin: 0px;
  position: relative;
  top: 10px;
  text-shadow: 1px 1px 10px rgba(0,0,0,0.40); /* Horizontal, Vertical, Blur, Color */
  user-select: none;
}

</style>