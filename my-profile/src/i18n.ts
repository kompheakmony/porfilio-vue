import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import km from './locales/km.json';

function getInitialLocale() {
  const savedLocale = localStorage.getItem('locale');
  return savedLocale || 'en';
}

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    km,
  },
});

export default i18n;