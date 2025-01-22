<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import ImageCollection from '@/components/ImageCollection.vue';
import ImageFrame from '@/components/ImageFrame.vue';

// TODO: remove this code after the performance test is done
let placeholderImageCounter = 0;

// TODO: remove this code after the performance test is done
function incrementPlaceholderImageCounter(){
  return ++placeholderImageCounter;
}

</script>

<template>
  <main>
    <div class="projects">
      <h1>Projects</h1>
      <ProjectCard
        :heading="'Project 1'"
        :previewBackgroundImgPath="'2d-pixel-game-fade.png'"
        :previewImgList="[
          { imgPath: '2D-Pixel-Game.png', captionText: '2D Pixel Platformer Game. Making the text longer to test how captions wrap when they are longer than the displayed image above.', altText: 'A screenshot of a colorful 16-bit 2D platformer featuring a fox character.' },
          { imgPath: 'ruby-adventure.png', captionText: 'Ruby\'s Adventure Game. Making the text longer to test how captions wrap when they are longer than the displayed image above.', altText: 'A top-down 2D game featuring multiple fantasy characters walking in a prototype level.' },
          { imgPath: 'test-image.png', captionText: 'A test image with a long caption to test how the caption wraps when it is longer than the image. The caption needs to be very long to wrap around even a big photo.', altText: 'test image' }
        ]"
      >
        <template #introParagraph>
          One or two sentence paragraphs describing the section in general. EX: I've been making games in Unity since 2020. Below are a handful of game prototypes I have made.
          <br><br>
          A few more lines of text for these cards to be a bit longer. These cards will have a "view all" button to open and close the details of the card below the thich white line.
        </template>

        <h3>Project Title 1</h3>
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
            imgPath="2D-Pixel-Game.png"
            captionText="Here is an image caption. its italic and smaller than regular text. Ideally a different font even maybe and shouldn't be longer than two to three lines of text."
            altText="A screenshot of a colorful 16-bit 2D platformer featuring a fox character."
          />
        </div>
        <ImageCollection
          :imgList="[
            { imgPath: 'cube-game.png', captionText: 'Cube Game. Making the text longer to test how captions wrap when they are longer than the displayed image above. Let\'s make this row even longer to test image spacing when a caption is longer than others.', altText: 'An endless runner game featuring a red cube character on a green surface with obstacles ahead.' },
            { imgPath: 'ruby-adventure.png', captionText: 'Ruby\'s Adventure Game. Making the text longer to test how captions wrap when they are longer than the displayed image above.', altText: 'A top-down 2D game featuring multiple fantasy characters walking in a prototype level.' },
            { imgPath: 'test-image.png', captionText: 'A test image with a long caption to test how the caption wraps when it is longer than the image. The caption needs to be very long to wrap around even a big photo.', altText: 'test image' }
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
