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
    <div class="about-me uk-flex uk-flex-column uk-flex-middle">
      <h1>{{ t('title') }}</h1>
      <h2>test h2</h2>
      <h3>test h3</h3>
      <div class="content-card">
        <p>
          {{ t('aboutText.para1') }}
          <br><br>
          {{ t('aboutText.para2') }}
          <br><br>
          {{ t('aboutText.para3') }}
          <br><br>
          {{ t('aboutText.para4') }}
          <br><br>
          {{ t('aboutText.para5') }}
          <br><br>
          {{ t('aboutText.para6') }}
          <a href="/contact">{{ t('aboutText.para7') }}</a>{{ t('aboutText.para8') }}
        </p>
        <ImageFrame
          imgPath="pixel-profile-picture.png"
          :altText="t('aboutImgAltText')"
          widthPx="300px"
        />
      </div>

      <div class="cta-section">
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
          <!-- TODO: uncomment this version once resume page is implemented -->
          <!-- <SectionButton
            url="/resume"
            iconId="file-document-outline"
            :buttonText="t('sectionButtons1.buttonText1')"
            :descriptionText="t('sectionButtons1.buttonPara1')"
          /> -->
          <!-- TODO: Remove this temporary content once the resume page is implemented. -->
          <SectionButton
            url="/about-me"
            iconId="account-box-outline"
            :buttonText="t('sectionButtons1.buttonTextTmp1')"
            :descriptionText="t('sectionButtons1.buttonParaTmp1')"
          />
          <SectionButton
            url="/contact"
            iconId="contacts-outline"
            :buttonText="t('sectionButtons1.buttonText2')"
            :descriptionText="t('sectionButtons1.buttonPara2')"
          />
        </div>
      </div>

    </div>
  </main>
</template>

<style scoped>
@import "@/assets/styles/defaultPageStyle.css";
/* TODO: import a defaultPageStyle.css CSS file here */

/* @media (min-width: 1024px) {
  .about-me {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
