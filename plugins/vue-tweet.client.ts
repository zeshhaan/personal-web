import { defineNuxtPlugin } from '#app'
import VueTweet from 'vue-tweet'

export default defineNuxtPlugin((nuxtApp) => {
  // Register the component globally so it works inside @nuxt/content MDC
  nuxtApp.vueApp.component('VueTweet', VueTweet)
})
