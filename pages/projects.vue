<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Projects" :description="description" />
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </main>
</template>

<script setup>
const description =
  "I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.";

definePageMeta({
  pageTransition: {
    name: 'fade-scale',
    mode: 'out-in'
  }
});

useSeoMeta({
  title: "Projects | Mohammed Zeeshan",
  description,
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
  filter: blur(3px);
}

.fade-scale-leave-to {
  opacity: 0;
  transform: scale(1.1) translateY(-20px);
  filter: blur(3px);
}
</style>
