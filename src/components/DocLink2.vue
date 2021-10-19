<template>
    <span>{{ l }}</span>
    <slot></slot>
    <span>{{ r }}</span>
</template>

<script lang="ts" setup>
defineProps({
    l: {
        default: "",
        type: String,
        required: false,
    },
    r: {
        default: "",
        type: String,
        required: false,
    }
})
</script>

<style scoped>
</style>
