<template>
	<div>
		<select v-model="selectedLanguage" @change="changeLanguage">
			<option v-for="lang in supportedLanguages" :key="lang" :value="lang">
				{{ lang }}
			</option>
		</select>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectedLanguage: this.$i18n.locale,
			supportedLanguages: ["en", "mm"], // Add more languages as needed
		};
	},
	methods: {
		changeLanguage() {
			this.$i18n.locale = this.selectedLanguage;
		},
	},
};
</script>
