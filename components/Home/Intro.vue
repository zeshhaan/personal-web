<template>
  <div class="space-y-6">
    <NuxtImg
      src="/notion-mark.png"
      alt="Mohammed Zeeshan Logo Mark"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px"
      placeholder
      format="webp"
    />
    <h1
      ref="greetingRef"
      class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
    >
      Hello!
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      I'm an IT consultant based in Dubai, building smart consumer applications
      and AI agents that save people time and make life easier.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      I focus on intuitive, efficient solutions that solve real-world problems
      blending design, development, and automation in meaningful ways.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      I specialize in modern web and mobile development, with a strong emphasis
      on accessible, user-centered design. When I’m not coding, I enjoy life as
      a husband and father.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      I'm building an AI Travel Agent that simplifies complex bookings, saving
      businesses hours each week. and my side project
      <a
        href="https://getfeedbacks.co/"
        target="_blank"
        class="text-teal-500 tracking-tight"
        >getfeedbacks.co</a
      >, a voice-based feedback tool that lets customers leave reviews
      effortlessly.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      I'm always open to consulting on challenging, high-impact projects. If
      you're looking for a reliable partner to craft thoughtful, effective
      software, let’s connect.
    </p>
  </div>
</template>

<script setup lang="ts">
const { scrambleGreeting } = useScrambleText();
const greetingRef = ref<HTMLElement>();

onMounted(() => {
  if (greetingRef.value) {
    scrambleGreeting(greetingRef.value, {
      duration: 1.2,
      revealDelay: 0.2,
      chars: "upperCase",
      speed: 1.2,
    });
  }
});

useSeoMeta({
  title: "Mohammed Zeeshan | Software Engineer",
  description:
    "Software consultant from UAE specializing in consumer software and AI agents. Building web and mobile applications that solve real problems and create meaningful impact.",
});
</script>
