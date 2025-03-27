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
  altText: {
    // the alt text for the image.
    type: String,
    required: false,
    default: undefined,
  },
  height: {
    // set the height of the image in pixels or percentage.
    // This mesurement includes the exterior frame.
    type: String,
    required: true,
  },
  width: {
    // set the width of the image in pixels or percentage.
    // This mesurement includes the exterior frame.
    type: String,
    required: true,
  },
  backgroundColor: {
    // the background color of the image.
    type: String,
    required: false,
    default: '#505050',
  },
});

// This is needed to successfully resolve a path constructed with props
// in the production build given images are processed by Vite with a new name and location.
// See: https://vite.dev/guide/assets
// also see: https://stackoverflow.com/questions/66419471/vue-3-vite-dynamic-image-src
const imgUrl = props.isUrlPath
  ? props.imgPath
  : new URL(`/src/assets/${props.imgPath}`, import.meta.url).href;

</script>

<template>

  <div
    class="image-frame-stylized"
    :style="{ width: width, minWidth: width, height: height, minHeight: height }"
  >
    <div class="decoration top" />
    <div class="decoration bottom" />
    <img
      :src="imgUrl"
      :alt="(altText === undefined ? imgPath : altText)"
      :style="{backgroundColor: backgroundColor}"
    >
  </div>

</template>

<style scoped>

.image-frame-stylized {
  --decoration-offset: 15px;
  --image-border-radius: 25px;

  position: relative;
}

img, .decoration {
  width: calc(100% - calc(2 * var(--decoration-offset)));
  height: calc(100% - calc(2 * var(--decoration-offset)));
}

.decoration {
  /* The inner border radius for a nice frame follows the formula:
   * inner border radius = outer border radius - width of frame
   */
  border-radius:
    calc(var(--image-border-radius) + var(--decoration-offset))
    var(--image-border-radius);
}

.decoration.top {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  background-color: var(--color-image-frame-stylized-decoration-secondary);
}

.decoration.bottom {
  position: absolute;
  top: calc(2 * var(--decoration-offset));
  left: calc(2 * var(--decoration-offset));
  z-index: 2;
  background-color: var(--color-image-frame-stylized-decoration-primary);
}

img {
  position: absolute;
  top: var(--decoration-offset);
  left: var(--decoration-offset);
  z-index: 3;
  object-fit: cover;
  border-radius: var(--image-border-radius);
}

</style>
