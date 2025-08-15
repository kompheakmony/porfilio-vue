<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ArrowUpRightIcon } from "@heroicons/vue/24/solid";
import { projectsItems } from "../data/index.js";
import ProjectsSVG from "../assets/svg/projects.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = [Pagination, Navigation, Autoplay];
</script>

<template>
  <section class="bg-gray-800 pb-14" id="projects">
    <div class="container px-5 pt-14">
      <h2 class="title text-sky-500" data-aos="fade-down">
        {{ $t("projects.main_title") }}
      </h2>
      <h4 class="subtitle" data-aos="fade-down">
        {{ $t("projects.subtitle") }}
      </h4>
      <br />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="flex justify-center" data-aos="fade-right">
          <img
            :src="ProjectsSVG"
            :alt="$t('projects.illustration_alt')"
            class="w-full max-w-md"
          />
        </div>

        <div data-aos="fade-left">
          <Swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="30"
            :loop="true"
            :pagination="{ clickable: true }"
            :navigation="true"
            :autoplay="{
              delay: 3500,
              disableOnInteraction: false,
            }"
            class="w-full"
          >
            <SwiperSlide v-for="project in projectsItems" :key="project.id">
              <div
                class="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  :src="project.image"
                  :alt="$t(project.titleKey)"
                  class="w-full h-56 object-cover"
                />
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-100 mb-2">
                    {{ $t(project.titleKey) }}
                  </h3>

                  <p class="text-gray-400 mb-4 text-sm leading-relaxed">
                    {{ $t(project.descriptionKey) }}
                  </p>

                  <div class="flex flex-wrap gap-2 mb-4">
                    <span
                      v-for="tag in project.tags"
                      :key="tag"
                      class="bg-sky-500/10 text-sky-400 text-xs font-semibold px-2.5 py-1 rounded-full"
                    >
                      {{ tag }}
                    </span>
                  </div>

                  <a
                    :href="project.link"
                    target="_blank"
                    class="inline-flex items-center text-sky-500 font-semibold hover:text-sky-400 transition-colors"
                  >
                    {{ $t("projects.view_project_btn") }}
                    <ArrowUpRightIcon class="ml-1.5 size-4" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: #f59e0b;
}
.swiper-pagination-bullet-active {
  background-color: #019eb1;
}
</style>
