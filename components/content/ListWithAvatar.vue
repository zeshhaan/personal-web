<template>
  <ul class="space-y-2">
    <li v-for="list in lists" :key="list.id">
      <a
        :href="list.url"
        target="_blank"
        class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"
      >
        <UAvatar
          :src="getThumbnail(list.url)"
          :alt="list.label"
          :ui="{ rounded: 'rounded-md' }"
        />
        <p class="truncate text-gray-700 dark:text-gray-200">
          {{ list.label }}
        </p>
        <span class="flex-1"></span>
        <span class="text-xs font-medium text-gray-400 dark:text-gray-600">
          {{ getHost(list.url) }}
        </span>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface List {
  id: number;
  label: string;
  url: string;
}

defineProps({
  lists: {
    type: Array as PropType<List[]>,
    required: true,
  },
});

function getHost(url: string) {
  const parsedUrl = new URL(url);
  let host = parsedUrl.host;
  if (host.startsWith("www.")) {
    host = host.substring(4);
  }
  return host;
}

function getThumbnail(url: string) {
  const host = getHost(url);
  return `https://logo.clearbit.com/${host}`;
}
</script>
