<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ArrowUpIcon } from '@heroicons/vue/24/solid';

const isVisible = ref(false);

const handleScroll = () => {
  if (window.scrollY > 400) {
    isVisible.value = true;
  } else {
    isVisible.value = false;
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <transition name="fade-up">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-10 right-10 z-[990] bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-transform duration-300 hover:bg-yellow-500 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-yellow-500"
      aria-label="Scroll back to top"
    >
      <ArrowUpIcon class="w-6 h-6" />
    </button>
  </transition>
</template>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>