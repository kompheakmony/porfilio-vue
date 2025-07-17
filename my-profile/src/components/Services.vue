<script setup lang="ts">
import { services } from "../data/index.js";
import { CheckCircleIcon } from '@heroicons/vue/24/solid';
</script>

<template>
  <section id="services">
    <div class="container px-5 py-14">
      <h2 class="title text-yellow-500" data-aos="fade-down">
        {{ $t('services.main_title') }}
      </h2>
      <h4 class="subtitle" data-aos="fade-down">
        {{ $t('services.subtitle') }}
      </h4>
      <br />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group">
        
        <div
          v-for="(service, index) in services"
          :key="service.titleKey"
          class="bg-gray-800 p-8 rounded-xl border border-gray-700
                 flex flex-col
                 transition-all duration-300 cursor-pointer
                 group-hover:blur-sm hover:!blur-none
                 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/20"
          data-aos="fade-up"
          :data-aos-delay="index * 200"
        >
          <div class="flex items-start gap-4 mb-4">
            <div class="bg-yellow-500/10 inline-block p-4 rounded-xl">
              <component :is="service.icon" class="w-8 h-8 text-yellow-500" />
            </div>
            <h3 class="text-xl font-bold text-gray-100 pt-2">{{ $t(service.titleKey) }}</h3>
          </div>
          
          <p class="leading-relaxed text-gray-400 mb-6">
            {{ $t(service.descriptionKey) }}
          </p>

          <div class="mt-auto border-t border-gray-700 pt-6">
            <h4 class="font-semibold text-gray-300 mb-4">{{ $t('services.included') }}</h4>
            <ul class="space-y-3">
              <li v-for="key in service.subServiceKeys" :key="key" class="flex items-center gap-3">
                <CheckCircleIcon class="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span class="text-gray-400">{{ $t(key) }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>