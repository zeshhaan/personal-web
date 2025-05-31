<template>
  <div class="space-y-6">
    <NuxtImg
      src="/logomark.jpeg"
      alt="Mohammed Zeeshan Logo Mark"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px"
      placeholder
      format="webp"
    />
    <h1
      class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
    >
      Hello!
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      I'm an IT consultant from Ajman, UAE with a passion for crafting consumer
      application and AI agents that make people's lives easier and save time. I
      specialize in building intuitive, efficient solutions that address
      real-world problems.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      My expertise spans web and mobile development, with a focus on creating
      exceptional, accessible user experiences. When I'm not coding, I cherish
      time with my family as a husband and father.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      Currently, I'm working on exciting projects like an AI Travel Agent that
      automates complex booking processes, and my side project
      <a
        href="https://getfeedbacks.co/"
        target="_blank"
        class="text-teal-500 tracking-tight"
        >getfeedbacks.co</a
      >, which helps businesses capture customer reviews through voice
      recording.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      I'm open to consulting on rewarding and impactful projects that challenge
      conventional approaches. If you're looking for someone to help build
      meaningful software solutions, I'd love to connect.
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Mohammed Zeeshan | Software Engineer",
  description:
    "Software consultant from UAE specializing in consumer software and AI agents. Building web and mobile applications that solve real problems and create meaningful impact.",
});
</script>
