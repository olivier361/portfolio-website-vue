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
                  teaserText: 'View “Cube Game” on GitHub',
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
                  teaserText: `View “Ruby's Adventure 2D” on GitHub`,
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
}

h2 {
  text-transform: uppercase;
  margin: 50px 0px 25px 0px;
  color: var(--color-page-section-text);
  font-size: var(--page-section-font-size);
}

.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-card {
  margin: 20px 0px;
}

hr.info-divider {
  width: 100%;
  border-top: 1px solid var(--color-card-info-divider);
  margin: 50px 0px;
}

/* @media (min-width: 1024px) {
  .projects {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
