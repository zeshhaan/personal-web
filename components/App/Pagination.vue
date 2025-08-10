<template>
  <nav class="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 px-4 py-3 sm:px-6 mt-12">
    <div class="flex flex-1 justify-between sm:hidden">
      <!-- Mobile pagination -->
      <NuxtLink
        v-if="currentPage > 1"
        :to="{ query: { ...route.query, page: currentPage - 1 } }"
        class="relative inline-flex items-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
      >
        Previous
      </NuxtLink>
      <NuxtLink
        v-if="currentPage < totalPages"
        :to="{ query: { ...route.query, page: currentPage + 1 } }"
        class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
      >
        Next
      </NuxtLink>
    </div>
    
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Showing
          <span class="font-medium">{{ startItem }}</span>
          to
          <span class="font-medium">{{ endItem }}</span>
          of
          <span class="font-medium">{{ total }}</span>
          results
        </p>
      </div>
      <div>
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <!-- Previous page link -->
          <NuxtLink
            v-if="currentPage > 1"
            :to="{ query: { ...route.query, page: currentPage - 1 } }"
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0"
          >
            <span class="sr-only">Previous</span>
            <Icon name="heroicons:chevron-left-20-solid" class="h-5 w-5" aria-hidden="true" />
          </NuxtLink>
          <span
            v-else
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-300 dark:text-gray-600 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 cursor-not-allowed"
          >
            <span class="sr-only">Previous</span>
            <Icon name="heroicons:chevron-left-20-solid" class="h-5 w-5" aria-hidden="true" />
          </span>

          <!-- Page numbers -->
          <template v-for="page in visiblePages" :key="page">
            <NuxtLink
              v-if="page !== '...'"
              :to="{ query: { ...route.query, page } }"
              :class="[
                page === currentPage
                  ? 'relative z-10 inline-flex items-center bg-primary-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'
                  : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0'
              ]"
            >
              {{ page }}
            </NuxtLink>
            <span
              v-else
              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-600"
            >
              ...
            </span>
          </template>

          <!-- Next page link -->
          <NuxtLink
            v-if="currentPage < totalPages"
            :to="{ query: { ...route.query, page: currentPage + 1 } }"
            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0"
          >
            <span class="sr-only">Next</span>
            <Icon name="heroicons:chevron-right-20-solid" class="h-5 w-5" aria-hidden="true" />
          </NuxtLink>
          <span
            v-else
            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-300 dark:text-gray-600 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 cursor-not-allowed"
          >
            <span class="sr-only">Next</span>
            <Icon name="heroicons:chevron-right-20-solid" class="h-5 w-5" aria-hidden="true" />
          </span>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script setup>

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    default: 20
  }
})

const route = useRoute()

// Calculate display information
const startItem = computed(() => (props.currentPage - 1) * props.perPage + 1)
const endItem = computed(() => Math.min(props.currentPage * props.perPage, props.total))

// Calculate visible page numbers for pagination
const visiblePages = computed(() => {
  const pages = []
  const current = props.currentPage
  const total = props.totalPages
  
  if (total <= 7) {
    // Show all pages if we have 7 or fewer
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    // Always show first page
    pages.push(1)
    
    if (current > 4) {
      pages.push('...')
    }
    
    // Show pages around current page
    const start = Math.max(2, current - 2)
    const end = Math.min(total - 1, current + 2)
    
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    
    if (current < total - 3) {
      pages.push('...')
    }
    
    // Always show last page
    if (total > 1) {
      pages.push(total)
    }
  }
  
  return pages
})
</script>
