<template>
  <div class="bg-inherit">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-16 w-auto transition-transform transform hover:scale-110" src="../assets/logo.png" alt="">
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            @click="toggleMobileMenu"
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
  <div class="hidden lg:flex lg:gap-x-12">
    <router-link to="/" class="text-sm font-semibold leading-6 text-text hover:text-primary">Home</router-link>
    <router-link to="/courses" class="text-sm font-semibold leading-6 text-text hover:text-primary">Courses</router-link>
    <router-link to="/aboutus" class="text-sm font-semibold leading-6 text-text hover:text-primary">About Us</router-link>
    <router-link to="/contactus" class="text-sm font-semibold leading-6 text-text hover:text-primary">Contact Us</router-link>
    <router-link to="/mydashboard" class="text-sm font-semibold leading-6 text-text hover:text-primary">My Dashboard</router-link>
    <router-link to="/newsletter" class="text-sm font-semibold leading-6 text-text hover:text-primary">Newsletter</router-link>
  </div>


        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-text">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
      <!-- Mobile menu, show/hide based on menuOpen state. -->
      <div v-if="menuOpen" class="lg:hidden" role="dialog" aria-modal="true">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0 z-50" @click="closeMobileMenu"></div>
        <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
            </a>
            <button
              @click="closeMobileMenu"
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text hover:text-primary">Home</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text  hover:text-primary">Courses</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text hover:text-primary">About Us</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text hover:text-primary">Contact Us</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text hover:text-primary">My Dashboard</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text hover:text-primary">Newsletter</a>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-text hover:text-accent">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false, // Initially, the mobile menu is closed
    };
  },
  methods: {
    toggleMobileMenu() {
      this.menuOpen = !this.menuOpen; // Toggle the mobile menu state
    },
    closeMobileMenu() {
      this.menuOpen = false; // Close the mobile menu
    },
  },
};
</script>
