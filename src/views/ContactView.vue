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
  <main>
    <div class="contact uk-flex uk-flex-column uk-flex-middle">
      <h1>{{ t('title') }}</h1>

      <div class="content-card" style="margin-bottom: 50px;">
        <h3>{{ t('work.title') }}</h3>
        <p>{{ t('work.para1') }}</p>
        <!-- TODO: Add button here -->
        <p>{{ t('work.para2') }}</p>
        <!-- TODO: Add social links here -->
      </div>

      <div class="content-card">
        <h3>{{ t('youtube.title') }}</h3>
        <p>{{ t('youtube.para1') }}</p>
        <!-- TODO: Add button here -->
        <!-- TODO: Add social links here -->
      </div>

      <div class="cta-section" style="margin-top: 100px; margin-bottom: 50px;">
        <p>
          {{ t('cta.para1') }}
        </p>
        <CTAButton
          url="/projects"
          :buttonText="t('cta.buttonText')"
          showOutline
          isDarkVersion
        />
      </div>

      <div class="site-categories">
        <div class="section-button-container">
          <SectionButton
            url="/about-me"
            iconId="account-box-outline"
            :buttonText="t('sectionButtons1.buttonText1')"
            :descriptionText="t('sectionButtons1.buttonPara1')"
          />
          <!-- TODO: Remove this temporary content once the resume page is implemented. -->
          <SectionButton
            url="/contact"
            iconId="contacts-outline"
            :buttonText="t('sectionButtons1.buttonTextTmp1')"
            :descriptionText="t('sectionButtons1.buttonParaTmp1')"
          />
          <!-- TODO: uncomment this version once resume page is implemented -->
          <!-- <SectionButton
            url="/resume"
            iconId="file-document-outline"
            :buttonText="t('sectionButtons1.buttonText2')"
            :descriptionText="t('sectionButtons1.buttonPara2')"
          /> -->
        </div>
      </div>

    </div>
  </main>
</template>

<style scoped>
@import "@/assets/styles/defaultPageStyle.css";

h3 {
  text-transform: none;
}

</style>
