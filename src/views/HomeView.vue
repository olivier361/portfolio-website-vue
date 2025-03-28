<script setup>
import { useI18n } from 'vue-i18n';
import en from '@/locales/en/HomeView.i18n.en.js';

import SplashScreen from '../components/SplashScreen.vue';
import CTAButton from '@/components/CTAButton.vue';
import SectionButton from '@/components/SectionButton.vue';
import PreviewCard from '@/components/PreviewCard.vue';
import ImageFrameStylized from '@/components/ImageFrameStylized.vue';

const { t } = useI18n({
  messages: { en: en.en },
});

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
        <!-- TODO: Add ImageFrameStylized component here -->
        <ImageFrameStylized
          imgPath="projects/gameDev/unity/2d-pixel-game.png"
          width="330px"
          height="330px"
        />
      </div>
    </div>
    <h1 id="homepage-section1">Hello from HomeView.vue</h1>
    <div class="section-button-container">
      <SectionButton
        url="/about"
        iconId="gamepad-variant-outline"
        buttonText="Button Text"
        descriptionText="Button description here."
      />
      <SectionButton
        url="/about"
        iconId="file-document-outline"
        buttonText="Button Text"
        descriptionText="Button description here. This is a pretty long description."
      />
      <SectionButton
        url="/about"
        iconId="contacts-outline"
        buttonText="Button Text"
      />
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
}

.preview-card {
  margin: 25px;
}

@media (max-width: 479px) {
  .preview-card {
    margin: 20px 10px;
  }
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

</style>
