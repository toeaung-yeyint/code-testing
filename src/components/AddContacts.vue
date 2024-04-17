<script setup>
import Heading from "./Heading.vue";
import AppButton from "./AppButton.vue";
import { useContactStore } from "../stores/ContactStore";

const ContactStore = useContactStore();
</script>

<template>
	<Heading text="add a new contact" />
	<form
		className="flex justify-start items-center gap-2"
		@submit="ContactStore.addContacts"
	>
		<div>
			<label htmlFor="name">name: </label>
			<input id="name" type="text" required v-model="ContactStore.name" />
		</div>
		<div>
			<label htmlFor="number">number: </label>
			<input
				className="my-2"
				id="number"
				type="text"
				pattern="[0-9]{2}-[0-9]{5}"
				title="Please
			enter a number in the format xx-xxxxx"
				v-model="ContactStore.phNumber"
			/>
		</div>
		<AppButton label="+ add" />
	</form>
</template>
