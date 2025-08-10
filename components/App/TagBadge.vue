<template>
  <NuxtLink
    :to="`/articles/tags/${encodeURIComponent(tag)}`"
    class="inline-flex items-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 ring-1 ring-inset ring-gray-200 dark:ring-gray-700 transition-all duration-200 hover:text-gray-900 dark:hover:text-gray-100 hover:ring-gray-300 dark:hover:ring-gray-600 hover:shadow-sm"
    :aria-label="`View all articles tagged with ${tag}`"
    rel="tag"
  >
    {{ tag }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    required: true,
  },
});
</script>
