<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import HeroSection from '@/components/Home/HeroSection.vue'

</script>

<template>
  <MainLayout>
    <div class="flex flex-col min-h-screen">
      <HeroSection>
      </HeroSection>

        <!-- Featured Posts Section -->
        <section class="featured-posts px-20 mt-32 max-md:px-5 max-md:mt-10">
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-4xl font-bold tracking-tighter text-gray-800">Featured Post</h2>
            <div class="flex items-center gap-5">
              <h3 class="text-4xl font-bold tracking-tighter text-gray-800">All Posts</h3>
              <a href="#" class="text-base leading-7 text-amber-300 hover:underline">View All</a>
            </div>
          </div>

          <!-- Featured Posts Grid -->
          <div class="grid grid-cols-5 gap-5 max-md:grid-cols-1">
            <!-- Main Featured Post -->
            <article class="col-span-3 border border-zinc-500 p-8">
              <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/c67971bfdb224af7ac1abd38d94b93d0/be3591a6d975ba91e7e8607e8b756becfeb5ea66cabdcabe3f7a441f131042f6?apiKey=c67971bfdb224af7ac1abd38d94b93d0&"
                alt="Featured post image" class="w-full aspect-[1.9] object-cover" />
              <div class="mt-8 text-sm text-amber-300">
                By <a href="#" class="hover:underline">John Doe</a> | May 23, 2022
              </div>
              <h3 class="mt-4 text-3xl font-bold tracking-tighter text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
              <p class="mt-4 text-zinc-500">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <button
                class="mt-8 px-12 py-4 bg-blue-600 text-white text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                tabindex="0">
                Read More >
              </button>
            </article>

            <!-- Side Posts -->
            <div class="col-span-2 flex flex-col gap-4">
              <article class="bg-white p-7">
                <time class="text-sm text-amber-300">Aug 23, 2021</time>
                <h3 class="mt-2 text-2xl font-bold text-gray-800">
                  8 Figma design systems that you can download for free today
                </h3>
              </article>
              <!-- Repeat similar article structure for other posts -->
            </div>
          </div>
        </section>

        <!-- About Section -->
        <section class="bg-gray-100 px-20 py-24 mt-32 max-md:px-5 max-md:mt-10">
          <div class="grid grid-cols-2 gap-5 max-md:grid-cols-1">
            <div>
              <span class="uppercase tracking-[3px] font-semibold text-gray-800">ABOUT US</span>
              <h2 class="mt-6 text-4xl font-bold tracking-tighter text-gray-800">
                We are a community of content writers who share their learnings
              </h2>
              <p class="mt-4 text-zinc-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <a href="#" class="mt-7 text-lg text-amber-300 hover:underline">Read More ></a>
            </div>
            <!-- Mission Column -->
            <div>
              <span class="uppercase tracking-[3px] font-semibold text-gray-800">OUR MISSION</span>
              <h3 class="mt-6 text-3xl font-bold tracking-tighter text-gray-800">
                Creating valuable content for creatives all around the world
              </h3>
              <p class="mt-4 text-zinc-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>

        <!-- Categories Section -->
        <section class="px-20 py-12 max-md:px-5">
          <h2 class="text-4xl font-bold tracking-tighter text-center text-gray-800 mb-12">
            Choose A Category
          </h2>
          <div class="grid grid-cols-4 gap-5 max-md:grid-cols-1">
            <!-- Category Cards -->
            <article class="border border-zinc-500 p-8">
              <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/c67971bfdb224af7ac1abd38d94b93d0/1f6caa464f89441947adf7010f508de88e396385dc4e183a16249f0d3d4ce590?apiKey=c67971bfdb224af7ac1abd38d94b93d0&"
                alt="Business category icon" class="w-12 aspect-square" />
              <h3 class="mt-4 text-3xl font-bold text-gray-800">Business</h3>
              <p class="mt-1 text-zinc-500">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </article>
            <!-- Repeat similar structure for other categories -->
          </div>
        </section>

        <!-- Newsletter Section -->
        <section class="bg-gray-800 text-white px-20 py-14 mt-32 max-md:px-5 max-md:mt-10">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold mb-8">Subscribe to our newsletter</h2>
            <form class="flex gap-4 max-md:flex-col">
              <label for="email" class="sr-only">Email address</label>
              <input type="email" id="email" placeholder="Enter your email"
                class="grow px-6 py-6 text-zinc-500 border border-neutral-600" required />
              <button type="submit"
                class="px-12 py-4 bg-blue-600 text-lg font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                tabindex="0">
                Subscribe
              </button>
            </form>
          </div>
        </section>

      <footer class="bg-gray-800 text-white px-20 py-14 mt-32 max-md:px-5 max-md:mt-10">
        <div class="flex justify-between items-center mb-12">
          <img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c67971bfdb224af7ac1abd38d94b93d0/c440b83c86c77be0e28687e3ef9ab1f21a4ec03256520c951c640a5a66677606?apiKey=c67971bfdb224af7ac1abd38d94b93d0&"
            alt="Footer logo" class="w-[140px]" />
          <nav class="flex gap-6">
            <a href="/" class="hover:text-blue-300">Home</a>
            <a href="/blog" class="hover:text-blue-300">Blog</a>
            <a href="/about" class="hover:text-blue-300">About us</a>
            <a href="/contact" class="hover:text-blue-300">Contact us</a>
            <a href="/privacy" class="hover:text-blue-300">Privacy Policy</a>
          </nav>
        </div>
        <div class="opacity-70">
          <address class="not-italic">
            Finstreet 118 2561 Fintown<br />
            Hello@finsweet.com<br />
            020 7993 2905
          </address>
        </div>
      </footer>
    </div>
  </MainLayout>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'BlogLayout'
})

</script>

<style scoped>
.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-section>div {
  z-index: 2;
}
</style>
