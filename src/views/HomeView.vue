<script setup>
import Heading from "../components/Heading.vue";
import { useContactStore } from "../stores/ContactStore";
import { defineAsyncComponent } from "vue";

const Welcome = defineAsyncComponent(() => import("../components/Welcome.vue"));

const SearchContacts = defineAsyncComponent(() =>
	import("../components/SearchContacts.vue")
);

const AddContacts = defineAsyncComponent(() =>
	import("../components/AddContacts.vue")
);

const DisplayContacts = defineAsyncComponent(() =>
	import("../components/DisplayContacts.vue")
);

const ContactStore = useContactStore();
ContactStore.fetchContactList();
</script>

<template>
	<div>
		<div v-if="ContactStore.loginUser">
			<Welcome :email="ContactStore.loginUser?.email" />
			<SearchContacts />
			<AddContacts />
			<DisplayContacts />
		</div>
		<div v-else class="flex flex-col gap-4">
			<Heading text="phonebook" />
			<div class="w-[500px] h-[350px] bg-gray-400">
				<img
					class="w-full h-full object-cover"
					loading="lazy"
					src="../assets/homeImage_small.webp"
					srcset="
						../assets/homeImage_small.webp   480w,
						../assets/homeImage_medium.webp 1243w,
						../assets/homeImage_large.webp  1796w
					"
					alt=""
				/>
			</div>
			<div class="flex gap-2">
				<RouterLink
					class="uppercase no-underline bg-gray-600 hover:bg-gray-500 text-white border-none px-2 py-1 cursor-pointer"
					to="/signin"
					>Sign In</RouterLink
				>
				<RouterLink
					class="uppercase no-underline bg-gray-600 hover:bg-gray-500 text-white border-none px-2 py-1 cursor-pointer"
					to="/signup"
					>Sign Up</RouterLink
				>
			</div>
		</div>
	</div>
</template>
