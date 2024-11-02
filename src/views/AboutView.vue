<script setup lang="ts">
  import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>  
<MainLayout>
<main class="flex-grow">
   <!-- About Us Section -->
    <section class="relative flex justify-center max-w-screen-xl mx-auto px-5 mt-20">
      <div class="flex gap-5 max-w-5xl w-full max-md:flex-col transform translate-x-7"> <!-- Geser Section About Us sedikit ke kanan -->
        <!-- Left Content -->
        <article class="flex flex-col w-[57%] max-md:w-full">
          <div class="flex flex-col items-start text-gray-800 bg-white p-10 ">
            <h1 class="text-base font-medium uppercase tracking-[3px]">ABOUT US</h1>
            <p class="mt-4 text-5xl font-bold tracking-tighter leading-[64px] max-md:text-4xl max-md:leading-[50px]">
              We are a team of content writers who share their learnings
            </p>
          </div>
        </article>

        <!-- Right Content -->
        <aside class="flex flex-col w-[43%] max-md:w-full">
          <p class="text-base leading-7 text-neutral-600 mt-20 max-md:mt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </aside>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="relative flex flex-col items-center px-10 -mt-10 px-10 w-full max-w-6xl -z-10"> 
  <img loading="lazy" src="@/assetss/images/misc/about us/au1.png" alt="Background image for stats section" class="w-full min-h-[444px] w-[1080px] ml-[100px] object-cover" />
  
  <div class="mt-[1.3%]">
  <div class="absolute inset-x-0 top-[85%] flex justify-around items-center px-2 py-2 bg-blue-600 w-[500px] h-[150px] text-white translate-y-0 ml-[20%] mt-[-100px]">
    
    <!-- Wrapper untuk teks 12+ dan Blog Published -->
  <div class="flex justify-around items-center space-x-8  mt-[5px] ml-[20px]">
  <!-- 12+ dan Blog Published -->
  <div class="flex flex-col items-center ">
    <div class="w-[102px] h-[64px] text-center text-white font-bold text-5xl">
      12+
    </div>
    <div class="w-[121px] h-[28px] text-left text-white  text-sm mt-2">
      Blog Published
    </div>
  </div>

  <!-- 18K+ dan Views on Finsweet -->
  <div class="flex flex-col items-center">
    <div class="w-[102px] h-[64px] text-left text-white font-bold text-5xl">
      18K+
    </div>
    <div class="w-[121px] h-[28px] text-left text-white  text-sm mt-2">
      Views on Finsweet
    </div>
  </div>

  <!-- 30K+ dan Total Active Users -->
  <div class="flex flex-col items-center">
    <div class="w-[102px] h-[64px] text-center text-white font-bold text-5xl">
      30K+
    </div>
    <div class="w-[121px] h-[28px] text-left text-white  text-sm mt-2">
      Total Active Users
    </div>
  </div>
</div>

    
    <!-- Shapes -->
    <img loading="lazy" src="@/assetss/images/shape/yelow1.png" alt="Shape" class="h-[20px] w-[100%] ml-[-94%] mt-[139px]" />
    <img loading="lazy" src="@/assetss/images/shape/yelow1.png" alt="Shape" class="h-[20px] w-[55%] ml-[-10%] mt-[139px] z-[10px]" />
  </div>
  </div>
