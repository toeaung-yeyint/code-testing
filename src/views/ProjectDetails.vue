<template>
  <h1>This is project {{ project.title }}!</h1>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, title: "team-titles" },
        { id: 2, title: "raise-or-drop" },
        { id: 3, title: "image-object-detection" },
      ],
      project: null,
    };
  },
  props: ["id"],
  beforeMount() {
    this.project = this.projects.find(
      (project) => project.id === Number.parseInt(this.id)
    );
  },
};
</script>

<style>
</style>