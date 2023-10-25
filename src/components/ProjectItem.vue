<script setup>
const props = defineProps({
    project: {
        type: Object,
        required: true,
        default: () => { },
    }
})
</script>

<template>
    <router-link to="#">
        <div class="project">
            <h2 class="project__title">{{ props.project.title }}</h2>
            <span class="project__desc">{{ props.project.description }}</span>
            <div class="project__img">
                <img class="project-img" 
                :src="props.project.image" 
                :alt="props.project.title">
            </div>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
.project {
    max-width: 387px;
    height: 378px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: var(--main-color);
    position: relative;
    transition: .3s linear;

    &::before {
        content: '';
        background: linear-gradient(1turn, #090b21, transparent 70%);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        border-radius: 7px;
    }

    &:hover {
        transform: scale(1.1);
    }

    &__title {
        font-family: 'Rubik';
        font-weight: 500;
        font-size: 28px;
        z-index: 2;
        margin-left: 30px;
    }

    &__desc {
        font-family: 'Open Sans';
        font-weight: 400;
        z-index: 2;
        margin: 7px 0 30px 30px;
    }
}

.project-img {
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 7px;
}
</style>