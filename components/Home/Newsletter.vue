<template>
  <div>
    <div class="mb-6 flex items-center gap-3">
      <div
        class="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10"
      >
        <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
      </div>
      <h2 class="uppercase text-xs font-semibold text-gray-400">
        STAY IN TOUCH
      </h2>
    </div>
    <template v-if="false">
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div class="flex items-center gap-3 mt-6">
        <UInput
          placeholder="Email Address"
          icon="i-heroicons-envelope"
          class="flex-1"
          size="lg"
        />
        <UButton label="Join &rarr;" size="lg" color="black" />
      </div>
    </template>
    <div class="space-y-5">
      <NuxtLink
        v-for="link in links"
        :key="link.icon"
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
  </div>
</template>

sc
<script lang="ts" setup>
const links = [
  {
    name: "Resume",
    url: "/resume.pdf",
    icon: "mdi:file-pdf",
  },
  {
    name: "Schedule a Call",
    url: "https://cal.com/mohammed-zeeshan/15min",
    icon: "material-symbols:auto-schedule",
  },
];
</script>
