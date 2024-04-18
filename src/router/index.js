import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
	{
		path: "/",
		component: HomeView,
	},
	{
		path: "/signin",
		component: () => import("../views/SignInView.vue"),
	},
	{
		path: "/signup",
		component: () => import("../views/SignUpView.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		component: () => import("../views/NotFoundView.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
