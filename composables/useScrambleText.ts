import { gsap } from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'

export const useScrambleText = () => {
  // Register the plugin
  if (process.client) {
    gsap.registerPlugin(ScrambleTextPlugin)
  }

  const greetings = [
    { text: 'Hello!', lang: 'English' },
    { text: 'Hola!', lang: 'Spanish' },
    { text: 'Bonjour!', lang: 'French' },
    { text: 'Hallo!', lang: 'German' },
    { text: 'Ciao!', lang: 'Italian' },
    { text: 'مرحبا!', lang: 'Arabic' },
    { text: 'नमस्ते!', lang: 'Hindi' },
    { text: 'こんにちは!', lang: 'Japanese' },
    { text: '안녕하세요!', lang: 'Korean' },
    { text: 'Olá!', lang: 'Portuguese' },
    { text: 'Привет!', lang: 'Russian' },
    { text: '你好!', lang: 'Chinese' }
  ]

  const scrambleGreeting = (element: HTMLElement, options?: {
    duration?: number
    revealDelay?: number
    chars?: string
    speed?: number
  }) => {
    if (!process.client || !element) return

    const {
      duration = 1.5,
      revealDelay = 0.3,
      chars = 'upperCase',
      speed = 1
    } = options || {}

    let currentIndex = 0

    const animateToNextGreeting = () => {
      const greeting = greetings[currentIndex]
      
      gsap.to(element, {
        duration,
        scrambleText: {
          text: greeting.text,
          chars,
          revealDelay,
          speed,
          tweenLength: true
        },
        ease: 'power2.out'
      })

      currentIndex = (currentIndex + 1) % greetings.length
    }

    // Start with the first greeting
    animateToNextGreeting()

    // Set up interval to cycle through greetings
    const interval = setInterval(animateToNextGreeting, 3000)

    // Return cleanup function
    return () => {
      clearInterval(interval)
    }
  }

  return {
    scrambleGreeting,
    greetings
  }
}