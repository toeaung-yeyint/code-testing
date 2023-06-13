import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import ProjectDetails from '../views/ProjectDetails.vue'
import About from '../views/About.vue'

const routes = [
    {
        path: '/',
        component:  Home
    },
    {
        path: '/projects',
        component:  Projects
    },
    {
        path: '/projects/:id',
        component:  ProjectDetails,
        props: true
    },
    {
        path: '/about',
        component:  About
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;