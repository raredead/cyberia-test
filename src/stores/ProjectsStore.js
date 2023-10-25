import { defineStore } from 'pinia'
import { ref } from 'vue'
const URL = 'https://backend.cyberia.studio/api/v1/projects'

export const useProjectsStore = defineStore('projectsStore', () => {
    const projects = ref([])
    const loader = ref(false)

    const projectList = async() => {
        loader.value = true
        const res = await fetch(URL)
        const data = await res.json()
        projects.value = data.items
        loader.value = false
    }

    return {
        loader, projects, projectList
    }
})