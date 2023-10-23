<script setup>
import AppHeader from './components/layout/AppHeader.vue';
</script>

<template>
    <div class="wrapper">
        <app-header />
        <main>
            <router-view />
        </main>
    </div>
</template>
