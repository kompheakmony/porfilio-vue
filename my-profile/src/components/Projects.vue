<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

import { projectsItems } from "../data/index.ts";
import ProjectsSVG from "../assets/svg/projects.svg";

import "swiper/css";
import "swiper/css/pagination";
</script>

<template>
  <section class="bg-gray-800 pb-4" id="projects">
    <div class="md:container px-5 pt-14 min-h-screen md:min-h-min flex flex-col justify-between">
      <div>
        <h2 class="title text-yellow-500" data-aos="fade-down">
          Projects
        </h2>
        <h4 class="subtitle" data-aos="fade-down">
          MY CREATION
        </h4>
        <br />
      </div>
      <div class="flex items-center lg:flex-row flex-col-reverse gap-5">
        <img
          :src="ProjectsSVG"
          alt="Projects illustration"
          data-aos="fade-right"
          class="max-w-[45vw] min-w-[22rem] bg-gray-950 rounded-3xl text-yellow-800"
        />
        <Swiper
          :pagination="{ clickable: true }"
          :space-between="20"
          :modules="[Pagination]"
          class="rounded-3xl pb-16 max-w-xs shadow-lg shadow-yellow-700 self-start"
        >
          <SwiperSlide
            v-for="(item, index) in projectsItems"
            :key="index"
            class="bg-gray-950 rounded-3xl p-5 border-b-8 border-yellow-800 h-fit"
          >
            <img :src="item.image" :alt="item.title" class="rounded-lg" />
            <div class="flex flex-col gap-1 mt-2">
              <h5 class="font-bold font-Poppins text-gray-100">
                {{ item.title }}
              </h5>
              <button class="font-bold text-gray-500 self-end">
                READ MORE
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>