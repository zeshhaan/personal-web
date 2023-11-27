<template>
  <main class="min-h-screen">
    <AppHeader class="mb-8" title="Bookmarks" :description="description" />
    <ul class="space-y-2">
      <li v-for="bookmark in bookmarks" :key="bookmark.id">
        <a
          :href="bookmark.url"
          target="_blank"
          class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"
        >
          <UAvatar
            :src="getThumbnail(bookmark.url)"
            :alt="bookmark.label"
            :ui="{ rounded: 'rounded-md' }"
          />
          <p class="truncate text-gray-700 dark:text-gray-200">
            {{ bookmark.label }}
          </p>
          <span class="flex-1"></span>
          <span class="text-xs font-medium text-gray-400 dark:text-gray-600">
            {{ getHost(bookmark.url) }}
          </span>
        </a>
      </li>
    </ul>
  </main>
</template>

<script setup>
const description =
  "Awesome things I've found on the internet. This page is still WIP, I want to add search like bmrks.com";
useSeoMeta({
  title: "Bookmarks | Mohammed Zeeshan",
  description,
});

const bookmarks = [
  {
    id: 1,
    label: "Adam Wathan - Tailwind CSS Best Practice Patterns",
    url: "https://www.youtube.com/watch?v=J_7_mnFSLDg",
  },
  {
    id: 2,
    label: "Dicebear Awesome avatars",
    url: "https://www.dicebear.com/",
  },
  {
    id: 3,
    label: "Carnegie Mellon's intro functional programming lectures",
    url: "https://brandonspark.github.io/150/",
  },
  {
    id: 4,
    label: "Beautiful Gradient Generator",
    url: "https://www.joshwcomeau.com/gradient-generator/",
  },
  {
    id: 5,
    label: "3D device mockups",
    url: "https://deviceframes.com/",
  },
  {
    id: 6,
    label: "Box shadow examples",
    url: "https://getcssscan.com/css-box-shadow-examples",
  },
  {
    id: 7,
    label: "Learn Vue Step by Step, from just one line of 'Hello, World'",
    url: "https://ubugeeei.github.io/chibivue/en/",
  },
  {
    id: 8,
    label: "Elixir Enum Cheatsheet",
    url: "https://angelika.me/elixir-enum-cheatsheet/",
  },
  {
    id: 9,
    label: "Tines - Beautiful landing page",
    url: "https://www.tines.com/product",
  },
  {
    id: 10,
    label: "SVG Spinners",
    url: "https://github.com/n3r4zzurr0/svg-spinners",
  },
  {
    id: 11,
    label: "Elixir and Phoenix can do it all",
    url: "https://fly.io/phoenix-files/elixir-and-phoenix-can-do-it-all/",
  },
  {
    id: 12,
    label: "REQRES Mock apis for testing",
    url: "https://reqres.in/",
  },
  {
    id: 13,
    label: "Haikie - SVG background generator",
    url: "https://app.haikei.app/",
  },
  {
    id: 14,
    label: "IP API",
    url: "https://ipapi.is/",
  },
  {
    id: 15,
    label: "Rakko Tools",
    url: "https://en.rakko.tools/",
  },
];

function getHost(url) {
  const parsedUrl = new URL(url);
  let host = parsedUrl.host;
  if (host.startsWith("www.")) {
    host = host.substring(4);
  }
  return host;
}

function getThumbnail(url) {
  const host = getHost(url);
  return `https://logo.clearbit.com/${host}`;
}
</script>
