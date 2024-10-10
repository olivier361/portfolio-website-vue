<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
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
/* @media (min-width: 1024px) {
  .projects {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
