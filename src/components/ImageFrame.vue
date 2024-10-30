<script setup>
import { onMounted } from 'vue';


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
  widthPx: {
    type: String,
    required: false,
  },
  widthPercent: {
    type: String,
    required: false,
  }
});

onMounted(() => {
  console.log('ImageFrame mounted');
});

</script>

<template>

  <figure :style="widthPercent ? { width: widthPercent } : {}">
    <img
      :src="`./src/assets/${imgPath}`"
      :alt="(altText === undefined ? imgPath : altText)"
      :style="widthPx ? { width: widthPx, height: height } : { width: '100%', height: height }"
    >
    <figcaption v-if="captionText">{{ captionText }}</figcaption>
  </figure>

</template>

<style scoped>

figure {
  display: table;
}

img {
  object-fit: cover;
  border: var(--image-frame-border-width) solid var(--color-image-frame-border);
}

figcaption {
  display: table-caption;
  caption-side: bottom;
  text-align: left;
  font-style: italic;
  line-height: 1.2;
  font-size: var(--image-frame-caption-text-size);
  color: var(--color-image-frame-caption-text);
  margin-top: 10px;
}

</style>