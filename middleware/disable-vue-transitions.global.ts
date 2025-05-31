export default defineNuxtRouteMiddleware(to => {
  if (import.meta.server || !document.startViewTransition) { return }

  // Disable built-in Vue transitions when browser supports View Transitions API
  to.meta.pageTransition = false
  to.meta.layoutTransition = false
})