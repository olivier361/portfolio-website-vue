<script setup>

const props = defineProps({
  imgPath: {
    // the image path relative to the assets directory.
    // EX: ./src/assets/[imgPath]
    type: String,
    required: true,
  },
  isUrlPath: {
    // set to true if the imgPath is a URL path instead of local.
    type: Boolean,
    required: false,
    default: false,
  },
  captionText: {
    type: String,
    required: false,
    default: undefined,
  },
  altText: {
    type: String,
    required: false,
    default: undefined,
  },
  height: {
    type: String,
    required: false,
    default: 'auto',
  },
  widthPx: {
    // use this prop if you want to set the width of the image in pixels
    // NOTE: having seperate width variables is necessary with the current implementation
    // due to the width settings affecting different elements in the component if it's a percentage or pixels.
    type: String,
    required: false,
    default: undefined,
  },
  widthPercent: {
    // use this prop if you want to set the width of the image as a percentage
    type: String,
    required: false,
    default: undefined,
  },
});

// This is needed to successfully resolve a path constructed with props
// in the production build given images are processed by Vite with a new name and location.
// See: https://vite.dev/guide/assets
// also see: https://stackoverflow.com/questions/66419471/vue-3-vite-dynamic-image-src
const imgUrl = props.isUrlPath ? props.imgPath : new URL(`/src/assets/${props.imgPath}`, import.meta.url).href;

</script>

<template>

  <figure :style="widthPercent ? { width: widthPercent } : {}">
    <img
      :src="imgUrl"
      :alt="(altText === undefined ? imgPath : altText)"
      :style="{
        width: (widthPx ?? '100%'), minWidth: (widthPx ?? '100%'), maxWidth: (widthPx ?? '100%'),
        height: height, minHeight: height, maxHeight: height
      }"
    >
    <figcaption v-if="captionText">{{ captionText }}</figcaption>
  </figure>

</template>

<style scoped>

figure {
  display: table;
  height: fit-content;
  margin: 0px;
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
