<script setup>
import ImageFrame from '@/components/ImageFrame.vue';
import { onBeforeMount, onMounted, onBeforeUnmount, onUpdated, ref } from 'vue';

const props = defineProps({
  imgList: {
    // EX:
    // imgList: [
    //  {
    //    imgPath: 'path/to/img',
    //    captionText?: 'caption text',
    //    altText?: 'alt text',
    //    isUrlPath?: true,
    //    backgroundColor?: red,
    //  },
    //  ...
    // ]
    // NOTE: if captionText is not provided, the <figcaption> tag will not be rendered.
    // NOTE: if altText is not provided, the imgPath will be used as the alt text.
    type: Array,
    required: true,
    validator(value) {
      return value.every((item) => {
        return typeof item === 'object'
          && (
            Object.hasOwn(item, 'imgPath')
            && typeof item.imgPath === 'string'
            && item.imgPath.length > 0
          )
          && ( // captionText is optional but must be a string if provided
            !Object.hasOwn(item, 'captionText')
            || (Object.hasOwn(item, 'captionText') && typeof item.captionText === 'string')
          )
          && ( // altText is optional but must be a string if provided
            !Object.hasOwn(item, 'altText')
            || (Object.hasOwn(item, 'altText') && typeof item.altText === 'string')
          )
          && ( // isUrlPath is optional but must be a boolean if provided
            !Object.hasOwn(item, 'isUrlPath')
            || (Object.hasOwn(item, 'isUrlPath') && typeof item.isUrlPath === 'boolean')
          )
          && ( // backgroundColor is optional but must be a string if provided
            !Object.hasOwn(item, 'backgroundColor')
            || (Object.hasOwn(item, 'backgroundColor') && typeof item.backgroundColor === 'string')
          );
      });
    },
  },
  autoSpanColumnCount: {
    type: Number,
    required: false,
    default: undefined,
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
const collectionRef = ref(null);
const curCollectionWidth = ref(0);

onBeforeMount(() => {
  if (props.imgWidth.includes('%')) {
    widthPercent.value = props.imgWidth;
  }
  else {
    widthPx.value = props.imgWidth;
  }
});

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

function handleResize() {
  curCollectionWidth.value = computeWidth(collectionRef);
  console.log(curCollectionWidth.value);
}

function computeWidth(curRef) {
  if (!curRef?.value) return 0;
  return curRef.value.getBoundingClientRect().width;
}

// onUpdated(() => {
//   console.log('test: ' +
//     Math.floor(
//       (curCollectionWidth.value
//         - (parseInt(props.rowGap)
//           * (props.autoSpanColumnCount - 1))) / props.autoSpanColumnCount,
//     )
//     + 'px',
//   );
// });

</script>

<template>

  <div
    class="image-collection"
    ref="collectionRef"
    :style="{ rowGap: rowGap, columnGap: columnGap }"
  >
    <div
      class="frame-wrapper"
      v-for="item in imgList"
      :key="item.imgPath"
      :style="widthPercent ? { width: widthPercent } : {}"
    >
      <ImageFrame
        :imgPath="item.imgPath"
        :isUrlPath="item.isUrlPath"
        :captionText="item.captionText"
        :altText="item.altText"
        :height="autoSpanColumnCount
          ? (
            Math.floor((
              (curCollectionWidth - (parseInt(rowGap) * (autoSpanColumnCount - 1)) ) / autoSpanColumnCount
            ) * (parseInt(imgHeight) / parseInt(imgWidth))) + 'px')
          : imgHeight"
        :widthPx="autoSpanColumnCount
          ? (
            Math.floor(
              (curCollectionWidth - (parseInt(rowGap) * (autoSpanColumnCount - 1)) ) / autoSpanColumnCount
            )
            + 'px'
          )
          : widthPx"
        :widthPercent="widthPercent ? '100%' : undefined"
        :backgroundColor="item.backgroundColor"
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