</section>


    <!-- Mission and Vision Section -->
    <section class="relative flex flex-col items-center px-10 mt-[-15px] ml-[55px] w-full max-w-6xl">
      <div class="grid grid-cols-2 gap-10 p-10 h-[400px] w-[1090px] bg-gray-100 flex items-center -z-20  w-full -ml-3">
        <!-- Mission -->
        <div class="text-left">
          <h2 class="text-sm font-medium uppercase text-gray-500 mb-2">OUR MISSION</h2>
          <p class="text-2xl font-semibold text-gray-800">
            Creating valuable content for creatives all around the world
          </p>
          <p class="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
          </p>
        </div>

        <!-- Vision -->
        <div class="text-left">
          <h2 class="text-sm font-medium uppercase text-gray-500 mb-2">OUR VISION</h2>
          <p class="text-2xl font-semibold text-gray-800">
            A platform that empowers individuals to improve
          </p>
          <p class="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
          </p>
        </div>
      </div>
    </section>

    <!-- Section Article-->
    <section class="px-20 py-24 text-center max-md:px-5">
    <h3 class="text-3xl font-bold text-gray-900">List of Authors</h3>
    <div class="grid grid-cols-4 gap-8 mt-12 max-md:grid-cols-1">
        <!-- Author 1 -->
        <div class="p-8 bg-gray-100 rounded-lg shadow">
            <a href="/AuthorView">
                <img class="w-20 h-20 mx-auto rounded-full" src="@/assetss/images/misc/home/floyd.png" alt="Floyd Miles" />
            </a>
            <h4 class="mt-4 text-xl font-semibold text-gray-900">
                <a href="/AuthorView">Floyd Miles</a>
            </h4>
            <p class="text-sm text-gray-500">Content Writer @Company</p>
            <div class="flex justify-center mt-4 space-x-4 text-gray-500">
                <a href="/AuthorView"><i class="fab fa-facebook-f"></i></a>
                <a href="/AuthorView"><i class="fab fa-twitter"></i></a>
                <a href="/AuthorView"><i class="fab fa-instagram"></i></a>
                <a href="/AuthorView"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        
        <!-- Author 2 -->
        <div class="p-8 bg-gray-100 rounded-lg shadow">
            <a href="/AuthorView">
                <img class="w-20 h-20 mx-auto rounded-full" src="@/assetss/images/misc/home/dianne.png" alt="Dianne Russell" />
            </a>
            <h4 class="mt-4 text-xl font-semibold text-gray-900">
                <a href="/AuthorView">Dianne Russell</a>
            </h4>
            <p class="text-sm text-gray-500">Content Writer @Company</p>
            <div class="flex justify-center mt-4 space-x-4 text-gray-500">
                <a href="/AuthorView"><i class="fab fa-facebook-f"></i></a>
                <a href="/AuthorView"><i class="fab fa-twitter"></i></a>
                <a href="/AuthorView"><i class="fab fa-instagram"></i></a>
                <a href="/AuthorView"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        
        <!-- Author 3 -->
        <div class="p-8 bg-gray-100 rounded-lg shadow">
            <a href="/AuthorView">
                <img class="w-20 h-20 mx-auto rounded-full" src="@/assetss/images/misc/home/jenny.png" alt="Jenny Wilson" />
            </a>
            <h4 class="mt-4 text-xl font-semibold text-gray-900">
                <a href="/AuthorView">Jenny Wilson</a>
            </h4>
            <p class="text-sm text-gray-500">Content Writer @Company</p>
            <div class="flex justify-center mt-4 space-x-4 text-gray-500">
                <a href="/AuthorView"><i class="fab fa-facebook-f"></i></a>
                <a href="/AuthorView"><i class="fab fa-twitter"></i></a>
                <a href="/AuthorView"><i class="fab fa-instagram"></i></a>
                <a href="/AuthorView"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        
        <!-- Author 4 -->
        <div class="p-8 bg-gray-100 rounded-lg shadow">
            <a href="/AuthorView">
                <img class="w-20 h-20 mx-auto rounded-full" src="@/assetss/images/misc/home/leslie.png" alt="Leslie Alexander" />
            </a>
            <h4 class="mt-4 text-xl font-semibold text-gray-900">
                <a href="/AuthorView">Leslie Alexander</a>
            </h4>
            <p class="text-sm text-gray-500">Content Writer @Company</p>
            <div class="flex justify-center mt-4 space-x-4 text-gray-500">
                <a href="/AuthorView"><i class="fab fa-facebook-f"></i></a>
                <a href="/AuthorView"><i class="fab fa-twitter"></i></a>
                <a href="/AuthorView"><i class="fab fa-instagram"></i></a>
                <a href="/AuthorView"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        
        <!-- Author 5 -->
        <div class="p-8 bg-gray-100 rounded-lg shadow">
            <a href="/cAuthorView">
                <img class="w-20 h-20 mx-auto rounded-full" src="@/assetss/images/misc/home/guy.png" alt="Guy Hawkins" />
            </a>
            <h4 class="mt-4 text-xl font-semibold text-gray-900">
                <a href="/AuthorView">Guy Hawkins</a>
            </h4>
            <p class="text-sm text-gray-500">Content Writer @Company</p>
            <div class="flex justify-center mt-4 space-x-4 text-gray-500">
                <a href="/AuthorView"><i class="fab fa-facebook-f"></i></a>
                <a href="/AuthorView"><i class="fab fa-twitter"></i></a>
                <a href="/AuthorView"><i class="fab fa-instagram"></i></a>
                <a href="/AuthorView"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        
        <!-- Author 6 -->
        <div class="p-8 bg-gray-100 rounded-lg shadow">
            <a href="/AuthorView">
                <img class="w-20 h-20 mx-auto rounded-full" src="@/assetss/images/misc/home/eleanor.png" alt="Eleanor Pena" />
            </a>
            <h4 class="mt-4 text-xl font-semibold text-gray-900">
                <a href="/AuthorView">Eleanor Pena</a>
            </h4>
            <p class="text-sm text-gray-500">Content Writer @Company</p>
            <div class="flex justify-center mt-4 space-x-4 text-gray-500">
                <a href="/AuthorView"><i class="fab fa-facebook-f"></i></a>
                <a href="/AuthorView"><i class="fab fa-twitter"></i></a>
                <a href="/AuthorView"><i class="fab fa-instagram"></i></a>
                <a href="/AuthorView"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        
        <!-- Author 7 -->
        <div class="p-8 bg-gray-100 rounded-lg shadow">
            <a href="/AuthorView">
                <img class="w-20 h-20 mx-auto rounded-full" src="@/assetss/images/misc/home/robert.png" alt="Robert Fox" />
            </a>
            <h4 class="mt-4 text-xl font-semibold text-gray-900">
                <a href="/AuthorView">Robert Fox</a>
            </h4>
            <p class="text-sm text-gray-500">Content Writer @Company</p>
            <div class="flex justify-center mt-4 space-x-4 text-gray-500">
                <a href="/AuthorView"><i class="fab fa-facebook-f"></i></a>
                <a href="/AuthorView"><i class="fab fa-twitter"></i></a>
                <a href="/AuthorView"><i class="fab fa-instagram"></i></a>
                <a href="/AuthorView"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        
        <!-- Author 8 -->
        <div class="p-8 bg-gray-100 rounded-lg shadow">
            <a href="/AuthorView">
                <img class="w-20 h-20 mx-auto rounded-full" src="@/assetss/images/misc/home/jacob.png" alt="Jacob Jones" />
            </a>
            <h4 class="mt-4 text-xl font-semibold text-gray-900">
                <a href="/AuthorView">Jacob Jones</a>
            </h4>
            <p class="text-sm text-gray-500">Content Writer @Company</p>
            <div class="flex justify-center mt-4 space-x-4 text-gray-500">
                <a href="/AuthorView"><i class="fab fa-facebook-f"></i></a>
                <a href="/AuthorView"><i class="fab fa-twitter"></i></a>
                <a href="/AuthorView"><i class="fab fa-instagram"></i></a>
                <a href="/AuthorView"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>
</section>


  </main>
</MainLayout>
</template>
