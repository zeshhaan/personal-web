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
  title: "Mohammed Zeeshan | Software Consultant",
  description:
    "Licensed IT consultant in UAE specializing in consumer software and AI agents. Building web and mobile applications that solve real problems and create meaningful impact.",
});

// Define OG Image for the home page
defineOgImageComponent('Personal', {
  ogTitle: 'Building softwares that solve real problems and create meaningful impact.',
  bottomLeft: 'Software Consultant',
  bottomRight: 'Dubai, UAE',
})
</script>
