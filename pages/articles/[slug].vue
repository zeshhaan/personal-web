<template>
  <main class="min-h-screen">
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900"
    >
      <ContentDoc v-slot="{ doc }" tag="article">
        <article>
          <h1>{{ doc.title }}</h1>
          <!-- Article metadata section -->
          <div
            class="not-prose mb-8 pb-6 border-b border-gray-200 dark:border-gray-700"
          >
            <div
              class="flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-400"
            >
              <!-- Original publication date -->
              <div class="flex items-center">
                <span class="font-medium text-gray-700 dark:text-gray-300"
                  >Published:</span
                >
                <time class="ml-2" :datetime="formatDatetime(doc.date)">
                  {{ doc.date }}
                </time>
              </div>

              <!-- Updated date and reason if available -->
              <div v-if="doc.updated_at" class="flex flex-col space-y-1">
                <div class="flex items-center">
                  <span class="font-medium text-gray-700 dark:text-gray-300"
                    >Updated:</span
                  >
                  <time class="ml-2" :datetime="formatDatetime(doc.updated_at)">
                    {{ doc.updated_at }}
                  </time>
                </div>
                <div v-if="doc.update_reason" class="ml-0">
                  <span class="font-medium text-gray-700 dark:text-gray-300"
                    >Reason:</span
                  >
                  <span class="ml-2 italic">{{ doc.update_reason }}</span>
                </div>
              </div>
            </div>
          </div>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </main>
</template>
<script setup>
const route = useRoute();
const { slug } = route.params;

// Helper function to format date for datetime attribute
const formatDatetime = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};

useSeoMeta({
  ogImage: `https://fayazahmed.com/articles/${slug}.png`,
  twitterCard: "summary_large_image",
  articleAuthor: "Mohammed Zeeshan",
});
</script>
<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
