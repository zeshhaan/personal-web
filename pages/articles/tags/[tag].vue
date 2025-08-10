<template>
  <main class="min-h-screen">
    <AppHeader 
      class="mb-16" 
      :title="`Articles tagged: ${tag}`" 
      :description="`All articles tagged with '${tag}' (${total} articles)`" 
    />
    
    <template v-if="articles.length > 0">
      <ul class="space-y-16">
        <li v-for="(article, id) in articles" :key="id">
          <AppArticleCard :article="article" />
        </li>
      </ul>
      
      <!-- Show pagination only if there are more than 20 results -->
      <AppPagination
        v-if="total > perPage"
        :current-page="currentPage"
        :total-pages="totalPages"
        :total="total"
        :per-page="perPage"
      />
    </template>
    
    <div v-else class="text-center py-12">
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
        No articles found
      </h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        There are no articles tagged with "{{ tag }}".
      </p>
      <NuxtLink
        to="/articles"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        Browse all articles
      </NuxtLink>
    </div>
  </main>
</template>

<script setup>
const route = useRoute()
const { tag } = route.params

// Validate tag parameter
if (!tag) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Tag not found'
  })
}

// Pagination settings
const perPage = 20
const currentPage = computed(() => parseInt(route.query.page) || 1)

// Calculate skip value for pagination
const skip = computed(() => (currentPage.value - 1) * perPage)

// Fetch articles with pagination
const { data: result } = await useAsyncData(
  `articles-tag-${tag}-page-${currentPage.value}`,
  async () => {
    // Get total count first
    const totalQuery = queryContent('/articles')
      .where({ 
        draft: { $ne: true }, 
        tags: { $contains: tag } 
      })
    
    const total = await totalQuery.count()
    
    // If no articles found, throw 404
    if (total === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: `No articles found with tag: ${tag}`
      })
    }
    
    // Get paginated articles
    const articles = await queryContent('/articles')
      .where({ 
        draft: { $ne: true }, 
        tags: { $contains: tag } 
      })
      .sort({ date: -1 }) // Sort by date, newest first
      .skip(skip.value)
      .limit(perPage)
      .find()
    
    return {
      articles,
      total
    }
  },
  {
    // Re-run when page or tag changes
    watch: [currentPage, () => route.params.tag]
  }
)

// Extract data from result
const articles = computed(() => result.value?.articles || [])
const total = computed(() => result.value?.total || 0)

// Calculate total pages
const totalPages = computed(() => Math.ceil(total.value / perPage))

// Get site URL and runtime config
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

// SEO Meta
const capitalizedTag = computed(() => 
  tag.charAt(0).toUpperCase() + tag.slice(1)
)

const description = computed(() => 
  `All posts tagged with ${tag}. Explore ${total.value} articles covering ${tag} topics.`
)

const canonicalUrl = computed(() => 
  siteUrl ? `${siteUrl}/articles/tags/${tag}` : undefined
)

// Comprehensive SEO meta tags
useSeoMeta({
  title: `Articles tagged "${tag}" | Mohammed Zeeshan`,
  description: description.value,
  ogTitle: `Articles tagged "${tag}" | Mohammed Zeeshan`,
  ogDescription: description.value,
  ogType: 'website',
  ogUrl: canonicalUrl.value,
  ogSiteName: 'Mohammed Zeeshan',
  twitterCard: 'summary_large_image',
  twitterTitle: `Articles tagged "${tag}" | Mohammed Zeeshan`,
  twitterDescription: description.value,
  twitterCreator: '@zeeshanhanif',
  twitterSite: '@zeeshanhanif'
})

// Set canonical URL and page title
useHead({
  title: `${capitalizedTag.value} Articles`,
  link: canonicalUrl.value ? [{
    rel: 'canonical',
    href: canonicalUrl.value
  }] : undefined
})

// JSON-LD CollectionPage schema
const collectionPageSchema = computed(() => {
  if (!articles.value.length || !siteUrl) return null
  
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Articles tagged "${tag}"`,
    description: description.value,
    url: canonicalUrl.value,
    mainEntity: {
      '@type': 'ItemList',
      name: `Articles tagged "${tag}"`,
      description: description.value,
      numberOfItems: total.value,
      itemListElement: articles.value.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1 + (currentPage.value - 1) * perPage,
        item: {
          '@type': 'Article',
          name: article.title,
          description: article.description,
          url: `${siteUrl}${article._path}`,
          datePublished: article.date,
          author: {
            '@type': 'Person',
            name: 'Mohammed Zeeshan',
            url: siteUrl
          },
          keywords: article.tags?.join(', ') || tag
        }
      }))
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Articles',
          item: `${siteUrl}/articles`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: `Tagged "${tag}"`,
          item: canonicalUrl.value
        }
      ]
    }
  }
})

// Inject JSON-LD schema
watchEffect(() => {
  if (collectionPageSchema.value) {
    useHead({
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(collectionPageSchema.value, null, 2)
      }]
    })
  }
})
</script>
