<template>
  <div class="tweet-embed-container my-8">
    <ClientOnly>
      <div v-html="tweetEmbedHtml" class="tweet-wrapper"></div>
      
      <template #fallback>
        <div class="tweet-fallback border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            Loading tweet... <a :href="tweetUrl" target="_blank" rel="noopener noreferrer" class="underline">View on X/Twitter</a>
          </p>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
interface Props {
  tweetId: string
}

const props = defineProps<Props>()

const tweetUrl = computed(() => `https://x.com/twitter/status/${props.tweetId}`)

// Tweet embed HTML mapping - we'll use the official Twitter embed HTML
const tweetEmbeds = {
  '1952530792019832982': `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A real fear I have right now is the dopamine high from using coding agents. It&#39;s exciting when it does something well, which makes you more willing to push through the inefficiencies it can create.<br><br>Raise your hand if you&#39;ve caught yourself in the &quot;just one more prompt&quot; loop...</p>&mdash; David Cramer (@zeeg) <a href="https://twitter.com/zeeg/status/1952530792019832982?ref_src=twsrc%5Etfw">August 5, 2025</a></blockquote>`,
  '1953516855404245431': `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Many devs don&#39;t realize that LLM-assisted human coding can be just as fast as full autopilot &quot;agentic&quot; coding.<br><br>Both approaches have trade-offs, but I like human-first coding because it ensures you fully understand the output code. <a href="https://t.co/czXTRO4lZe">pic.twitter.com/czXTRO4lZe</a></p>&mdash; David K 🎹 (@DavidKPiano) <a href="https://twitter.com/DavidKPiano/status/1953516855404245431?ref_src=twsrc%5Etfw">August 7, 2025</a></blockquote>`,
  '1946247982833082623': `<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">&quot;I use AI in a separate window. I don&#39;t enjoy Cursor or Windsurf, I can literally feel competence draining out of my fingers.&quot;<a href="https://twitter.com/dhh?ref_src=twsrc%5Etfw">@dhh</a>, the legendary programmer and creator of Ruby on Rails has the most beautiful and philosophical idea about what AI takes away from programmers. <a href="https://t.co/IMYfROBuyr">pic.twitter.com/IMYfROBuyr</a></p>&mdash; ℏεsam (@Hesamation) <a href="https://twitter.com/Hesamation/status/1946247982833082623?ref_src=twsrc%5Etfw">July 18, 2025</a></blockquote>`
}

const tweetEmbedHtml = computed(() => {
  return tweetEmbeds[props.tweetId] || `<div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"><p class="text-gray-600 dark:text-gray-400">Tweet not found. <a href="${tweetUrl.value}" target="_blank" rel="noopener noreferrer" class="underline">View on X/Twitter</a></p></div>`
})

// Load Twitter widgets script once
onMounted(() => {
  if (process.client && !document.querySelector('script[src*="widgets.js"]')) {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://platform.twitter.com/widgets.js'
    script.charset = 'utf-8'
    document.head.appendChild(script)
  }
})
</script>

<style scoped>
.tweet-embed-container {
  @apply max-w-full;
}

.tweet-wrapper {
  @apply mx-auto max-w-xl;
}

.tweet-loading {
  @apply w-full;
}

.tweet-error {
  @apply text-center;
}

.tweet-fallback {
  @apply text-center;
}

/* Ensure tweets display properly */
:deep(.twitter-tweet) {
  @apply mx-auto !important;
}
</style>
