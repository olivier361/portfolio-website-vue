<script setup>

defineProps({
  linkObjectsList: {
    // EX:
    // linkObjectsList: [{url: 'urlString', ukIconName: 'youtube' teaserText?: '@handle'}, ...]
    // NOTE: 'url' and 'ukIconName' props are required. 'teaserText' is optional.
    // NOTE: the array must contain at least one object.
    type: Array,
    required: true,
    validator(value) {
      // linkObjectsList must be an array with at least one object
      return Array.isArray(value)
        && value.length >= 1
        && value.every((item) => {
          return typeof item === 'object'
            && (
              // 'url' is required and must be a non-empty string
              Object.hasOwn(item, 'url')
              && typeof item.url === 'string'
              && item.url.length > 0
            )
            && (
              // 'ukIconName' is required and must be a string of a valid UIKit icon name.
              // See list of names here: https://getuikit.com/docs/icon#library
              Object.hasOwn(item, 'ukIconName')
              && typeof item.ukIconName === 'string'
              && item.ukIconName.length > 0
            )
            && ( // 'teaserText' is optional but must be a string if provided
              !Object.hasOwn(item, 'teaserText')
              || (Object.hasOwn(item, 'teaserText') && typeof item.teaserText === 'string')
            );
        });
    },
  },
  heading: {
    // the heading text displayed above the list of links.
    // NOTE: set to null for no heading.
    type: String,
    required: false,
    default: 'Social Links:',
  },
  showExternalLinkIcon: {
    // whether the external link icon is shown next to the link text.
    type: Boolean,
    required: false,
    default: true,
  },
});

// Given a URL string, truncates it to 50 characters
// with '...' if it is too long.
function formatDisplayUrl(url) {
  return url.length > 50 ? url.slice(0, 50) + '...' : url;
}

</script>

<template>
  <div class="social-links">
    <p v-if="heading"><b>{{ heading }}</b></p>
    <ul>
      <li v-for="linkObject in linkObjectsList" :key="linkObject.url">
        <a :href="linkObject.url" target="_blank">
          <span
            class="sl-icon-social uk-icon"
            :uk-icon="`icon: ${ linkObject.ukIconName ?? 'link' }; ratio: 1.1`"
          />
          <span class="sl-text">
            {{ linkObject.teaserText ?? formatDisplayUrl(linkObject.url) }}
          </span>
          <span
            v-if="showExternalLinkIcon"
            class="sl-icon-external uk-icon"
            uk-icon="icon: link-external; ratio: 0.8"
          />
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
  margin: 10px 0px 0px 0px;
  padding-left: 0px;
  list-style-type: none;
}

li:not(:last-child) {
  margin-bottom: 8px;
}

a {
  text-decoration: none;
  color: var(--color-card-text);
}

a:hover > * {
  text-decoration: underline;
}

a:visited > .sl-text, a:visited > .sl-icon-external {
  color: var(--color-card-text);
}

a:hover > .sl-text, a:hover > .sl-icon-external {
  color: var(--color-link-hover);
}

.sl-icon-social {
  margin-right: 10px;
}

.sl-icon-external {
  margin-left: 5px;
}

</style>
