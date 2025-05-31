<template>
  <NuxtLink :to="article._path" class="group">
    <article>
      <div
        class="relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5"
        datetime="2022-09-05"
      >
        <span
          class="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
          ><span
            class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"
          ></span
        ></span>
        <!-- Show updated date if available, otherwise show original date -->
        <div class="flex flex-col space-y-1">
          <time :datetime="formatDatetime(displayDate)">
            {{ displayDate }}
            <span
              v-if="article.updated_at"
              class="ml-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-1.5 py-0.5 rounded"
            >
              Updated
            </span>
          </time>

          <!-- Show original date if this is an update -->
          <time
            v-if="article.updated_at"
            :datetime="formatDatetime(article.date)"
            class="text-xs text-gray-400 dark:text-gray-500"
          >
            Originally: {{ article.date }}
          </time>
        </div>
      </div>
      <h2
        class="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600"
      >
        {{ article.title }}
      </h2>
      <p class="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400">
        {{ article.description }}
      </p>
    </article>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});

// Computed property to determine which date to display prominently
const displayDate = computed(() => {
  return props.article.updated_at || props.article.date;
});

// Helper function to format date for datetime attribute
const formatDatetime = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};
</script>

<style></style>
