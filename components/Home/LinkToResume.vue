<template>
  <div class="space-y-5">
    <NuxtLink
      :to="link.url"
      target="_blank"
      external
      class="flex items-end gap-4 dark:hover:text-gray-300 group"
    >
      <span class="text-sm"> {{ link.name }}</span>
      <div
        class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
      ></div>
      <Icon :name="link.icon" class="w-6 h-6"></Icon>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const link = {
  name: " Resume",
  url: "/resume.pdf",
  icon: "mdi:file-pdf",
};
</script>
