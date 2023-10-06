<template>
    <div class="flex justify-center items-center h-screen">
      <div>
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="relative mb-3"
        >
          <h6 class="mb-0">
            <button
              @click="toggleAccordion(index)"
              class="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in-out duration-150"
            >
              <span>{{ item.question }}</span>
              <i
                :class="['fa', 'fa-plus', 'absolute', 'right-0', 'pt-1', 'text-xs', {'opacity-0': !item.isOpen, 'opacity-100': item.isOpen}]"
              ></i>
              <i
                :class="['fa', 'fa-minus', 'absolute', 'right-0', 'pt-1', 'text-xs', {'opacity-0': item.isOpen, 'opacity-100': !item.isOpen}]"
              ></i>
            </button>
          </h6>
          <div
            :class="['transition-all', 'duration-150', 'ease-in-out', {'max-h-0': !item.isOpen, 'max-h-full': item.isOpen}]"
            class="overflow-hidden"
          >
            <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        faqItems: [
          {
            question: "What is Material Tailwind?",
            answer:
              "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
            isOpen: false,
          },
          {
            question: "How to use Material Tailwind?",
            answer:
              "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
            isOpen: false,
          },
          {
            question: "What can I do with Material Tailwind?",
            answer:
              "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
            isOpen: false,
          },
        ],
      };
    },
    methods: {
      toggleAccordion(index) {
        this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add Tailwind CSS classes here */
  </style>
  