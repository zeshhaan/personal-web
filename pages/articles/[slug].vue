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

definePageMeta({
  pageTransition: {
    name: 'slide-fade',
    mode: 'out-in'
  }
});

// Helper function to format date for datetime attribute
const formatDatetime = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};

// Get the article data to use in OG image
const { data: article } = await useAsyncData(`article-${slug}`, () => 
  queryContent(`/articles/${slug}`).findOne()
)

// Redirect if article not found
if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

// Set SEO meta tags
useSeoMeta({
  title: `${article.value.title} | Mohammed Zeeshan`,
  description: article.value.description,
  ogTitle: article.value.title,
  ogDescription: article.value.description,
  twitterTitle: article.value.title,
  twitterDescription: article.value.description,
  twitterCard: "summary_large_image",
  articleAuthor: "Mohammed Zeeshan",
});

// Generate OG Image for the article
defineOgImageComponent('Personal', {
  ogTitle: article.value.title,
  bottomLeft: 'Mohammed Zeeshan',
  bottomRight: article.value.date,
});
</script>
<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(20px) scale(0.98);
  filter: blur(1px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px) scale(1.02);
  filter: blur(1px);
}
</style>
