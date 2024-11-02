<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import BlogCategoryHero from '@/components/Category/BlogCategoryHero.vue';
import CategorySection from '@/components/Category/CategorySection.vue';
</script>

<template>
  <MainLayout>
    <h1><BlogCategoryHero/></h1>
    <h1><CategorySection/></h1>
  </MainLayout>
</template>