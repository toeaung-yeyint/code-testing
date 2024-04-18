<script setup>
import Heading from "./Heading.vue";
import AppButton from "./AppButton.vue";
import { useContactStore } from "../stores/ContactStore";

const ContactStore = useContactStore();
</script>

<template>
	<Heading text="sign in" />
	<form
		className="flex justify-start items-center gap-2"
		@submit="ContactStore.handleSignIn"
	>
		<div>
			<label htmlFor="email">name: </label>
			<input id="email" type="text" required v-model="ContactStore.email" />
		</div>
		<div>
			<label htmlFor="password">number: </label>
			<input
				className="my-2"
				id="password"
				type="password"
				v-model="ContactStore.password"
			/>
		</div>
		<AppButton label="sign in" buttonStyle="primary" />
	</form>
</template>
