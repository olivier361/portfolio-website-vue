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
  widthPx: {
    type: String,
    required: false,
  },
  widthPercent: {
    type: String,
    required: false,
  }
});

// const imageTag = ref(null);
// const captionWidth = ref(props.width);

// onMounted(() => {
//   window.addEventListener('resize', handleResize);
//   handleResize();
// });

// onBeforeUnmount(() => {
//   window.removeEventListener('resize', handleResize);
// });

// function handleResize() {
//   captionWidth.value = computeWidth(imageTag) + 'px';
//   console.log(`captionWidth.value: ${captionWidth.value}`);
// }

// function computeWidth(ref){
//   if (!ref?.value) return 0;
//   return ref.value.getBoundingClientRect().width;
// }

</script>

<template>

  <figure :style="widthPercent ? { width: widthPercent } : {}">
    <img ref="imageTag" :src="`./src/assets/${imgPath}`" :alt="(altText === undefined ? imgPath : altText)" :style="widthPx ? { width: widthPx, height: height } : { width: '100%', height: height }">
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
}

figcaption {
  display: table-caption;
  caption-side: bottom;
  text-align: left;
  font-style: italic;
  font-size: var(--image-frame-caption-text-size);
  color: var(--color-image-frame-caption-text);
  margin-top: 10px;
}
</style>