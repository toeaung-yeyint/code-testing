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
    <form @submit.prevent class="flex gap-4 mb-16 flex-wrap justify-end">
      <div
        class="focus-within:border-sky-500 flex w-full items-center border-2 p-2"
      >
        <input
          class="focus:outline-none flex-grow"
          type="text"
          placeholder="Search themes by entering keywords"
          v-model="searchTheme"
        />
        <i class="fa-solid fa-magnifying-glass px-2"></i>
      </div>
      <div class="flex items-center justify-end">
        <select
          v-model="department"
          id="department"
          class="bg-sky-500 border-2 text-sm w-full sm:w-fit border-sky-500 text-white p-1 focus:outline-none focus:border-sky-500 font-['Roboto']"
        >
          <option>Filter by Department</option>
          <option>Chemical and Biological Engineering</option>
          <option>Civil Engineering</option>
          <option>Electrical and Computer Systems Engineering</option>
          <option>Materials Science and Engineering</option>
          <option>Mechanical and Aerospace Engineering</option>
          <option>Interdisciplinary research</option>
        </select>
      </div>
    </form>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
    image: "/code-testing/assets/resilience-infrastructure-society.png",
  },
  {
    name: "Energy, Water and Resources",
    department: "Civil Engineering",
    image: "/code-testing/assets/energy-water-resources.png",
  },
  {
    name: "Monitoring, Prediction and Protection",
    department: "Civil Engineering",
    image: "/code-testing/assets/monitoring-prediction-protection.png",
  },
  {
    name: "Biotechnology",
    department: "Chemical and Biological Engineering",
    image: "/code-testing/assets/biotechnology.jpg",
  },
  {
    name: "Food",
    department: "Chemical and Biological Engineering",
    image: "/code-testing/assets/food.jpg",
  },
  {
    name: "Modelling",
    department: "Chemical and Biological Engineering",
    image: "/code-testing/assets/modelling.jpg",
  },
  {
    name: "Nanomaterials",
    department: "Chemical and Biological Engineering",
    image: "/code-testing/assets/nanomaterials.jpg",
  },
  {
    name: "Fuels and Energy",
    department: "Chemical and Biological Engineering",
    image: "/code-testing/assets/fuels-and-energy.jpg",
  },
  {
    name: "Membranes",
    department: "Chemical and Biological Engineering",
    image: "/code-testing/assets/membranes.jpg",
  },
  {
    name: "Advanced Manufacturing",
    department: "Mechanical and Aerospace Engineering",
    image: "/code-testing/assets/advanced-manufacturing.jpg",
  },
  {
    name: "Micro/Nano Engineering",
    department: "Mechanical and Aerospace Engineering",
    image: "/code-testing/assets/micro-and-nano-engineering.jpg",
  },
  {
    name: "Robotics and Control",
    department: "Mechanical and Aerospace Engineering",
    image: "/code-testing/assets/robotics-and-control.jpg",
  },
  {
    name: "Solid Mechanics",
    department: "Mechanical and Aerospace Engineering",
    image: "/code-testing/assets/solid-mechanics.jpg",
  },
  {
    name: "Thermofluids",
    department: "Mechanical and Aerospace Engineering",
    image: "/code-testing/assets/thermofluids.jpg",
  },
  {
    name: "Biomedical Engineering",
    department: "Mechanical and Aerospace Engineering",
    image: "/code-testing/assets/biomedical-engineering.jpg",
  },
  {
    name: "Wireless Telecommunications",
    department: "Electrical and Computer Systems Engineering",
    image: "/code-testing/assets/wireless-telecommunications.jpg",
  },
  {
    name: "Optical Systems and Networking",
    department: "Electrical and Computer Systems Engineering",
    image: "/code-testing/assets/optical-systems-and-networking.jpg",
  },
  {
    name: "Internet of Things",
    department: "Electrical and Computer Systems Engineering",
    image: "/code-testing/assets/internet-of-things.jpg",
  },
  {
    name: "Smart Power Systems",
    department: "Electrical and Computer Systems Engineering",
    image: "/code-testing/assets/smart-power-systems.jpg",
  },
  {
    name: "Robotics and Artificial Intelligence",
    department: "Electrical and Computer Systems Engineering",
    image: "/code-testing/assets/robotics-and-artificial-intelligence.jpg",
  },
  {
    name: "Biomedical Engineering",
    department: "Electrical and Computer Systems Engineering",
    image: "/code-testing/assets/biomedical-engineering2.jpg",
  },
  {
    name: "Electromagnetics and Electronics",
    department: "Electrical and Computer Systems Engineering",
    image: "/code-testing/assets/electromagnetics-and-electronics.jpg",
  },
  {
    name: "Optimization, Information Processing, Control and Decision Systems",
    department: "Electrical and Computer Systems Engineering",
    image:
      "/code-testing/assets/optimization-information-processing-control-and-decision-systems.jpg",
  },
  {
    name: "Additive Manufacturing",
    department: "Materials Science and Engineering",
    image: "/code-testing/assets/additive-manufacturing.jpg",
  },
  {
    name: "Biomaterials",
    department: "Materials Science and Engineering",
    image: "/code-testing/assets/biomaterials.jpg",
  },
  {
    name: "Functional and Energy Materials",
    department: "Materials Science and Engineering",
    image: "/code-testing/assets/functional-and-energy-materials.jpg",
  },
  {
    name: "Metals and Alloys",
    department: "Materials Science and Engineering",
    image: "/code-testing/assets/metals-and-alloys.jpg",
  },
  {
    name: "Polymers",
    department: "Materials Science and Engineering",
    image: "/code-testing/assets/polymers.jpg",
  },
  {
    name: "Materials Theory, Modelling and Characterisation",
    department: "Materials Science and Engineering",
    image:
      "/code-testing/assets/materials-theory-modelling-characterisation.jpg",
  },
  {
    name: "Robotic & AI",
    department: "Interdisciplinary research",
    image: "/code-testing/assets/robotic-and-ai.jpg",
  },
  {
    name: "Defence",
    department: "Interdisciplinary research",
    image: "/code-testing/assets/defence.jpg",
  },
]);

const searchTheme = ref("");

const department = ref("Filter by Department");

const filteredThemes = computed(() => {
  return themes.value
    .filter(
      (theme) =>
        theme.name
          .toLowerCase()
          .includes(searchTheme.value.trim().toLowerCase()) &&
        (department.value === "Filter by Department" ||
          theme.department
            .toLowerCase()
            .includes(department.value.toLowerCase()))
    )
    .sort((a, b) => a.name.localeCompare(b.name));
});
</script>

<style scoped>
</style>
