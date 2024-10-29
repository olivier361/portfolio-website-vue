<script setup>

defineProps({
  imgPath: {
    type: String,
    required: true
  },
  captionText: {
    type: String,
    required: false
  },
  altText: {
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
    <img :src="`./src/assets/${imgPath}`" :alt="(altText === undefined ? imgPath : altText)" :style="{ height: height, width: width}">
    <figcaption v-if="captionText">{{ captionText }}</figcaption>
  </figure>

</template>

<style scoped>

img {
  object-fit: cover;
}
</style>