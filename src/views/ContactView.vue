<script setup>
import { useI18n } from 'vue-i18n';
import en from '@/locales/en/ContactView.i18n.en.js';

import CTAButton from '@/components/CTAButton.vue';
import SectionButton from '@/components/SectionButton.vue';

const { t } = useI18n({
  messages: { en: en.en },
});

</script>

<template>
  <div class="contact">
    <h1>This is a contact page</h1>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
