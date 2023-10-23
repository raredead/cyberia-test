<script setup>
import { ref } from 'vue'

const links = ref([
    { name: 'О нас', href: '#' },
    { name: 'Услуги', href: '#' },
    { name: 'Проекты', href: '#' },
    { name: 'Блог', href: '#' },
    { name: 'Контакты', href: '#' },
])
</script>

<template>
    <header class="header">
        <div class="header__logo">
            <img src="@/assets/img/logo.svg" alt="Logo">
        </div>
        <nav class="header__nav nav-header">
            <router-link
            class="nav-header__item"
            v-for="(link, idx) in links" 
            :key="idx" 
            :to="link.href">
                {{ link.name }}
            </router-link>
        </nav>
    </header>
</template>

<style lang="scss">
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 165px;
}

.nav-header{
    display: flex;
    gap: 93px;

    &__item{
        font-family: 'Rubik';
        font-weight: 300;
        font-size: 18px;
        color: var(--main-color);
        transition: .3s ease-in;
    }

    &__item:hover {
        color: var(--color-primary);
        text-decoration: underline;
    }
}
</style>