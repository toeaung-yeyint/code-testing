<script setup>
import SignUp from "../components/SignUp.vue";
</script>

<template>
	<div class="flex flex-col gap-4 items-start">
		<SignUp />
		<RouterLink
			class="uppercase no-underline bg-gray-600 hover:bg-gray-500 text-white border-none px-2 py-1 cursor-pointer"
			to="/"
			>Back to Home</RouterLink
		>
	</div>
</template>
