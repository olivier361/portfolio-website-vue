<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import en from '@/locales/en/ProjectsView.i18n.en.js';

import ProjectCard from '@/components/ProjectCard.vue';
import ImageCollection from '@/components/ImageCollection.vue';
import ImageFrame from '@/components/ImageFrame.vue';
import CTAButton from '@/components/CTAButton.vue';
import RelatedLinks from '@/components/RelatedLinks.vue';
import { yearsSinceString, getAssetsSiteUrl } from '@/utils/helpers';

const { t } = useI18n({
  messages: { en: en.en },
});

const curViewportWidth = ref(undefined);

const mobileBreakpointPx = 799;

// call once to avoid getting console.warns on every UI refresh
// when this function uses the fallback case.
const assetsSiteRootUrl = getAssetsSiteUrl();

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

<!-- eslint-disable @stylistic/max-len -->
<template>
  <main>
    <div class="projects">
      <h1>{{ t('title') }}</h1>
      <h2 id="game-development">{{ t('section.gameDev') }}</h2>
      <ProjectCard
        :heading="t('unity.title')"
        :previewBackgroundImgPath="'projects/gameDev/unity/unity-card-background-fade.png'"
        :previewImgList="[
          {
            imgPath: 'projects/gameDev/unity/2d-pixel-game.png',
            captionText: t('unity.previewImg.caption1'),
            altText: t('unity.previewImg.altText1'),
          },
          {
            imgPath: 'projects/gameDev/unity/cube-game-4.png',
            captionText: t('unity.previewImg.caption2'),
            altText: t('unity.previewImg.altText2'),
          },
          {
            imgPath: 'projects/gameDev/unity/ruby-adventure.png',
            captionText: t('unity.previewImg.caption3'),
            altText: t('unity.previewImg.altText3'),
          }
        ]"
      >
        <template #introParagraph>
          {{ t('unity.introPara1') }}
          <i>
            <a href="https://www.sfvictoria.ca/en/home-page/" target="_blank">
              Société&nbsp;francophone&nbsp;de&nbsp;Victoria
            </a>
          </i>
          {{ t('unity.introPara2') }}
          <br><br>
          {{ t('unity.introPara3') }}
        </template>

        <h4>{{ t('unity.details1.title') }}</h4>
        <div class="uk-flex image-first-mobile" :style="{columnGap: '50px', marginBottom: '50px'}">
          <p class="uk-flex-1">
            {{ t('unity.details1.para1') }}
            <br><br>
            {{ t('unity.details1.para2') }}
          </p>
          <ImageFrame
            class="uk-flex-1"
            imgPath="projects/gameDev/unity/unity-editor-2d-pixel-game.png"
            :altText="t('unity.details1.altText1')"
          />
        </div>

        <hr class="info-divider">

        <h4>{{ t('unity.details2.title') }}</h4>
        <div class="uk-flex image-first-mobile" :style="{columnGap: '50px', marginBottom: '50px'}">
          <div class="uk-flex-1">
            <p>
              {{ t('unity.details2.para1') }}
              <br><br>
              {{ t('unity.details2.para2') }}
            </p>
            <RelatedLinks
              :linkObjectsList="[
                {
                  url: 'https://github.com/olivier361/Cube-Game',
                  teaserText: t('unity.details2.relatedLinks1'),
                },
              ]"
            />
          </div>
          <ImageFrame
            class="uk-flex-1"
            imgPath="projects/gameDev/unity/unity-editor-cube-game.png"
            :altText="t('unity.details2.altText1')"
          />
        </div>

        <hr class="info-divider">

        <h4>{{ t('unity.details3.title') }}</h4>
        <div class="uk-flex image-first-mobile" :style="{columnGap: '50px', marginBottom: '50px'}">
          <div class="uk-flex-1">
            <p>
              {{ t('unity.details3.para1') }}
            </p>
            <RelatedLinks
              :linkObjectsList="[
                {
                  url: 'https://github.com/olivier361/Rubys-Adventure-2D',
                  teaserText: t('unity.details3.relatedLinks1'),
                },
              ]"
            />
          </div>
          <ImageFrame
            class="uk-flex-1"
            imgPath="projects/gameDev/unity/unity-editor-ruby-game.png"
            :altText="t('unity.details3.altText1')"
          />
        </div>
      </ProjectCard>
      <ProjectCard
        :heading="t('previousGames.title')"
        :previewBackgroundImgPath="'projects/gameDev/previousGames/previous-games-card-background-fade.png'"
        :previewImgList="[
          {
            imgPath: 'projects/gameDev/previousGames/cj-screenshot-1.png',
            captionText: t('previousGames.previewImg.caption1'),
            altText: t('previousGames.previewImg.altText1'),
          },
          {
            imgPath: 'projects/gameDev/previousGames/cj-screenshot-2.png',
            captionText: t('previousGames.previewImg.caption2'),
            altText: t('previousGames.previewImg.altText2'),
          },
          {
            imgPath: 'projects/gameDev/previousGames/cj-screenshot-3.png',
            captionText: t('previousGames.previewImg.caption3'),
            altText: t('previousGames.previewImg.altText3'),
          }
        ]"
        previewImgHeight="auto"
      >
        <template #introParagraph>
          <u><b>{{ t('previousGames.introPara1') }}</b></u>
          <br>
          <b>{{ t('previousGames.introPara2') }}</b>
          <br><br>
          {{ t('previousGames.introPara3') }}
          <i>{{ t('previousGames.introPara4') }}</i>
          {{ t('previousGames.introPara5') }}
          <br><br>
          {{ t('previousGames.introPara6') }}
          <br><br>
          {{ t('previousGames.introPara7') }}
          <br><br>
          <i>{{ t('previousGames.introPara8') }}</i>
          <br><br>
          <RelatedLinks
            :linkObjectsList="[
              {
                url: assetsSiteRootUrl + '/games/carnet-de-jeux/Carnet de jeux - MD.html',
                teaserText: t('previousGames.relatedLinks1'),
              },
              {
                url: assetsSiteRootUrl + '/documents/article-reverbere-aout-2019-carnet-de-jeux.png',
                teaserText: t('previousGames.relatedLinks2'),
              },
              {
                url: 'https://www.sfvictoria.ca/en/home-page/',
                teaserText: t('previousGames.relatedLinks3'),
              },
            ]"
          />
        </template>

        <h4>{{ t('previousGames.details1.title') }}</h4>
        <p>
          {{ t('previousGames.details1.para1') }}
          <br><br>
          {{ t('previousGames.details1.para2') }}
          <br><br>
          {{ t('previousGames.details1.para3') }}
        </p>
        <ImageCollection
          :imgList="[
            {
              imgPath: 'projects/gameDev/previousGames/cj-screenshot-5.png',
              captionText: t('previousGames.details1.imgCollection.caption1'),
              altText: t('previousGames.details1.imgCollection.altText1'),
            },
            {
              imgPath: 'projects/gameDev/previousGames/cj-screenshot-4.png',
              captionText: t('previousGames.details1.imgCollection.caption2'),
              altText: t('previousGames.details1.imgCollection.altText2'),
            },
            {
              imgPath: 'projects/gameDev/previousGames/cj-screenshot-2.png',
              captionText: t('previousGames.details1.imgCollection.caption3'),
              altText: t('previousGames.details1.imgCollection.altText3'),
            }
          ]"
          imgWidth="320px"
          imgHeight="auto"
          :autoSpanColumnCount="curViewportWidth <= mobileBreakpointPx ? 1 : 3"
        />

        <hr class="info-divider">

        <h4>{{ t('previousGames.details2.title') }}</h4>
        <div
          :class="curViewportWidth <= 760 ? 'uk-flex image-first-mobile' : 'uk-flex'"
          :style="{columnGap: '50px', marginBottom: '50px'}"
        >
          <p>
            {{ t('previousGames.details2.para1') }}
          </p>
          <ImageFrame
            imgPath="projects/gameDev/previousGames/carnet-de-jeux-cover.png"
            :captionText="t('previousGames.details2.caption1')"
            :altText="t('previousGames.details2.altText1')"
            :widthPx="curViewportWidth > 480 ? '250px': undefined"
            :widthPercent="curViewportWidth <= 480 ? '100%' : undefined"
          />
        </div>

        <hr class="info-divider">

        <h4>{{ t('previousGames.details3.title') }}</h4>
        <p>
          {{ t('previousGames.details3.para1') }}
        </p>
        <CTAButton
          :url="assetsSiteRootUrl + '/games/carnet-de-jeux/Carnet de jeux - MD.html'"
          :buttonText="t('previousGames.details3.buttonText')"
          isFilled
          isNewTab
        />
      </ProjectCard>
      <!-- TODO: Add background images to remaining ProjectCards -->
      <ProjectCard
        :heading="t('computerAnimAndRender.title')"
        :previewImgList="[
          {
            imgPath: 'projects/gameDev/computerAnimAndRender/raytrace-dragon-tree-skybox.png',
            captionText: t('computerAnimAndRender.previewImg.caption1'),
            altText: t('computerAnimAndRender.previewImg.altText1'),
          },
          {
            imgPath: 'projects/gameDev/computerAnimAndRender/ik-human-spline-initial-closeup.png',
            captionText: t('computerAnimAndRender.previewImg.caption2'),
            altText: t('computerAnimAndRender.previewImg.altText2'),
          },
          {
            imgPath: 'projects/gameDev/computerAnimAndRender/tetris-mockup.png',
            captionText: t('computerAnimAndRender.previewImg.caption3'),
            altText: t('computerAnimAndRender.previewImg.altText3'),
          }
        ]"
      >
        <template #introParagraph>
          {{ t('computerAnimAndRender.introPara1') }}
          <a href="https://en.wikipedia.org/wiki/Ray_tracing_(graphics)" target="_blank">
            {{ t('computerAnimAndRender.introPara2') }}
          </a>
          {{ t('computerAnimAndRender.introPara3') }}
          <a href="https://stackoverflow.com/questions/22512319/what-is-aabb-collision-detection" target="_blank">
            {{ t('computerAnimAndRender.introPara4') }}
          </a>
          {{ t('computerAnimAndRender.introPara5') }}
          <a href="https://en.wikipedia.org/wiki/Inverse_kinematics" target="_blank">
            {{ t('computerAnimAndRender.introPara6') }}
          </a>
          {{ t('computerAnimAndRender.introPara7') }}
          <a href="https://en.wikipedia.org/wiki/Spline_(mathematics)" target="_blank">
            {{ t('computerAnimAndRender.introPara8') }}
          </a>{{ t('computerAnimAndRender.introPara9') }}
          <br><br>
          {{ t('computerAnimAndRender.introPara10') }}
        </template>

        <h4>{{ t('computerAnimAndRender.details1.title') }}</h4>
        <p>
          {{ t('computerAnimAndRender.details1.para1') }}
          <br><br>
          <u><b>{{ t('computerAnimAndRender.details1.para2') }}</b></u>
          <br>
          {{ t('computerAnimAndRender.details1.para3') }}
        </p>
        <ImageFrame
          imgPath="projects/gameDev/computerAnimAndRender/raytrace-shadow.png"
          :altText="t('computerAnimAndRender.details1.altText1')"
          widthPercent="100%"
          backgroundColor="#707090"
        />
        <br>
        <p>
          {{ t('computerAnimAndRender.details1.para4') }}
        </p>
        <ImageFrame
          imgPath="projects/gameDev/computerAnimAndRender/raytrace-perlin-cubic.png"
          :altText="t('computerAnimAndRender.details1.altText2')"
          widthPercent="100%"
          backgroundColor="#707090"
        />
        <br>
        <p>
          {{ t('computerAnimAndRender.details1.para5') }}
          <br><br>
          {{ t('computerAnimAndRender.details1.para6') }}
        </p>
        <ImageCollection
          :imgList="[
            {
              imgPath: 'projects/gameDev/computerAnimAndRender/raytrace-dragon-tree-without-reflections.png',
              altText: t('computerAnimAndRender.details1.altText3'),
              backgroundColor: '#9aceff',
            },
            {
              imgPath: 'projects/gameDev/computerAnimAndRender/raytrace-dragon-tree.png',
              altText: t('computerAnimAndRender.details1.altText4'),
              backgroundColor: '#9aceff',
            },
          ]"
          :autoSpanColumnCount="curViewportWidth <= mobileBreakpointPx ? 1 : 2"
        />
        <br>
        <RelatedLinks
          :linkObjectsList="[
            {
              url: 'https://github.com/olivier361/Raytracer-AABB-Tree',
              teaserText: t('computerAnimAndRender.details1.relatedLinks1'),
            },
          ]"
        />
        <br>
        <p>
          <u><b>{{ t('computerAnimAndRender.details1.para7') }}</b></u>
          <br>
          {{ t('computerAnimAndRender.details1.para8') }}
        </p>
        <ImageCollection
          :imgList="[
            {
              imgPath: 'projects/gameDev/computerAnimAndRender/pv-shading-animation.gif',
              captionText: t('computerAnimAndRender.details1.caption1'),
              altText: t('computerAnimAndRender.details1.altText5'),
            },
            {
              imgPath: 'projects/gameDev/computerAnimAndRender/flat-shading-animation.gif',
              captionText: t('computerAnimAndRender.details1.caption2'),
              altText: t('computerAnimAndRender.details1.altText6'),
            },
          ]"
          :autoSpanColumnCount="curViewportWidth <= mobileBreakpointPx ? 1 : 2"
        />

        <hr class="info-divider">

        <h4>{{ t('computerAnimAndRender.details2.title') }}</h4>
        <p>
          {{ t('computerAnimAndRender.details2.para1') }}
          <br><br>
          <u><b>{{ t('computerAnimAndRender.details2.para2') }}</b></u>
          <br>
          {{ t('computerAnimAndRender.details2.para3') }}
        </p>
        <ImageCollection
          :imgList="[
            {
              imgPath: 'projects/gameDev/computerAnimAndRender/spring-mass-system-cube-complex-at-rest.png',
              captionText: t('computerAnimAndRender.details2.imgCollection1.caption1'),
              altText: t('computerAnimAndRender.details2.imgCollection1.altText1'),
            },
            {
              imgPath: 'projects/gameDev/computerAnimAndRender/spring-mass-system-cube-complex-collision-2.png',
              captionText: t('computerAnimAndRender.details2.imgCollection1.caption2'),
              altText: t('computerAnimAndRender.details2.imgCollection1.altText2'),
            },
          ]"
          :autoSpanColumnCount="curViewportWidth <= mobileBreakpointPx ? 1 : 2"
        />
        <br>
        <p>
          <u><b>{{ t('computerAnimAndRender.details2.para4') }}</b></u>
          <br>
          {{ t('computerAnimAndRender.details2.para5') }}
        </p>
        <ImageCollection
          :imgList="[
            {
              imgPath: 'projects/gameDev/computerAnimAndRender/ik-human-spline-initial-closeup.png',
              captionText: t('computerAnimAndRender.details2.imgCollection2.caption1'),
              altText: t('computerAnimAndRender.details2.imgCollection2.altText1'),
            },
            {
              imgPath: 'projects/gameDev/computerAnimAndRender/ik-human-spline-drawing.png',
              captionText: t('computerAnimAndRender.details2.imgCollection2.caption2'),
              altText: t('computerAnimAndRender.details2.imgCollection2.altText2'),
            },
            {
              imgPath: 'projects/gameDev/computerAnimAndRender/ik-human-spline-drawing-2.png',
              captionText: t('computerAnimAndRender.details2.imgCollection2.caption3'),
              altText: t('computerAnimAndRender.details2.imgCollection2.altText3'),
            },
          ]"
          imgWidth="320px"
          imgHeight="309px"
          :autoSpanColumnCount="curViewportWidth <= mobileBreakpointPx ? 1 : 3"
        />

        <hr class="info-divider">

        <h4>{{ t('computerAnimAndRender.details3.title') }}</h4>
        <div class="uk-flex image-first-mobile" :style="{columnGap: '50px'}">
          <div class="uk-flex-1">
            <p>
              {{ t('computerAnimAndRender.details3.para1') }}
              <a href="https://www.opengl.org/" target="_blank">
                {{ t('computerAnimAndRender.details3.para2') }}
              </a>
              {{ t('computerAnimAndRender.details3.para3') }}
              <a href="https://freeglut.sourceforge.net/" target="_blank">
                {{ t('computerAnimAndRender.details3.para4') }}
              </a>
              {{ t('computerAnimAndRender.details3.para5') }}
              <br><br>
              {{ t('computerAnimAndRender.details3.para6') }}
            </p>
            <RelatedLinks
              :linkObjectsList="[
                {
                  url: 'https://github.com/olivier361/tetris-game-cpp',
                  teaserText: t('computerAnimAndRender.details3.relatedLinks1'),
                },
                {
                  url: 'https://youtu.be/2A3-CP1nTuE',
                  teaserText: t('computerAnimAndRender.details3.relatedLinks2'),
                },
              ]"
            />
          </div>
          <ImageFrame
            class="uk-flex-1"
            imgPath="projects/gameDev/computerAnimAndRender/tetris-mockup.png"
            :captionText="t('computerAnimAndRender.details3.caption1')"
            :altText="t('computerAnimAndRender.details3.altText1')"
          />
        </div>

      </ProjectCard>
      <ProjectCard
        :heading="t('modelling3D.title')"
        :previewImgList="[
          {
            imgPath: 'projects/gameDev/modelling3D/thw0.jpg',
            captionText: t('modelling3D.previewImg.caption1'),
            altText: t('modelling3D.previewImg.altText1'),
          },
          {
            // TODO: Update image to showcase final version of the project
            imgPath: 'projects/gameDev/modelling3D/gallery-pictures-4.png',
            captionText: t('modelling3D.previewImg.caption2'),
            altText: t('modelling3D.previewImg.altText2'),
          },
          {
            imgPath: 'projects/gameDev/modelling3D/everyday-objects.png',
            captionText: t('modelling3D.previewImg.caption3'),
            altText: t('modelling3D.previewImg.altText3'),
          }
        ]"
      >
        <template #introParagraph>
          {{ t('modelling3D.introPara1') }}
        </template>

        <h4>{{ t('modelling3D.details1.title') }}</h4>
        <p>
          {{ t('modelling3D.details1.para1') }}
          <br><br>
          {{ t('modelling3D.details1.para2') }}
        </p>
        <ImageCollection
          :imgList="[
            {
              imgPath: 'projects/gameDev/modelling3D/thw-google-maps-screenshot-large.png',
              captionText: t('modelling3D.details1.imgCollection1.caption1'),
              altText: t('modelling3D.details1.imgCollection1.altText1'),
            },
            {
              imgPath: 'projects/gameDev/modelling3D/thw0.jpg',
              captionText: t('modelling3D.details1.imgCollection1.caption2'),
              altText: t('modelling3D.details1.imgCollection1.altText2'),
            },
          ]"
          :autoSpanColumnCount="curViewportWidth <= mobileBreakpointPx ? 1 : 2"
        />
        <br>
        <CTAButton
          url="https://maps.app.goo.gl/7QA4Te1UzBLRx7Dy9"
          :buttonText="t('modelling3D.details1.buttonText')"
          showOutline
          isNewTab
        />
        <br><br><br>
        <ImageFrame
          imgPath="projects/gameDev/modelling3D/thw0.jpg"
          :captionText="t('modelling3D.details1.imgFrame.caption1')"
          :altText="t('modelling3D.details1.imgFrame.altText1')"
          widthPercent="100%"
        />
        <br>
        <ImageCollection
          :imgList="[
            {
              imgPath: 'projects/gameDev/modelling3D/thw3.jpg',
              captionText: t('modelling3D.details1.imgCollection2.caption1'),
              altText: t('modelling3D.details1.imgCollection2.altText1'),
            },
            {
              imgPath: 'projects/gameDev/modelling3D/thw4.jpg',
              captionText: t('modelling3D.details1.imgCollection2.caption2'),
              altText: t('modelling3D.details1.imgCollection2.altText2'),
            },
            {
              imgPath: 'projects/gameDev/modelling3D/thw5.jpg',
              captionText: t('modelling3D.details1.imgCollection2.caption3'),
              altText: t('modelling3D.details1.imgCollection2.altText3'),
            },
            {
              imgPath: 'projects/gameDev/modelling3D/thw1.jpg',
              captionText: t('modelling3D.details1.imgCollection2.caption4'),
              altText: t('modelling3D.details1.imgCollection2.altText4'),
            },
          ]"
          :autoSpanColumnCount="curViewportWidth <= mobileBreakpointPx ? 1 : 2"
        />

        <hr class="info-divider">

        <h4>{{ t('modelling3D.details2.title') }}</h4>
        <p>
          {{ t('modelling3D.details2.para1') }}
        </p>
        <CTAButton
          url="https://maps.app.goo.gl/oMG3qv5EoJfQjtMu7"
          :buttonText="t('modelling3D.details2.buttonText')"
          showOutline
          isNewTab
        />
        <br><br><br>
        <ImageCollection
          :imgList="[
            {
              // TODO: Update image to showcase final version of the project
              imgPath: 'projects/gameDev/modelling3D/gallery-pictures-4.png',
              captionText: t('modelling3D.details2.imgCollection.caption1'),
              altText: t('modelling3D.details2.imgCollection.altText1'),
            },
            {
              imgPath: 'projects/gameDev/modelling3D/gallery-pictures-1.png',
              captionText: t('modelling3D.details2.imgCollection.caption2'),
              altText: t('modelling3D.details2.imgCollection.altText2'),
            },
            {
              imgPath: 'projects/gameDev/modelling3D/gallery-pictures-2.png',
              captionText: t('modelling3D.details2.imgCollection.caption3'),
              altText: t('modelling3D.details2.imgCollection.altText3'),
            },
            {
              imgPath: 'projects/gameDev/modelling3D/gallery-pictures-6.png',
              captionText: t('modelling3D.details2.imgCollection.caption4'),
              altText: t('modelling3D.details2.imgCollection.altText4'),
            },
          ]"
          :autoSpanColumnCount="curViewportWidth <= mobileBreakpointPx ? 1 : 2"
        />

        <hr class="info-divider">

        <h4>{{ t('modelling3D.details3.title') }}</h4>
        <p>
          {{ t('modelling3D.details3.para1') }}
        </p>
        <ImageCollection
          :imgList="[
            {
              imgPath: 'projects/gameDev/modelling3D/everyday-objects.png',
              altText: t('modelling3D.details3.imgCollection.altText1'),
            },
            {
              imgPath: 'projects/gameDev/modelling3D/everyday-objects-2.jpg',
              altText: t('modelling3D.details3.imgCollection.altText2'),
            },
            {
              imgPath: 'projects/gameDev/modelling3D/room-2.png',
              altText: t('modelling3D.details3.imgCollection.altText3'),
            },
            {
              imgPath: 'projects/gameDev/modelling3D/room-1.png',
              altText: t('modelling3D.details3.imgCollection.altText4'),
            },
            {
              imgPath: 'projects/gameDev/modelling3D/tables-2.png',
              altText: t('modelling3D.details3.imgCollection.altText5'),
            },
            {
              imgPath: 'projects/gameDev/modelling3D/projector-model.png',
              altText: t('modelling3D.details3.imgCollection.altText6'),
            },
          ]"
          imgWidth="490px"
          imgHeight="275px"
          :autoSpanColumnCount="curViewportWidth <= mobileBreakpointPx ? 1 : 2"
        />

      </ProjectCard>

      <h2 id="software-development">{{ t('section.softwareDev') }}</h2>

      <ProjectCard
        :heading="t('uhub.title')"
        :previewImgList="[
          {
            imgPath: 'projects/softwareDev/uhub/uhub-insta-ad-1.png',
            captionText: t('uhub.previewImg.caption1'),
            altText: t('uhub.previewImg.altText1'),
          },
          {
            imgPath: 'projects/softwareDev/uhub/uhub-insta-ad-2.png',
            captionText: t('uhub.previewImg.caption2'),
            altText: t('uhub.previewImg.altText2'),
          },
          {
            imgPath: 'projects/softwareDev/uhub/uhub-insta-ad-3.png',
            captionText: t('uhub.previewImg.caption3'),
            altText: t('uhub.previewImg.altText3'),
          }
        ]"
        previewImgHeight="auto"
      >
        <template #introParagraph>
          {{ t('uhub.introPara1') }}
          <br><br>
          {{ t('uhub.introPara2') }}
          <br><br>
          {{ t('uhub.introPara3') }}
          <br><br>
          {{ t('uhub.introPara4') }}
        </template>

        <h4>{{ t('uhub.details1.title') }}</h4>
        <div
          :class="curViewportWidth <= 899 ? 'uk-flex image-first-mobile-custom' : 'uk-flex'"
          :style="{columnGap: '50px', marginBottom: '50px'}"
        >
          <div class="uk-flex-1">
            <p class="uk-margin-small-bottom">
              {{ t('uhub.details1.para1') }}
              <br><br>
              {{ t('uhub.details1.para2') }}
            </p>
            <ul class="uk-margin-small-top">
              <li>{{ t('uhub.details1.list1.item1') }}</li>
              <li>{{ t('uhub.details1.list1.item2') }}</li>
              <li>{{ t('uhub.details1.list1.item3') }}</li>
              <li>{{ t('uhub.details1.list1.item4') }}</li>
              <li>{{ t('uhub.details1.list1.item5') }}</li>
              <li>{{ t('uhub.details1.list1.item6') }}</li>
              <li>{{ t('uhub.details1.list1.item7') }}</li>
              <li>{{ t('uhub.details1.list1.item8') }}</li>
            </ul>
            <p class="uk-margin-small-bottom">
              {{ t('uhub.details1.para3') }}
            </p>
            <ul class="uk-margin-small-top">
              <li>{{ t('uhub.details1.list2.item1') }}</li>
              <li>{{ t('uhub.details1.list2.item2') }}</li>
              <li>{{ t('uhub.details1.list2.item3') }}</li>
            </ul>
            <p>
              {{ t('uhub.details1.para4') }}
            </p>
            <br>
            <CTAButton
              url="https://lbare.github.io/UHub/"
              :buttonText="t('uhub.details1.buttonText')"
              showOutline
              isNewTab
            />
          </div>
          <iframe
            class="uk-flex-1 yt-player"
            src="https://www.youtube.com/embed/uuC9dYZs-ck?si=MYBjpYFqdtKMp06p"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>

        <hr class="info-divider">

        <h4>{{ t('uhub.details2.title') }}</h4>
        <p>
          {{ t('uhub.details2.para1') }}
        </p>
        <ImageFrame
          imgPath="projects/softwareDev/uhub/uhub-architecture-diagram.jpg"
          :captionText="t('uhub.details2.caption1')"
          :altText="t('uhub.details2.altText1')"
          widthPercent="100%"
        />
        <br>
        <p>
          {{ t('uhub.details2.para2') }}
          <br><br>
          {{ t('uhub.details2.para3') }}
          <br><br>
          {{ t('uhub.details2.para4') }}
        </p>
        <CTAButton
          url="https://github.com/olivier361/UHub/wiki"
          :buttonText="t('uhub.details2.buttonText')"
          showOutline
          isNewTab
        />
        <br><br>
        <RelatedLinks
          :linkObjectsList="[
            {
              url: 'https://github.com/olivier361/UHub',
              teaserText: t('uhub.details2.relatedLinks1'),
            },
            {
              url: 'https://lbare.github.io/UHub/',
              teaserText: t('uhub.details2.relatedLinks2'),
            },
            {
              url: 'https://github.com/olivier361/UHub/wiki',
              teaserText: t('uhub.details2.relatedLinks3'),
            },
          ]"
        />

      </ProjectCard>
      <ProjectCard
        :heading="t('dayTrading.title')"
        :previewImgList="[
          {
            imgPath: 'projects/softwareDev/dayTrading/day-trading-account-dashboard.png',
            captionText: t('dayTrading.previewImg.caption1'),
            altText: t('dayTrading.previewImg.altText1'),
          },
        ]"
        previewImgHeight="auto"
        previewImgWidth="100%"
      >
        <template #introParagraph>
          {{ t('dayTrading.introPara1') }}
          <br><br>
          {{ t('dayTrading.introPara2') }}
          <br><br>
          {{ t('dayTrading.introPara3') }}
        </template>

        <h4>{{ t('dayTrading.details1.title') }}</h4>
        <p class="uk-margin-small-bottom">
          {{ t('dayTrading.details1.para1') }}
          <br><br>
          {{ t('dayTrading.details1.para2') }}
        </p>
        <ul class="uk-margin-small-top">
          <li>{{ t('dayTrading.details1.list1.item1') }}</li>
          <li>{{ t('dayTrading.details1.list1.item2') }}</li>
          <li>{{ t('dayTrading.details1.list1.item3') }}</li>
          <li>{{ t('dayTrading.details1.list1.item4') }}</li>
          <li>{{ t('dayTrading.details1.list1.item5') }}</li>
        </ul>
        <p class="uk-margin-small-bottom">
          {{ t('dayTrading.details1.para3') }}
        </p>

        <hr class="info-divider">

        <h4>{{ t('dayTrading.details2.title') }}</h4>
        <p>
          {{ t('dayTrading.details2.para1') }}
        </p>
        <ImageFrame
          imgPath="projects/softwareDev/dayTrading/day-trading-architecture-overview.png"
          :captionText="t('dayTrading.details2.caption1')"
          :altText="t('dayTrading.details2.altText1')"
          widthPercent="100%"
        />
        <br>
        <p>
          {{ t('dayTrading.details2.para2') }}
          <br><br>
          {{ t('dayTrading.details2.para3') }}
          <br><br>
          {{ t('dayTrading.details2.para4') }}
          <br><br>
          {{ t('dayTrading.details2.para5') }}
          <br><br>
          {{ t('dayTrading.details2.para6') }}
          <br><br>
          {{ t('dayTrading.details2.para7') }}
          <br><br>
          {{ t('dayTrading.details2.para8') }}
        </p>
        <CTAButton
          :url="assetsSiteRootUrl + '/documents/day-trading-app-architecture-report.pdf'"
          :buttonText="t('dayTrading.details2.buttonText')"
          showOutline
          isNewTab
        />
        <br><br>
        <RelatedLinks
          :linkObjectsList="[
            {
              url: 'https://github.com/olivier361/Day-Trading-App',
              teaserText: t('dayTrading.details2.relatedLinks1'),
            },
            {
              url: assetsSiteRootUrl + '/documents/day-trading-app-architecture-report.pdf',
              teaserText: t('dayTrading.details2.relatedLinks2'),
            },
          ]"
        />
      </ProjectCard>

      <h2 id="video-editing">{{ t('section.videoEditing') }}</h2>

      <ProjectCard
        :heading="t('ytChannel.title')"
        :previewBackgroundImgPath="'projects/videoEditing/ytChannel/yt-channel-card-background-fade.png'"
        :previewImgList="[
          {
            imgPath: 'projects/videoEditing/ytChannel/grapple-dogs-cosmic-canines-indie-showcase-c.png',
            captionText: t('ytChannel.previewImg.caption1'),
            altText: t('ytChannel.previewImg.altText1'),
          },
          {
            imgPath: 'projects/videoEditing/ytChannel/mario-maker-2-post-release-discussion.png',
            captionText: t('ytChannel.previewImg.caption2'),
            altText: t('ytChannel.previewImg.altText2'),
          },
          {
            imgPath: 'projects/videoEditing/ytChannel/mario-maker-2-live-day4.png',
            captionText: t('ytChannel.previewImg.caption3'),
            altText: t('ytChannel.previewImg.altText3'),
          }
        ]"
      >
        <template #introCustom>
          <div
            :class="curViewportWidth <= 899 ? 'uk-flex image-first-mobile-custom' : 'uk-flex'"
            :style="{columnGap: '50px'}"
          >
            <p
              class="intro-paragraph"
              :style="curViewportWidth <= 899 ? {width: '100%', maxWidth: '100%'} : {}"
            >
              {{ t('ytChannel.introPara1', { years: yearsSinceString(6, 2016, 'eight years')}) }}
              <br><br>
              {{ t('ytChannel.introPara2') }}
              <br><br>
              {{ t('ytChannel.introPara3') }}
              <br><br>
              <CTAButton
                url="https://youtube.com/@skullkid_gaming"
                :buttonText="t('ytChannel.buttonText')"
                showOutline
                isNewTab
              />
            </p>
            <iframe
              class="uk-flex-1 yt-player"
              src="https://www.youtube.com/embed/j_YLEYkKQvs?si=CGaiFsYtrKDcCGD4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
        </template>

        <img
          class="ignore-info-section-padding"
          src="@/assets/projects/videoEditing/ytChannel/channel-art-banner.png"
          :alt="t('ytChannel.details1.altText1')"
        >
        <h4>{{ t('ytChannel.details1.title') }}</h4>
        <p>
          {{ t('ytChannel.details1.para1') }}
          <br><br>
          {{ t('ytChannel.details1.para2') }}
        </p>
        <RelatedLinks
          :linkObjectsList="[
            {
              url: 'https://www.youtube.com/playlist?list=PLVJBFGg5a3Kde9MNa6N2SP1hQbW_5_53w',
              teaserText: t('ytChannel.details1.relatedLinks1'),
            },
          ]"
        />
        <div
          class="uk-flex"
          :style="curViewportWidth <= 899 ? {flexDirection: 'column', gap: '25px'} : {gap: '25px'}"
        >
          <iframe
            class="uk-flex-1 yt-player"
            src="https://www.youtube.com/embed/DnjNQs8edRg?si=5wSAFmQ_6Xd4uNsZ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
          <iframe
            class="uk-flex-1 yt-player"
            src="https://www.youtube.com/embed/clXuKTKAJkI?si=c25Z9WSiEIOJKHNl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>

        <hr class="info-divider">

        <h4>{{ t('ytChannel.details2.title') }}</h4>
        <div
          :class="curViewportWidth <= 899 ? 'uk-flex image-first-mobile-custom' : 'uk-flex'"
          :style="{columnGap: '50px'}"
        >
          <div class="uk-flex-1">
            <p>
              {{ t('ytChannel.details2.para1') }}
              <br><br>
              {{ t('ytChannel.details2.para2') }}
            </p>
            <RelatedLinks
              :linkObjectsList="[
                {
                  url: 'https://www.youtube.com/playlist?list=PLVJBFGg5a3KeeyuhUlxwrVxV4vLif1Xea',
                  teaserText: t('ytChannel.details2.relatedLinks1'),
                },
              ]"
            />
          </div>
          <iframe
            class="uk-flex-1 yt-player"
            src="https://www.youtube.com/embed/SLfkUEi9uas?si=u0ssolygWuXG_SeT"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>

        <hr class="info-divider">

        <h4>{{ t('ytChannel.details3.title') }}</h4>
        <div
          :class="curViewportWidth <= 899 ? 'uk-flex image-first-mobile-custom' : 'uk-flex'"
          :style="{columnGap: '50px'}"
        >
          <div class="uk-flex-1">
            <p>
              {{ t('ytChannel.details3.para1') }}
            </p>
            <RelatedLinks
              :linkObjectsList="[
                {
                  url: 'https://www.youtube.com/playlist?list=PLVJBFGg5a3KeYWbCrKsfVZj-jdDEKQouw',
                  teaserText: t('ytChannel.details3.relatedLinks1'),
                },
              ]"
            />
          </div>
          <iframe
            class="uk-flex-1 yt-player"
            src="https://www.youtube.com/embed/mI3L5TY7wMs?si=aKL52Bo6xzlYwdLs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>

        <hr class="info-divider">

        <h4>{{ t('ytChannel.details4.title') }}</h4>
        <div
          :class="curViewportWidth <= 899 ? 'uk-flex image-first-mobile-custom' : 'uk-flex'"
          :style="{columnGap: '50px'}"
        >
          <div class="uk-flex-1">
            <p>
              {{ t('ytChannel.details4.para1') }}
            </p>
            <RelatedLinks
              :linkObjectsList="[
                {
                  url: 'https://www.youtube.com/playlist?list=PLVJBFGg5a3Kc4kcmKdOi2uAAiRekXoCfC',
                  teaserText: t('ytChannel.details4.relatedLinks1'),
                },
              ]"
            />
          </div>
          <iframe
            class="uk-flex-1 yt-player"
            src="https://www.youtube.com/embed/SbvzrEPGuPo?si=iDL-ME4a1r68s5Rb"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
      </ProjectCard>
      <ProjectCard
        :heading="t('videoEditor.title')"
      >
        <template #introCustom>
          <div
            :class="curViewportWidth <= 899 ? 'uk-flex image-first-mobile-custom' : 'uk-flex'"
            :style="curViewportWidth <= 899 ? {columnGap: '50px'} : {columnGap: '50px', marginBottom: '25px'}"
          >
            <p
              class="intro-paragraph uk-margin-small-bottom"
              :style="curViewportWidth <= 899 ? {width: '100%', maxWidth: '100%'} : {}"
            >
              {{ t('videoEditor.introPara1') }}
              <br><br>
              {{ t('videoEditor.introPara2') }}
              <a href="/contact">{{ t('videoEditor.introPara3') }}</a>{{ t('videoEditor.introPara4') }}
            </p>
            <iframe
              class="uk-flex-1 yt-player"
              src="https://www.youtube.com/embed/dtKAsSJu2Jo?si=u1yoGGkYcEj78wo6"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
        </template>

        <h4>{{ t('videoEditor.details1.title') }}</h4>
        <p>
          {{ t('videoEditor.details1.para1') }}
          <br><br>
          {{ t('videoEditor.details1.para2') }}
          <br><br>
          {{ t('videoEditor.details1.para3') }}
          <br><br>
          {{ t('videoEditor.details1.para4') }}
        </p>
        <div class="grid-2-column">
          <iframe
            class="yt-player"
            src="https://www.youtube.com/embed/Vuz1db7gqwM?si=64EOQq_5Dda8OI8H"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
          <iframe
            class="yt-player"
            src="https://www.youtube.com/embed/4iEIe07z5Z0?si=akiMtHUyZpOqfWUk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
          <iframe
            class="yt-player"
            src="https://www.youtube.com/embed/kFVZINNxniM?si=eDyzYtPuDSKcd-t8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
          <iframe
            class="yt-player"
            src="https://www.youtube.com/embed/_p0KY3_zMUE?si=DSITd8cfWKk91LsZ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
      </ProjectCard>

      <h2 id="graphic-design">{{ t('section.graphicDesign') }}</h2>

      <ProjectCard
        :heading="t('flipnoteMag.title')"
        :previewImgList="[
          {
            imgPath: 'projects/graphicDesign/flipnoteMag/flipnote-magazine-spread-2-3.png',
            captionText: t('flipnoteMag.previewImg.caption1'),
            altText: t('flipnoteMag.previewImg.altText1'),
          },
          {
            imgPath: 'projects/graphicDesign/flipnoteMag/flipnote-magazine-spread-14-15.png',
            captionText: t('flipnoteMag.previewImg.caption2'),
            altText: t('flipnoteMag.previewImg.altText2'),
          },
          {
            imgPath: 'projects/graphicDesign/flipnoteMag/flipnote-magazine-spread-18-19.png',
            captionText: t('flipnoteMag.previewImg.caption3'),
            altText: t('flipnoteMag.previewImg.altText3'),
          }
        ]"
        :isExpandable="false"
        previewImgHeight="auto"
      >
        <template #introCustom>
          <div
            :class="curViewportWidth <= 899 ? 'uk-flex image-first-mobile-custom' : 'uk-flex'"
            :style="{columnGap: '50px'}"
          >
            <p
              class="intro-paragraph"
              :style="curViewportWidth <= 899 ? {width: '100%', maxWidth: '100%'} : {}"
            >
              {{ t('flipnoteMag.introPara1') }}
              <br><br>
              {{ t('flipnoteMag.introPara2') }}
              <br><br>
              {{ t('flipnoteMag.introPara3') }}
              <br><br>
              <CTAButton
                :url="assetsSiteRootUrl + '/documents/flipnote-magazine-spread-compressed.pdf'"
                :buttonText="t('flipnoteMag.buttonText')"
                showOutline
                isNewTab
              />
              <br><br>
              <i>{{ t('flipnoteMag.introPara4') }}</i>
            </p>
            <ImageFrame
              imgPath="projects/graphicDesign/flipnoteMag/flipnote-magazine-cover.png"
              :captionText="t('flipnoteMag.imgFrame.caption1')"
              :altText="t('flipnoteMag.imgFrame.altText1')"
              :height="curViewportWidth <= 899 ? 'auto' : '400px'"
              :widthPx="curViewportWidth <= 899 ? '100%' : 'auto'"
              :style="curViewportWidth <= 899 ? {} : { marginBottom: '50px' }"
            />
          </div>
        </template>
      </ProjectCard>
      <ProjectCard
        :heading="t('ytThumbnails.title')"
        :previewImgList="[
          {
            imgPath: 'projects/graphicDesign/ytThumbnails/kirby-and-the-forgotten-land-livestream-1.png',
            altText: t('ytThumbnails.previewImg.altText1'),
          },
          {
            imgPath: 'projects/graphicDesign/ytThumbnails/state-of-the-switch-2019-discussion.png',
            altText: t('ytThumbnails.previewImg.altText2'),
          },
          {
            imgPath: 'projects/graphicDesign/ytThumbnails/zelda-links-awakening-zelda-maker-discussion.png',
            altText: t('ytThumbnails.previewImg.altText3'),
          }
        ]"
        previewImgHeight="auto"
      >
        <template #introParagraph>
          {{ t('ytThumbnails.introPara1', { years: yearsSinceString(6, 2016, 'eight years')}) }}
          <br><br>
          {{ t('ytThumbnails.introPara2') }}
        </template>

        <h4>{{ t('ytThumbnails.details1.title') }}</h4>
        <p>
          {{ t('ytThumbnails.details1.para1') }}
          <br><br>
          {{ t('ytThumbnails.details1.para2') }}
          <a href="https://youtube.com/@skullkid_gaming" target="_blank">
            {{ t('ytThumbnails.details1.para3') }}</a>{{ t('ytThumbnails.details1.para4') }}
        </p>
        <ImageCollection
          :imgList="[
            {
              imgPath: 'projects/graphicDesign/ytThumbnails/mario-kart-8-dx-livestream-2.png',
              altText: t('ytThumbnails.details1.imgCollection1.altText1'),
            },
            {
              imgPath: 'projects/graphicDesign/ytThumbnails/kirby-and-the-forgotten-land-livestream-1.png',
              altText: t('ytThumbnails.details1.imgCollection1.altText2'),
            },
            {
              imgPath: 'projects/graphicDesign/ytThumbnails/zelda-links-awakening-zelda-maker-discussion.png',
              altText: t('ytThumbnails.details1.imgCollection1.altText3'),
            },
            {
              imgPath: 'projects/graphicDesign/ytThumbnails/holiday-livestream-2022.png',
              altText: t('ytThumbnails.details1.imgCollection1.altText4'),
            },
            {
              imgPath: 'projects/graphicDesign/ytThumbnails/portal-bridge-constructor.png',
              altText: t('ytThumbnails.details1.imgCollection1.altText5'),
            },
            {
              imgPath: 'projects/graphicDesign/ytThumbnails/steamworld-heist.png',
              altText: t('ytThumbnails.details1.imgCollection1.altText6'),
            },
            {
              imgPath: 'projects/graphicDesign/ytThumbnails/zelda-totk-unboxing-v2.png',
              altText: t('ytThumbnails.details1.imgCollection1.altText7'),
            },
            {
              imgPath: 'projects/graphicDesign/ytThumbnails/zelda-links-awakening-part1.png',
              altText: t('ytThumbnails.details1.imgCollection1.altText8'),
            },
            {
              imgPath: 'projects/graphicDesign/ytThumbnails/super-mario-bros-wonder-livestream-1.png',
              altText: t('ytThumbnails.details1.imgCollection1.altText9'),
            },
            {
              imgPath: 'projects/graphicDesign/ytThumbnails/mario-maker-2-live-day4.png',
              altText: t('ytThumbnails.details1.imgCollection1.altText10'),
            },
            {
              imgPath: 'projects/graphicDesign/ytThumbnails/state-of-the-switch-2019-discussion.png',
              altText: t('ytThumbnails.details1.imgCollection1.altText11'),
            },
            {
              imgPath: 'projects/graphicDesign/ytThumbnails/is-the-nintendo-switch-rushed.png',
              altText: t('ytThumbnails.details1.imgCollection1.altText12'),
            },
            {
              imgPath: 'projects/graphicDesign/ytThumbnails/smash-ultimate-discussion.png',
              altText: t('ytThumbnails.details1.imgCollection1.altText13'),
            },
            {
              imgPath: 'projects/graphicDesign/ytThumbnails/smash-ultimate-livestream.png',
              altText: t('ytThumbnails.details1.imgCollection1.altText14'),
            },
          ]"
          :autoSpanColumnCount="curViewportWidth <= mobileBreakpointPx ? 1 : 2"
        />
      </ProjectCard>
      <ProjectCard
        :heading="t('advertising.title')"
        :previewImgList="[
          {
            imgPath: 'projects/graphicDesign/advertising/pencil-ad.png',
            captionText: t('advertising.previewImg.caption1'),
            altText: t('advertising.previewImg.altText1'),
          },
          {
            imgPath: 'projects/graphicDesign/advertising/uhub-insta-ad-1.png',
            captionText: t('advertising.previewImg.caption2'),
            altText: t('advertising.previewImg.altText2'),
          },
          {
            imgPath: 'projects/graphicDesign/advertising/discord-server-ad-banner-v3.png',
            captionText: t('advertising.previewImg.caption3'),
            altText: t('advertising.previewImg.altText3'),
          },
        ]"
        :isExpandable="false"
        previewImgHeight="auto"
      >
        <template #introParagraph>
          {{ t('advertising.introPara1') }}
        </template>
      </ProjectCard>
    </div>
  </main>
