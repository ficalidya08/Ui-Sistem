import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import BlogPostView from '../views/BlogPostView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import AuthorView from '@/views/AuthorView.vue'
import BlogPosts from '../views/BlogPostsView.vue';
import SpecialPost from '@/components/Blog/SpecialPost.vue'
import CategoryView from '@/views/CategoryView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/post',
      name: 'post',
      component: BlogPostView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyView,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/AuthorView',
      name: 'AuthorView',
      component: AuthorView,
    },
    {
      path: '/Blogposts',
      name: 'BlogPosts',
      component: BlogPosts,
    },
    {
      path: '/SpecialPost',
      name: 'SpecialPost',
      component: SpecialPost,
    },
    {
      path: '/Category',
      name: 'Category',
      component: CategoryView,
    },
  ],
  
})

export default router
