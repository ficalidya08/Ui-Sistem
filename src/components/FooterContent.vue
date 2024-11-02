<script setup lang="ts"></script>

<template>
  <footer
    class="flex-col px-20 py-24 bg-x-black w-full h-[560px] flex items-center justify-center mt-32"
  >
    <div class="flex flex-wrap justify-between items-start w-full">
      <img src="@/assets/images/logo/logo-footer.png" alt="Footer Logo" />
      <ul class="flex gap-4">
        <li>
          <a href="/" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Home</a>
        </li>
        <li>
          <a href="/blog" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Blog</a>
        </li>
        <li>
          <a href="/about" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">About Us</a>
        </li>
        <li>
          <a href="/contact-us" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Contact Us</a>
        </li>
        <li>
          <a href="/privacy" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Privacy Policy</a>
        </li>
      </ul>
    </div>

    <section class="h-[256px] bg-x-light bg-opacity-5 w-full mt-14 px-16 py-20 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-3 max-md:flex-col">
        <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <h2 class="text-white text-4xl font-bold w-full">
            Subscribe to our news letter to get latest updates and news
          </h2>
        </div>
        <div class="flex flex-col ml-5 mt-1 w-6/12">
          <form class="flex flex-wrap gap-6 w-full">
            <label for="email" class="sr-only">Enter Your Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              id="email"
              class="grow px-6 py-6 text-base border border-solid bg-transparent border-x-darkgrey text-x-mediumgrey w-fit max-md:px-5"
              required
            />
            <button type="submit" class="gap-3 px-12 py-4 text-lg font-bold text-white whitespace-nowrap bg-x-blue hover:bg-x-yellow max-md:px-5">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>

    <div class="flex flex-wrap gap-5 justify-between w-full mt-12 text-base leading-7 text-white max-md:mt-10 max-md:max-w-full">
      <address class="opacity-70 not-italic">
        Finstreet 118 2561 Fintown
      </address>
      <ul class="flex gap-4 items-center">
        <li>
          <img src="@/assets/images/logo/facebook.png" alt="Logo Facebook" />
        </li>
        <li>
          <img src="@/assets/images/logo/twitter.png" alt="Logo Twitter" />
        </li>
        <li>
          <img src="@/assets/images/logo/instagram.png" alt="Logo Instagram" />
        </li>
        <li>
          <img src="@/assets/images/logo/linkedin.png" alt="Logo Linkedin" />
        </li>
      </ul>
    </div>

    <address class="self-start text-white opacity-70 not-italic">
      Hello@finsweet.com 020 7993 2905
    </address>
  </footer>
</template>