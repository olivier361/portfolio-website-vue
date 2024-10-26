<script setup>
import { ref, onMounted, onBeforeMount, watch, nextTick } from 'vue';

const props = defineProps({
  heading: {
    type: String,
    required: true
  },
  introParagraph: {
    type: String,
    required: true
  },
  previewBackgroundImage: {
    type: String,
    required: false
  }
});

const previewSection = ref(null);
const infoSection = ref(null);
const previewSectionHeight = ref(0);
const infoSectionHeight = ref(0);
// const content = ref('Initial content'); // See note for watch() function

const isExpanded = ref(false);

onMounted(() => {
  previewSectionHeight.value = computeHeight(previewSection);
  infoSectionHeight.value = computeHeight(infoSection);
  console.log(`on mount: previewSection Height: ${computeHeight(previewSection)}`);
  console.log(`on mount: infoSection Height: ${computeHeight(infoSection)}`);
});

onBeforeMount(() => {
  console.log(`previewSection Height: ${computeHeight(previewSection)}`);
  console.log(`infoSection Height: ${computeHeight(infoSection)}`);
});

// Watch content for changes and recompute height
// NOTE: This is only needed if the height of the content can change
// A resize event listener would maybe be better for this if this is the
// only case in which the content height of project cards can change.
// watch(content, async () => {
//   await nextTick(); // Wait for DOM to update
//   computeHeight(previewSection);
//   computeHeight(infoSection);
// });

function handleCardExpand(){
  isExpanded.value = !isExpanded.value;
}

function computeHeight(ref){
  if (!ref?.value) return 0;
  return ref.value.getBoundingClientRect().height;
}

</script>

<template>

<!-- TODO: Remove magic numbers -->
  <div :class="isExpanded ? 'project-card expanded' : 'project-card'">
    <div class="preview-section" ref="previewSection">
      <h2>{{ heading }}</h2>
      <p>{{ introParagraph }}</p>
      <div class="uk-flex uk-flex-center">
        <button class="expand-button" @click="handleCardExpand">{{ isExpanded ? "▲ Close Details ▲" : "▼ View Details ▼"}}</button>
      </div>
    </div>
    <!-- TODO: WIP not sure if this is the good approach -->
    <!-- <transition name="fade"> -->
    <div class="info-wrapper" :style="{ height: (isExpanded ? infoSectionHeight + 50 : 0) + 'px' }">
      <div class="info-section" ref="infoSection">
        <hr class="preview-divider"/>
        <div class="content">
          <slot>This is where the content coming from the parent should go.</slot>
        </div>
      </div>
    </div>
    
    <!-- </transition> -->
  </div>

</template>

<style scoped>

.info-wrapper {
  height: 0px;
  background-color: gray;
  overflow: hidden;
  transition: height 1.0s ease;
}

.project-card {
  width: 1100px;
  color: var(--color-card-text);
  background-color: var(--color-card-background);
  border-radius: var(--card-border-radius);
  /* transition: all 0.3s; */
  /* max-height: 200px; */
  /* transition: max-height 3.0s ease; */
  /* transition: height 1.0s ease; */
  overflow: hidden;

  .preview-section {
    /* -5px in the margin calculation is to account for .expand-button padding to have 25px total spacing */
    margin: var(--card-border-radius) var(--card-border-radius) calc((var(--card-border-radius) / 2) - 5px);
  }

  .info-section .content {
    margin: calc(var(--card-border-radius) / 2) var(--card-border-radius) var(--card-border-radius);
  }

  h1, h2, h3, h4 {
    margin: 0px;
    margin-bottom: 25px;
    color: var(--color-card-heading);
  }

  button.expand-button {
    padding: 5px;
    background-color: transparent;
    color: var(--color-card-button-text);
    border: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  hr.preview-divider {
    width: 100%;
    border-top: 5px solid var(--color-card-divider);
    margin: 0px;
  }
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 2.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */


/* .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
} */


/* .project-card.expanded {
  max-height: 2000px;
  transition: max-height 3.0s ease;
} */

</style>