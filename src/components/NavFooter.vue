<script setup>
import { RouterLink } from 'vue-router';
import SocialLinks from '@/components/SocialLinks.vue';
import CTAButton from './CTAButton.vue';
import { getCurrentYear } from '@/utils/helpers';
</script>

<template>
  <div class="nav-footer">
    <div class="nav-footer-wrapper">
      <div class="footer-logo">
        <RouterLink to="/" style="height: 26px">
          <img
            class="site-logo-img"
            alt="Site logo"
            src="@/assets/ogg-logo-long.png"
            width="797"
            height="85"
          >
        </RouterLink>
        <CTAButton
          url="/contact"
          :buttonText="'Contact Me'"
          isDarkVersion
          isFilled
          :showSymbol="false"
        />
        <p>
          {{
            'Copyright &copy; '+ getCurrentYear(2025) + '\n' +
              'Olivier Gervais-Gougeon.\n' +
              'All rights reserved.'
          }}
        </p>
      </div>
      <div class="footer-site-map">
        <h4>Site Map</h4>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <!-- TODO: re-enable links when either resume or about the site pages are implemented -->
        <!-- <RouterLink to="/resume">Resume</RouterLink> -->
        <!-- <RouterLink to="/about">About</RouterLink> -->
        <RouterLink to="/about-me">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>
      <div class="footer-key-sections">
        <h4>Projects</h4>
        <RouterLink to="/projects#game-development">Game Development</RouterLink>
        <RouterLink to="/projects#software-development">Software & App Development</RouterLink>
        <RouterLink to="/projects#video-editing">Video Editing & Production</RouterLink>
        <RouterLink to="/projects#graphic-design">Graphic Design</RouterLink>
      </div>
      <div class="footer-social-links">
        <h4>Socials</h4>
        <SocialLinks
          :linkObjectsList="[
            { url: 'https://www.linkedin.com/in/olivier-gg/', teaserText: 'LinkedIn', ukIconName: 'linkedin' },
            { url: 'https://twitter.com/oliviergg', teaserText: 'Twitter&nbsp;/&nbsp;X', ukIconName: 'x' },
            { url: 'https://github.com/olivier361', teaserText: 'GitHub', ukIconName: 'github' },
            { url: 'https://youtube.com/@skullkid_gaming', teaserText: 'YouTube', ukIconName: 'youtube' },
            // TODO: Add bluesky once setup
          ]"
          :heading="null"
          :showExternalLinkIcon="false"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

a:visited, :deep(a:visited) {
  color: var(--color-footer-text);
}

a:hover, :deep(a:hover), :deep(a:hover > .sl-text) {
  color: var(--color-link-hover);
}

ul, :deep(ul) {
  margin: 0px 25px 0px 0px;
}

:deep(.sl-text) {
  font-weight: 300;
}

h4, .nav-footer h4 {
  color: var(--color-footer-text);
  font-size: 20px;
  font-weight: 350;
  line-height: 1.2;
  margin: 0px 0px 20px 0px;
}

.nav-footer {
  display: flex;
  justify-content: center;
  padding: 50px 20px;
  background-color: var(--color-footer-background);
}

.nav-footer-wrapper {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: stretch;
  max-width: 1100px;
  gap: 20px;
}

.nav-footer * {
  color: var(--color-footer-text);
  font-weight: 300;
  line-height: 1.2;
}

.nav-footer-wrapper > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.nav-footer-wrapper > div > *:not(:last-child, h4) {
  margin-bottom: 12px;
}

.footer-logo {
  justify-content: space-between;
}

.footer-logo > p {
  margin: 0px;
  white-space: pre;
}

.footer-logo .cta-button {
  margin: 0px;
  line-height: 1.0;
}

.site-logo-img {
  width: auto;
  height: 26px;
  object-fit: contain;
}

</style>
