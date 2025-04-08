<script setup>
import { useI18n } from 'vue-i18n';
import en from '@/locales/en/AboutMeView.i18n.en.js';

import CTAButton from '@/components/CTAButton.vue';
import ImageFrame from '@/components/ImageFrame.vue';
import SectionButton from '@/components/SectionButton.vue';

const { t } = useI18n({
  messages: { en: en.en },
});

</script>

<template>
  <main>
    <div class="about-me">
      <h1>{{ t('title') }}</h1>
      <div class="content-card">
        <!-- TODO: Add content here -->
      </div>
    </div>
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about-me {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
