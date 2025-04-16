<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import en from '@/locales/en/ContactView.i18n.en.js';

import SocialLinks from '@/components/SocialLinks.vue';
import CTAButton from '@/components/CTAButton.vue';
import SectionButton from '@/components/SectionButton.vue';
import { getAssetsSiteUrl } from '@/utils/helpers';

const { t } = useI18n({
  messages: { en: en.en },
});

const workAssetSource = ref(undefined);
const youtubeAssetSource = ref(undefined);

// call once to avoid getting console.warns on every UI refresh
// when this function uses the fallback case.
const assetsSiteRootUrl = getAssetsSiteUrl();

function handleWorkButtonClick(assetSource) {
  workAssetSource.value = `${assetsSiteRootUrl}/images/${assetSource}`;
}

function handleYoutubeButtonClick(assetSource) {
  youtubeAssetSource.value = `${assetsSiteRootUrl}/images/${assetSource}`;
}

</script>

<template>
  <main>
    <div class="contact uk-flex uk-flex-column uk-flex-middle">
      <h1>{{ t('title') }}</h1>

      <div class="content-card" style="margin-bottom: 50px;">
        <h3>{{ t('work.title') }}</h3>
        <p style="margin-bottom: 0px;">{{ t('work.para1') }}</p>
        <div class="tarpit">
          <b>{{ t('shared.email') }}:</b>&nbsp;&nbsp;&nbsp;
          <img
            v-if="workAssetSource"
            class="tarpit-img"
            :src="workAssetSource"
            :alt="t('shared.imgFallbackAltText')"
          >
          <CTAButton
            v-else
            :onClickFunction="() => { handleWorkButtonClick('work-tarpit.png'); }"
            :buttonText="t('shared.emailButtonText')"
            isFilled
            :showSymbol="false"
          />
        </div>
        <p>{{ t('work.para2') }}</p>
        <SocialLinks
          :linkObjectsList="[
            { url: 'https://www.linkedin.com/in/olivier-gg/', teaserText: 'linkedin.com/in/olivier-gg', ukIconName: 'linkedin' },
            { url: 'https://twitter.com/oliviergg', teaserText: '@oliviergg', ukIconName: 'x' },
            { url: 'https://github.com/olivier361', teaserText: '@olivier361', ukIconName: 'github' },
            // TODO: Add bluesky once setup
          ]"
        />
      </div>

      <div class="content-card">
        <h3>{{ t('youtube.title') }}</h3>
        <p style="margin-bottom: 0px;">{{ t('youtube.para1') }}</p>
        <div class="tarpit">
          <b>{{ t('shared.email') }}:</b>&nbsp;&nbsp;&nbsp;
          <img
            v-if="youtubeAssetSource"
            class="tarpit-img"
            :src="youtubeAssetSource"
            :alt="t('shared.imgFallbackAltText')"
          >
          <CTAButton
            v-else
            :onClickFunction="() => { handleYoutubeButtonClick('youtube-tarpit.png'); }"
            :buttonText="t('shared.emailButtonText')"
            isFilled
            :showSymbol="false"
          />
        </div>
        <SocialLinks
          :linkObjectsList="[
            { url: 'https://youtube.com/@skullkid_gaming', teaserText: 'youtube.com/@skullkid_gaming', ukIconName: 'youtube' },
            { url: 'https://bsky.app/profile/skullkidyt.bsky.social', teaserText: '@skullkidyt.bsky.social', ukIconName: 'bluesky' },
            { url: 'https://twitter.com/SkullkidYT', teaserText: '@SkullkidYT', ukIconName: 'x' },
            { url: 'https://www.instagram.com/skullkid_gaming/', teaserText: '@skullkid_gaming', ukIconName: 'instagram' },
          ]"
        />
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

.tarpit {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 40px 0px;
  min-height: 50px;
}

.tarpit .cta-button {
  margin: 0px;
}

.tarpit-img {
  height: 16px;
  width: auto;
  max-width: 100%;
  position: relative;
  top: 3px;
}

</style>
