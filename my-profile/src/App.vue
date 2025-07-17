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
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1800,
    offset: 100,
    disable: "mobile",
  });
})
</script>

<template>
  <div class="min-h-screen bg-gray-800 flex justify-center items-start p-4 sm:p-6 lg:p-8">
    <div class="w-full max-w-screen-xl bg-gray-950 rounded-xl shadow-2xl overflow-hidden relative">
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <PhotosGallary />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
    
  </div>
</template>

<style>

body {
  scroll-behavior: smooth;
  color: #E5E7EB;
}
</style>