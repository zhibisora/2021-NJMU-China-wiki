<template>
    <DocABaseVue :href="href" :bgc="bgc" :w="w" :h="h" :hw="30" :s="0" :cps="1">
        <slot></slot>
    </DocABaseVue>
</template>

<script lang="ts" setup>
import DocABaseVue from './DocABase.vue'
const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    bgc: {
        type: String,
        required: true,
    },
    w: {
        type: String,
        required: true,
    },
    h: {
        type: String,
        required: true,
    }
})
</script>

<style scoped>
</style>
