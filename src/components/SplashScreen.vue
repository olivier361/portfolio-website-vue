<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import en from '@/locales/en/SplashScreen.i18n.en.js';

const { t } = useI18n({
  messages: { en: en.en },
});

const headingEntries = ref([
  'Software & Game Developer',
  'Video Content Creator',
  'Design and Marketing',
]);

const router = useRouter();

const windowWidth = ref(window.innerWidth);
const windowHeight = ref(window.innerHeight);

function handleResize() {
  windowWidth.value = window.innerWidth;
  windowHeight.value = window.innerHeight;
}

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);

});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

function smoothScrollToId(id) {
  const target = document.getElementById(id);
  if (target) {
    // target.scrollIntoView({ behavior: 'smooth' }); // no longer needed
    // Update the hash in the browser path. The router will handle the scroll.
    router.replace({ hash: `#${id}` });
  }
}

</script>

<template>

  <div class="splashscreen">
    <div
      class="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      uk-slideshow="animation: pull; autoplay: true; pause-on-hover: false"
    >
      <div class="uk-slideshow-items">
        <div>
          <img
            src="@/assets/home/splashScreen/2d-pixel-game.png"
            :alt="t('imgAltText1')"
            uk-cover
          >
        </div>
        <div>
          <img
            src="@/assets/home/splashScreen/uhub-3d-render.png"
            :alt="t('imgAltText2')"
            uk-cover
            :style="(windowWidth < 540) || (windowWidth / windowHeight) < 0.7
              ? 'object-position: 75% center;'
              : ''"
          >
        </div>
        <div>
          <img
            src="@/assets/home/splashScreen/raytrace-dragon-tree-skybox.png"
            :alt="t('imgAltText3')"
            uk-cover
            :style="(windowWidth / windowHeight) > 2.0
              ? 'object-position: center center;'
              : 'object-position: center 80%;'"
          >
        </div>
        <div>
          <img
            src="@/assets/home/splashScreen/thw0.jpg"
            :alt="t('imgAltText4')"
            uk-cover
          >
        </div>
        <div>
          <img
            src="@/assets/home/splashScreen/ruby-adventure.png"
            :alt="t('imgAltText5')"
            uk-cover
          >
        </div>
      </div>
      <div class="image-overlay uk-position-center" />
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
          <img
            id="main-logo"
            src="@/assets/ogg-logo-tall.png"
            alt="Olivier Gervais-Gougeon"
            width="100%"
          >
        </div>

        <div class="match-height">
          <h3 v-if="windowWidth > 960">
            {{ headingEntries[0] }} • {{ headingEntries[1] }} • {{ headingEntries[2] }}
          </h3>
          <h3 v-else-if="640 < windowWidth && windowWidth <= 960">
            {{ headingEntries[0] }} • {{ headingEntries[1] }}<br>{{ headingEntries[2] }}
          </h3>
          <h3 style="line-height: 0.8;" v-else>
            {{ headingEntries[0] }}<br>—<br>{{ headingEntries[1] }}<br>—<br>{{ headingEntries[2] }}
          </h3>
        </div>
      </div>

      <a
        class="uk-position-center-left uk-position-small uk-hidden-hover"
        uk-slidenav-previous uk-slideshow-item="previous"
      />
      <a
        class="uk-position-center-right uk-position-small uk-hidden-hover"
        uk-slidenav-next uk-slideshow-item="next"
      />

      <div class="uk-position-bottom-center uk-flex uk-flex-column uk-flex-middle">
        <!-- eslint-disable @stylistic/max-len -->
        <ul
          class="uk-slideshow-nav uk-dotnav uk-margin-small-bottom"
          :style="{visibility: (windowHeight >= 720 || (windowHeight >= 620 && windowWidth > 640) || (windowHeight >= 550 && windowWidth > 960) ? 'visible' : 'hidden')}"
        />

        <p
          id="splashscreen-cta"
          v-if="windowHeight >= 650 || (windowHeight >= 550 && windowWidth > 640) || (windowHeight >= 500 && windowWidth > 960)"
        >
          Check out my work
        </p>

        <a
          id="splashcreen-cta-arrow"
          v-if="windowHeight >= 550 || (windowHeight >= 440 && windowWidth > 640) || (windowHeight >= 380 && windowWidth > 960)"
          href="#about-me"
          @click.prevent="smoothScrollToId('about-me')"
          uk-icon="icon: chevron-down; ratio: 2.5"
        />
        <!-- eslint-enable @stylistic/max-len -->
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

.image-overlay {
  width: 100%;
  height: 100%;
  background-color: var(--color-splashscreen-image-overlay);

  pointer-events: none;
}

.splashscreen-content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  pointer-events: none;

  * {
    pointer-events: auto;
  }

  .match-height, ul, li {
    pointer-events: none;
  }

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
  pointer-events: none !important;

  * {
    pointer-events: none;
  }
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

#splashcreen-cta-arrow {
  color: var(--color-splashscreen-text);
}

</style>
