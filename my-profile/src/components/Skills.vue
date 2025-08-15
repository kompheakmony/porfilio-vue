<script setup lang="ts">
import { skillCategories } from "../data/index.js";
</script>

<template>
  <section class="bg-gradient-to-b from-gray-900 to-gray-800 py-14" id="skills">
    <div class="container px-5">
      <h2 class="title text-sky-500" data-aos="fade-down">
        {{ $t("skills.main_title") }}
      </h2>
      <h4 class="subtitle" data-aos="fade-down">
        {{ $t("skills.subtitle") }}
      </h4>
      <br />

      <div class="space-y-12">
        <div
          v-for="(category, catIndex) in skillCategories"
          :key="category.titleKey"
        >
          <h3
            class="text-2xl font-semibold text-gray-200 mb-6 text-center md:text-left"
            data-aos="fade-up"
            :data-aos-delay="catIndex * 200"
          >
            {{ $t(category.titleKey) }}
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(skill, skillIndex) in category.skills"
              :key="skill.nameKey"
              class="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl flex gap-5 items-start transition-all duration-300 hover:bg-gray-700/80 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-2"
              data-aos="fade-up"
              :data-aos-delay="catIndex * 200 + skillIndex * 100"
            >
              <div class="bg-sky-500/10 p-3 rounded-lg">
                <component :is="skill.icon" class="w-7 h-7 text-sky-500" />
              </div>

              <div>
                <h4 class="text-lg font-bold text-gray-100 mb-1">
                  {{ $t(skill.nameKey) }}
                </h4>
                <p class="text-gray-400 text-sm leading-relaxed">
                  {{ $t(skill.descriptionKey) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
