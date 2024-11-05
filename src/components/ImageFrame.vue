<script setup>

defineProps({
  imgPath: {
    // the image path relative to the assets directory.
    // EX: ./src/assets/[imgPath]
    type: String,
    required: true
  },
  isUrlPath: {
    // set to true if the imgPath is a URL path instead of local.
    type: Boolean,
    required: false,
    default: false
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
    // use this prop if you want to set the width of the image in pixels
    // NOTE: having seperate width variables is necessary with the current implementation
    // due to the width settings affecting different elements in the component if it's a percentage or pixels.
    type: String,
    required: false,
  },
  widthPercent: {
    // use this prop if you want to set the width of the image as a percentage
    type: String,
    required: false,
  }
});

</script>

<template>

  <figure :style="widthPercent ? { width: widthPercent } : {}">
    <img
      :src="isUrlPath ? `${imgPath}` : `./src/assets/${imgPath}`"
      :alt="(altText === undefined ? imgPath : altText)"
      :style="widthPx ? { width: widthPx, height: height } : { width: '100%', height: height }"
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