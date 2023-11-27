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
      I'm Zeeshan, I'm a software engineer from Pune, India. I like to call
      myself a web 2 programmer and a language learner. I loves writing code for
      solving human problems and passionate about building world-class products
      that care about user experience and making our lives easier. I specialize
      in CSS, Javascript, & Vue. Coming from a design background, I love hacking
      web using CSS and designing performant and accessible UIs.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      By day, I'm a Frontend Engineer at
      <a
        href="https://foodmarkethub.com"
        target="_blank"
        class="text-teal-500 tracking-tight"
        >Food Market Hub</a
      >, and by night (and weekends), I'm busy learning and writing Elixir code
      or hanging out at discord, engaging with the programming community, and
      <a
        class="text-teal-500 tracking-tight"
        href="https://t.me/+Vwcut-SnzEEwNjhl"
        target="_blank"
      >
        helping friends learn to code.</a
      >
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Mohammed Zeeshan",
  description:
    "I'm Zeeshan, your friendly neighborhood software engineer from Pune, India. I specialize in building web applications and sites using CSS, Javascript & Vue.",
});
</script>
