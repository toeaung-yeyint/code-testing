<template>
  <div class="max-w-screen-lg mx-auto my-16 px-4">
    <form
      @submit.prevent
      @input="$emit('inputProvided', (payload = searchShape))"
      class="flex items-center border-2 focus-within:border-sky-500"
    >
      <input
        class="px-2 py-2 flex-grow focus:outline-none"
        type="text"
        placeholder="Enter a theme"
        v-model="searchTheme"
      />
      <i class="fa-solid fa-magnifying-glass text-gray-400 px-2 md:px-4"></i>
    </form>
    <form class="flex items-center justify-end mt-4 mb-16">
      <label for="department">Filter by a department:</label>
      <select
        v-model="department"
        id="department"
        class="ml-4 border-2 focus:outline-none focus:border-sky-500"
      >
        <option value="">All Departments</option>
        <option value="civil">Civil Engineering</option>
        <option value="chemical">Chemical and Biological Engineering</option>
        <option value="mechanical">Mechanical and Aerospace Engineering</option>
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
            class="group-hover:scale-110 transition-scale duration-500 object-cover w-full"
          />
        </div>
        <h3
          class="text-center p-3 relative text-sky-600 text-md font-bold after:content-[''] after:w-full after:h-1 after:bg-gradient-to-r after:from-transparent after:via-[#007aff] after:to-transparent after:absolute after:top-0 after:left-0 after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-500"
        >
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
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    department: "civil",
  },
  {
    name: "Energy, Water and Resources",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    department: "civil",
  },
  {
    name: "Monitoring, Prediction and Protection",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    department: "civil",
  },
  {
    name: "Biotechnology",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    department: "chemical",
  },
  {
    name: "Food",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    department: "chemical",
  },
  {
    name: "Modelling",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    department: "chemical",
  },
  {
    name: "Advanced Manufacturing",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    department: "mechanical",
  },
  {
    name: "Micro/Nano Engineering",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    department: "mechanical",
  },
  {
    name: "Robotics and Control",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    department: "mechanical",
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
