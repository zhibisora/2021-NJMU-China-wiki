<template>
    <DocAConciseBaseVue
        :href="href"
        :content="content"
        :bgc="bgc"
        :s="s"
        :cps="cps"
        :w="w"
        :h="h"
        :hw="70"
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
        type: Number,
        required: false,
    },
    w: {
        type: String,
        default: "60",
        required: false,
    },
    h: {
        type: String,
        required: true,
    },
    f: {
        type: Function,
        required: false,
    }
})
let cps: number = null!
if (props.cps) {
    cps = props.cps
} else if (props.f) {
    cps = props.f()
}
</script>

<style scoped>
</style>
