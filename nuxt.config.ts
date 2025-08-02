export default defineNuxtConfig({
  site: {
    url: "https://zeeshan.sh",
    name: "Mohammed Zeeshan",
  },
  compatibilityDate: "2025-08-02",
  devtools: { enabled: true },
  experimental: {
    viewTransition: true,
  },
  build: {
    transpile: ["gsap"],
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
  },
});
