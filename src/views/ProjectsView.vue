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
        :introParagraph="'This is the intro paragraph.'"
      >
        Test content from parent!
        <ImageCollection :imgList="[
            { imgPath: '2D-Pixel-Game.png', captionText: '2D Pixel Platformer Game. Making the text longer to test how captions wrap when they are longer than the displayed image above.', altText: 'A screenshot of a colorful 16-bit 2D platformer featuring a fox character.' },
            { imgPath: 'cube-game.png', captionText: 'Cube Game. Making the text longer to test how captions wrap when they are longer than the displayed image above.', altText: 'An endless runner game featuring a red cube character on a green surface with obstacles ahead.' },
            { imgPath: 'ruby-adventure.png', captionText: 'Ruby\'s Adventure Game. Making the text longer to test how captions wrap when they are longer than the displayed image above.', altText: 'A top-down 2D game featuring multiple fantasy characters walking in a prototype level.' },
            { imgPath: 'test-image.png', captionText: 'A test image with a long caption to test how the caption wraps when it is longer than the image. The caption needs to be very long to wrap around even a big photo.', altText: 'test image' }
          ]"
          imgWidth="320px"
        />
      </ProjectCard>
      <ProjectCard 
        :heading="'Project 2'"
        :introParagraph="'This is another intro paragraph.'"
      >
        More test content from parent!<br>
        This content<br>
        is on multiple<br>
        lines.
      </ProjectCard>
      <ProjectCard
        :heading="'Project 3'"
        :introParagraph="'This is the third intro paragraph. This card has no expandable content.'"
        :isExpandable="false"
      >
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
