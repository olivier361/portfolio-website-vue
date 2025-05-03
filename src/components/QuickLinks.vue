<script setup>

defineProps({
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
  linkObjectsList: {
    // EX:
    // linkObjectsList: [{
    //    buttonText: 'Section Name',
    //    url?: 'urlString',
    //    onClickFunction?: () => { return; },
    //  }, ...]
    // NOTE: 'buttonText' key is required. One of 'url' or 'onClickFunction' is required.
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
            && ( // 'url' or 'onClickFunction' is required
              Object.hasOwn(item, 'url') || Object.hasOwn(item, 'onClickFunction')
            )
            && ( // if 'url' is provided it must be a non-empty string
              Object.hasOwn(item, 'url')
                ? (typeof item.url === 'string' && item.url.length > 0)
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
});

</script>

<template>
  <div class="quick-links" :style="{ maxWidth: maxWidth }">
    <h3 v-if="heading">{{ heading }}</h3>
    <div class="ql-wrapper">
      <ul>
        <li v-for="(linkObject, index) in linkObjectsList" :key="index">
          <a class="ql-button" :href="linkObject.url" target="_self">
            {{ linkObject.buttonText }}
          </a>
        </li>
      </ul>
      <div class="ql-gradient" />
    </div>
  </div>
</template>

<style scoped>
/* TODO: for QuickLinks
 * - Clicking the buttons should smooth scroll to the section
 *   instead of jumping to it.
 * - Figure out if there is a way to make flex wrap favor not having lone buttons on a line.
*/

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
  .quick-links {
    width: 100%;
  }

  ul {
    /* position: relative; */
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
    padding: 0px 20px 10px 20px;
  }

  /* ul::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 100%;
    pointer-events: none;
    /* background: linear-gradient(to left, white 40%, transparent 80%); */
    /* background: linear-gradient(to left,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.9) 5%,
      rgba(255, 255, 255, 0.7) 15%,
      rgba(255, 255, 255, 0.4) 30%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background: linear-gradient(to left,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.95) 5%,
      rgba(255, 255, 255, 0.9) 15%,
      rgba(255, 255, 255, 0.7) 30%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  } */

  .ql-gradient {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: var(--button-height);
    pointer-events: none;
    /* background: linear-gradient(to left, white 40%, transparent 80%); */
    /* background: linear-gradient(to left,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.9) 5%,
      rgba(255, 255, 255, 0.7) 15%,
      rgba(255, 255, 255, 0.4) 30%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0) 100%
    ); */
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
