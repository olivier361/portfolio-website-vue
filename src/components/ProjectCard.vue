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

  <div :class="isExpanded ? 'project-card expanded' : 'project-card'">
    <div class="preview-section">
      <h2>{{ heading }}</h2>
      <p>{{ introParagraph }}</p>
      <div class="uk-flex uk-flex-center">
        <button class="expand-button" @click="handleCardExpand">{{ isExpanded ? "▲ Close Details ▲" : "▼ View Details ▼"}}</button>
      </div>
    </div>
    <hr class="preview-divider" v-if="isExpanded"/>
    <!-- TODO: WIP not sure if this is the good approach -->
    <transition name="fade">
      <div class="info-section" v-if="isExpanded">
      <slot>This is where the content coming from the parent should go.</slot>
      </div>
    </transition>
  </div>

</template>

<style scoped>

.project-card {
  width: 1100px;
  color: var(--color-card-text);
  background-color: var(--color-card-background);
  border-radius: var(--card-border-radius);
  /* transition: all 0.3s; */
  max-height: 200px;
  transition: max-height 3.0s ease;
  overflow: hidden;

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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


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


.project-card.expanded {
  max-height: 2000px;
  transition: max-height 3.0s ease;
}

</style>