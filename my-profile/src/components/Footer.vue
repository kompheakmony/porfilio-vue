<script setup lang="ts">
const brandName = "NYZ CAM";
const currentYear = new Date().getFullYear();

const socialLinks = [
  { 
    name: 'GitHub', 
    href: 'https://github.com/kompheakmony',
    iconPath: 'M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z' 
  },
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/kumpheakmny-s-64b17b220/',
    iconPath: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-11 4v10h3V10h-3M6.5 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M17 17h-2v-4.5c0-1.4-.6-2.5-2-2.5s-2.5 1.1-2.5 2.5V17h-3V10h3v1.5c.5-.9 1.7-1.5 3-1.5 2.2 0 4 1.8 4 4V17Z',
  },
  { 
    name: 'Facebook',
    href: 'https://www.facebook.com/nyzcam',
    iconPath: 'M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z' 
  },
];
</script>

<template>
<footer class="bg-gray-900 border-t border-gray-800">
  <div class="container p-5 py-8">
    <div class="flex flex-col-reverse md:flex-row items-center justify-between gap-4">
      <span class="text-sm text-gray-500 mt-4 md:mt-0">
        {{ $t('copyright', { year: currentYear, brandName: brandName }) }}
      </span>
      <div class="flex gap-4">
        <a 
          v-for="social in socialLinks" 
          :key="social.name" 
          :href="social.href" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-yellow-500 transition-colors"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" :aria-label="social.name + ' page'">
            <path :d="social.iconPath" />
          </svg>
          <span class="sr-only">{{ social.name }}</span>
        </a>
      </div>
    </div>
  </div>
</footer>
</template>