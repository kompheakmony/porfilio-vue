<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid';

const photos = ref([
  { id: 1, src: 'https://picsum.photos/seed/p1/800/1200', alt: 'Tall portrait image' },
  { id: 2, src: 'https://picsum.photos/seed/p2/1200/800', alt: 'Wide landscape image' },
  { id: 3, src: 'https://picsum.photos/seed/p3/800/800', alt: 'Square image' },
  { id: 4, src: 'https://picsum.photos/seed/p4/800/1000', alt: 'Another portrait' },
  { id: 5, src: 'https://picsum.photos/seed/p5/1000/800', alt: 'Scenic view' },
  { id: 6, src: 'https://picsum.photos/seed/p6/800/1100', alt: 'Architecture detail' },
  { id: 7, src: 'https://picsum.photos/seed/p7/1200/900', alt: 'Nature shot' },
  { id: 8, src: 'https://picsum.photos/seed/p8/800/900', alt: 'Urban photography' },
]);

const isLightboxOpen = ref(false);
const selectedImageIndex = ref(0);

const openLightbox = (index: number) => {
  selectedImageIndex.value = index;
  isLightboxOpen.value = true;
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
};

const nextImage = () => {
  selectedImageIndex.value = (selectedImageIndex.value + 1) % photos.value.length;
};

const prevImage = () => {
  selectedImageIndex.value = (selectedImageIndex.value - 1 + photos.value.length) % photos.value.length;
};

const handleKeydown = (e: KeyboardEvent) => {
  if (!isLightboxOpen.value) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <section id="gallery" class="bg-gray-800 py-14">
    <div class="container px-5">
      <h2 class="title text-yellow-500" data-aos="fade-down">{{ $t('gallery.main_title') }}</h2>
      <h4 class="subtitle" data-aos="fade-down">{{ $t('gallery.subtitle') }}</h4>
      <br />
      <div class="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        <div 
          v-for="(photo, index) in photos" 
          :key="photo.id"
          @click="openLightbox(index)"
          class="break-inside-avoid cursor-pointer group"
          data-aos="zoom-in"
          :data-aos-delay="index * 50"
        >
          <img 
            :src="photo.src" 
            :alt="photo.alt" 
            class="rounded-lg w-full h-full object-cover transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-yellow-500/20 group-hover:scale-105"
          />
        </div>
      </div>
    </div>

    <transition name="fade">
      <div 
        v-if="isLightboxOpen" 
        @click="closeLightbox" 
        class="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center"
      >
        <button @click.stop="closeLightbox" class="absolute top-5 right-5 text-white/70 hover:text-white transition-colors">
          <XMarkIcon class="w-10 h-10" />
        </button>

        <button @click.stop="prevImage" class="absolute left-5 text-white/70 hover:text-white transition-colors">
          <ChevronLeftIcon class="w-12 h-12" />
        </button>

        <div @click.stop class="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center">
          <img 
            :src="photos[selectedImageIndex].src" 
            :alt="photos[selectedImageIndex].alt"
            class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
          <p class="mt-4 text-white/80 text-center">{{ photos[selectedImageIndex].alt }}</p>
        </div>
        <button @click.stop="nextImage" class="absolute right-5 text-white/70 hover:text-white transition-colors">
          <ChevronRightIcon class="w-12 h-12" />
        </button>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>