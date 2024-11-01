<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import ImageCollection from '@/components/ImageCollection.vue';
</script>

<template>
  <main>
    <div class="projects">
      <h1>This is the Projects page</h1>
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
        Test content from parent!
        <ImageCollection :imgList="[
            { imgPath: '2D-Pixel-Game.png', captionText: '2D Pixel Platformer Game. Making the text longer to test how captions wrap when they are longer than the displayed image above.', altText: 'A screenshot of a colorful 16-bit 2D platformer featuring a fox character.' },
            { imgPath: 'cube-game.png', captionText: 'Cube Game. Making the text longer to test how captions wrap when they are longer than the displayed image above. Let\'s make this row even longer to test image spacing when a caption is longer than others.', altText: 'An endless runner game featuring a red cube character on a green surface with obstacles ahead.' },
            { imgPath: 'ruby-adventure.png', captionText: 'Ruby\'s Adventure Game. Making the text longer to test how captions wrap when they are longer than the displayed image above.', altText: 'A top-down 2D game featuring multiple fantasy characters walking in a prototype level.' },
            { imgPath: 'test-image.png', captionText: 'A test image with a long caption to test how the caption wraps when it is longer than the image. The caption needs to be very long to wrap around even a big photo.', altText: 'test image' }
          ]"
          imgWidth="320px"
          imgHeight="180px"
        />
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
    </div>
  </main>
</template>

<style>

.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-card {
  margin: 20px 0px;
}

/* @media (min-width: 1024px) {
  .projects {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
