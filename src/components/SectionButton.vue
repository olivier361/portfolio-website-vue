<script setup>
import MaterialIcons from './MaterialIcons.vue';

defineProps({
  url: {
    // the url that is opened when the button is clicked.
    type: String,
    required: true,
  },
  iconId: {
    // the icon id from the available SVG icons
    // in the MaterialIcons.vue component.
    // EX: 'file-document-outline'
    type: String,
    required: true,
  },
  buttonText: {
    // the main text displayed on the button.
    type: String,
    required: true,
  },
  descriptionText: {
    // the description text displayed below the main text.
    type: String,
    required: false,
    default: undefined,
  },
  isNewTab: {
    // whether the link opens in the current or new tab.
    type: Boolean,
    required: false,
    default: false,
  },
  isDarkVersion: {
    // use the dark version of the button.
    type: Boolean,
    required: false,
    default: true,
  },
  isFitToContent: {
    // set to true if the button should be sized to fit the content.
    type: Boolean,
    required: false,
    default: false,
  },
});

</script>

<template>

  <a
    :href="url"
    :target="isNewTab ? '_blank' : '_self'"
    class="section-button"
    :class="{ 'dark': isDarkVersion, 'light': !isDarkVersion, 'fit-content': isFitToContent }"
  >
    <MaterialIcons :iconId="iconId" />
    <p class="section-button-text">{{ buttonText }}</p>
    <p class="section-button-description">{{ descriptionText }}</p>
  </a>

</template>

<style scoped>

p {
  margin: 0px 0px 15px 0px;
  font-family: 'Roboto Condensed', Arial; /* TODO: Add proper fonts to project */
}

.svg-icon-wrapper {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
  object-fit: contain;
}

a .svg-icon-wrapper {
  fill: var(--color-section-button-text-dark);
  transition: fill 200ms;
}

a.light .svg-icon-wrapper {
  fill: var(--color-section-button-text-light);
}

a:hover .svg-icon-wrapper {
  fill: var(--color-section-button-text-hover);
}

.section-button {
  padding: 15px;
  border: 2px solid var(--color-section-button-outline-dark);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  color: var(--color-section-button-text-dark);
  text-decoration: none;
  transition: color 200ms, border-color 200ms;
}

.section-button.light {
  border-color: var(--color-section-button-outline-light);
  color: var(--color-section-button-text-light);
}

.section-button:hover {
  color: var(--color-section-button-text-hover);
  border-color: var(--color-section-button-outline-hover);
}

.section-button-text {
  font-size: 26px;
  font-weight: 700;
  line-height: 1.0;
}

.fit-content {
  width: fit-content;
}

</style>
