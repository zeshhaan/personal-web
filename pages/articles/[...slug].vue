<template>
  <main class="min-h-screen">
    <div class="max-w-4xl mx-auto px-4 py-16">
      <!-- Article header -->
      <header class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          {{ data.title }}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-6">
          {{ data.description }}
        </p>
        <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <time :datetime="data.date">{{ data.date }}</time>
          <span v-if="data.readingTime">{{ data.readingTime }}</span>
        </div>
        
        <!-- Tags section -->
        <section v-if="data.tags && data.tags.length > 0" class="mt-6" itemprop="keywords">
          <AppTagList :tags="data.tags" />
        </section>
      </header>
      
      <!-- Article content -->
      <article class="prose prose-lg dark:prose-invert max-w-none">
        <ContentRenderer :value="data" />
      </article>
    </div>
  </main>
</template>

<script setup>
const { path } = useRoute()

// Get the article data
const { data } = await useAsyncData(`content-${path}`, () => 
  queryContent().where({ _path: path }).findOne()
)

// Redirect if article not found
if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

// Set SEO meta tags
useSeoMeta({
  title: `${data.value.title} | Mohammed Zeeshan`,
  description: data.value.description,
  ogTitle: data.value.title,
  ogDescription: data.value.description,
  twitterTitle: data.value.title,
  twitterDescription: data.value.description,
  keywords: data.value.tags?.join(', '),
})

// Generate JSON-LD Article schema
const articleSchema = useArticleSchema({
  title: data.value.title,
  description: data.value.description,
  date: data.value.date,
  tags: data.value.tags,
  path: data.value._path,
  image: data.value.image // Optional: if you have article images
})

// Inject JSON-LD schema into page head
useHead({
  script: [articleSchema]
})

// Generate OG Image for the article
defineOgImageComponent('Personal', {
  ogTitle: data.value.description,
  bottomLeft: data.value.title,
  bottomRight: data.value.date,
})
</script>
