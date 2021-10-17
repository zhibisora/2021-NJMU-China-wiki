<template>
    <a :href="href" style="color: rgb(35, 90, 138);" class="underline">
        <slot></slot>
    </a>
</template>

<script lang="ts" setup>
defineProps({
    href: {
        type: String,
        required: true,
    }
})
</script>

<style scoped>
</style>
