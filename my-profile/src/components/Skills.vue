<script setup lang="ts">
import { ArrowUpRightIcon} from "@heroicons/vue/24/solid";
import { skillsItems } from "../data/index.ts";

</script>
<template>
    <section class="min-h-fit bg-gray-800" id="skills">
      <div class="px-5 py-14 md:container">
        <h2 class="title text-yellow-500" data-aos="fade-down">
          Skills
        </h2>
        <h4 class="subtitle" data-aos="fade-down">
          MY TOP SKILLS
        </h4>
        <br />
        <div class="flex flex-wrap justify-center gap-4">
            <div v-for="(item, skillsIndexin) skillsItems" :key="item.name"
              class="group relative flex w-full max-w-sm items-center gap-5 rounded-md border-2 border-yellow-700 bg-gray-950 p-5 duration-200 hover:border-yellow-500 sm:cursor-pointer"
              data-aos="fade-up"
              :data-aos-delay="index * 400"
            >
              <div>
                <img
                  :src="item.logo"
                  :alt="item.name"
                  class="w-10 duration-200 group-hover:scale-125"
                />
              </div>
              <div>
                <h6 class="text-gray-100">Name</h6>
                <p class="italic text-gray-300">Desc</p>
                <div class="absolute right-3 top-3 text-xl text-yellow-500">
                  <ArrowUpRightIcon class="size-6 text-yello-600" />
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
</template>