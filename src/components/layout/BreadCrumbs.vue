<script setup>
const props = defineProps({
    current: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="bread-crumbs">
        <span class="bread-crumbs__wrap">
            <router-link
            class="bread-crumbs__item-main"
            to="/">Главная</router-link> / 
            <router-link
            class="bread-crumbs__item-current"
            :to="props.current.href"
            >{{ props.current.name }}</router-link>
        </span>
    </div>
</template>

<style lang="scss">
.bread-crumbs {

    &__wrap {
        font-family: 'Rubik';
        font-weight: 300;
        font-size: 18px;
        color: var(--main-color);
    }

    &__item-main {
        color: var(--main-color);
        transition: .3s ease-in;
    }

    &__item-main:hover {
        color: var(--color-primary);
    }

    &__item-current {
        color: #61657F;
        transition: .3s ease-in;
    }

    &__item-current:hover {
        color: var(--color-primary);
    }
}
</style>