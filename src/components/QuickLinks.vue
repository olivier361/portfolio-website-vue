<script setup>

defineProps({
  heading: {
    // the heading text displayed above the list of link buttons.
    // NOTE: set to null for no heading.
    type: String,
    required: false,
    default: 'Quick Links',
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
  <div class="quick-links">
    <h3 v-if="heading">{{ heading }}</h3>
    <ul>
      <li v-for="(linkObject, index) in linkObjectsList" :key="index">
        <a class="ql-button" :href="linkObject.url" target="_self">
          {{ linkObject.buttonText }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* TODO: for QuickLinks
 * - Clicking the buttons should smooth scroll to the section
 *   instead of jumping to it.
 * - Figure out if there is a way to make flex wrap favor not having lone buttons on a line.
*/

.quick-links {
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
  --button-height: 34px;

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
  /* TODO: add proper font */
}

.ql-button:hover {
  background-color: var(--color-quick-links-button-background-hover);
}

</style>
