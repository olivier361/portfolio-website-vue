<script setup>
import { ref, onMounted, onUpdated } from 'vue'

const props = defineProps(['splashscreenHeight'])

const navHeader = ref(null)
const slideshowItems = ref(null)

onMounted(() => {
  adjustHeight()
})

onUpdated(() => {
  // adjustHeight()
  console.log(`ON UPDATED props.splashscreenHeight: ${props.splashscreenHeight}`)

})

// Adjusts the height of the splash screen to equal
// the height of the viewport minus the height of the header.
function adjustHeight() {
  // let height = this.$refs.navHeader.clientHeight;
  // console.log(`Mounted with height = ${height}`);
  // var heightString = this.$refs.infoBox.clientHeight + 'px';
  // Vue.set(this.leftColStyles, 'height', heightString); 
  console.log('adjustHeight() called')
  console.log(`navHeader: ${navHeader.value}`)
  console.log(`props.splashscreenHeight: ${props.splashscreenHeight}`)
  // slideshowItems.value.style.height = `${props.splashscreenHeight}px`; // Set height

  // if (navHeader.value && slideshowItems.value) {
  //   const viewportHeight = window.innerHeight; // Get the viewport height
  //   console.log(`viewportHeight: ${viewportHeight}`)

  //   slideshowItems.value.style.height = `${viewportHeight - navHeader.value.style.height}px`; // Set height
  // }
}

</script>

<template>

  <div class="splashscreen">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: pull; autoplay: true">
      <div class="uk-slideshow-items" ref="slideshowItems">
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
    /* height: v-bind(splashscreenHeight); */
    height: calc(100vh - var(--header-height)); /* 50px is the height of the header */
    /* position: relative;
    overflow: hidden; */
  }
}

</style>