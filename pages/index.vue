<template>
  <main class="min-h-screen">
    <div class="space-y-24">
      <HomeIntro />
      <HomeSocialLinks />
      <HomeFeaturedProjects v-if="false" />
      <HomeFeaturedArticles />
      <HomeTestimonials />
      <HomeNewsletter />
    </div>
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Mohammed Zeeshan | Software Engineer",
  description:
    "IT consultant from UAE specializing in consumer software and AI agents. Building web and mobile applications that solve real problems and create meaningful impact.",
});
</script>
