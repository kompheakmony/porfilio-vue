<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { watch, computed } from 'vue';

const { locale } = useI18n();

const locales = [
  { code: 'en', name: 'English', flagSrc: 'https://nyzcam.vercel.app/src/assets/svg/us.svg' },
  { code: 'km', name: 'ភាសាខ្មែរ', flagSrc: 'https://nyzcam.vercel.app/src/assets/svg/cambodia.svg' },
];

const currentLocaleData = computed(() => {
  return locales.find(l => l.code === locale.value);
});

const toggleLocale = () => {
  locale.value = locale.value === 'en' ? 'km' : 'en';
};

watch(locale, (newLocale) => {
  localStorage.setItem('locale', newLocale);
});
</script>

<template>
  <button 
    v-if="currentLocaleData"
    @click="toggleLocale"
    class="w-8 h-8 rounded focus:outline-none transition-transform duration-200 hover:scale-110"
    :aria-label="'Switch language to ' + (locale === 'en' ? 'Khmer' : 'English')"
  >
    <img 
      :src="currentLocaleData.flagSrc" 
      :alt="currentLocaleData.name"
      class="w-full h-full rounded object-cover"
    />
  </button>
</template>
