export default defineNuxtConfig({
  site: {
    name: "Mohammed Zeeshan",
    url: process.env.NUXT_PUBLIC_SITE_URL || '',
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || '',
    }
  },
  routeRules: {
    // Tag pages configuration
    '/articles/tags/**': {
      sitemap: true, // Include in sitemap
      prerender: false, // Generate at request time to handle dynamic tags
      headers: {
        'X-Robots-Tag': 'index, follow' // Allow indexing by search engines
      }
    }
  },
  compatibilityDate: "2025-08-02",
  devtools: { enabled: true },
  experimental: {
    viewTransition: true,
  },
  build: {
    transpile: ["gsap"],
  },
  nitro: {
    preset: "deno",
    experimental: {
      wasm: true
    },
    rollupConfig: {
      external: [
        '@resvg/resvg-js-android-arm-eabi',
        '@resvg/resvg-js-android-arm64', 
        '@resvg/resvg-js-darwin-arm64',
        '@resvg/resvg-js-darwin-x64',
        '@resvg/resvg-js-linux-arm-gnueabihf',
        '@resvg/resvg-js-linux-arm64-gnu',
        '@resvg/resvg-js-linux-arm64-musl',
        '@resvg/resvg-js-linux-x64-gnu',
        '@resvg/resvg-js-linux-x64-musl',
        '@resvg/resvg-js-win32-arm64-msvc',
        '@resvg/resvg-js-win32-ia32-msvc',
        '@resvg/resvg-js-win32-x64-msvc'
      ]
    }
  },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxt/content",
    "nuxt-og-image",
    ...(process.env.NODE_ENV === "development" ? ["@nuxthq/studio"] : []),
    "@vueuse/nuxt",
    "@nuxt/icon",
  ],
  ui: {
    icons: ["heroicons", "lucide"],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
    },
  },
  content: {
    highlight: {
      theme: "github-dark",
      langs: [
        "elixir",
        "bash",
        "html",
        "javascript",
        "json",
        "markdown",
        "vue",
        "typescript",
        "yaml",
      ],
    },
    markdown: {
      mdc: true
    }
  },
  googleFonts: {
    display: "swap",
    families: {
      Geist: [300, 400, 500, 600, 700, 800],
      Inter: [400, 500, 600, 700, 800, 900],
      
    },
  },
  ogImage: {
    defaults: {
      renderer: 'satori',
      width: 1200,
      height: 630,
    },
    fonts: [
      'Geist:300',
      'Geist:400',
      'Geist:500',
      'Geist:600',
      'Geist:700',
      'Geist:800',
    ],
    compatibility: {
      runtime: {
        'resvg': 'wasm',
        'chromium': false,
        'sharp': false
      }
    },
    // Explicitly set host to ensure absolute URLs are correct on all deployments (e.g., Deno Deploy)
    // Uses public runtime config env: NUXT_PUBLIC_SITE_URL (e.g., https://zeeshan.deno.dev)
    host: process.env.NUXT_PUBLIC_SITE_URL || undefined,
  },
});
