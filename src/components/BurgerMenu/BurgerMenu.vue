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
        <div 
        :class="['burger-menu__content', {'_active': isBurgerActive}]">
            <router-link 
            class="burger-menu__item" 
            v-for="(link, idx) in links" 
            :key="idx"
            :to="link.href">
                {{ link.name }}
            </router-link>
            <div class="burger-menu__contact contact-menu">
                <div class="contact-menu__title">Контакты:</div>
                <a href="tel:+74996794579" class="contact-menu__elem">+7 499 679 45 79</a>
                <a href="#" class="contact-menu__elem">hello@cyberia.ru</a>
                <a href="#" class="contact-menu__elem">Аносова 3Б, оф. 1</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./BurderMenu.scss" />