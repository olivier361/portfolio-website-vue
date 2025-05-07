<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  linkObjectsList: {
    // EX:
    // linkObjectsList: [{
    //    buttonText: 'Section Name',
    //    routeUrl?: 'urlString EX: #some-anchor',
    //    onClickFunction?: () => { return; },
    //  }, ...]
    // NOTE: 'buttonText' key is required. One of 'routeUrl' or 'onClickFunction' is required.
    // NOTE: the array must contain at least one object.
    type: Array,
    required: true,
    validator(value) {
      // linkObjectsList must be an array with at least one object
      return Array.isArray(value)
        && value.length >= 1
        && value.every((item) => {
          return typeof item === 'object'
            && ( // 'buttonText' is required and must be a non-empty string
              Object.hasOwn(item, 'buttonText')
              && typeof item.buttonText === 'string'
              && item.buttonText.length > 0
            )
            && ( // 'routeUrl' or 'onClickFunction' is required
              Object.hasOwn(item, 'routeUrl') || Object.hasOwn(item, 'onClickFunction')
            )
            && ( // if 'routeUrl' is provided it must be a non-empty string
              Object.hasOwn(item, 'routeUrl')
                ? (typeof item.routeUrl === 'string' && item.routeUrl.length > 0)
                : true
            )
            && ( // if 'onClickFunction' is provided it must be a function
              Object.hasOwn(item, 'onClickFunction')
                ? (typeof item.onClickFunction === 'function')
                : true
            );
        });
    },
  },
  heading: {
    // the heading text displayed above the list of link buttons.
    // NOTE: set to null for no heading.
    type: String,
    required: false,
    default: 'Quick Links',
  },
  maxWidth: {
    // the maximum width the list of link buttons will take up.
    type: String,
    required: false,
    default: undefined,
  },
  isSideScrollMobile: {
    // whether the list of link buttons should be side scrolled on mobile.
    type: Boolean,
    required: false,
    default: true,
  },
  showSideScrollGradient: {
    // whether a fade-out gradient is shown
    // on the left and right sides of the list of link buttons.
    type: Boolean,
    required: false,
    default: true,
  },
});

const scrollContainer = ref(null);

onMounted(() => {
  if (scrollContainer?.value) {
    scrollContainer.value.addEventListener('wheel', handleSideScroll, { passive: false });
  }
});

onBeforeUnmount(() => {
  if (scrollContainer?.value) {
    scrollContainer.value.removeEventListener('wheel', handleSideScroll);
  }
});

// When a mouse wheel scroll event happens when the mouse is over the
// list of link buttons, prevent the scroll event from scrolling the page
// as normal and instead scroll the list horizontally.
// NOTE: This only takes effect when 'isSideScrollMobile' is set to true.
function handleSideScroll(event) {
  if (!props.isSideScrollMobile || event.deltaY === 0 || window.innerWidth >= 499) {
    return;
  }

  event.preventDefault();
  scrollContainer.value.scrollLeft += event.deltaY;
}

</script>

<template>
  <div
    :class="isSideScrollMobile ? 'quick-links ql-side-scroll' : 'quick-links'"
    :style="{ maxWidth: maxWidth }"
  >
    <h3 v-if="heading">{{ heading }}</h3>
    <div class="ql-wrapper">
      <ul ref="scrollContainer">
        <li v-for="(linkObject, index) in linkObjectsList" :key="index">
          <a
            v-if="linkObject?.onClickFunction"
            class="ql-button"
            :href="linkObject?.routeUrl"
            @click.prevent="linkObject.onClickFunction()"
          >
            {{ linkObject.buttonText }}
          </a>
          <RouterLink
            v-else
            class="ql-button"
            :to="linkObject?.routeUrl"
          >
            {{ linkObject.buttonText }}
          </RouterLink>
        </li>
      </ul>
      <div v-if="showSideScrollGradient" class="ql-gradient left" />
      <div v-if="showSideScrollGradient" class="ql-gradient right" />
    </div>
  </div>
</template>

<style scoped>

.quick-links {
  --button-height: 34px;

  text-align: center;
  margin: 0px 20px;
}

h3 {
  margin: 0px 0px 15px 0px;
  color: var(--color-page-sub-section-text);
  font-size: var(--page-sub-section-font-size);
  font-weight: 400;
  line-height: 1.2;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px 10px;
  margin: 0px;
  padding: 0px;
}

.ql-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--button-height);
  padding: 0px 20px;
  border-radius: calc(var(--button-height) / 2);
  background-color: var(--color-quick-links-button-background);
  color: var(--color-quick-links-button-text);
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  line-height: var(--button-height);
  white-space: nowrap;
  user-select: none;
  /* TODO: add proper font */
  transition: background-color 200ms;
}

.ql-button:hover {
  background-color: var(--color-quick-links-button-background-hover);
}

.ql-wrapper {
  position: relative;
}

.ql-gradient {
  display: none;
}

@media (max-width: 499px) {
  .quick-links.ql-side-scroll {
    width: 100%;
  }

  .ql-side-scroll ul {
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
    padding: 0px 20px 10px 20px;
  }

  .ql-side-scroll .ql-gradient.left {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: var(--button-height);
    pointer-events: none;
    /* background: linear-gradient(to right, white 0%, transparent 100%); */
    background: linear-gradient(to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.95) 10%,
      rgba(255, 255, 255, 0.9) 15%,
      rgba(255, 255, 255, 0.85) 30%,
      rgba(255, 255, 255, 0.7) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .ql-side-scroll .ql-gradient.right {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: var(--button-height);
    pointer-events: none;
    /* background: linear-gradient(to left, white 0%, transparent 100%); */
    background: linear-gradient(to left,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.95) 10%,
      rgba(255, 255, 255, 0.9) 15%,
      rgba(255, 255, 255, 0.85) 30%,
      rgba(255, 255, 255, 0.7) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }
}

</style>
