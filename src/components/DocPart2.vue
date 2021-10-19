<template>
    <span>{{ l }}</span>
    <DocLink :href="proxy + n">{{ n }}</DocLink>
    <span>{{ r }}</span>
</template>

<script lang="ts" setup>
import DocLink from '../components/DocLink.vue'
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
    },
    n: {
        type: String,
        required: true,
    }
})
let proxy = "http://parts.igem.org/Part:"
</script>

<style scoped>
</style>
