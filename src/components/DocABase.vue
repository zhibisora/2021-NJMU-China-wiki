<template>
    <a
        :href="href"
        class="block right-0 absolute bottom-0 rounded-tl-2xl text-white p-[0.7rem] text-xl transition-all duration-300 index"
        style="box-shadow: 0 0 10px 0 rgba(0,0,0,.2);"
        :style="{ backgroundColor: bgc }"
        :class="{ toWider: s == cps }"
    >
        <slot></slot>
    </a>
</template>

<script lang="ts" setup>
const props = defineProps({
    href: {
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
let hoverWidth = props.hw + "%"
let width = props.w + "%"
let height = props.h + "%"
</script>

<style scoped>
.index {
    --width: v-bind(hoverWidth);
    padding-left: 36px;
    white-space: nowrap;
    font-size: 1.15rem;
    width: v-bind(width);
    height: v-bind(height);
}
.index:hover {
    width: var(--width);
}

.toWider {
    width: var(--width);
}
</style>
