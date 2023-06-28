import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router.js";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
	legacy: false, // Set this to false if you are using Vue 3
	locale: "en",
	fallbackLocale: "en",
	messages: {
		en: {
			hello: "Hello",
		},
		mm: {
			hello: "မင်္ဂလာပါ",
		},
	},
});

createApp(App).use(router).use(i18n).mount("#app");
