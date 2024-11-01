<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ImageCollection from './ImageCollection.vue';

defineProps({
  heading: {
    type: String,
    required: true
  },
  introParagraph: {
    type: String,
    required: true
  },
  isExpandable: {
    type: Boolean,
    required: false,
    default: true
  },
  previewBackgroundImage: {
    type: String,
    required: false
  },
  previewImgList: {
    // See ImageCollection.vue imgList prop validation
    // for correct format to use for this prop.
    type: Array,
    required: false
  }
});

const previewSection = ref(null);
const infoSection = ref(null);
const previewSectionHeight = ref(0);
const infoSectionHeight = ref(0);
const cardBorderRadius = ref(0);

const isExpanded = ref(false);

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
  
  // get --card-border-radius CSS variable value
  const rootStyles = getComputedStyle(document.documentElement);
  cardBorderRadius.value = parseFloat(rootStyles.getPropertyValue('--card-border-radius').trim());
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

function handleCardExpand(){
  handleResize();
  isExpanded.value = !isExpanded.value;
}

function handleResize() {
  // recompute card section heights on resize as the card height may change.
  // NOTE: If the content of the card can change it's height dynamically
  // we would need to switch to using a watcher instead of a resize event listener.
  previewSectionHeight.value = computeHeight(previewSection);
  infoSectionHeight.value = computeHeight(infoSection);
}

function computeHeight(ref){
  if (!ref?.value) return 0;
  return ref.value.getBoundingClientRect().height;
}

</script>

<template>

  <div :class="isExpanded ? 'project-card expanded' : 'project-card'">
    <div class="preview-section" ref="previewSection" :style="isExpandable ? {} : { marginBottom: (cardBorderRadius + 'px') }">
      <h2>{{ heading }}</h2>
      <p>{{ introParagraph }}</p>
      <ImageCollection v-if="previewImgList"
        :imgList="previewImgList"
        imgWidth="320px"
        imgHeight="180px"
      />
      <div class="uk-flex uk-flex-center" v-if="isExpandable">
        <button class="expand-button" @click="handleCardExpand">{{ isExpanded ? "▲ Close Details ▲" : "▼ View Details ▼"}}</button>
      </div>
    </div>
    <div class="info-animation-wrapper" v-if="isExpandable" :style="{ height: (isExpanded ? infoSectionHeight + (cardBorderRadius / 2) : 0) + 'px' }">
      <div class="info-section" ref="infoSection">
        <hr class="preview-divider"/>
        <div class="content">
          <slot>No content available to display.</slot>
        </div>
        <div class="uk-flex uk-flex-center">
          <button class="expand-button" @click="handleCardExpand">{{ isExpanded ? "▲ Close Details ▲" : "▼ View Details ▼"}}</button>
        </div>
      </div>
    </div>    
  </div>

</template>

<style scoped>

.info-animation-wrapper {
  height: 0px;
  overflow: hidden;
  transition: height 0.5s ease;
}

.project-card {
  --content-margin-bottom: 25px;

  width: 1100px;
  color: var(--color-card-text);
  background-color: var(--color-card-background);
  border-radius: var(--card-border-radius);
  overflow: hidden;

  .preview-section {
    /* -5px in the margin calculation is to account for .expand-button padding to have 25px total spacing */
    margin: var(--card-border-radius) var(--card-border-radius) calc((var(--card-border-radius) / 2) - 5px);
  }

  .info-section .content {
    margin: calc(var(--card-border-radius) / 2) var(--card-border-radius);
  }

  h1, h2, h3, h4 {
    margin: 0px;
    margin-bottom: var(--content-margin-bottom);
    color: var(--color-card-heading);
  }

  p {
    margin: 0px;
    margin-bottom: var(--content-margin-bottom);
  }

  button.expand-button {
    padding: 5px;
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