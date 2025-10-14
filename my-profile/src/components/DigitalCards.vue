<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { cardThemes } from '../data/index.js';

// ─────────────────────────────
// Type Definitions
// ─────────────────────────────
interface CardTheme {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string | string[];
  images?: string[];
  featuresKeys: string[];
  icon: any;
}

// ─────────────────────────────
// Reactive State
// ─────────────────────────────
const activeTheme = ref<string | null>(null);
const currentImageIndex = ref<Record<string, number>>({});
const rotationIntervals = ref<Record<string, ReturnType<typeof setInterval>>>({});

// ─────────────────────────────
// Computed: Theme Configurations
// ─────────────────────────────
const themeConfigs = computed(() => ({
  'classic-khmer': {
    badge: 'Traditional',
    badgeColor: 'from-amber-500 to-orange-500',
    accentColor: 'from-amber-500 to-orange-400',
    iconBg: 'bg-amber-100 dark:bg-amber-900/30',
    iconColor: 'text-amber-600 dark:text-amber-400',
    hoverColor: 'group-hover:text-amber-600 dark:group-hover:text-amber-400'
  },
  'modern-design': {
    badge: 'Contemporary',
    badgeColor: 'from-purple-500 to-pink-500',
    accentColor: 'from-purple-500 to-pink-400',
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-600 dark:text-purple-400',
    hoverColor: 'group-hover:text-purple-600 dark:group-hover:text-purple-400'
  },
  'custom': {
    badge: 'Personalized',
    badgeColor: 'from-blue-500 to-cyan-500',
    accentColor: 'from-blue-500 to-cyan-400',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    hoverColor: 'group-hover:text-blue-600 dark:group-hover:text-blue-400'
  }
}));

const getThemeConfig = (theme: CardTheme) =>
  themeConfigs.value[theme.id] || themeConfigs.value['custom'];

// ─────────────────────────────
// Utility Functions
// ─────────────────────────────
const setActiveTheme = (themeId: string) => {
  activeTheme.value = activeTheme.value === themeId ? null : themeId;
};

const getImageArray = (theme: CardTheme): string[] =>
  Array.isArray(theme.image)
    ? theme.image
    : theme.images ?? [theme.image as string];

const hasMultipleImages = (theme: CardTheme): boolean => {
  const imgs = getImageArray(theme);
  return imgs.length > 1;
};

const getCurrentImage = (theme: CardTheme): string => {
  const imgs = getImageArray(theme);
  const index = currentImageIndex.value[theme.id] || 0;
  return imgs[index];
};

// ─────────────────────────────
// Image Rotation Logic
// ─────────────────────────────
const startImageRotation = (themeId: string, images: string[]) => {
  stopImageRotation(themeId); // ✅ Ensure cleanup before starting a new one

  if (currentImageIndex.value[themeId] == null) {
    currentImageIndex.value[themeId] = 0;
  }

  rotationIntervals.value[themeId] = setInterval(() => {
    const current = currentImageIndex.value[themeId] ?? 0;
    currentImageIndex.value[themeId] = (current + 1) % images.length;
  }, 3000);
};

const stopImageRotation = (themeId: string) => {
  const interval = rotationIntervals.value[themeId];
  if (interval) {
    clearInterval(interval);
    delete rotationIntervals.value[themeId];
  }
};

// ─────────────────────────────
// Lifecycle Hooks
// ─────────────────────────────
onMounted(() => {
  cardThemes.forEach(theme => {
    if (hasMultipleImages(theme)) {
      currentImageIndex.value[theme.id] = 0;
    }
  });
});

onUnmounted(() => {
  Object.values(rotationIntervals.value).forEach(clearInterval);
});
</script>


