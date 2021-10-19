<template>
    <DocAConciseBaseVue
        :href="href"
        :content="content"
        :bgc="bgc"
        :s="s"
        :cps="cps"
        :w="w"
        :h="h"
        :hw="85"
    ></DocAConciseBaseVue>
</template>

<script lang="ts" setup>
import DocAConciseBaseVue from './DocAConciseBase.vue'
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
        type: Function,
        required: true,
    },
    w: {
        type: String,
        default: "75",
        required: false,
    },
    h: {
        type: String,
        required: true,
    }
})
let cps: number = props.cps()
</script>

<style scoped>
</style>
