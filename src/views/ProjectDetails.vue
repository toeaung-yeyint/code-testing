<template>
  <h1>This is project {{ project.title }}!</h1>
</template>

<script setup>
import { ref, onMounted } from "vue";
const project = ref("");
const projects = ref([
  { id: 1, title: "team-titles" },
  { id: 2, title: "raise-or-drop" },
  { id: 3, title: "image-object-detection" },
]);
const props = defineProps(["id"]);
console.log(props.id);
onMounted(() => {
  project.value = projects.value.find(
    (project) => project.id === Number.parseInt(props.id)
  );
});
</script>

<style>
</style>