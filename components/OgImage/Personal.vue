<script setup lang="ts">
// Props are simplified and default to your example for a perfect match.
// The title now defaults to the name if not provided.
withDefaults(defineProps<{
  name?: string
  logo?: string
  ogTitle?: string
  bottomLeft?: string
  bottomRight?: string
}>(), {
  name: 'Mohammed Zeeshan',
  logo: '/notion-mark.png',
  ogTitle: 'Mohammed Zeeshan',
  bottomLeft: 'SOFTWARE ENGINEER',
  bottomRight: 'Dubai, UAE',
})
</script>

<template>
  <div class="flex flex-col h-full w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white box-border text-xl font-medium uppercase">
    <!-- Header -->
    <div class="flex flex-row justify-between">
      <div class="p-4">
        {{ name }}
      </div>
      <img
        :src="logo"
        alt="Logo"
        :style="{
          width: '64px',
          height: '64px',
        }"
      />
    </div>

    <!-- Main Content: Centered ogTitle -->
    <div class="flex-1 flex justify-center items-center">
      <div class="text-6xl font-extralight text-start max-w-4xl leading-relaxed font-mono normal-case">
        {{ ogTitle }}
      </div>
    </div>

    <!-- Footer: Centered and Stacked Text -->
    <div class="w-full flex flex-row justify-between p-4 uppercase">
      <div>
        {{ bottomLeft }}
      </div>
      <div>
        {{ bottomRight }}
      </div>
    </div>
  </div>
</template>
