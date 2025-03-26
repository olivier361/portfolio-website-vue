<script setup>
import SplashScreen from '../components/SplashScreen.vue';
import SectionButton from '@/components/SectionButton.vue';
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

.section-button-container {
  display: flex;
  gap: 15px;
}

.section-button-container > * {
  flex: 1;
}

</style>
