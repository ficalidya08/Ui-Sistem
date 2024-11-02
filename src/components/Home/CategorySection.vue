<!-- src/components/Category/CategorySection.vue -->
<template>
  <section class="px-20 py-12 max-md:px-5">
    <h2 class="text-4xl font-bold tracking-tighter text-center text-gray-800 mb-12">
      Choose A Category
    </h2>
    <div class="grid grid-cols-4 gap-5 max-md:grid-cols-1">
      <!-- Category Cards -->
      <router-link
        v-for="(category, index) in categories"
        :key="index"
        :to="`/category/${category.title.toLowerCase()}`"
      >
        <article class="border border-zinc-500 p-8">
          <img
            loading="lazy"
            :src="category.iconSrc"
            :alt="`${category.title} category icon`"
            class="w-16 h-16 aspect-square"
          />
          <h3 class="mt-4 text-3xl font-bold text-gray-800">{{ category.title }}</h3>
          <p class="mt-1 text-zinc-500">
            {{ category.description }}
          </p>
        </article>
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  {
    title: 'Business',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d4e33b0e68039187e109622cd7e201f444b86201b90e0cf42b0e8485e374693e?placeholderIfAbsent=true&apiKey=79875f50433f4dddb865cc88bfb43a5c'
  },
  {
    title: 'Startup',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    isHighlighted: true
  },
  {
    title: 'Economy',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/c67971bfdb224af7ac1abd38d94b93d0/5493c471e715d7eacf17e7047e68a050f5b3cb0ab9fe9a9147c0199fdb0f36b7?apiKey=c67971bfdb224af7ac1abd38d94b93d0&'
  },
  {
    title: 'Technology',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/c67971bfdb224af7ac1abd38d94b93d0/f0317f360fc6b7451c80aabf16648201c0aad1405b64903ced4a998fefd6026d?apiKey=c67971bfdb224af7ac1abd38d94b93d0&'
  }
];
</script>

<style scoped>
</style>
