<script setup>
import SignIn from "../components/SignIn.vue";
import { useContactStore } from "../stores/ContactStore";

const ContactStore = useContactStore();
ContactStore.fetchContactList();
</script>

<template>
	<div class="flex flex-col gap-4 items-start">
		<SignIn />
		<RouterLink
			class="uppercase no-underline bg-gray-600 hover:bg-gray-500 text-white border-none px-2 py-1 cursor-pointer"
			to="/"
			>Back to Home</RouterLink
		>
	</div>
</template>
