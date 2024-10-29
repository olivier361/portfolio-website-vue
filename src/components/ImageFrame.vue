<script setup>

import { onBeforeUnmount, onMounted, ref } from 'vue';

const props = defineProps({
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

const imageTag = ref(null);
const captionWidth = ref(props.width);

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

function handleResize() {
  captionWidth.value = computeWidth(imageTag) + 'px';
  console.log(`captionWidth.value: ${captionWidth.value}`);
}

function computeWidth(ref){
  if (!ref?.value) return 0;
  return ref.value.getBoundingClientRect().width;
}

</script>

<template>

  <figure :style="{ width: width }">
    <img ref="imageTag" :src="`./src/assets/${imgPath}`" :alt="(altText === undefined ? imgPath : altText)" :style="{ height: height, width: width}">
    <figcaption v-if="captionText">{{ captionText }}</figcaption>
  </figure>

</template>

<style scoped>

figure {
  /* display: inline-block; */
  display: table;
  /* flex-direction: column;
  align-items: center; */
}

img {
  object-fit: cover;
  border: var(--image-frame-border-width) solid var(--color-image-frame-border);
  /* flex: 1; */
}

figcaption {
  display: table-caption;
  caption-side: bottom;
  text-align: left;
  font-style: italic;
  font-size: var(--image-frame-caption-text-size);
  color: var(--color-image-frame-caption-text);
  margin-top: 10px;
  width: 100%;
  /* width: 200px; */
  /* flex: 1; */
}
</style>