<template>
    <h2>
        {{ title }}
        <span :id="id" class="anchor"></span>
    </h2>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
})
let title = props.title
// let WordArray = title.split(" ")
// let id = WordArray.join("-")
let id = props.id
</script>

<style scoped>
h2 {
    /* font-family: "Microsoft YaHei", "StarLight"; */
    font-family: "Microsoft YaHei";
    line-height: 6rem;
    font-size: 2rem;
    color: #004d80;
    font-weight: 700;
    letter-spacing: 2px;
}
.anchor {
    position: relative;
    top: -116px;
}
</style>
