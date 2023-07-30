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
				class="px-2 py-2 flex-grow focus:outline-none"
				type="text"
				placeholder="Enter a theme name"
				v-model="searchTheme"
			/>
			<i class="fa-solid fa-magnifying-glass text-gray-400 px-2 md:px-4"></i>
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
				<option value="chemical">Chemical and Biological Engineering</option>
				<option value="civil">Civil Engineering</option>
				<option value="Electrical and Computer Systems">
					Electrical and Computer Systems Engineering
				</option>
				<option value="Materials Science and Engineering">
					Materials Science and Engineering
				</option>
				<option value="mechanical">Mechanical and Aerospace Engineering</option>
				<option value="Interdisciplinary research">
					Interdisciplinary research
				</option>
			</select>
		</form>
		<div class="grid grid-cols-3 gap-5">
			<a
				href="https://www.google.com/"
				class="flex flex-col shadow-lg group"
				v-for="(theme, index) in filteredThemes"
				:key="index"
			>
				<div class="overflow-hidden">
					<img
						src="https://pixabay.com/get/g7ed2229a4e6f73ea52f29d5d0db28b97607897176929e15b3a5820fda2867bee81cfdbed825db10c923ad0c79e55eb3d_1280.jpg"
						alt=""
						class="h-48 group-hover:scale-110 transition-scale duration-500 object-cover w-full"
					/>
				</div>
				<h3
					class="text-left p-3 relative text-sky-600 text-md font-bold after:content-[''] after:w-full after:h-1 after:bg-gradient-to-r after:from-transparent after:via-[#007aff] after:to-transparent after:absolute after:top-0 after:left-0 after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-500"
				>
					<span class="text-sky-400 block text-xs"
						>Department of {{ theme.department }}</span
					>
					{{ theme.name }}
				</h3>
			</a>
			<!-- <a
				href="https://www.google.com/"
				class="flex flex-col border group relative"
				v-for="(theme, index) in filteredThemes"
				:key="index"
			>
				<h3
					class="text-left p-3 text-sky-600 text-md font-bold after:content-[''] after:w-full after:h-1 after:bg-gradient-to-r after:from-transparent after:via-[#007aff] after:to-transparent after:absolute after:bottom-0 after:left-0 after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-500"
				>
					<span class="text-sky-400 block text-xs"
						>Department of {{ theme.department }}</span
					>
					{{ theme.name }}
				</h3>
			</a> -->
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from "vue";

const themes = ref([
	{
		name: "Resilience, Infrastructure and Society",
		department: "civil",
	},
	{
		name: "Energy, Water and Resources",
		department: "civil",
	},
	{
		name: "Monitoring, Prediction and Protection",
		department: "civil",
	},
	{
		name: "Biotechnology",
		department: "chemical",
	},
	{
		name: "Food",
		department: "chemical",
	},
	{
		name: "Modelling",
		department: "chemical",
	},
	{
		name: "Nanomaterials",
		department: "chemical",
	},
	{
		name: "Fuels and Energy",
		department: "chemical",
	},
	{
		name: "Membranes",
		department: "chemical",
	},
	{
		name: "Advanced Manufacturing",
		department: "mechanical",
	},
	{
		name: "Micro/Nano Engineering",
		department: "mechanical",
	},
	{
		name: "Robotics and Control",
		department: "mechanical",
	},
	{
		name: "Solid Mechanics",
		department: "mechanical",
	},
	{
		name: "Thermofluids",
		department: "mechanical",
	},
	{
		name: "Biomedical Engineering",
		department: "mechanical",
	},
	{
		name: "Membranes",
		department: "chemical",
	},
	{
		name: "Wireless Telecommunications",
		department: "Electrical and Computer Systems",
	},
	{
		name: "Optical Systems and Networking",
		department: "Electrical and Computer Systems",
	},
	{
		name: "Internet of Things",
		department: "Electrical and Computer Systems",
	},
	{
		name: "Smart Power Systems",
		department: "Electrical and Computer Systems",
	},
	{
		name: "Biomedical Engineering",
		department: "Electrical and Computer Systems",
	},
	{
		name: "Electromagnetics and Electronics",
		department: "Electrical and Computer Systems",
	},
	{
		name: "Optimization, Information Processing, Control and Decision Systems",
		department: "Electrical and Computer Systems",
	},
	{
		name: "Additive Manufacturing",
		department: "Materials Science and Engineering",
	},
	{
		name: "Biomaterials",
		department: "Materials Science and Engineering",
	},
	{
		name: "Functional and Energy Materials",
		department: "Materials Science and Engineering",
	},
	{
		name: "Metals and Alloys",
		department: "Materials Science and Engineering",
	},
	{
		name: "Polymers",
		department: "Materials Science and Engineering",
	},
	{
		name: "Materials Theory, Modelling and Characterisation",
		department: "Materials Science and Engineering",
	},
	{
		name: "Robotic & AI",
		department: "Interdisciplinary research",
	},
	{
		name: "Defence",
		department: "Interdisciplinary research",
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
