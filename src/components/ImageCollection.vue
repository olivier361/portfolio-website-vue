<script setup>
import ImageFrame from '@/components/ImageFrame.vue';

defineProps({

  // EX: imgList: [{imgPath: 'path/to/img', captionText: 'caption text'}, ...]
  // NOTE: if captionText is left as an empty string, the <figcaption> tag will not be rendered.
  imgList: {
    type: Array,
    required: true,
    validator(value) {
      return value.every(item =>
        typeof item === 'object'
        && (Object.hasOwn(item, 'imgPath') && typeof item.imgPath === 'string' && item.imgPath.length > 0)
        && (Object.hasOwn(item, 'captionText') && typeof item.imgPath === 'string'));
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
    <ImageFrame :imgPath="item.imgPath" :captionText="item.captionText" :height="height" :width="width" />
  </div>

</template>

<style scoped>

</style>