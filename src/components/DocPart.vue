<template>
    <DocLink :href="proxy + n">{{ n }}</DocLink>
</template>

<script lang="ts" setup>
import DocLink from '../components/DocLink.vue'
defineProps({
    n: {
        type: String,
        required: true,
    }
})
let proxy = "http://parts.igem.org/Part:"
</script>

<style scoped>
</style>
