import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import ProjectDetails from "../views/ProjectDetails.vue";
import About from "../views/About.vue";

const routes = [
	{
		path: "/my-portfolio-draft/",
		component: Home,
	},
	{
		path: "/my-portfolio-draft/projects",
		component: Projects,
	},
	{
		path: "/my-portfolio-draft/projects/:id",
		component: ProjectDetails,
		props: true,
	},
	{
		path: "/my-portfolio-draft/about",
		component: About,
	},
];

const router = createRouter({
	history: createWebHistory(),
	mode: "hash",
	routes,
});

export default router;
