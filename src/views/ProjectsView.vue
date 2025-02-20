<script setup>
import { useI18n } from 'vue-i18n';
import en from '@/locales/en/ProjectsView.i18n.en.js';

import ProjectCard from '@/components/ProjectCard.vue';
import ImageCollection from '@/components/ImageCollection.vue';
import ImageFrame from '@/components/ImageFrame.vue';
import CTAButton from '@/components/CTAButton.vue';
import RelatedLinks from '@/components/RelatedLinks.vue';

const { t } = useI18n({
  messages: { en: en.en },
});

// TODO: remove this code after the performance test is done
let placeholderImageCounter = 0;

// TODO: remove this code after the performance test is done
function incrementPlaceholderImageCounter() {
  return ++placeholderImageCounter;
}

</script>

<!-- TODO: re-enable @stylistic/max-len once we add the real content -->
<!-- eslint-disable @stylistic/max-len -->
<template>
  <main>
    <div class="projects">
      <h1>{{ t('title') }}</h1>
      <h2>{{ t('section.gameDev') }}</h2>
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
        <div class="uk-flex" :style="{columnGap: '50px', marginBottom: '50px'}">
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
        <div class="uk-flex" :style="{columnGap: '50px', marginBottom: '50px'}">
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
        <div class="uk-flex" :style="{columnGap: '50px', marginBottom: '50px'}">
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
              // TODO: Host these resources on our site
              // {
              //   url: '/TODO',
              //   teaserText: t('previousGames.relatedLinks1'),
              // },
              // {
              //   url: '/TODO',
              //   teaserText: t('previousGames.relatedLinks2'),
              // },
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
        />

        <hr class="info-divider">

        <h4>{{ t('previousGames.details2.title') }}</h4>
        <div class="uk-flex" :style="{columnGap: '50px', marginBottom: '50px'}">
          <p>
            {{ t('previousGames.details2.para1') }}
          </p>
          <ImageFrame
            imgPath="projects/gameDev/previousGames/carnet-de-jeux-cover.png"
            :captionText="t('previousGames.details2.caption1')"
            :altText="t('previousGames.details2.altText1')"
            widthPx="250px"
          />
        </div>

        <hr class="info-divider">

        <h4>{{ t('previousGames.details3.title') }}</h4>
        <p>
          {{ t('previousGames.details3.para1') }}
        </p>
        <!-- TODO: Host the game on the site -->
        <!-- <CTAButton
          url="/games/TODO"
          :buttonText="t('previousGames.details3.buttonText')"
          isFilled
          isNewTab
        /> -->
      </ProjectCard>
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
          imgWidth="490px"
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
          imgWidth="490px"
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
          imgWidth="490px"
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
        />

        <hr class="info-divider">

        <h4>{{ t('computerAnimAndRender.details3.title') }}</h4>
        <div class="uk-flex" :style="{columnGap: '50px'}">
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
                // TODO: Create a public version of the repository for the tetris project
                // {
                //   url: '/TODO',
                //   teaserText: t('computerAnimAndRender.details3.relatedLinks1'),
                // },
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
          imgWidth="490px"
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
          imgWidth="490px"
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
          imgWidth="490px"
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
        />

      </ProjectCard>
      <ProjectCard
        :heading="t('project1.title')"
        :previewBackgroundImgPath="'2d-pixel-game-fade.png'"
        :previewImgList="[
          {
            imgPath: '2D-Pixel-Game.png',
            captionText: '2D Pixel Platformer Game. Making the text longer to test how captions wrap when they are longer than the displayed image above.', // eslint-disable-line @stylistic/max-len
            altText: 'A screenshot of a colorful 16-bit 2D platformer featuring a fox character.'
          },
          {
            imgPath: 'ruby-adventure.png',
            captionText: 'Ruby\'s Adventure Game. Making the text longer to test how captions wrap when they are longer than the displayed image above.', // eslint-disable-line @stylistic/max-len
            altText: 'A top-down 2D game featuring multiple fantasy characters walking in a prototype level.' // eslint-disable-line @stylistic/max-len
          },
          {
            imgPath: 'test-image.png',
            captionText: 'A test image with a long caption to test how the caption wraps when it is longer than the image. The caption needs to be very long to wrap around even a big photo.', // eslint-disable-line @stylistic/max-len
            altText: 'test image'
          }
        ]"
      >
        <template #introParagraph>
          {{ t('project1.introParaPart1') }}
          <br><br>
          {{ t('project1.introParaPart2') }}
        </template>

        <h3>Project Title 1</h3>
        <div class="uk-flex" :style="{columnGap: '50px', marginBottom: '50px'}">
          <p class="uk-flex-1">
            Three to twelve sentences describing the project in general.
            These sentences can be split into multiple paragraphs if needed.
            Projects that require lengthy detailed explanations will actually
            only feature a brief summary of the key "must know" details
            on the project page. They will include a button at the end of their project section.
            This button will direct users to a full dedicated page talking about the project.
            <br><br>
            Projects that can be summarized more concisely may opt to not have a dedicated page
            and instead explain the entirety of what needs to be said right here
            in the general project page, given that it fits in the 3 to 12 sentence
            approximate requirement.
            <br><br>
            <b>
              Projects with many photos like this one will likely not have a read more button
              since everything is likely well explained and showcased here.
            </b>
            <br><br>
            Notice how we used bold sentences mid-paragraph above.
          </p>
          <ImageFrame
            class="uk-flex-1"
            imgPath="2D-Pixel-Game.png"
            captionText="Here is an image caption. its italic and smaller than regular text. Ideally a different font even maybe and shouldn't be longer than two to three lines of text."
            altText="A screenshot of a colorful 16-bit 2D platformer featuring a fox character."
          />
        </div>
        <ImageCollection
          :imgList="[
            {
              imgPath: 'cube-game.png',
              captionText: 'Cube Game. Making the text longer to test how captions wrap when they are longer than the displayed image above. Let\'s make this row even longer to test image spacing when a caption is longer than others.',
              altText: 'An endless runner game featuring a red cube character on a green surface with obstacles ahead.'
            },
            {
              imgPath: 'ruby-adventure.png',
              captionText: 'Ruby\'s Adventure Game. Making the text longer to test how captions wrap when they are longer than the displayed image above.',
              altText: 'A top-down 2D game featuring multiple fantasy characters walking in a prototype level.'
            },
            {
              imgPath: 'test-image.png',
              captionText: 'A test image with a long caption to test how the caption wraps when it is longer than the image. The caption needs to be very long to wrap around even a big photo.',
              altText: 'test image'
            }
          ]"
          imgWidth="320px"
          imgHeight="180px"
        />

        <hr class="info-divider">

        <h3>Project Title 2</h3>
        <div class="uk-flex" :style="{columnGap: '50px'}">
          <p class="uk-flex-1">
            Three to twelve sentences describing the project in general. These sentences can be split into multiple paragraphs if needed.
            Projects that require lengthy detailed explanations will actually only feature a brief summary of the key "must know" details
            on the project page. They will include a button at the end of their project section. This button will direct users to a full
            dedicated page talking about the project.
            <br><br>
            Projects that can be summarized more concisely may opt to not have a dedicated page and instead explain the entirety of what
            needs to be said right here in the general project page, given that it fits in the 3 to 12 sentence approximate requirement.
            <br><br>
            <b>
              Projects with many photos like this one will likely not have a read more button since everything is likely well explained
              and showcased here.
            </b>
            <br><br>
            Notice how we used bold sentences mid-paragraph above.
          </p>
          <ImageFrame
            class="uk-flex-1"
            imgPath="ruby-adventure.png"
            captionText="Here is an image caption. its italic and smaller than regular text. Ideally a different font even maybe and shouldn't be longer than two to three lines of text."
            altText="A screenshot of a colorful 16-bit 2D platformer featuring a fox character."
          />
        </div>

        <hr class="info-divider">

        <h3>Project Title 3</h3>
        <div class="uk-flex" :style="{columnGap: '50px'}">
          <p class="uk-flex-1">
            Three to twelve sentences describing the project in general. These sentences can be split into multiple paragraphs if needed.
            Projects that require lengthy detailed explanations will actually only feature a brief summary of the key "must know" details
            on the project page. They will include a button at the end of their project section. This button will direct users to a full
            dedicated page talking about the project.
            <br><br>
            Projects that can be summarized more concisely may opt to not have a dedicated page and instead explain the entirety of what
            needs to be said right here in the general project page, given that it fits in the 3 to 12 sentence approximate requirement.
            <br><br>
            <b>
              Projects with many photos like this one will likely not have a read more button since everything is likely well explained
              and showcased here.
            </b>
            <br><br>
            Notice how we used bold sentences mid-paragraph above.
          </p>
          <ImageFrame
            class="uk-flex-1"
            imgPath="cube-game.png"
            captionText="Here is an image caption. its italic and smaller than regular text. Ideally a different font even maybe and shouldn't be longer than two to three lines of text."
            altText="A screenshot of a colorful 16-bit 2D platformer featuring a fox character."
          />
        </div>
      </ProjectCard>
      <ProjectCard
        :heading="'Project 2'"
      >
        <template #introParagraph>
          This is another intro paragraph.
        </template>
        More test content from parent!<br>
        This content<br>
        is on multiple<br>
        lines.
      </ProjectCard>
      <ProjectCard
        :heading="'Project 3'"
        :isExpandable="false"
      >
        <template #introParagraph>
          This is the third intro paragraph. This card has no expandable content.
          <br><br>
          Here are some samples of the CTAButton component:
          <br><br>
          <CTAButton
            url="/"
          />
          <br><br>
          <CTAButton
            url="/"
            showOutline
          />
          <br><br>
          <CTAButton
            url="/"
            isFilled
            isNewTab
          />
          <br><br>
          <CTAButton
            url="/"
            buttonText="Custom Text!"
            isFilled
            :showSymbol="false"
          />
        </template>
      </ProjectCard>

      <!-- Start of auto-generated cards for performance test -->

      <ProjectCard
        v-for="i in 15" :key="i"
        :heading="`Project Auto-generated ${i}`"
        :previewBackgroundImgPath="'2d-pixel-game-fade.png'"
        :previewImgList="[
          {
            imgPath: `https://picsum.photos/1920/1080?random=${incrementPlaceholderImageCounter()}`,
            isUrlPath: true,
            captionText: `Here is an image caption. its italic and smaller than regular text. Ideally a different font even maybe and shouldn't be longer than two to three lines of text.`
          },
          {
            imgPath: `https://picsum.photos/1920/1080?random=${incrementPlaceholderImageCounter()}`,
            isUrlPath: true,
            captionText: `Here is an image caption. its italic and smaller than regular text. Ideally a different font even maybe and shouldn't be longer than two to three lines of text.`
          },
          {
            imgPath: `https://picsum.photos/1920/1080?random=${incrementPlaceholderImageCounter()}`,
            isUrlPath: true,
            captionText: `Here is an image caption. its italic and smaller than regular text. Ideally a different font even maybe and shouldn't be longer than two to three lines of text.`
          }
        ]"
      >
        <template #introParagraph>
          One or two sentence paragraphs describing the section in general. EX: I've been making games in Unity since 2020. Below are a handful of game prototypes I have made.
          <br><br>
          A few more lines of text for these cards to be a bit longer. These cards will have a "view all" button to open and close the details of the card below the thich white line.
        </template>

        <template v-for="j in 2" :key="j">
          <h3>Project Title A{{ j }} - Auto-generated {{ i }}</h3>
          <div class="uk-flex" :style="{columnGap: '50px', marginBottom: '50px'}">
            <p class="uk-flex-1">
              Three to twelve sentences describing the project in general. These sentences can be split into multiple paragraphs if needed.
              Projects that require lengthy detailed explanations will actually only feature a brief summary of the key "must know" details
              on the project page. They will include a button at the end of their project section. This button will direct users to a full
              dedicated page talking about the project.
              <br><br>
              Projects that can be summarized more concisely may opt to not have a dedicated page and instead explain the entirety of what
              needs to be said right here in the general project page, given that it fits in the 3 to 12 sentence approximate requirement.
              <br><br>
              <b>
                Projects with many photos like this one will likely not have a read more button since everything is likely well explained
                and showcased here.
              </b>
              <br><br>
              Notice how we used bold sentences mid-paragraph above.
            </p>
            <ImageFrame
              class="uk-flex-1"
              :imgPath="`https://picsum.photos/1920/1080?random=${incrementPlaceholderImageCounter()}`"
              :isUrlPath="true"
              captionText="Here is an image caption. its italic and smaller than regular text. Ideally a different font even maybe and shouldn't be longer than two to three lines of text."
            />
          </div>
          <ImageCollection
            :imgList="[
              {
                imgPath: `https://picsum.photos/1920/1080?random=${incrementPlaceholderImageCounter()}`,
                isUrlPath: true,
                captionText: `Here is an image caption. its italic and smaller than regular text. Ideally a different font even maybe and shouldn't be longer than two to three lines of text.`
              },
              {
                imgPath: `https://picsum.photos/1920/1080?random=${incrementPlaceholderImageCounter()}`,
                isUrlPath: true,
                captionText: `Here is an image caption. its italic and smaller than regular text. Ideally a different font even maybe and shouldn't be longer than two to three lines of text.`
              },
              {
                imgPath: `https://picsum.photos/1920/1080?random=${incrementPlaceholderImageCounter()}`,
                isUrlPath: true,
                captionText: `Here is an image caption. its italic and smaller than regular text. Ideally a different font even maybe and shouldn't be longer than two to three lines of text.`
              }
            ]"
            imgWidth="320px"
            imgHeight="180px"
          />

          <hr class="info-divider">

          <h3>Project Title B{{ j }} - Auto-generated {{ i }}</h3>
          <div class="uk-flex" :style="{columnGap: '50px'}">
            <p class="uk-flex-1">
              Three to twelve sentences describing the project in general. These sentences can be split into multiple paragraphs if needed.
              Projects that require lengthy detailed explanations will actually only feature a brief summary of the key "must know" details
              on the project page. They will include a button at the end of their project section. This button will direct users to a full
              dedicated page talking about the project.
              <br><br>
              Projects that can be summarized more concisely may opt to not have a dedicated page and instead explain the entirety of what
              needs to be said right here in the general project page, given that it fits in the 3 to 12 sentence approximate requirement.
              <br><br>
              <b>
                Projects with many photos like this one will likely not have a read more button since everything is likely well explained
                and showcased here.
              </b>
              <br><br>
              Notice how we used bold sentences mid-paragraph above.
            </p>
            <ImageFrame
              class="uk-flex-1"
              :imgPath="`https://picsum.photos/1920/1080?random=${incrementPlaceholderImageCounter()}`"
              :isUrlPath="true"
              captionText="Here is an image caption. its italic and smaller than regular text. Ideally a different font even maybe and shouldn't be longer than two to three lines of text."
            />
          </div>

          <hr class="info-divider">
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
}

.project-card {
  margin: 20px;
}

hr.info-divider {
  width: 100%;
  border-top: 1px solid var(--color-card-info-divider);
  margin: 50px 0px;
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
</style>
