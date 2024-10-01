<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const windowWidth = ref(window.innerWidth);

const items = ref([
  'Software & Game Developer',
  'Video Content Creator',
  'Design and Marketing',
]);

const versions = ref([
  'Software & Game Developer • Video Content Creator • Design and Marketing',
  'Software & Game Developer • Video Content Creator<br>Design and Marketing',
  'Software & Game Developer<br>• Video Content Creator •<br>Design and Marketing',
]);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

const flexContainer = ref(null);
// const itemPositions = ref([]);

// Utility function: debounce to delay function execution
// function debounce(fn, delay) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {fn.apply(this, args); fn.apply(this, args)}, delay);
//   };
// }

// const updateItemPositions = () => {
//   const children = flexContainer.value.children;
//   itemPositions.value = Array.from(children).map((item) =>
//     item.getBoundingClientRect().top
//   );
// };

// Debounced version of the updateItemPositions function
// const debouncedUpdate = debounce(updateItemPositions, 500); // 100ms delay

// const shouldAddBullet = (index) => {
//   // Add bullet if the current item and the next are on the same line
//   // console.log(`itemPositions.value[index]: ${itemPositions.value}`);
//   return (
//     index < itemPositions.value.length - 1 &&
//     itemPositions.value[index] === itemPositions.value[index + 1]
//   );
// };

// function updateBullets() {
//   // if flexContainer width is less than 640px, set display none to bullet-2 class items
//   if (flexContainer.value.offsetWidth < 960) {
//     document.querySelectorAll('.bullet-2').forEach((bullet) => {
//       bullet.style.display = 'none';
//     });
//   } else {
//     document.querySelectorAll('.bullet-2').forEach((bullet) => {
//       bullet.style.display = 'initial';
//     });
//   }
  
// }

onMounted(() => {
  // updateItemPositions();
  // window.addEventListener('resize', debouncedUpdate);
  // updateBullets();
  // window.addEventListener('resize', updateBullets);
  window.addEventListener('resize', handleResize);

});

onBeforeUnmount(() => {
//   window.removeEventListener('resize', debouncedUpdate);
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
        <ul class="social-links uk-position-center">
          <li><a href="https://www.linkedin.com/in/olivier-gg/" target="_blank"><img src="@/assets/linkedin-logo.png" alt="LinkedIn"></a></li>
          <li><a href="https://twitter.com/oliviergg" target="_blank"><img src="@/assets/twitter-logo.png" alt="Twitter/X"></a></li>
          <li><a href="https://github.com/olivier361" target="_blank"><img src="@/assets/github-logo.png" alt="GitHub"></a></li>
          <li><a href="https://youtube.com/SkullkidGamingOfficial" target="_blank"><img src="@/assets/youtube-logo.png" alt="YouTube"></a></li>
        </ul>

        <div class="splashscreen-banner uk-position-center">
          <img id="main-logo" src="@/assets/ogg-logo-tall.png" alt="Olivier Gervais-Gougeon" width="100%">
        </div>

        <!-- <h3 class="uk-position-center uk-visible@l uk-hidden" ref="flexContainer">
          {{ versions[0] }}
        </h3>
        <h3 class="uk-position-center uk-hidden@m uk-visible@m" ref="flexContainer">
          {{ versions[1] }}
        </h3>
        <h3 class="uk-position-center uk-hidden@s" ref="flexContainer">
          {{ versions[2] }}
        </h3> -->

        <!-- if window width between 960 and 640 show versions[0] else if between 639 and 420 show versions[1] else show versions[2] -->
        <h3 class="uk-position-center" v-if="windowWidth > 960">
          Software & Game Developer • Video Content Creator • Design and Marketing
        </h3>
        <h3 class="uk-position-center" v-else-if="640 < windowWidth && windowWidth <= 960">
          Software & Game Developer • Video Content Creator<br>Design and Marketing
        </h3>
        <h3 class="uk-position-center" style="line-height: 0.8;" v-else>
          Software & Game Developer<br>—<br>Video Content Creator<br>—<br>Design and Marketing
        </h3>



        <!-- <h3 class="uk-position-center" ref="flexContainer">
          <span class="line">{{ items[0] }}</span>
          <span class="line bullet-1" v-if="flexContainer?.value && flexContainer?.value.offsetWidth < 960">|<br></span>
          <span class="line bullet-1" v-else>&nbsp;•&nbsp;</span>
          <span class="line bullet-1">&nbsp;•&nbsp;</span>
          <span class="line">{{ items[1] }}</span>
          <span class="line bullet-2" v-if="flexContainer?.value && flexContainer?.value.offsetWidth < 960">|<br></span>
          <span class="line bullet-2" v-else>&nbsp;•&nbsp;</span>
          <span class="line bullet-2">&nbsp;•&nbsp;</span>
          <span class="line">{{ items[2] }}</span>
        </h3> -->
        <!-- <h3 class="flex-container uk-position-center" ref="flexContainer">
          <span class="flex-item"
            v-for="(item, index) in items"
            :key="index"
            :class="{'bullet': shouldAddBullet(index)}"
          >
            {{ item }}
          </span>
        </h3> -->
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

.splashscreen-content-wrapper {
  /* TODO: find a better way to position these */
  h3 {
    position: absolute;
    top: 22vh;
    margin: 0px;
    width: 100%;
    color: var(--color-splashscreen-text);
    text-shadow: 2px 2px 10px rgba(0,0,0,0.70); /* Horizontal, Vertical, Blur, Color */

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    text-align: center;
    span.line {
      white-space: nowrap;
      display: inline-block;
    }
  }

  .social-links {
    position: absolute;
    top: -22vh;
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

.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* gap: 10px; */
}

.flex-item {
  /* padding: 10px; */
  background-color: rgba(255, 0, 0, 0.3);
}

/* Add bullet after the element if the class 'bullet' is applied */
/* .bullet::after {
  content: "•";
  width: 40px;
  /* padding: 0px 10px; commented out
  color: var(--color-splashscreen-text);
} */

/*
.flex-item:last-child::after {
  content: "";
} */

</style>