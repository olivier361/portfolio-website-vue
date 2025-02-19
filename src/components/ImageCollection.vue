<script setup>
import ImageFrame from '@/components/ImageFrame.vue';
import { onBeforeMount, onMounted, onBeforeUnmount, ref } from 'vue';

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
    // if provided, the image collection will span the available width of the parent
    // and image frames are organized by the number of columns specified.
    type: Number,
    required: false,
    default: undefined,
  },
  imgHeight: {
    // if autoSpanColumnCount is provided, the exact value of this prop is ignored
    // and instead becomes part of an aspect ratio calculation between imgHeight and imgWidth.
    // This aspect ratio is then applied to the image with the width
    // computed based on autoSpanColumnCount.
    type: String,
    required: false,
    default: 'auto',
  },
  imgWidth: {
    // if autoSpanColumnCount is provided, the exact value of this prop is ignored
    // and instead becomes part of an aspect ratio calculation between imgHeight and imgWidth.
    // This aspect ratio is then applied to the image with the width
    // computed based on autoSpanColumnCount.
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
}

function computeWidth(curRef) {
  if (!curRef?.value) return 0;
  return curRef.value.getBoundingClientRect().width;
}

// When using autoSpanColumnCount, the width of the image frames
// are dynamically computed by this function so that the collection spans
// the width of the parent with the specified column count.
//
// Returns and integer value.
// Returns 0 if autoSpanColumnCount is invalid.
function computeAutoImgFrameWidth() {
  if (!props.autoSpanColumnCount || props.autoSpanColumnCount < 1) return 0;

  return Math.floor(
    (
      curCollectionWidth.value
      - (parseInt(props.rowGap) * (props.autoSpanColumnCount - 1))
    ) / props.autoSpanColumnCount,
  );
}

// Given a width number in pixels, this function computes the height in pixels
// based on the aspect ratio of provided imgHeight and imgWidth.
//
// returns a valid CSS string for the height property.
// NOTE: if the ratio cannot be computed, 'auto' or the existing imgHeight is returned
// depending on the scenario.
function computeAspectRatioHeight(width) {
  if (props.imgHeight === 'auto'
    || props.imgHeight.includes('%')
    || props.imgWidth.includes('%')
  ) {
    return props.imgHeight;
  }
  if (props.imgWidth === 'auto') return 'auto';

  return Math.floor(
    width * (parseInt(props.imgHeight) / parseInt(widthPx.value)),
  ) + 'px';
}

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
          ? computeAspectRatioHeight(computeAutoImgFrameWidth())
          : imgHeight"
        :widthPx="autoSpanColumnCount
          ? (computeAutoImgFrameWidth() + 'px')
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
