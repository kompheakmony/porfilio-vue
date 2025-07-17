<script setup lang="ts">
import HeroSVG from "../assets/svg/hero.svg";

const heroData = {
  firstName: "SET",
  lastName: "Kumpheakmny",
  stats: [
    { value: "5+", labelKey: "hero.experience_label" },
    { value: "50+", labelKey: "hero.projects_label" },
  ]
};
</script>

<template>
  <section id="home" class="p-5 sm:p-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-10rem)]">
      
      <div class="lg:col-span-5 text-center lg:text-left" data-aos="fade-down">
        <h1 class="text-4xl md:text-5xl font-bold text-yellow-500 leading-tight">
          {{ $t('hero.title') }}
        </h1>
        <p class="text-2xl md:text-3xl font-medium text-gray-300 mt-2">
          {{ $t('hero.subtitle') }}
        </p>

        <p class="mt-6 text-lg text-gray-300">
          {{ $t('hero.description') }}
        </p>

        <div class="mt-8 flex justify-center lg:justify-start gap-4">
          <a href="#contact" class="btn border-yellow-700 bg-yellow-600 text-gray-200 hover:bg-yellow-500">
            {{ $t('hero.hire_me') }}
          </a>
          <a href="#projects" class="btn border-gray-600 bg-gray-800 text-gray-200 hover:bg-gray-700">
            {{ $t('hero.view_projects') }}
          </a>
        </div>

        <div class="mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-8">
          <div 
            v-for="(stat, index) in heroData.stats" 
            :key="stat.labelKey" 
            class="flex items-center gap-3"
            data-aos="fade-up" 
            :data-aos-delay="index * 200"
          >
            <h3 class="text-4xl font-semibold text-gray-100">{{ stat.value }}</h3>
            <p class="text-gray-400 leading-snug">{{ $t(stat.labelKey) }}</p>
          </div>
        </div>
      </div>
      
      <div class="lg:col-span-4 flex justify-center items-center order-first lg:order-none" data-aos="zoom-in" data-aos-delay="200">
        <div class="bg-gray-800 p-3 rounded-2xl shadow-lg">
          <img
            :src="HeroSVG"
            :alt="$t('hero.portrait_alt', [heroData.firstName, heroData.lastName])"
            class="w-full max-h-[70vh] object-cover rounded-xl"
          />
        </div>
      </div>

      <div class="hidden lg:flex lg:col-span-3 justify-center items-center bg-yellow-500 rounded-2xl shadow-md self-stretch" data-aos="slide-left" data-aos-delay="400">
        <h2 class="transform -rotate-90 text-xl font-bold text-gray-900 tracking-wider uppercase">
          <span>{{ heroData.firstName }}</span>
          <span class="text-white">{{ heroData.lastName }}</span>
        </h2>
      </div>

    </div>
  </section>
</template>