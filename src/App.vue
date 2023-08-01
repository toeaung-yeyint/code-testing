<template>
  <div class="max-w-screen-lg mx-auto my-12 px-4">
    <div class="mt-12 mb-12">
      <h1 class="text-center text-4xl font-bold mb-10">Research themes</h1>
      <p class="text-base">
        Each of our five engineering departments is involved in pioneering
        research across a variety of different research themes. Explore the
        listing below to find out more about the ground-breaking work currently
        under way.
      </p>
    </div>
    <form
      @submit.prevent
      @input="$emit('inputProvided', (payload = searchShape))"
      class="flex items-center border-2 focus-within:border-sky-500"
    >
      <input
        class="px-2 py-1 flex-grow focus:outline-none"
        type="text"
        placeholder="Search themes by entering keywords"
        v-model="searchTheme"
      />
      <i class="fa-solid fa-magnifying-glass text-gray-400 px-2"></i>
    </form>
    <form class="flex items-center justify-end mt-4 mb-16">
      <label for="department" class="font-semibold"
        >Filter by a department:</label
      >
      <select
        v-model="department"
        id="department"
        class="ml-4 border-2 focus:outline-none focus:border-sky-500 font-['Roboto']"
      >
        <option value="">All Departments</option>
        <option value="Chemical Engineering">
          Chemical and Biological Engineering
        </option>
        <option value="Civil Engineering">Civil Engineering</option>
        <option value="Electrical and Computer Systems Engineering">
          Electrical and Computer Systems Engineering
        </option>
        <option value="Materials Science and Engineering">
          Materials Science and Engineering
        </option>
        <option value="Mechanical and Aerospace Engineering">
          Mechanical and Aerospace Engineering
        </option>
        <option value="Interdisciplinary research">
          Interdisciplinary research
        </option>
      </select>
    </form>
    <div class="grid grid-cols-3 gap-10">
      <a
        href="https://www.google.com/"
        class="flex flex-col shadow-lg group"
        v-for="(theme, index) in filteredThemes"
        :key="index"
      >
        <div class="overflow-hidden">
          <img
            :src="theme.image"
            alt=""
            class="h-48 group-hover:scale-110 transition-scale duration-500 object-cover w-full"
          />
        </div>
        <h3
          class="text-left p-3 relative text-sky-600 text-md font-bold after:content-[''] after:w-full after:h-1 after:bg-gradient-to-r after:from-transparent after:via-[#007aff] after:to-transparent after:absolute after:top-0 after:left-0 after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-500"
        >
          <span class="text-sky-400 block text-xs">{{ theme.department }}</span>
          {{ theme.name }}
        </h3>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const themes = ref([
  {
    name: "Resilience, Infrastructure and Society",
    department: "Civil Engineering",
    image: "/code-testing/assets/Resilience, Infrastructure and Society.png/",
  },
  {
    name: "Energy, Water and Resources",
    department: "Civil Engineering",
    image: "/code-testing/assets/Energy, Water and Resources.png/",
  },
  {
    name: "Monitoring, Prediction and Protection",
    department: "Civil Engineering",
    image: "/code-testing/assets/Monitoring, Prediction and Protection.png/",
  },
  {
    name: "Biotechnology",
    department: "Chemical Engineering",
    image: "/code-testing/assets/Biotechnology.jpg/",
  },
  {
    name: "Food",
    department: "Chemical Engineering",
    image: "/code-testing/assets/Food.jpg/",
  },
  {
    name: "Modelling",
    department: "Chemical Engineering",
    image: "/code-testing/assets/Modelling.jpg/",
  },
  {
    name: "Nanomaterials",
    department: "Chemical Engineering",
    image: "/code-testing/assets/Nanomaterials.jpg/",
  },
  {
    name: "Fuels and Energy",
    department: "Chemical Engineering",
    image: "/code-testing/assets/Fuels and Energy.jpg/",
  },
  {
    name: "Membranes",
    department: "Chemical Engineering",
    image: "/code-testing/assets/Membranes.jpg/",
  },
  {
    name: "Advanced Manufacturing",
    department: "Mechanical and Aerospace Engineering",
    image: "/code-testing/assets/Advanced Manufacturing.jpg/",
  },
  {
    name: "Micro/Nano Engineering",
    department: "Mechanical and Aerospace Engineering",
    image: "/code-testing/assets/Micro and Nano Engineering.jpg/",
  },
  {
    name: "Robotics and Control",
    department: "Mechanical and Aerospace Engineering",
    image: "/code-testing/assets/Robotics and Control.jpg",
  },
  {
    name: "Solid Mechanics",
    department: "Mechanical and Aerospace Engineering",
    image: "/code-testing/assets/Solid Mechanics.jpg/",
  },
  {
    name: "Thermofluids",
    department: "Mechanical and Aerospace Engineering",
    image: "/code-testing/assets/Thermofluids.jpg/",
  },
  {
    name: "Biomedical Engineering",
    department: "Mechanical and Aerospace Engineering",
    image: "/code-testing/assets/Biomedical Engineering.jpg/",
  },
  {
    name: "Wireless Telecommunications",
    department: "Electrical and Computer Systems Engineering",
    image: "/code-testing/assets/Wireless Telecommunications.jpg/",
  },
  {
    name: "Optical Systems and Networking",
    department: "Electrical and Computer Systems Engineering",
    image: "/code-testing/assets/Optical Systems and Networking.jpg/",
  },
  {
    name: "Internet of Things",
    department: "Electrical and Computer Systems Engineering",
    image: "/code-testing/assets/Internet of Things.jpg/",
  },
  {
    name: "Smart Power Systems",
    department: "Electrical and Computer Systems Engineering",
    image: "/code-testing/assets/Smart Power Systems.jpg/",
  },
  {
    name: "Robotics and Artificial Intelligence",
    department: "Electrical and Computer Systems Engineering",
    image: "/code-testing/assets/Robotics and Artificial Intelligence.jpg/",
  },
  {
    name: "Biomedical Engineering",
    department: "Electrical and Computer Systems Engineering",
    image: "/code-testing/assets/Biomedical Engineering2.jpg/",
  },
  {
    name: "Electromagnetics and Electronics",
    department: "Electrical and Computer Systems Engineering",
    image: "/code-testing/assets/Electromagnetics and Electronics.jpg/",
  },
  {
    name: "Optimization, Information Processing, Control and Decision Systems",
    department: "Electrical and Computer Systems Engineering",
    image:
      "/code-testing/assets/Optimization, Information Processing, Control and Decision Systems.jpg/",
  },
  {
    name: "Additive Manufacturing",
    department: "Materials Science and Engineering",
    image: "/code-testing/assets/Additive Manufacturing.jpg/",
  },
  {
    name: "Biomaterials",
    department: "Materials Science and Engineering",
    image: "/code-testing/assets/Biomaterials.jpg/",
  },
  {
    name: "Functional and Energy Materials",
    department: "Materials Science and Engineering",
    image: "/code-testing/assets/Functional and Energy Materials.jpg/",
  },
  {
    name: "Metals and Alloys",
    department: "Materials Science and Engineering",
    image: "/code-testing/assets/Metals and Alloys.jpg/",
  },
  {
    name: "Polymers",
    department: "Materials Science and Engineering",
    image: "/code-testing/assets/Polymers.jpg/",
  },
  {
    name: "Materials Theory, Modelling and Characterisation",
    department: "Materials Science and Engineering",
    image:
      "/code-testing/assets/Materials Theory, Modelling and Characterisation.jpg/",
  },
  {
    name: "Robotic & AI",
    department: "Interdisciplinary research",

    image: "/code-testing/assets/Robotic and AI.jpg/",
  },
  {
    name: "Defence",
    department: "Interdisciplinary research",
    image: "/code-testing/assets/Defence.jpg/",
  },
]);

const searchTheme = ref("");

const department = ref("");

const filteredThemes = computed(() => {
  return themes.value
    .filter(
      (theme) =>
        theme.name
          .toLowerCase()
          .includes(searchTheme.value.trim().toLowerCase()) &&
        theme.department.toLowerCase().includes(department.value.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));
});
</script>

<style></style>
