<script setup>
import ImageFrame from '@/components/ImageFrame.vue';

defineProps({

  // EX: imgList: [{imgPath: 'path/to/img', captionText: 'caption text', altText: 'alt text'}, ...]
  // NOTE: if captionText is not provided, the <figcaption> tag will not be rendered.
  // NOTE: if altText is not provided, the imgPath will be used as the alt text.
  imgList: {
    type: Array,
    required: true,
    validator(value) {
      return value.every(item =>
        typeof item === 'object'
        && (Object.hasOwn(item, 'imgPath') && typeof item.imgPath === 'string' && item.imgPath.length > 0)
        && (!Object.hasOwn(item, 'captionText') || (Object.hasOwn(item, 'captionText') && typeof item.imgPath === 'string')) // captionText is optional but must be a string if provided
        && (!Object.hasOwn(item, 'altText') || (Object.hasOwn(item, 'altText') && typeof item.imgPath === 'string'))); // altText is optional but must be a string if provided
    }
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

  <div v-for="item in imgList" :key="item.imgPath">
    <ImageFrame :imgPath="item.imgPath" :captionText="item.captionText" :altText="item.altText" :height="height" :width="width" />
  </div>

</template>

<style scoped>

</style>