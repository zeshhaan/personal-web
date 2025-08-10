export const useArticleSchema = (meta: {
  title: string
  description: string
  date: string
  tags?: string[]
  author?: {
    name: string
    url?: string
  }
  path?: string
  image?: string
}) => {
  const { $config } = useNuxtApp()
  const config = useRuntimeConfig()
  
  // Get site URL from config
  const siteUrl = config.public.siteUrl || $config?.site?.url || ''
  
  // Default author information
  const defaultAuthor = {
    name: 'Mohammed Zeeshan',
    url: siteUrl
  }

  // Construct full URL if path is provided
  const fullUrl = meta.path && siteUrl ? `${siteUrl}${meta.path}` : undefined

  // Construct the Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.date,
    author: {
      '@type': 'Person',
      name: meta.author?.name || defaultAuthor.name,
      url: meta.author?.url || defaultAuthor.url
    },
    publisher: {
      '@type': 'Person',
      name: defaultAuthor.name,
      url: defaultAuthor.url
    },
    ...(meta.tags && meta.tags.length > 0 && {
      keywords: meta.tags.join(', ')
    }),
    ...(fullUrl && {
      url: fullUrl,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': fullUrl
      }
    }),
    ...(meta.image && {
      image: {
        '@type': 'ImageObject',
        url: meta.image.startsWith('http') ? meta.image : `${siteUrl}${meta.image}`
      }
    })
  }

  // Return the schema as a script tag for injection into head
  return {
    type: 'application/ld+json',
    innerHTML: JSON.stringify(articleSchema, null, 2)
  }
}
