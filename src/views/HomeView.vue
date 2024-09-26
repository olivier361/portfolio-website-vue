<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SplashScreen from '../components/SplashScreen.vue'

const viewportHeight = ref(window.innerHeight); // Set initial viewport height

onMounted(() => {
  window.addEventListener('resize', updateViewportHeight);
});

// Clean up the event listener when the component is destroyed
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateViewportHeight);
});

const updateViewportHeight = () => {
  viewportHeight.value = window.innerHeight;
  // console.log(`Viewport height updated to ${viewportHeight.value}`);
};

</script>

<template>
  <main>
    <SplashScreen :splashscreenHeight="viewportHeight"/>
    <h1>Hello from HomeView.vue</h1>
    <p>
      A ton of content to make sure the page is long enough to scroll.
      <br />
      A ton of content to make sure the page is long enough to scroll.
      <br />
      A ton of content to make sure the page is long enough to scroll.
      <br />
      A ton of content to make sure the page is long enough to scroll.
      <br />
      A ton of content to make sure the page is long enough to scroll.
      <br />
      A ton of content to make sure the page is long enough to scroll.
      <br />
      A ton of content to make sure the page is long enough to scroll.
      <br />
      A ton of content to make sure the page is long enough to scroll.
      <br />
      A ton of content to make sure the page is long enough to scroll.
      <br />
      A ton of content to make sure the page is long enough to scroll.
      <br />
      A ton of content to make sure the page is long enough to scroll.
      <br />
      A ton of content to make sure the page is long enough to scroll.
      <br />
      A ton of content to make sure the page is long enough to scroll.
      <br />
      A ton of content to make sure the page is long enough to scroll.
      <br />
      A ton of content to make sure the page is long enough to scroll.
      <br />
      A ton of content to make sure the page is long enough to scroll.
      <br />
    </p>
  </main>
</template>
