<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import HeaderBlog from '@/components/BlogPosts/HeaderBlog.vue';
import imageBlog from '@/components/BlogPosts/imageBlog.vue';
import BlogContent from '@/components/BlogPosts/BlogContent.vue';
import BlogPostSection from '@/components/BlogPosts/BlogPostSection.vue';
import JoinTeam from '@/components/JoinTeam.vue';

</script>

<template>
  <MainLayout>
    <div><HeaderBlog/></div>
    <div><imageBlog/></div>
    <div><BlogContent/></div>
    <div><BlogPostSection/></div>
    <div><JoinTeam/></div>
  </MainLayout>
</template>