<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Lab" :description="description" />
    <div class="space-y-24">
      <ContentList path="/lab" v-slot="{ list }">
        <ContentQuery
          v-for="item in list"
          :key="item._path"
          :path="item._path"
          find="one"
          v-slot="{ data }"
        >
          <ContentRenderer>
            <ContentRendererMarkdown :value="data" />
          </ContentRenderer>
        </ContentQuery>
      </ContentList>
    </div>
  </main>
</template>

<script setup>
const description = "Some random experiments with UI I do in my free time.";

definePageMeta({
  pageTransition: {
    name: 'slide-up',
    mode: 'out-in'
  }
});

useSeoMeta({
  title: "Lab | Mohammed Zeeshan",
  description,
});
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(1.05);
}
</style>