<script setup>
import Heading from "./Heading.vue";
import AppButton from "./AppButton.vue";
import { useContactStore } from "../stores/ContactStore";

const ContactStore = useContactStore();
ContactStore.fetchContactList();
</script>

<template>
	<Heading text="contacts" />
	<ul className="pl-0 m-0 ">
		<li
			className="list-[square] leading-relaxed flex items-center gap-2"
			v-for="contact in ContactStore.filteredContacts"
			:key="contact.id"
		>
			{{ contact.data().name }} {{ contact.data().phNumber }}
			<AppButton @click="ContactStore.deleteContacts(contact.id)" label="x" />
		</li>
	</ul>
</template>