</template>

<style scoped>

h1 {
  text-transform: uppercase;
  margin: 50px 0px;
  color: var(--color-page-title-text);
  font-size: var(--page-title-font-size);
  text-align: center;
}

h2 {
  text-transform: uppercase;
  margin: 50px 0px 25px 0px;
  color: var(--color-page-section-text);
  font-size: var(--page-section-font-size);
  text-align: center;
}

.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
}

.projects > h2 {
  /* When clicking an anchor link,
   * scolls 70px above the target element
   */
  scroll-margin-top: 70px;
}

.project-card {
  margin: 20px;
}

hr.info-divider {
  width: 100%;
  border-top: 1px solid var(--color-card-info-divider);
  margin: 50px 0px;
}

@media (max-width: 799px) {
  .image-first-mobile {
    display: flex;
    flex-direction: column-reverse;
    gap: 25px;
  }
}

.image-first-mobile-custom {
  display: flex;
  flex-direction: column-reverse;
  gap: 25px;
}

@media (max-width: 640px) {
  .project-card {
    margin: 20px 10px;
  }
}

/* @media (min-width: 1024px) {
  .projects {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */

.ignore-info-section-padding {
  width: calc(100% + calc(var(--card-border-radius) * 2));
  max-width: calc(100% + calc(var(--card-border-radius) * 2));
  margin:
    calc(-1 * calc(var(--card-border-radius) / 2))
    calc(-1 * var(--card-border-radius))
    0px
    calc(-1 * var(--card-border-radius));
}

@media (max-width: 640px) {
  .ignore-info-section-padding {
    width: calc(100% + var(--card-border-radius));
    max-width: calc(100% + var(--card-border-radius));
    margin:
      calc(-1 * calc(var(--card-border-radius) / 2))
      calc(-1 * calc(var(--card-border-radius) / 2))
      0px
      calc(-1 * calc(var(--card-border-radius) / 2))
  }
}

.grid-2-column {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
}

.grid-2-column > * {
  width: calc(50% - 12.5px);
}

@media (max-width: 899px) {
  .grid-2-column {
    flex-direction: column;
  }

  .grid-2-column > * {
    width: 100%;
  }
}

</style>
