<script setup>
import Heading from "./Heading.vue";
import { useContactStore } from "../stores/ContactStore";

const ContactStore = useContactStore();
</script>

<template>
	<div className="mb-10">
		<Heading text="phonebook" />
		<form>
			<label htmlFor="search">search: </label>
			<input type="text" id="search" v-model="ContactStore.search" />
		</form>
	</div>
</template>
