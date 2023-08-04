<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <HelloWorld
    :person="{
      name: 'Toe Aung Ye Yint',
      age: 27,
      skills: ['JavaScript', 'TypeScript'],
    }"
  />
</template>

<style scoped>
</style>
