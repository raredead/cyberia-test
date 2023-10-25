<script setup>
import { ref, onMounted } from 'vue'
import { useProjectsStore } from '../stores/ProjectsStore';

import FilterButton from '../components/UI/FilterButton.vue';
import ProjectItem from '../components/ProjectItem.vue';

const projectsStore = useProjectsStore()

const title = ref('Проекты')

onMounted(() => {
    projectsStore.projectList()
})
</script>

<template>
    <section class="projects">
        <h1 class="projects__title">{{ title }}</h1>
        <div class="projects__btns">
            <filter-button 
            name="Backend"
            />
            <filter-button 
            name="Frontend"
            />
        </div>
        <div class="projects__elements">
            <project-item 
            v-for="project in projectsStore.projects"
            :key="project.id"
            :project="project"/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.projects {
    &__elements {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
    }
}
</style>