<script setup>
import AppHeader from './components/layout/AppHeader.vue';
import BreadCrumbs from './components/layout/BreadCrumbs.vue'
</script>

<template>
    <div class="wrapper">
        <app-header />
        <bread-crumbs 
        :current="{href:'#', name: 'Проекты'}"
        />
        <main>
            <router-view />
        </main>
    </div>
</template>
