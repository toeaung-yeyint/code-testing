<script setup>
import { ref, onMounted, computed } from "vue";
import Welcome from "./components/Welcome.vue";
import SearchContacts from "./components/SearchContacts.vue";
import AddContacts from "./components/AddContacts.vue";
import DisplayContacts from "./components/DisplayContacts.vue";
import SignUp from "./components/SignUp.vue";
import SignIn from "./components/SignIn.vue";
import { useContactStore } from "./stores/ContactStore";

const ContactStore = useContactStore();
ContactStore.fetchContactList();
</script>

<template>
	<main class="font-[Roboto] p-4">
		<SignUp v-if="!ContactStore.loginUser && !ContactStore.isSignInForm" />
		<SignIn v-if="!ContactStore.loginUser && ContactStore.isSignInForm" />
		<div v-if="ContactStore.loginUser">
			<Welcome :email="ContactStore.loginUser?.email" />
			<SearchContacts />
			<AddContacts />
			<DisplayContacts />
		</div>
	</main>
</template>
