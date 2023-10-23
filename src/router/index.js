import { createRouter, createWebHistory } from 'vue-router'
import AppProjects from '../views/AppProjects.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: AppProjects,
            component: AppProjects
        }
    ]
})

export default router