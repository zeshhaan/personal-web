<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      TESTIMONIALS
    </h2>
    <div class="space-y-12">
      <div v-for="(testimonial, id) in testimonials" :key="id">
        <blockquote>
          <span class="font-semibold italic">
            &#8220;{{ testimonial.title }}&#8221; </span
          >&nbsp; - {{ testimonial.author }}
        </blockquote>
        <NuxtImg
          :width="testimonial.width"
          :height="testimonial.height"
          :src="testimonial.url"
          format="webp"
          class="rounded-lg ring-1 ring-gray-200 ring-offset-4 mt-4 mb-2"
          placeholder
          :alt="`testimonial of ${testimonial.author}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const testimonials = [
  {
    title: "Easy to communicate with...",
    author: "Tanul",
    url: "/testimonials/testimonial.png",
    width: 1084,
    height: 636,
  },
  {
    title: "This was fun...",
    author: "Facebook user",
    url: "/testimonials/testimonial-2.png",
    width: 1250,
    height: 380,
  },
  {
    title: "Zeeshan also has strong design sense...",
    author: "Elizabeth Slavitt",
    url: "/testimonials/testimonial-3.png",
    width: 1350,
    height: 436,
  },
  {
    title: "He understands the requirements very well...",
    author: "Parbhat Puri",
    url: "/testimonials/testimonial-4.png",
    width: 2050,
    height: 436,
  },
];
</script>
