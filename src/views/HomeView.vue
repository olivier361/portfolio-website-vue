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
        <!-- TODO: Add actual image here -->
        <ImageFrameStylized
          imgPath="projects/gameDev/unity/2d-pixel-game.png"
          widthPx="330px"
          heightPx="330px"
          :isFullWidth="curViewportWidth <= 479"
        />
      </div>
    </div>

    <div class="site-categories">
      <div class="section-button-container">
        <SectionButton
          url="#game-development"
          iconId="gamepad-variant-outline"
          :buttonText="t('sectionButtons1.buttonText1')"
        />
        <SectionButton
          url="#software-development"
          iconId="file-code-outline"
          :buttonText="t('sectionButtons1.buttonText2')"
        />
        <SectionButton
          url="#video-editing"
          iconId="video-outline"
          :buttonText="t('sectionButtons1.buttonText3')"
        />
        <SectionButton
          url="#graphic-design"
          iconId="image-edit-outline"
          :buttonText="t('sectionButtons1.buttonText4')"
        />
      </div>
    </div>

    <div class="preview-card-section">
      <PreviewCard
        heading="Preview Card Heading"
        imgPath="projects/gameDev/unity/2d-pixel-game.png"
        imgAltText="this is the altText for a test image."
        url="/about"
      >
        This is a test paragraph 1. This is a test paragraph 1.
        This is a test paragraph 1. This is a test paragraph 1.
        This is a test paragraph 1. This is a test paragraph 1.
        This is a test paragraph 1. This is a test paragraph 1.
        <br><br>
        This is a test paragraph 2.
        <br><br>
        This is a test paragraph 3.
        <br><br>
        This is a test paragraph 4.
        <br><br>
        This is a test paragraph 5.
        <br><br>
        This is a test paragraph 6.
        <br><br>
        This is a test paragraph7.
        <br><br>
        This is a test paragraph 8.
      </PreviewCard>
      <PreviewCard
        heading="Software & App Development"
        imgPath="projects/softwareDev/uhub/uhub-insta-ad-2.png"
        imgAltText="this is the altText for a test image."
        url="/about"
      >
        Thanks to my co-op work experience and my Computer Science major,
        I have worked on dozens of software development projects since 2019.
        These include native desktop and mobile apps, web development,
        back-end development of scalable microservice architectures,
        network programming, and more.
        <br><br>
        I've always built software with great attention to detail and consideration
        for the end-user experience. This is reflected in team projects like our
        UHub mobile app which helps students quickly search for food on campus
        and our mock Day Trading system which implements a scalable back-end to handle
        thousands of simultaneous buy and sell requests from users.
      </PreviewCard>
      <PreviewCard
        heading="Graphic Design"
        imgPath="projects/gameDev/unity/2d-pixel-game.png"
        imgAltText="this is the altText for a test image."
        url="/about"
      >
        With more than eight years of graphic design knowledge, both self-taught
        and from university courses, I have worked on various projects like
        making a 22-page travel magazine using my original pictures,
        creating digital advertisements to promote my projects, and crafted over 500+
        eye-catching video thumbnails to attract viewers to my YouTube videos.
      </PreviewCard>
      <!-- TODO: Remove the sample cards above -->
      <!-- TODO: Add actual preview card image -->
      <PreviewCard
        :heading="t('previewCards.gameDev.title')"
        imgPath="projects/gameDev/unity/2d-pixel-game.png"
        :imgAltText="t('previewCards.gameDev.altText')"
        url="/projects#game-development"
      >
        {{ t('previewCards.gameDev.para1') }}
        <br><br>
        {{ t('previewCards.gameDev.para2') }}
      </PreviewCard>
      <!-- TODO: Add actual preview card image -->
      <PreviewCard
        :heading="t('previewCards.softwareDev.title')"
        imgPath="projects/softwareDev/uhub/uhub-insta-ad-2.png"
        :imgAltText="t('previewCards.softwareDev.altText')"
        url="/projects#software-development"
      >
        {{ t('previewCards.softwareDev.para1') }}
        <br><br>
        {{ t('previewCards.softwareDev.para2') }}
      </PreviewCard>
      <!-- TODO: Add actual preview card image -->
      <PreviewCard
        :heading="t('previewCards.videoEditing.title')"
        imgPath="projects/gameDev/unity/2d-pixel-game.png"
        :imgAltText="t('previewCards.videoEditing.altText')"
        url="/projects#video-editing"
      >
        {{ t('previewCards.videoEditing.para1') }}
        <br><br>
        {{ t('previewCards.videoEditing.para2') }}
      </PreviewCard>
      <!-- TODO: Add actual preview card image -->
      <PreviewCard
        :heading="t('previewCards.graphicDesign.title')"
        imgPath="projects/softwareDev/uhub/uhub-insta-ad-2.png"
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

    <p>
      A ton of content to make sure the page is long enough to scroll.
      <br>
      A ton of content to make sure the page is long enough to scroll.
      <br>
      A ton of content to make sure the page is long enough to scroll.
      <br>
      A ton of content to make sure the page is long enough to scroll.
      <br>
      A ton of content to make sure the page is long enough to scroll.
      <br>
      A ton of content to make sure the page is long enough to scroll.
      <br>
      A ton of content to make sure the page is long enough to scroll.
      <br>
      A ton of content to make sure the page is long enough to scroll.
      <br>
      A ton of content to make sure the page is long enough to scroll.
      <br>
      A ton of content to make sure the page is long enough to scroll.
      <br>
      A ton of content to make sure the page is long enough to scroll.
      <br>
      A ton of content to make sure the page is long enough to scroll.
      <br>
      A ton of content to make sure the page is long enough to scroll.
      <br>
      A ton of content to make sure the page is long enough to scroll.
      <br>
      A ton of content to make sure the page is long enough to scroll.
      <br>
      A ton of content to make sure the page is long enough to scroll.
      <br>
    </p>
  </main>
</template>

<style scoped>

.preview-card-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

.preview-card {
  margin: 0px 25px;
}

.site-categories {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
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
  .site-categories > * {
    max-width: 600px;
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
