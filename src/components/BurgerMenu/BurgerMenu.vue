<script setup>
import { ref } from 'vue'

const links = ref([
    { name: 'Главная', href: '#' },
    { name: 'О нас', href: '#' },
    { name: 'Услуги', href: '#' },
    { name: 'Проекты', href: '#' },
    { name: 'Блог', href: '#' },
])

const isOpenMenu = ref(false)
const isBurgerActive = ref(false)

const toggleMenu = () => {
    isOpenMenu.value = !isOpenMenu.value
    isBurgerActive.value = !isBurgerActive.value
}
</script>

<template>
    <div class="burger-menu">
        <div 
        :class="['burger-menu__btn', { '_active': isBurgerActive }]" 
        @click="toggleMenu">
            <span></span>
        </div>
        <div class="burger-menu__content" v-if="isOpenMenu">
            <router-link class="burger-menu__item" v-for="(link, idx) in links" :key="idx" :to="link.href">
                {{ link.name }}
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.burger-menu {
    &__btn {
        display: none;
    }

    &__content {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #24252F;
        height: 100vh;
        width: 100%;
        z-index: 1;
        padding-top: 80px;
        padding-left: 25px;
    }

    &__item {
        color: var(--main-color);
        font-family: 'Open Sans';
        font-size: 18px;
    }

    &__item:not(:last-child) {
        margin-bottom: 30px;
    }
}

@media (max-width: 980px) {
    .burger-menu__btn {
        z-index: 100;
        display: block;
        position: relative;
        width: 32px;
        height: 32px;
        cursor: pointer;
    }

    .burger-menu__btn span,
    .burger-menu__btn::before,
    .burger-menu__btn::after {
        left: 0;
        position: absolute;
        height: 10%;
        width: 100%;
        transition: all .3s ease 0s;
        background-color: #eef3ff;
    }

    .burger-menu__btn::before,
    .burger-menu__btn::after {
        content: '';
    }

    .burger-menu__btn::before {
        top: 0;
    }

    .burger-menu__btn::after {
        bottom: 0;
    }

    .burger-menu__btn span {
        top: 50%;
        transform: scale(1) translate(0px, -50%);
    }

    .burger-menu__btn._active span {
        transform: scale(0) translate(0px, -50%);
    }

    .burger-menu__btn._active::before {
        top: 50%;
        transform: rotate(-45deg) translate(0px, -50%);
    }

    .burger-menu__btn._active::after {
        bottom: 50%;
        transform: rotate(45deg) translate(0px, 50%);
    }
}
</style>