<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Skills from './components/Skills.vue'
import Services from './components/Services.vue'
import Projects from './components/Projects.vue'
import PhotosGallary from './components/PhotosGallary.vue'
import Testimonials from './components/Testimonials.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'
import DigitalCards from './components/DigitalCards.vue';
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { locale } = useI18n();

const localeClass = computed(() => `locale-${locale.value}`);

onMounted(() => {
  AOS.init({
    duration: 1800,
    offset: 100,
    disable: "mobile",
  });
})
</script>

<template>
  <div :class="localeClass">
  <div class="min-h-screen bg-gray-800 flex justify-center items-start p-0 sm:p-6 lg:p-8">
    <div class="w-full max-w-screen-xl bg-gray-950 rounded-xl shadow-2xl overflow-hidden relative">
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <DigitalCards />
      <PhotosGallary />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  </div>
  <BackToTop />
  </div>
</template>

<style>

body {
  scroll-behavior: smooth;
  color: #E5E7EB;
  font-family: 'Roboto', sans-serif;
}
.locale-km {
  font-family: 'Hanuman', 'Roboto', sans-serif;
}
.locale-km h1,
.locale-km h2,
.locale-km h3,
.locale-km h4,
.locale-km h5,
.locale-km h6 {
  font-family: 'Bayon', sans-serif;
}
</style>
