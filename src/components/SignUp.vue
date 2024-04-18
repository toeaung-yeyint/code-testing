<script setup>
import Heading from "./Heading.vue";
import AppButton from "./AppButton.vue";
import { useContactStore } from "../stores/ContactStore";

const ContactStore = useContactStore();
</script>

<template>
	<Heading text="sign up" />
	<form
		className="flex justify-start items-center gap-2"
		@submit="ContactStore.handleSignUp"
	>
		<div>
			<label htmlFor="reg-email">name: </label>
			<input
				id="reg-email"
				type="text"
				required
				v-model="ContactStore.regEmail"
			/>
		</div>
		<div>
			<label htmlFor="reg-password">number: </label>
			<input
				className="my-2"
				id="reg-password"
				type="password"
				v-model="ContactStore.regPassword"
			/>
		</div>
		<AppButton label="register" buttonStyle="primary" />
	</form>
</template>
