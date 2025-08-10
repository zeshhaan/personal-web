<template>
  <div v-if="tags && tags.length > 0" class="flex flex-wrap gap-1.5">
    <AppTagBadge
      v-for="tag in tags"
      :key="tag"
      :tag="tag"
    />
  </div>
</template>

<script setup>
defineProps({
  tags: {
    type: Array,
    required: true,
    validator: (value) => Array.isArray(value) && value.every(item => typeof item === 'string'),
  },
});
</script>
