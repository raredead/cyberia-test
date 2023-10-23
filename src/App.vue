<script setup>
import AppHeader from './components/layout/AppHeader.vue';
import BreadCrumbs from './components/layout/BreadCrumbs.vue'
import AppFooter from './components/layout/AppFooter.vue';
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
        <app-footer />
    </div>
</template>