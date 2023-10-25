import { defineStore } from 'pinia'
const URL = 'https://backend.cyberia.studio/api/v1/projects'

export const useProjectsStore = defineStore('projectsStore', {
    state: () => ({
        projects: []
    }),

    actions: {
        async projectList () {
            const res = await fetch(URL)
            const data = await res.json()
            this.projects = data.items
        }
    }
})