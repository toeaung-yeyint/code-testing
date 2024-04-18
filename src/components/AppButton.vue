<script setup>
import { computed } from "vue";

const props = defineProps({
	label: String,
	buttonStyle: String,
});

const buttonClass = computed(() => {
	const classMap = {
		primary:
			"capitalize bg-green-600 hover:bg-green-700 text-white border-none px-2 py-1 cursor-pointer",
		alternative:
			"capitalize bg-red-600 hover:bg-red-700 text-white border-none px-2 py-1 cursor-pointer",
	};
	return classMap[props.buttonStyle];
});
</script>

<template>
	<button :class="buttonClass">
		{{ label }}
	</button>
</template>
