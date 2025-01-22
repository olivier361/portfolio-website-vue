<script setup>
import ImageFrame from '@/components/ImageFrame.vue';
import { onBeforeMount, ref } from 'vue';

const props = defineProps({
  imgList: {
    // EX: imgList: [{imgPath: 'path/to/img', captionText: 'caption text', altText: 'alt text'}, ...]
    // NOTE: if captionText is not provided, the <figcaption> tag will not be rendered.
    // NOTE: if altText is not provided, the imgPath will be used as the alt text.
    type: Array,
    required: true,
    validator(value) {
      return value.every((item) =>
        typeof item === 'object'
        && (Object.hasOwn(item, 'imgPath') && typeof item.imgPath === 'string' && item.imgPath.length > 0)
        && (!Object.hasOwn(item, 'captionText') || (Object.hasOwn(item, 'captionText') && typeof item.captionText === 'string')) // captionText is optional but must be a string if provided
        && (!Object.hasOwn(item, 'altText') || (Object.hasOwn(item, 'altText') && typeof item.altText === 'string')) // altText is optional but must be a string if provided
        && (!Object.hasOwn(item, 'isUrlPath') || (Object.hasOwn(item, 'isUrlPath') && typeof item.isUrlPath === 'boolean'))); // isUrl is optional but must be a boolean if provided
    },
  },
  imgHeight: {
    type: String,
    required: false,
    default: 'auto',
  },
  imgWidth: {
    type: String,
    required: false,
    default: 'auto',
  },
  rowGap: {
    type: String,
    required: false,
    default: '20px',
  },
  columnGap: {
    type: String,
    required: false,
    default: '20px',
  },
});

const widthPx = ref(undefined);
const widthPercent = ref(undefined);

onBeforeMount(() => {
  if (props.imgWidth.includes('%')) {
    widthPercent.value = props.imgWidth;
  }
  else {
    widthPx.value = props.imgWidth;
  }
});

</script>

<template>

  <div class="image-collection" :style="{ rowGap: rowGap, columnGap: columnGap }">
    <div class="frame-wrapper" v-for="item in imgList" :key="item.imgPath" :style="widthPercent ? { width: widthPercent } : {}">
      <ImageFrame
        :imgPath="item.imgPath"
        :isUrlPath="item.isUrlPath"
        :captionText="item.captionText"
        :altText="item.altText"
        :height="imgHeight"
        :widthPx="widthPx"
        :widthPercent="widthPercent ? '100%' : undefined"
      />
    </div>
  </div>

</template>

<style scoped>

.image-collection {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

</style>
