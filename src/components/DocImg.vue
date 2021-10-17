<template>
    <div class="text-center img_shell">
        <img :src="src" :alt="alt" />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    src: {
        type: String,
        required: true,
    },
    alt: {
        default: "",
        type: String,
        required: false,
    }
})
let src = props.src
let alt = src.split("a--").pop()
// console.log(src.split("a--"))
if (props.alt != "") {
    alt = props.alt
}
</script>

<style scoped>
img {
    text-align: center;
    object-position: center;
    display: inline-block;
    max-height: 50vh;
}
</style>
