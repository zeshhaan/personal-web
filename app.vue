<template>
  <NuxtLoadingIndicator color="#14b8a6" />
  <AppNavbar />
  <div class="h-32"></div>
  <UContainer>
    <NuxtPage />
  </UContainer>
  <div class="h-32"></div>
  <AppFooter />
</template>

<style>
/* Default page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
  filter: blur(2px);
}

/* Layout transitions for when layout changes */
.layout-enter-active,
.layout-leave-active {
  transition: all 0.3s ease-in-out;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  transform: scale(1.02);
  filter: blur(1px);
}

/* Rotate transition */
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 10deg) scale(0.95);
}

/* Bounce transition */
.bounce-enter-active {
  animation: bounce-in 0.6s ease-out;
}

.bounce-leave-active {
  animation: bounce-out 0.4s ease-in;
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(30px);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05) translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes bounce-out {
  0% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  100% {
    opacity: 0;
    transform: scale(0.8) translateY(-20px);
  }
}

/* Slide transitions */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
