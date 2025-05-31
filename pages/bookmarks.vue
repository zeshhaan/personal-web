<template>
  <main class="min-h-screen">
    <AppHeader class="mb-8" title="Bookmarks" :description="description" />
    <ListWithAvatar :lists="bookmarks" />
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
    label: "Josh W Comeau - An Interactive Guide to CSS Grid",
    url: "https://www.joshwcomeau.com/css/interactive-guide-to-grid/",
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
  {
    id: 16,
    label: "Learn Postgres Interactively",
    url: "https://www.crunchydata.com/developers/playground/psql-basics",
  },
  {
    id: 17,
    label: "Collection of TIL's",
    url: "https://til.simonwillison.net/",
  },
  {
    id: 18,
    label: "Hero Icons",
    url: "https://heroicons.com/",
  },
  {
    id: 19,
    label: "Tailwind utilities",
    url: "https://www.designtoolshub.com/tailwind-css/form-builder",
  },
  {
    id: 20,
    label: "Dribble like UI inspo",
    url: "https://www.curated.design/",
  },
  {
    id: 21,
    label: "How to finish side projects - No advice, just encouragement",
    url: "https://github.com/readme/guides/finish-your-projects/",
  },
  {
    id: 22,
    label:
      "Untools is a collection of tools for system thinking, decision-making, problem-solving and communication. Learn how to use concept map, six thinking hats, and abstraction laddering.",
    url: "https://untools.co/",
  },
  {
    id: 23,
    label:
      "Collection of UI components for mobile apps—from action buttons to pulldown menus. Every component features anatomy, states & behavior, and design dos and donts. ",
    url: "https://designsystem.line.me/LDSG/components",
  },
  {
    id: 24,
    label: "Coding challenges",
    url: "https://codingchallenges.fyi/challenges/intro",
  },
];
</script>
