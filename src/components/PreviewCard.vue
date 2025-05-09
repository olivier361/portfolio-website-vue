<script setup>
import CTAButton from '@/components/CTAButton.vue';

const props = defineProps({
  heading: {
    // the heading displayed at the top of the preview card.
    type: String,
    required: true,
  },
  imgPath: {
    // the image path relative to the assets directory.
    // EX: ./src/assets/[imgPath]
    type: String,
    required: true,
  },
  imgAltText: {
    // the alt text for the image.
    type: String,
    required: false,
    default: undefined,
  },
  imgStyle: {
    // use this prop to pass custom style rules to the image inside the preview card.
    type: String,
    required: false,
    default: undefined,
  },
  url: {
    // the url that is opened when the Read More button is clicked.
    type: String,
    required: true,
  },
});

// This is needed to successfully resolve a path constructed with props
// in the production build given images are processed by Vite with a new name and location.
// See: https://vite.dev/guide/assets
// also see: https://stackoverflow.com/questions/66419471/vue-3-vite-dynamic-image-src
const imgUrl = new URL(`/src/assets/${props.imgPath}`, import.meta.url).href;

</script>

<template>

  <div class="preview-card">
    <div class="text-box">
      <h3>{{ heading }}</h3>
      <p class="preview-paragraph">
        <slot>No content available to display.</slot>
      </p>
      <CTAButton class="read-more-button" :url="url" />
    </div>
    <img
      class="image-box"
      :src="imgUrl"
      :alt="(imgAltText === undefined ? imgPath : imgAltText)"
      :style="imgStyle"
    >
  </div>

</template>

<style scoped>

h1, h2, h3, h4, :slotted(h1), :slotted(h2), :slotted(h3), :slotted(h4) {
  margin: 0px;
  margin-bottom: 25px;
  color: var(--color-card-heading);
}

h3, :slotted(h3) {
  text-transform: uppercase;
  /* font-size: 36px; */
  /* TODO: Font size 32px is a temporary fix to prevent the heading
   * from taking up two lines on systems that don't have Segoe UI and
   * use a wider fallback font. This will be fixed more elegantly in a future
   * PR when we later bundle our own font with the site assets.
   */
  font-size: 32px;
  font-weight: 400;
}

.preview-card {
  display: flex;
  flex-direction: row;
  width: calc(100% - 40px);
  height: 440px;
  max-width: 1100px;
  color: var(--color-card-text);
  background-color: var(--color-card-background);
  border-radius: var(--card-border-radius);
  overflow: hidden;
}

.text-box {
  padding: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.preview-paragraph {
  width: 100%;
  height: 100%;
  margin: 0px;
  line-height: 1.2;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--color-card-text) var(--color-card-background);
}

.image-box {
  width: 440px;
  height: 440px;
  object-fit: cover;
}

.read-more-button {
  margin-bottom: 0px;
}

@media (max-width: 1139px) {
  h1, h2, h3, h4, :slotted(h1), :slotted(h2), :slotted(h3), :slotted(h4) {
    margin-bottom: 15px;
  }

  h3, :slotted(h3) {
    font-size: 24px;
    font-weight: 500;
  }

  .read-more-button {
    margin-top: 15px;
  }
}

@media (max-width: 1019px) {
  .text-box {
    padding: 30px;
  }
}

@media (max-width: 939px) {
  .preview-card {
    display: flex;
    flex-direction: column-reverse;
    height: auto;
    max-width: 600px;
  }

  .image-box {
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }

  .text-box {
    height: auto;
  }

  .preview-paragraph {
    height: auto;
    overflow: visible;
  }
}

@media (max-width: 479px) {
  .preview-card {
    width: calc(100% - 20px);
  }

  .text-box {
    padding: 25px;
  }
}
</style>
