export default defineNuxtConfig({
  site: {
    url: "https://zeeshan.sh",
  },
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
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
});
