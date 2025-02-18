<script setup>

defineProps({
  linkObjectsList: {
    // EX:
    // linkObjectsList: [{url: 'urlString', teaserText?: 'go here for...', isNewTab?: true}, ...]
    // NOTE: 'url' prop is required. 'teaserText' and 'isNewTab' (def: true) are optional.
    // NOTE: the array must contain at least one object.
    type: Array,
    required: true,
    validator(value) {
      // linkObjectsList must be an array with at least one object
      return Array.isArray(value)
        && value.length >= 1
        && value.every((item) => {
          return typeof item === 'object'
            && ( // 'url' is required and must be a non-empty string
              Object.hasOwn(item, 'url')
              && typeof item.url === 'string'
              && item.url.length > 0
            )
            && ( // 'teaserText' is optional but must be a string if provided
              !Object.hasOwn(item, 'teaserText')
              || (Object.hasOwn(item, 'teaserText') && typeof item.teaserText === 'string')
            )
            && ( // 'isNewTab' is optional but must be a boolean if provided
              !Object.hasOwn(item, 'isNewTab')
              || (Object.hasOwn(item, 'isNewTab') && typeof item.isNewTab === 'boolean')
            );
        });
    },
  },
});

function shouldOpenNewTab(isNewTab) {
  return isNewTab === undefined ? true : !!isNewTab;
}

// Given a URL string, truncates it to 50 characters
// with '...' if it is too long.
function formatDisplayUrl(url) {
  return url.length > 50 ? url.slice(0, 50) + '...' : url;
}

</script>

<template>
  <div class="related-links">
    <p><b>Related Links:</b></p>
    <ul>
      <li v-for="linkObject in linkObjectsList" :key="linkObject.url">
        <a
          :href="linkObject.url"
          :target="shouldOpenNewTab(linkObject.isNewTab) ? '_blank' : '_self'"
        >
          <span v-if="linkObject.teaserText" class="rl-text">
            {{ linkObject.teaserText }}&nbsp;
          </span>
          <span v-if="linkObject.teaserText">{{ '(' }}</span>
          <span class="rl-url">{{ formatDisplayUrl(linkObject.url) }}</span>
          <span
            v-if="shouldOpenNewTab(linkObject.isNewTab)"
            class="rl-icon uk-icon"
            uk-icon="icon: link-external; ratio: 1.0"
          />
          <span v-if="linkObject.teaserText">{{ ')' }}</span>
        </a>
      </li>
    </ul>
  </div>

</template>

<style scoped>

p {
  margin-bottom: 0px;
}

ul {
  margin-top: 10px;
}

a {
  text-decoration: none;
  color: var(--color-card-text);
}

a:hover > * {
  text-decoration: underline;
}

a:visited > .rl-url, a:visited > .uk-icon {
  color: var(--color-link-visited);
}

a:hover > .rl-url, a:hover > .uk-icon {
  color: var(--color-link-hover);
}

.rl-url {
  text-decoration: underline;
  color: var(--color-link);
}

.uk-icon {
  color: var(--color-link);
  margin-left: 5px;
}

</style>
