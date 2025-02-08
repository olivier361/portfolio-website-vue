<script setup>
import { ref, onMounted, onBeforeMount, onBeforeUnmount } from 'vue';
import ImageCollection from './ImageCollection.vue';

const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  isExpandable: {
    type: Boolean,
    required: false,
    default: true,
  },
  previewBackgroundImgPath: {
    // the image path relative to the assets directory.
    // EX: ./src/assets/[previewBackgroundImgPath]
    type: String,
    required: false,
    default: undefined,
  },
  previewImgList: {
    // See ImageCollection.vue imgList prop validation
    // for correct format to use for this prop.
    type: Array,
    required: false,
    default: undefined,
  },
});

const previewSection = ref(null);
const infoSection = ref(null);
const infoAnimationWrapper = ref(null);
const previewSectionHeight = ref(0);
const infoSectionHeight = ref(0);
const cardBorderRadius = ref(0);

const isExpanded = ref(false);
const previewSectionStyle = ref({});

onBeforeMount(() => {
  if (props.previewBackgroundImgPath) {
    // This is needed to successfully resolve a path constructed with props
    // in the production build given images are processed by Vite with a new name and location.
    // See: https://vite.dev/guide/assets
    // also see: https://stackoverflow.com/questions/66419471/vue-3-vite-dynamic-image-src
    const imgUrl = new URL(`/src/assets/${props.previewBackgroundImgPath}`, import.meta.url).href;

    previewSectionStyle.value = {
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // backgroundRepeat: 'no-repeat'
    };
  }
});

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();

  // get --card-border-radius CSS variable value
  const rootStyles = getComputedStyle(document.documentElement);
  cardBorderRadius.value = parseFloat(rootStyles.getPropertyValue('--card-border-radius').trim());

  if (!props.isExpandable) {
    previewSectionStyle.value.marginBottom = `${cardBorderRadius.value / 2}px`;
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

function handleCardExpand() {
  handleResize();
  isExpanded.value = !isExpanded.value;
}

function handleCardShrink() {
  // add .no-close-transition class to info-animation-wrapper element
  // to prevent smooth height transition when closing the card
  // from the info section close button as it causes too much complexity
  // matching scrollTo speed with closing animation speed.
  if (infoAnimationWrapper?.value) {
    infoAnimationWrapper.value.classList.add('no-close-transition');
  }

  handleCardExpand();

  // Adjust the scroll position to counteract the height of elements
  // above the viewport shrinking due to closing a card.
  window.scrollTo({
    top: window.scrollY - computeHeight(infoAnimationWrapper),
    behavior: 'instant',
  });

  // Remove the .no-close-transition class after the scroll adjustment is complete
  // to allow for smooth height transitions when opening the card again.
  setTimeout(() => {
    if (infoAnimationWrapper?.value) {
      infoAnimationWrapper.value.classList.remove('no-close-transition');
    }
  }, 500);
}

function handleResize() {
  // recompute card section heights on resize as the card height may change.
  // NOTE: If the content of the card can change it's height dynamically
  // we would need to switch to using a watcher instead of a resize event listener.
  previewSectionHeight.value = computeHeight(previewSection);
  infoSectionHeight.value = computeHeight(infoSection);
}

function computeHeight(curRef) {
  if (!curRef?.value) return 0;
  return curRef.value.getBoundingClientRect().height;
}

</script>

<template>

  <div :class="isExpanded ? 'project-card expanded' : 'project-card'">
    <div class="preview-section" ref="previewSection" :style="previewSectionStyle">
      <h3>{{ heading }}</h3>
      <p class="intro-paragraph" v-if="$slots.introParagraph">
        <slot name="introParagraph" />
      </p>
      <ImageCollection
        v-if="previewImgList"
        :imgList="previewImgList"
        imgWidth="320px"
        imgHeight="180px"
      />
      <div class="uk-flex uk-flex-center" v-if="isExpandable">
        <button class="expand-button" @click="handleCardExpand">
          {{ isExpanded ? "▲ Close Details ▲" : "▼ View Details ▼" }}
        </button>
      </div>
    </div>
    <div
      class="info-animation-wrapper" ref="infoAnimationWrapper" v-if="isExpandable"
      :style="{ height: (isExpanded ? infoSectionHeight + (cardBorderRadius / 2) : 0) + 'px' }"
    >
      <div class="info-section" ref="infoSection">
        <hr class="preview-divider">
        <div class="content">
          <slot>No content available to display.</slot>
        </div>
        <div class="uk-flex uk-flex-center">
          <button class="expand-button bottom" @click="handleCardShrink">
            {{ isExpanded ? "▲ Close Details ▲" : "▼ View Details ▼" }}
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<!-- eslint-disable @stylistic/max-len -->
<style scoped>

.info-animation-wrapper {
  height: 0px;
  overflow: hidden;
  transition: height 0.5s ease;
}

.info-animation-wrapper.no-close-transition {
  transition: height 0.0s ease !important;
}

.project-card {
  --content-margin-bottom: 25px;

  width: 1100px;
  color: var(--color-card-text);
  background-color: var(--color-card-background);
  border-radius: var(--card-border-radius);
  overflow: hidden;

  .preview-section {
    /* -5px in the margin calculation is to account for
     * .expand-button padding to have 25px total spacing
     */
    padding: var(--card-border-radius) var(--card-border-radius) calc((var(--card-border-radius) / 2) - 5px);
  }

  .info-section .content {
    margin: calc(var(--card-border-radius) / 2) var(--card-border-radius);
  }

  h1, h2, h3, h4, :slotted(h1), :slotted(h2), :slotted(h3), :slotted(h4) {
    margin: 0px;
    margin-bottom: var(--content-margin-bottom);
    color: var(--color-card-heading);
  }

  h3, :slotted(h3) {
    text-transform: uppercase;
    font-size: 36px;
    font-weight: 400;
  }

  p, :slotted(p) {
    margin: 0px;
    margin-bottom: var(--content-margin-bottom);
  }

  p.intro-paragraph {
    /* 50% of the card width minus 25px padding for a two column layout
     * with 50px between columns.
     */
    /* max-width: calc(50% - calc(var(--card-border-radius) / 2)); */
    max-width: 400px;
    margin-bottom: calc(2 * var(--content-margin-bottom));
  }

  button.expand-button {
    padding: 5px;
    font-size: 15px;
    font-weight: bold;
    background-color: transparent;
    color: var(--color-card-button-text);
    border: none;
    cursor: pointer;
    transition: color 200ms;
  }

  button.expand-button:hover {
    color: var(--color-card-button-text-hover);
  }

  .preview-section .image-collection {
    margin-bottom: var(--content-margin-bottom);
  }

  hr.preview-divider {
    width: 100%;
    border-top: 5px solid var(--color-card-divider);
    margin: 0px;
  }
}

</style>
