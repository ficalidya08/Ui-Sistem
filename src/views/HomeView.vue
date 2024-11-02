<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import JoinTeam from '@/components/JoinTeam.vue'
</script>

<template>
  <MainLayout>
    <main class="flex-grow">
      <section
        class="relative flex flex-col w-full text-base font-bold text-white min-h-[720px]"
      >
        <img
          src="@/assets/images/misc/cover.png"
          alt="Background Image"
          class="object-cover absolute inset-0 size-full"
        />
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div
          class="relative flex flex-col items-start px-20 py-40 w-full max-md:px-5 max-md:py-24"
        >
          <p class="font-semibold leading-none uppercase tracking-[3px]">
            <span class="font-medium">Posted on </span>
            <span class="font-black">startup</span>
          </p>
          <h1
            class="mt-6 text-6xl tracking-tighter leading-[64px] w-[803px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]"
          >
            Step-by-step guide to choosing great font pairs
          </h1>
          <p class="mt-6 leading-7">
            By
            <a href="#" class="text-x-blue hover:text-x-yellow">James West</a> |
            May 23, 2022
          </p>
          <p class="mt-4 leading-7 w-[599px] max-md:max-w-full">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <button
            class="gap-3 px-12 py-4 mt-12 text-lg leading-none bg-x-blue hover:bg-x-yellow focus:outline-none focus:ring-2 focus:ring-blue-300 max-md:px-5 max-md:mt-10"
            tabindex="0"
          >
            Read More >
          </button>
        </div>
      </section>

      <section class="featured-posts px-20 mt-32 max-md:px-5 max-md:mt-10">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-4xl font-bold tracking-tighter text-x-black">
            Featured Post
          </h2>
          <div class="flex items-center gap-80">
            <h3 class="text-4xl font-bold tracking-tighter text-x-black">
              All Posts
            </h3>
            <a
              href="#"
              class="text-base leading-7 text-x-yellow hover:underline"
              >View All</a
            >
          </div>
        </div>

        <!-- Featured Posts Grid -->
        <div class="grid grid-cols-5 gap-5 max-md:grid-cols-1">
          <!-- Main Featured Post -->
          <article class="col-span-3 p-8">
            <img
              loading="lazy"
              src="@/assets/images/misc/feature.png"
              alt="Featured Post"
              class="w-full aspect-[1.9] object-cover"
            />
            <div class="mt-8 text-sm">
              By
              <a href="#" class="text-x-yellow hover:underline">John Doe</a> |
              May 23, 2022
            </div>
            <h3 class="mt-4 text-3xl font-bold tracking-tighter text-x-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h3>
            <p class="mt-4 text-base text-x-mediumgrey">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <button
              class="mt-8 px-12 py-4 bg-x-blue font-bold text-white text-lg hover:bg-x-yellow"
              tabindex="0"
            >
              Read More >
            </button>
          </article>

          <!-- Side Posts -->
          <div class="col-span-2 flex flex-col gap-4">
            <article class="bg-white p-7">
              <time class="text-sm"
                >By
                <a href="#" class="text-x-yellow hover:underline">John Doe</a> |
                Aug 23, 2021</time
              >
              <h3 class="mt-2 text-2xl font-bold text-x-black">
                8 Figma design systems that you can download for free today
              </h3>
            </article>
            <article class="bg-white p-7">
              <time class="text-sm"
                >By
                <a href="#" class="text-x-yellow hover:underline">John Doe</a> |
                Aug 23, 2021</time
              >
              <h3 class="mt-2 text-2xl font-bold text-x-black">
                8 Figma design systems that you can download for free today
              </h3>
            </article>
            <article class="bg-white p-7">
              <time class="text-sm"
                >By
                <a href="#" class="text-x-yellow hover:underline">John Doe</a> |
                Aug 23, 2021</time
              >
              <h3 class="mt-2 text-2xl font-bold text-x-black">
                8 Figma design systems that you can download for free today
              </h3>
            </article>
            <article class="bg-white p-7">
              <time class="text-sm"
                >By
                <a href="#" class="text-x-yellow hover:underline">John Doe</a> |
                Aug 23, 2021</time
              >
              <h3 class="mt-2 text-2xl font-bold text-x-black">
                8 Figma design systems that you can download for free today
              </h3>
            </article>
          </div>
        </div>
      </section>

      <div class="flex justify-end">
        <img
          loading="lazy"
          src="@/assets/images/misc/pattern.png"
          alt=""
          class="object-contain self-end mt-32 aspect-[45.45] max-w-[1061px] w-[1061px] max-md:mt-10 max-md:mr-0.5 max-md:max-w-full"
        />
      </div>

      <section
        class="px-40 py-24 max-md:px-5 max-md:mr-0.5 max-md:max-w-full"
      >
        <div class="flex gap-6 max-md:flex-col">
          <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <h2
                class="self-start font-semibold text-base text-x-black leading-none uppercase tracking-[3px]"
              >
                ABOUT US
              </h2>
              <h3
                class="mt-6 text-4xl text-x-black font-bold tracking-tighter leading-10 max-md:max-w-full"
              >
                We are a community of content writers who share their learnings
              </h3>
              <p
                class="mt-4 mr-6 leading-7 text-x-mediumgrey max-md:mr-2.5 max-md:max-w-full"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="/about"
                class="self-start mt-7 text-lg leading-8 text-x-yellow font-bold hover:underline"
                tabindex="0"
                >Read More &gt;</a
              >
            </div>
          </article>

          <article class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col items-start max-md:mt-10 max-md:max-w-full"
            >
              <h2 class="font-semibold text-x-black text-base leading-none uppercase tracking-[3px]">
                OUR MISION
              </h2>
              <h3 class="mt-6 text-3xl font-bold text-x-black tracking-tighter leading-10">
                Creating valuable content for creatives all around the world
              </h3>
              <p
                class="self-stretch mt-4 texxt-base leading-7 text-x-mediumgrey max-md:max-w-full"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section class="px-20 py-12 max-md:px-5">
        <h2 class="text-4xl font-bold tracking-tighter text-center text-x-black mb-12">
          Choose A Category
        </h2>
        <div class="grid grid-cols-4 gap-8 max-md:grid-cols-1">
          <!-- Category Cards -->
          <a href="/category">
          <article class="border border-opacity-30 border-x-mediumgrey p-8 hover:bg-x-blue hover:text-white transition-colors group">
            <div class="bg-white rounded-lg inline-block">
              <img loading="lazy"
              src="@/assets/images/logo/icon-business.png"
              alt="Business Icon" class="w-12 aspect-square" />
            </div>
            <h3 class="mt-4 text-3xl font-bold text-x-black group-hover:text-white">Business</h3>
            <p class="mt-1 text-x-mediumgrey text-base group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </article>
          </a>
          <article class="border border-opacity-30 border-x-mediumgrey p-8 hover:bg-x-blue hover:text-white transition-colors group">
            <div class="bg-white rounded-lg inline-block">
              <img loading="lazy"
              src="@/assets/images/logo/icon-startup.png"
              alt="Startup Icon" class="w-12 aspect-square scale-50" />
            </div>
            <h3 class="mt-4 text-3xl font-bold text-x-black group-hover:text-white">Startup</h3>
            <p class="mt-1 text-x-mediumgrey text-base group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </article>
          <article class="border border-opacity-30 border-x-mediumgrey p-8 hover:bg-x-blue hover:text-white transition-colors group">
            <div class="bg-white rounded-lg inline-block">
              <img loading="lazy"
              src="@/assets/images/logo/icon-economy.png"
              alt="Economy Icon" class="w-12 aspect-square" />
            </div>
            <h3 class="mt-4 text-3xl font-bold text-x-black group-hover:text-white">Economy</h3>
            <p class="mt-1 text-x-mediumgrey text-base group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </article>
          <article class="border border-opacity-30 border-x-mediumgrey p-8 hover:bg-x-blue hover:text-white transition-colors group">
            <div class="bg-white rounded-lg inline-block">
              <img loading="lazy"
              src="@/assets/images/logo/icon-tech.png"
              alt="Technology Icon" class="w-12 aspect-square" />
            </div>
            <h3 class="mt-4 text-3xl font-bold text-x-black group-hover:text-white">Technology</h3>
            <p class="mt-1 text-x-mediumgrey text-base group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </article>
        </div>
      </section>

      <section class="flex relative flex-col items-end px-20 pt-32 ml-20 mt-32 max-w-full w-full max-md:pt-24 max-md:pl-5 max-md:mt-10">
        <img loading="lazy" src="@/assets/images/misc/started.png" alt="Story background image" class="h-[705px] w-[949px] object-cover absolute inset-0 size-full" />
        <div class="flex relative flex-col p-20 mr-0 max-w-full bg-white w-[706px] max-md:px-5">
          <h3 class="self-start text-base font-semibold leading-none text-x-black uppercase tracking-[3px]">Why we started</h3>
          <h2 class="mt-6 text-5xl font-bold tracking-tighter text-x-black leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">It started out as a simple idea and evolved into our passion</h2>
          <p class="mt-4 leading-7 text-x-mediumgrey max-md:max-w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          <button class="gap-3 self-start px-12 py-5 mt-8 text-lg leading-none text-white bg-x-blue hover:bg-x-yellow max-md:px-5">Discover our story &gt;</button>
        </div>
      </section>

      <section class="mt-12 w-full max-md:mt-10">
        <h2 class="text-4xl font-bold tracking-tighter text-center text-x-black mb-12">
          List of Authors
        </h2>
        <div class="flex gap-5 max-md:flex-col">
          <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <article class="flex flex-col grow px-14 py-10 w-full leading-none max-md:px-5 max-md:mt-8">
              <img src="@/assets/images/profil/floyd.png" alt="Profile photo of Floyd" class="object-contain self-center w-32 max-w-full rounded-full aspect-square" />
              <h2 class="mt-5 text-3xl font-bold text-center tracking-tighter text-gray-800">Floyd Miles</h2>
              <p class="text-sm text-center mt-1 text-zinc-500">Content Writer @Company</p>
              <ul class="object-contain self-center mt-5 w-28 max-w-full aspect-[6.58] flex gap-4 items-center">
                <li>
                  <img src="@/assets/images/logo/black-facebook.png" alt="Logo Facebook" />
                </li>
                <li>
                  <img src="@/assets/images/logo/black-twitter.png" alt="Logo Twitter" />
                </li>
                <li>
                  <img src="@/assets/images/logo/black-instagram.png" alt="Logo Instagram" />
                </li>
                <li>
                  <img src="@/assets/images/logo/black-linkedin.png" alt="Logo Linkedin" />
                </li>
              </ul>
            </article>
          </div>
          <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <article class="flex flex-col grow px-14 py-10 w-full leading-none max-md:px-5 max-md:mt-8">
              <img src="@/assets/images/profil/Dianne.png" alt="Profile photo of Dianne" class="object-contain self-center w-32 max-w-full rounded-full aspect-square" />
              <h2 class="mt-5 text-3xl font-bold text-center tracking-tighter text-gray-800">Dianne Russell</h2>
              <p class="text-sm text-center mt-1 text-zinc-500">Content Writer @Company</p>
              <ul class="object-contain self-center mt-5 w-28 max-w-full aspect-[6.58] flex gap-4 items-center">
                <li>
                  <img src="@/assets/images/logo/black-facebook.png" alt="Logo Facebook" />
                </li>
                <li>
                  <img src="@/assets/images/logo/black-twitter.png" alt="Logo Twitter" />
                </li>
                <li>
                  <img src="@/assets/images/logo/black-instagram.png" alt="Logo Instagram" />
                </li>
                <li>
                  <img src="@/assets/images/logo/black-linkedin.png" alt="Logo Linkedin" />
                </li>
              </ul>
            </article>
          </div>
          <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <article class="flex flex-col grow px-14 py-10 w-full leading-none max-md:px-5 max-md:mt-8">
              <img src="@/assets/images/profil/Jenny.png" alt="Profile photo of Jenny" class="object-contain self-center w-32 max-w-full rounded-full aspect-square" />
              <h2 class="mt-5 text-3xl font-bold text-center tracking-tighter text-gray-800">Jenny Wilson</h2>
              <p class="text-sm text-center mt-1 text-zinc-500">Content Writer @Company</p>
              <ul class="object-contain self-center mt-5 w-28 max-w-full aspect-[6.58] flex gap-4 items-center">
                <li>
                  <img src="@/assets/images/logo/black-facebook.png" alt="Logo Facebook" />
                </li>
                <li>
                  <img src="@/assets/images/logo/black-twitter.png" alt="Logo Twitter" />
                </li>
                <li>
                  <img src="@/assets/images/logo/black-instagram.png" alt="Logo Instagram" />
                </li>
                <li>
                  <img src="@/assets/images/logo/black-linkedin.png" alt="Logo Linkedin" />
                </li>
              </ul>
            </article>
          </div>
          <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <article class="flex flex-col grow px-14 py-10 w-full leading-none max-md:px-5 max-md:mt-8">
              <img src="@/assets/images/profil/Leslie.png" alt="Profile photo of Leslie" class="object-contain self-center w-32 max-w-full rounded-full aspect-square" />
              <h2 class="mt-5 text-3xl font-bold text-center tracking-tighter text-gray-800">Leslie Alexander</h2>
              <p class="text-sm text-center mt-1 text-zinc-500">Content Writer @Company</p>
              <ul class="object-contain self-center mt-5 w-28 max-w-full aspect-[6.58] flex gap-4 items-center">
                <li>
                  <img src="@/assets/images/logo/black-facebook.png" alt="Logo Facebook" />
                </li>
                <li>
                  <img src="@/assets/images/logo/black-twitter.png" alt="Logo Twitter" />
                </li>
                <li>
                  <img src="@/assets/images/logo/black-instagram.png" alt="Logo Instagram" />
                </li>
                <li>
                  <img src="@/assets/images/logo/black-linkedin.png" alt="Logo Linkedin" />
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section class="flex flex-wrap justify-between mx-auto mt-24 w-full max-w-[1237px] text-x-mediumgrey max-md:mt-10 max-md:max-w-full">
        <header class="flex flex-col">
          <h2 class="self-start text-sm leading-none opacity-60">
            We are
          </h2>
          <h3 class="text-2xl font-bold leading-none">
            Featured in
          </h3>
        </header>
        <ul class="object-contain self-center flex gap-16 items-center">
          <li>
            <img src="@/assets/images/logo/logoipsum-1.png" alt="Logo" />
          </li>
          <li>
            <img src="@/assets/images/logo/logoipsum-2.png" alt="Logo" />
          </li>
          <li>
            <img src="@/assets/images/logo/logoipsum-3.png" alt="Logo" />
          </li>
          <li>
            <img src="@/assets/images/logo/logoipsum-4.png" alt="Logo" />
          </li>
          <li>
            <img src="@/assets/images/logo/logoipsum-5.png" alt="Logo" />
          </li>
        </ul>
      </section>

      <section class="flex w-full mt-20 items-center min-h-[450px]">
        <div class="flex flex-col p-40 gap-4 w-[45%]">
          <p class="uppercase text-base text-x-black tracking-[3px] font-semibold">testimonials</p>
          <h2 class="text-4xl font-bold text-x-black tracking-[-2px] leading-[48px]">What people say about our blog</h2>
          <p class="text-base leading-[28px] text-x-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>

        <img src="@/assets/images/misc/line.png" alt="Line" />

        <div class="flex flex-col p-32 gap-4 w-[50%]">
          <h4 class="text-2xl font-bold text-x-black leading-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          <div class="justify-between flex mt-20">
            <div class="flex gap-3">
              <img src="@/assets/images/profil/andrew.png" alt="Profil Andrew" class="h-[100%]"/>
              <div class="flex flex-col w-[257px]">
                <h4 class="text-2xl font-bold text-x-black">Jonathan Vallem</h4>
                <p class="text-base text-x-mediumgrey leading-[1px] mt-1">New York, USA</p>
              </div>
            </div>
            <div class="flex gap-4">
              <img src="@/assets/images/logo/arrow-back.png" alt="Back Button" class="h-[100%]"/>
              <img src="@/assets/images/logo/arrow-next.png" alt="Next Button"/>
            </div>
          </div>
        </div>
      </section>

      <JoinTeam></JoinTeam>
      
    </main>
  </MainLayout>
</template>