<template>
  <section id="invitation-themes" class="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-blue-900/20"></div>
    
    <div class="container px-5 py-20 relative z-10">
      <h2 class="title text-sky-500" data-aos="fade-down">
        {{ $t('invitationThemes.main_title') || 'Explore Our Invitation Card Themes' }}
      </h2>
      <h4 class="subtitle" data-aos="fade-down">
        {{ $t('invitationThemes.subtitle') || 'Find the perfect design for your special event.' }}
      </h4>
      <br />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(theme, index) in cardThemes"
          :key="theme.id"
          class="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200/60 dark:border-gray-700/50
                 flex flex-col overflow-hidden
                 transition-all duration-500 ease-out cursor-pointer
                 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20"
          :class="[
            activeTheme === theme.id 
              ? 'ring-2 ring-blue-500 shadow-2xl shadow-blue-500/20 dark:shadow-blue-500/30 scale-[1.02]' 
              : ''
          ]"
          @click="setActiveTheme(theme.id)"
          @mouseenter="hasMultipleImages(theme) ? startImageRotation(theme.id, getImageArray(theme)) : null"
          @mouseleave="hasMultipleImages(theme) ? stopImageRotation(theme.id) : null"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div v-if="activeTheme === theme.id" 
               :class="['absolute top-0 left-0 w-full h-1 bg-gradient-to-r animate-pulse', getThemeConfig(theme).accentColor]"></div>
          
          <div class="relative overflow-hidden">
            <div class="absolute top-4 left-4 z-10">
              <span :class="['text-xs font-bold text-white px-4 py-2 rounded-full shadow-lg bg-gradient-to-r', getThemeConfig(theme).badgeColor]">
                {{ getThemeConfig(theme).badge }}
              </span>
            </div>

            <div :class="['absolute top-4 right-4 z-10 backdrop-blur-sm p-2.5 rounded-full shadow-lg', getThemeConfig(theme).iconBg]">
              <component :is="theme.icon" :class="['w-6 h-6', getThemeConfig(theme).iconColor]" />
            </div>

            <div v-if="hasMultipleImages(theme)" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-1.5">
              <div 
                v-for="(img, idx) in getImageArray(theme)" 
                :key="idx"
                :class="[
                  'w-2 h-2 rounded-full transition-all duration-300',
                  currentImageIndex[theme.id] === idx 
                    ? 'bg-white w-6' 
                    : 'bg-white/50 hover:bg-white/80'
                ]"
              ></div>
            </div>
            
            <div class="relative h-56 overflow-hidden">
              <transition name="fade" mode="out-in">
                <img 
                  :key="getCurrentImage(theme)"
                  :src="getCurrentImage(theme)" 
                  :alt="$t(theme.titleKey)" 
                  class="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-105" 
                />
              </transition>
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60"></div>
              
              <div :class="['absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6', 
                           theme.id === 'classic-khmer' ? 'from-amber-600/90' : theme.id === 'modern-design' ? 'from-purple-600/90' : 'from-blue-600/90']">
                <span class="text-white font-semibold text-sm bg-white/20 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                  {{ hasMultipleImages(theme) ? `${$t('invitationThemes.preview') || 'View'} ${getImageArray(theme).length} Designs` : $t('invitationThemes.preview') || 'Preview Theme' }}
                </span>
              </div>
            </div>
          </div>

          <div class="p-7 flex flex-col flex-grow">
            <!-- Title -->
            <div class="mb-5">
              <h3 :class="['text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 transition-colors duration-300', getThemeConfig(theme).hoverColor]">
                {{ $t(theme.titleKey) }}
              </h3>
              <div :class="['h-1 w-16 rounded-full transition-all duration-500 group-hover:w-24 bg-gradient-to-r', getThemeConfig(theme).accentColor]"></div>
            </div>
            
            <p class="leading-relaxed text-gray-600 dark:text-gray-300 mb-6 flex-grow text-base line-clamp-3">
              {{ $t(theme.descriptionKey) }}
            </p>

            <div v-if="theme.id === 'classic-khmer'" class="mb-6 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <p class="text-xs text-amber-800 dark:text-amber-300 font-medium">
                ✨ {{ $t('invitationThemes.khmerHeritage') || 'Celebrating Khmer Heritage & Tradition' }}
              </p>
            </div>

            <div v-else-if="theme.id === 'modern-design'" class="mb-6 p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <p class="text-xs text-purple-800 dark:text-purple-300 font-medium">
                🎨 {{ $t('invitationThemes.trendyDesign') || 'Sleek & Contemporary Aesthetics' }}
              </p>
            </div>

            <div v-else-if="theme.id === 'custom'" class="mb-6 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p class="text-xs text-blue-800 dark:text-blue-300 font-medium">
                🎯 {{ $t('invitationThemes.fullyCustom') || 'Your Vision, Perfectly Realized' }}
              </p>
            </div>

            <div class="border-t border-gray-200 dark:border-gray-700 pt-6 mt-auto">
              <div class="flex items-center justify-between mb-5">
                <h4 class="font-semibold text-gray-700 dark:text-gray-200 text-base">
                  {{ $t('invitationThemes.includedFeatures') || 'Key Features' }}
                </h4>
                <span :class="['text-xs font-semibold px-3 py-1.5 rounded-full', 
                              theme.id === 'classic-khmer' ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30' :
                              theme.id === 'modern-design' ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30' :
                              'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30']">
                  {{ theme.featuresKeys.length }}+
                </span>
              </div>
              
              <ul class="space-y-3">
                <li 
                  v-for="(key, idx) in theme.featuresKeys" 
                  :key="key" 
                  class="flex items-start gap-3 transition-all duration-300 opacity-90 group-hover:opacity-100 hover:translate-x-1.5"
                  :style="`transition-delay: ${idx * 40}ms`"
                >
                  <div :class="['p-1 rounded-full flex-shrink-0 mt-0.5 shadow-sm',
                               theme.id === 'classic-khmer' ? 'bg-gradient-to-br from-amber-100 to-orange-50 dark:from-amber-900/40 dark:to-orange-900/20' :
                               theme.id === 'modern-design' ? 'bg-gradient-to-br from-purple-100 to-pink-50 dark:from-purple-900/40 dark:to-pink-900/20' :
                               'bg-gradient-to-br from-blue-100 to-cyan-50 dark:from-blue-900/40 dark:to-cyan-900/20']">
                    <CheckCircleIcon :class="['w-4 h-4',
                                             theme.id === 'classic-khmer' ? 'text-amber-600 dark:text-amber-400' :
                                             theme.id === 'modern-design' ? 'text-purple-600 dark:text-purple-400' :
                                             'text-blue-600 dark:text-blue-400']" />
                  </div>
                  <span class="text-gray-700 dark:text-gray-300 text-sm leading-snug">{{ $t(key) }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div :class="['h-1 w-full bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                       theme.id === 'classic-khmer' ? 'via-amber-500/50' :
                       theme.id === 'modern-design' ? 'via-purple-500/50' :
                       'via-blue-500/50']"></div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>