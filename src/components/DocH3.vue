<template>
    <h3>
        {{ title }}
        <span :id="id" class="anchor"></span>
    </h3>
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
h3 {
    /* font-weight: bold; */
    /* font-weight: 600; */
    line-height: 4rem;
    font-size: 1.5rem;
}
.anchor {
    position: relative;
    top: -116px;
}
</style>
