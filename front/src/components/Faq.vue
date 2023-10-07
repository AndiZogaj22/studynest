<template>
 
 <div class="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-36 px-4 relative">
  <div class="gradient-overlay"></div>
  <!-- Your content goes here -->


    
    <h1 class="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">FAQ's</h1>

    <div class="lg:w-8/12 w-full mx-auto">
      <!-- Question 1 -->
      <hr class="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

      <div class="w-full md:px-6">
        <div class="flex justify-between items-center w-full">
          <div>
            <p class="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800">
              <span class="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q1.</span> What is StudyNest
            </p>
          </div>
          <button aria-label="toggler" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" @click="toggleMenu(1)">
            <img class="transform dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg" alt="toggler">
            <img class="transform dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg" alt="toggler">
          </button>
        </div>
        <div v-if="showMenu[1]" class="mt-6 w-full">
          <p class="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
            StudyNest is an online learning community with thousands of classes for creative and curious people, on topics including illustration, design, photography, video, freelancing, and more. On StudyNest, you’ll find inspiration from hands-on classes and teachers at the top of their creative fields, so you can take the next step in your creative journey.
          </p>
        </div>
      </div>

      <!-- Repeat the above code for other questions -->

      <hr class="w-full lg:mt-10 my-8" />
      <div class="w-full md:px-6">
        <div class="flex justify-between items-center w-full">
          <div>
            <p class="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800">
              <span class="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q2.</span> How do I enroll in a course on StudyNest?
            </p>
          </div>
          <button aria-label="toggler" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" @click="toggleMenu(2)">
            <img class="transform dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg" alt="toggler">
            <img class="transform dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg" alt="toggler">
          </button>
        </div>
        <div v-if="showMenu[2]" class="mt-6 w-full">
          <p class="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
            Sign up for an account or log in. Browse courses and select the one you want. Click "Enroll" or "Buy Now" to access the course content.
          </p>
        </div>
      </div>
      <hr class="w-full lg:mt-10 my-8" />
      <div class="w-full md:px-6">
        <div class="flex justify-between items-center w-full">
          <div>
            <p class="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800">
              <span class="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q3.</span> What can i learn on StudyNest
            </p>
          </div>
          <button aria-label="toggler" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" @click="toggleMenu(3)">
            <img class="transform dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg" alt="toggler">
            <img class="transform dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg" alt="toggler">
          </button>
        </div>
        <div v-if="showMenu[3]" class="mt-6 w-full">
          <p class="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
            StudyNest has thousands of classes in everything from graphic design to cooking, productivity, filmmaking, content creation, UI/UX design, marketing, crafts, music, social media, entrepreneurship. If it's something creative, you can learn it on StudyNest.
          </p>
        </div>
      </div>
      <!-- Repeat for other questions -->
      <hr class="w-full lg:mt-10 my-8" />
      <div class="w-full md:px-6">
        <div class="flex justify-between items-center w-full">
          <div>
            <p class="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800">
              <span class="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q4.</span> How can instructors join StudyNest and create their own courses?
            </p>
          </div>
          <button aria-label="toggler" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" @click="toggleMenu(4)">
            <img class="transform dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg" alt="toggler">
            <img class="transform dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg" alt="toggler">
          </button>
        </div>
        <div v-if="showMenu[4]" class="mt-6 w-full">
          <p class="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
            We are currently working on to create an enviorment for instructors to upload their courses on StudyNest.
          </p>
        </div>
      </div>
    </div>
  </div>

</template>
<style>
  .gradient-overlay {
    position: fixed;
    top: -100px; /* Extend the gradient further above */
    left: -250px;
    width: calc(100% + 500px);
    height: calc(100% + 500px);
    background: radial-gradient(at 1% -15%, rgba(96, 165, 250, 0.8) 0%, transparent 40%);
    pointer-events: none;
    opacity: 0.8;
    z-index: -1;
  }
</style>




<script>
export default {
  data() {
    return {
      showMenu: [false, false, false], // Separate array indexes for each question
    };
  },
  methods: {
    toggleMenu(index) {
      // Toggle the visibility of the menu for the clicked question
      this.showMenu[index] = !this.showMenu[index];
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here if needed */
</style>
