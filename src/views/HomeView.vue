<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import en from '@/locales/en/HomeView.i18n.en.js';

import SplashScreen from '../components/SplashScreen.vue';
import CTAButton from '@/components/CTAButton.vue';
import SectionButton from '@/components/SectionButton.vue';
import PreviewCard from '@/components/PreviewCard.vue';
import ImageFrameStylized from '@/components/ImageFrameStylized.vue';
import { yearsSinceString } from '@/utils/helpers';

const { t } = useI18n({
  messages: { en: en.en },
});

const curViewportWidth = ref(undefined);

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

function handleResize() {
  curViewportWidth.value = window.innerWidth;
}

</script>

<template>
  <main>
    <SplashScreen />
    <div id="about-me" class="alternate-background">
      <div>
        <div>
          <h3>{{ t('about.title') }}</h3>
          <p>
            {{ t('about.para1') }}
            <br><br>
            {{ t('about.para2') }}
            <br><br>
            {{ t('about.para3') }}
          </p>
          <!-- TODO: Make sure the about me page gets implemented if we have this link -->
          <CTAButton
            url="/about-me"
            :buttonText="t('about.buttonText')"
            isDarkVersion
          />
        </div>
        <ImageFrameStylized
          imgPath="pixel-profile-picture.png"
          :altText="t('about.imgAltText')"
          widthPx="330px"
          heightPx="330px"
          :isFullWidth="curViewportWidth <= 479"
        />
      </div>
    </div>

    <div class="site-categories">
      <div class="section-button-container grid">
        <SectionButton
          url="#game-development"
          iconId="gamepad-variant-outline"
          :buttonText="t('sectionButtons1.buttonText1')"
          isSmoothScroll
        />
        <SectionButton
          url="#software-development"
          iconId="file-code-outline"
          :buttonText="t('sectionButtons1.buttonText2')"
          isSmoothScroll
        />
        <SectionButton
          url="#video-editing"
          iconId="video-outline"
          :buttonText="t('sectionButtons1.buttonText3')"
          isSmoothScroll
        />
        <SectionButton
          url="#graphic-design"
          iconId="image-edit-outline"
          :buttonText="t('sectionButtons1.buttonText4')"
          isSmoothScroll
        />
      </div>
    </div>

    <div class="preview-card-section">
      <PreviewCard
        id="game-development"
        :heading="t('previewCards.gameDev.title')"
        imgPath="home/preview-card-game-dev.png"
        :imgAltText="t('previewCards.gameDev.altText')"
        url="/projects#game-development"
      >
        {{ t('previewCards.gameDev.para1') }}
        <br><br>
        {{ t('previewCards.gameDev.para2') }}
      </PreviewCard>
      <PreviewCard
        id="software-development"
        :heading="t('previewCards.softwareDev.title')"
        imgPath="home/preview-card-software-dev.png"
        :imgAltText="t('previewCards.softwareDev.altText')"
        url="/projects#software-development"
      >
        {{ t('previewCards.softwareDev.para1') }}
        <br><br>
        {{ t('previewCards.softwareDev.para2') }}
      </PreviewCard>
      <PreviewCard
        id="video-editing"
        :heading="t('previewCards.videoEditing.title')"
        imgPath="home/preview-card-video-editing.png"
        :imgAltText="t('previewCards.videoEditing.altText')"
        :imgStyle="curViewportWidth <= 939
          ? 'object-position: 35% center;'
          : 'object-position: 62% center;'"
        url="/projects#video-editing"
      >
        {{ t('previewCards.videoEditing.para1') }}
        <br><br>
        {{ t('previewCards.videoEditing.para2') }}
      </PreviewCard>
      <PreviewCard
        id="graphic-design"
        :heading="t('previewCards.graphicDesign.title')"
        imgPath="home/preview-card-graphic-design.png"
        :imgAltText="t('previewCards.graphicDesign.altText')"
        url="/projects#graphic-design"
      >
        {{
          t(
            'previewCards.graphicDesign.para1',
            { years: yearsSinceString(6, 2016, 'eight years')}
          )
        }}
      </PreviewCard>
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

    <!-- TODO: uncomment this version once resume and about the site pages are implemented -->
    <!-- <div class="site-categories">
      <div class="section-button-container">
        <SectionButton
          url="/resume"
          iconId="file-document-outline"
          :buttonText="t('sectionButtons2.buttonText1')"
          :descriptionText="t('sectionButtons2.buttonPara1')"
        />
        <SectionButton
          url="/contact"
          iconId="contacts-outline"
          :buttonText="t('sectionButtons2.buttonText2')"
          :descriptionText="t('sectionButtons2.buttonPara2')"
        />
      </div>
      <div class="section-button-container">
        <SectionButton
          url="/about-the-site"
          iconId="application-brackets-outline"
          :buttonText="t('sectionButtons2.buttonText3')"
          :descriptionText="t('sectionButtons2.buttonPara3')"
        />
      </div>
    </div> -->

    <!-- TODO: Remove this temporary content once the resume and about the site pages
     are implemented. -->
    <div class="site-categories">
      <div class="section-button-container">
        <SectionButton
          url="/about-me"
          iconId="account-box-outline"
          :buttonText="t('sectionButtons2.buttonTextTmp1')"
          :descriptionText="t('sectionButtons2.buttonParaTmp1')"
        />
        <SectionButton
          url="/contact"
          iconId="contacts-outline"
          :buttonText="t('sectionButtons2.buttonText2')"
          :descriptionText="t('sectionButtons2.buttonPara2')"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>

.preview-card-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

.cta-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 100px 25px;
}

.cta-section > p {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  margin: 0px;
  white-space: pre-line;
  text-align: center;
}

.cta-section .cta-button {
  margin: 0px;
}

.preview-card {
  margin: 0px 25px;
}

.site-categories {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 50px 25px;
}

.site-categories > * {
  width: 100%;
  max-width: 1100px;
}

.section-button-container {
  display: flex;
  gap: 15px;
}

.section-button-container > * {
  flex: 1;
}

#about-me {
  padding: 50px;
  display: flex;
  justify-content: center;
}

#about-me > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 120px;
  max-width: 960px;

  h1, h2, h3 {
    font-size: 36px;
    font-weight: 400;
  }
}

#about-me p {
  margin: 25px 0px;
}

@media (max-width: 1059px) {
  #about-me > div {
    gap: 50px;
  }
}

@media (max-width: 939px) {
  .cta-section > p {
    white-space: normal;
    max-width: 600px;
  }

  .site-categories > * {
    max-width: 600px;
  }

  .site-categories :deep(.section-button-description) {
    white-space: normal;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: repeat(2, auto); */
  }
}

@media (max-width: 799px) {
  #about-me > div {
    flex-direction: column;
    max-width: 600px;
  }
}

@media (max-width: 479px) {
  .site-categories {
    margin: 35px 10px 40px 10px;
  }

  .site-categories > * {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .preview-card-section {
    gap: 40px;
  }

  .preview-card {
    margin: 0px 10px;
  }

  #about-me {
    padding: 35px;
  }

  #about-me > div {
    gap: 35px;
  }
}

</style>
