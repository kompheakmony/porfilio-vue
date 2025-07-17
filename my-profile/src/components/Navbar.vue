<script setup lang="ts">
import { ref } from 'vue'; 
import { AdjustmentsHorizontalIcon } from "@heroicons/vue/24/outline";
import { navItems } from "../data/index.js";
import LanguageSwitcher from './LanguageSwitcher.vue';

const showMenu = ref(false);
const active = ref(0);

const toggleShowMenu = () => {
    showMenu.value = !showMenu.value;
}

const updateActive = (index: number) => {
    active.value = index;
    showMenu.value = false;
}
</script>

<template>
    <div class="w-full flex justify-center">
      <header class="w-full grid grid-cols-3 items-center p-5 md:py-4">
        <div class="justify-self-start">
          <div
            class="sm:cursor-pointer z-[999] rounded-lg bg-yellow-700/70 p-2"
            @click="toggleShowMenu"
          >
            <AdjustmentsHorizontalIcon class="size-8 text-yellow-100" />
          </div>
        </div>
        <div class="justify-self-center">
          <a href="#home" @click="updateActive(0)" class="text-2xl font-bold text-yellow-500">
            NYZ CAM
          </a>
        </div>
        <div class="justify-self-end">
          <div class="w-36">
            <LanguageSwitcher />
          </div>
        </div>
        
      </header>

      <transition name="navbar-slide-fade">
          <nav
            v-if="showMenu"
            class="fixed z-[999] left-1/2 -translate-x-1/2 flex items-center gap-5 bg-yellow-800/60 px-6 py-3 backdrop-blur-md rounded-full text-gray-200 duration-300 bottom-10"
          >
            <a v-for="(item, index) in navItems" :key="index"
                :href="item.href"
                @click="updateActive(index)"
                class="text-xl p-2.5 rounded-full sm:cursor-pointer transition-colors"
                :class="{ 'bg-yellow-500 text-gray-800': active === index }"
                >
                <component :is="item.icon" class="size-6" />
            </a>
          </nav>
        </transition>
    </div>
</template>

<style scoped>
.navbar-slide-fade-enter-active,
.navbar-slide-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.navbar-slide-fade-enter-from,
.navbar-slide-fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.navbar-slide-fade-enter-to,
.navbar-slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
