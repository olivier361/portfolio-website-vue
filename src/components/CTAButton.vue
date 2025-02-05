<script setup>

const props = defineProps({
  url: {
    // the url that is opened when the button is clicked.
    type: String,
    required: true,
  },
  buttonText: {
    // the text displayed on the button.
    type: String,
    required: false,
    default: 'Read More',
  },
  showOutline: {
    // show a rounded outline for the button.
    type: Boolean,
    required: false,
    default: false,
  },
  isFilled: {
    // set to true if the button background should be filled with color.
    type: Boolean,
    required: false,
    default: false,
  },
  showArrow: {
    // whether the arrow icon is shown to the right of the button text.
    type: Boolean,
    required: false,
    default: true,
  },
  isNewTab: {
    // whether the link opens in the current or new tab.
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
    class="cta-button"
    :class="{
      'cta-button-outline': showOutline,
      'cta-button-filled': isFilled,
    }"
  >
    {{ buttonText }}
    <span v-if="showArrow" uk-icon="arrow-right" />
  </a>

</template>

<style scoped>

</style>
