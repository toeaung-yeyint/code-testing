<script setup lang="ts">
import { ref } from "vue";

type Person = {
  name: string;
  age: number;
  skills: Array<string | number>;
};

const { person } = defineProps<{ person: Person }>();
const reactivePerson = ref(person);

function increaseAge() {
  reactivePerson.value.age += 1;
}
</script>

<template>
  <h2>name: {{ reactivePerson.name }}</h2>
  <h2>age: {{ reactivePerson.age }}</h2>
  <button @click="increaseAge">increase age</button>
  <ul>
    <li v-for="(skill, index) in reactivePerson.skills" :key="index">
      {{ skill }}
    </li>
  </ul>
</template>

<style scoped>
</style>
