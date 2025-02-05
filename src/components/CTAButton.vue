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
      'cta-button-base': !showOutline && !isFilled,
      'cta-button-outline': showOutline,
      'cta-button-filled': isFilled,
    }"
  >
    {{ buttonText }}
    <!-- <span class="cta-button-text">{{ buttonText }}</span> -->
    <span v-if="showArrow" uk-icon="arrow-right" />
  </a>

</template>

<style scoped>

/* TODO */
.cta-button {
  margin: 25px 0px;
  font-family: 'Roboto Condensed', Arial; /* TODO: Add proper fonts to project */
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  color: var(--color-cta-button-text-dark);
  background-color: transparent;
}

.cta-button-base {
  background-image: linear-gradient(
    to right, var(--color-cta-button-text-hover)
    33%,var(--color-cta-button-text-hover) 33% 66%,
    transparent 66%
  );
  background-position: right bottom;
  background-size: 300% 2px;
  background-repeat: no-repeat;
}

.cta-button-outline {
  color: var(--color-cta-button-outline-text-dark);
  background-color: transparent;
  border: 2px solid var(--color-cta-button-outline-dark);
  border-radius: 25px;
  padding: 9px 14px 9px 16px;
}

.cta-button-filled {
  color: var(--color-cta-button-text-light);
  background-color: var(--color-cta-button-fill);
  border: none;
  border-radius: 25px;
  padding: 9px 14px 9px 16px;
}

.cta-button-base:hover {
  color: var(--color-cta-button-text-hover);
  background-position: left bottom;

  border-color: var(--color-cta-button-text-hover);
  stroke: var(--color-cta-button-text-hover);

  transition: background-position 0.5s;
}

.cta-button-outline:hover {
  color: var(--color-cta-button-outline-hover);
  border-color: var(--color-cta-button-outline-hover);
  transition: all 200ms;
}

.cta-button-filled:hover {
  background-color: var(--color-cta-button-fill-hover);
  transition: all 200ms;
}

</style>
