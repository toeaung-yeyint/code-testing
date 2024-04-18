<script setup>
import AppButton from "./AppButton.vue";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

defineProps({
	email: String,
});

const handleSignOut = async () => {
	try {
		await signOut(auth);
	} catch (error) {
		console.log(error.message);
	}
};
</script>

<template>
	<div class="flex items-center gap-3">
		<p>Welcome {{ email }}!</p>
		<AppButton
			@click="handleSignOut"
			label="sign out"
			buttonStyle="alternative"
		/>
	</div>
</template>
