<script setup lang="ts">
import { ref } from "vue";

type Person = {
  name: string;
  age: number;
  skills: {
    frontend: Array<String>;
    backend: Array<String>;
  };
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
    <li v-for="(skill, type) in reactivePerson.skills" :key="type">
      {{ type }}
      <ul>
        <li v-for="(singleSkill, index) in skill" :key="index">
          {{ singleSkill }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
</style>
