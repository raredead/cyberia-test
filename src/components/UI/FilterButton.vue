<script setup>
const props = defineProps({
    name: {
        type: String,
        default: 'Btn'
    },
})
</script>

<template>
    <button class="filter-btn">
        {{ props.name }}
    </button>
</template>