<script setup lang="ts">
import { ref } from "vue";
import { contactDetails } from "../data/index.js";
import ContactSVG from "../assets/svg/contact.svg";

const formData = ref({
  name: "",
  email: "",
  message: "",
});
const handleSubmit = () => {
  console.log("Form submitted!", formData.value);
};
</script>

<template>
  <section class="bg-gray-800 pb-14" id="contact">
    <div class="container px-5 pt-14">
      <h2 class="title text-sky-500" data-aos="fade-down">
        {{ $t("contact.main_title") }}
      </h2>
      <h4 class="subtitle" data-aos="fade-down">
        {{ $t("contact.subtitle") }}
      </h4>
      <br />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div class="space-y-8" data-aos="fade-right">
          <div class="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl">
            <h3 class="text-2xl font-bold text-gray-100 mb-6">
              {{ $t("contact.details_title") }}
            </h3>
            <div class="space-y-4">
              <a
                v-for="detail in contactDetails"
                :key="detail.labelKey"
                :href="detail.href"
                target="_blank"
                class="flex items-center gap-4 group"
              >
                <div
                  class="bg-sky-500/10 p-3 rounded-full transition-colors group-hover:bg-sky-500/20"
                >
                  <component :is="detail.icon" class="size-6 text-sky-500" />
                </div>
                <div>
                  <p class="text-gray-400 text-sm">{{ $t(detail.labelKey) }}</p>
                  <p
                    class="text-gray-200 font-semibold transition-colors group-hover:text-sky-400"
                  >
                    {{ detail.value }}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <img
            :src="ContactSVG"
            :alt="$t('contact.illustration_alt')"
            class="w-full max-w-md mx-auto"
          />
        </div>

        <div
          class="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h3 class="text-2xl font-bold text-gray-100 mb-6">
            {{ $t("contact.form_title") }}
          </h3>

          <form
            action="https://formspree.io/f/xrblbzew"
            method="POST"
            @submit="handleSubmit"
            class="space-y-6"
          >
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-300"
                >{{ $t("contact.form.name_label") }}</label
              >
              <input
                type="text"
                id="name"
                name="name"
                v-model="formData.name"
                class="form-input"
                :placeholder="$t('contact.form.name_placeholder')"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-300"
                >{{ $t("contact.form.email_label") }}</label
              >
              <input
                type="email"
                id="email"
                name="email"
                v-model="formData.email"
                class="form-input"
                :placeholder="$t('contact.form.email_placeholder')"
                required
              />
            </div>
            <div>
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-300"
                >{{ $t("contact.form.message_label") }}</label
              >
              <textarea
                id="message"
                name="message"
                rows="5"
                v-model="formData.message"
                class="form-input"
                :placeholder="$t('contact.form.message_placeholder')"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn w-full bg-sky-600 hover:bg-sky-500 text-gray-900 font-bold"
            >
              {{ $t("contact.form.submit_btn") }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
