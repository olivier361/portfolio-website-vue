<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

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
  heightPx: {
    // set the height of the image in pixels.
    // This mesurement includes the exterior frame.
    type: String,
    required: true,
  },
  widthPx: {
    // set the width of the image in pixels.
    // This mesurement includes the exterior frame.
    type: String,
    required: true,
  },
  isFullWidth: {
    // set to true if the image should span the full width of the parent.
    // the provided width and height will be used to compute an aspect ratio.
    type: Boolean,
    required: false,
    default: false,
  },
  backgroundColor: {
    // the background color of the image.
    type: String,
    required: false,
    default: '#505050',
  },
});

const rootDivRef = ref(null);
const curRootDivWidth = ref(0);

// This is needed to successfully resolve a path constructed with props
// in the production build given images are processed by Vite with a new name and location.
// See: https://vite.dev/guide/assets
// also see: https://stackoverflow.com/questions/66419471/vue-3-vite-dynamic-image-src
const imgUrl = props.isUrlPath
  ? props.imgPath
  : new URL(`/src/assets/${props.imgPath}`, import.meta.url).href;

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

function handleResize() {
  curRootDivWidth.value = computeWidth(rootDivRef);
  console.log('curRootDivWidth', curRootDivWidth.value);
}

function computeWidth(curRef) {
  if (!curRef?.value) return 0;
  return curRef.value.getBoundingClientRect().width;
}

// Given the widthPx and heightPx props, compute the aspect ratio
function computeAspectRatio() {
  return (parseInt(props.widthPx) / parseInt(props.heightPx));
}

function computeCurHeight() {
  if (props.isFullWidth) {
    return `${curRootDivWidth.value / computeAspectRatio()}px`;
  }
  return props.heightPx;
}
</script>

<template>

  <!-- <div
    class="image-frame-stylized"
    :style="isFullWidth
      ? { width: '100%', height: 'auto', aspectRatio: computeAspectRatio() }
      : { width: widthPx, minWidth: widthPx, height: heightPx, minHeight: heightPx }"
  > -->
  <div
    class="image-frame-stylized"
    ref="rootDivRef"
    :style="isFullWidth
      ? { width: '100%', height: computeCurHeight() }
      : { width: widthPx, minWidth: widthPx, height: heightPx, minHeight: heightPx }"
  >
    <!-- <div class="decoration top"
      :style="{ width: widthPx, height: heightPx }"
    />
    <div class="decoration bottom"
      :style="{ width: widthPx, height: heightPx }"
    /> -->
    <div class="decoration top" />
    <div class="decoration bottom" />
    <!-- <img
      :src="imgUrl"
      :alt="(altText === undefined ? imgPath : altText)"
      :style="{backgroundColor: backgroundColor}"
      :width="isFullWidth ? '100%' : widthPx"
      :height="isFullWidth ? 'auto' : heightPx"
    > -->
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
  --image-border-radius: 15px;

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
  /* border-radius:
    var(--image-border-radius); */
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
  /* box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5); */
}

</style>
