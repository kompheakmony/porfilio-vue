<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { ChatBubbleLeftRightIcon } from "@heroicons/vue/24/solid";

import { testimonialsItems } from '../data/index.js';

const modules = [EffectCoverflow, Pagination, Autoplay, Navigation];
</script>

<template>
  <section class="bg-gradient-to-t from-gray-900 to-gray-800">
    <div class="container px-5 py-14">
      <h2 class="title text-yellow-500" data-aos="fade-down">{{ $t('testimonials.main_title') }}</h2>
      <h4 class="subtitle" data-aos="fade-down">{{ $t('testimonials.subtitle') }}</h4>
      <br />
      
      <Swiper
        :modules="modules"
        effect="coverflow"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="1"
        :loop="true"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false,
        }"
        :pagination="{ clickable: true }"
        :navigation="true"
        :coverflowEffect="{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }"
        :breakpoints="{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }"
        class="py-12"
        data-aos="zoom-in"
      >
        <SwiperSlide v-for="item in testimonialsItems" :key="item.name">
          <div class="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 text-center h-full flex flex-col">
            <ChatBubbleLeftRightIcon class="w-12 h-12 mx-auto text-yellow-500/50 mb-4" />
            
            <blockquote class="flex-grow">
              <p class="text-gray-300 leading-relaxed italic">
                "{{ item.review }}"
              </p>
            </blockquote>
            
            <div class="mt-6 border-t border-gray-700 pt-6">
              <img :src="item.image" :alt="item.name" class="w-16 h-16 rounded-full mx-auto mb-3 shadow-md" />
              <h6 class="font-bold text-gray-100">{{ item.name }}</h6>
              <p class="text-sm text-yellow-400">Valued Client</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style>
.swiper-slide {
  transition: transform 0.4s, filter 0.4s;
}

.swiper-slide:not(.swiper-slide-active) {
  transform: scale(0.85);
  filter: blur(3px) grayscale(60%);
}

.swiper-button-next,
.swiper-button-prev {
  color: #f59e0b;
}
.swiper-pagination-bullet-active {
  background-color: #f59e0b !important;
}
.swiper-pagination-bullet {
  background-color: #d1d5db;
}
</style>