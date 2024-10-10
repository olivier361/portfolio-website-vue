<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
</script>

<template>
  <main>
    <div class="projects">
      <h1>This is the Projects page</h1>
    </div>
    <ProjectCard />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .projects {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
