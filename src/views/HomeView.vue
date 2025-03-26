<script setup>
import SplashScreen from '../components/SplashScreen.vue';
import SectionButton from '@/components/SectionButton.vue';
import PreviewCard from '@/components/PreviewCard.vue';
</script>

<template>
  <main>
    <SplashScreen />
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

.section-button-container {
  display: flex;
  gap: 15px;
}

.section-button-container > * {
  flex: 1;
}

</style>
