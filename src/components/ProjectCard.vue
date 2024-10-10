<script setup>
import { ref } from 'vue';

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

const isExpanded = ref(false);

function handleCardExpand(){
  isExpanded.value = !isExpanded.value;
}

</script>

<template>

  <div class="project-card">
    <div class="preview-section">
      <h2>{{ heading }}</h2>
      <p>{{ introParagraph }}</p>
      <div class="uk-flex uk-flex-center">
        <button class="expand-button" @click="handleCardExpand">{{ isExpanded ? "▲ Close Details ▲" : "▼ View Details ▼"}}</button>
      </div>
    </div>
    <hr class="preview-divider" v-if="isExpanded"/>
    <div class="info-section" v-if="isExpanded">
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
    /* -5px in the margin calculation is to account for .expand-button padding to have 25px total spacing */
    margin: var(--card-border-radius) var(--card-border-radius) calc((var(--card-border-radius) / 2) - 5px);
  }

  .info-section {
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

</style>