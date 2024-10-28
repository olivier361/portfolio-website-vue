<script setup>

const props = defineProps({
  imgPath: {
    type: String,
    required: true
  },
  captionText: {
    type: String,
    required: false
  },
  height: {
    type: String,
    required: false,
    default: 'auto'
  },
  width: {
    type: String,
    required: false,
    default: 'auto'
  }
});

</script>

<template>

  <figure>
    <img src="@/assets/2D-Pixel-Game.png" alt="2D Pixel Platformer Game" :style="{ height: height, width: width}">
    <figcaption>2D Pixel Platformer Game</figcaption>
  </figure>

</template>

<style scoped>

img {
  object-fit: cover;
}
</style>