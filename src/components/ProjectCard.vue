<script setup>
// import { ref, onMounted, onBeforeUnmount } from 'vue';

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

</script>

<template>

  <div class="project-card">
    <div class="preview-section">
      <h2>{{ heading }}</h2>
      <p>{{ introParagraph }}</p>
    </div>
    <hr class="preview-divider"/>
    <div class="info-section">
      <slot>This is where the content coming from the parent should go.</slot>
    </div>
  </div>

</template>

<style scoped>

.project-card {
  width: 1100px;
  color: var(--color-card-text);
  background-color: var(--color-card-background);
  border-radius: var(--card-border-radius);
  /* transition: all 0.3s; */

  .preview-section {
    margin: var(--card-border-radius) var(--card-border-radius) calc(var(--card-border-radius) / 2);
  }

  .info-section {
    margin: calc(var(--card-border-radius) / 2) var(--card-border-radius) var(--card-border-radius);
  }

  h1, h2, h3, h4 {
    margin: 0px;
    margin-bottom: 25px;
    color: var(--color-card-heading);
  }

  hr.preview-divider {
    width: 100%;
    border-top: 5px solid var(--color-card-divider);
    margin: calc(var(--card-border-radius) / 2) 0px;
  }
}

</style>