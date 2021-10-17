<template>
    <DocABaseVue :href="href" :bgc="bgc" :s="s" :cps="cps" :w="w" :h="h" :hw="hw">{{ content }}</DocABaseVue>
</template>

<script lang="ts" setup>
import DocABaseVue from './DocABase.vue'
const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    bgc: {
        type: String,
        required: true,
    },
    s: {
        type: Number,
        required: true,
    },
    cps: {
        type: Number,
        required: true,
    },
    w: {
        type: String,
        required: true,
    },
    h: {
        type: String,
        required: true,
    },
    hw: {
        type: Number,
        required: true,
    }
})
</script>

<style scoped>
</style>
