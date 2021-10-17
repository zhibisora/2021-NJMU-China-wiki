<template>
    <DocTemplateVue>
        <template v-slot:index="{ s }"></template>
        <template v-slot:content></template>
    </DocTemplateVue>
</template>

<script lang="ts" setup>
import DocA3 from '../components/DocA3.vue'
import DocA2 from '../components/DocA2.vue'
import DocA from '../components/DocA.vue'
import DocH2 from '../components/DocH2.vue'
import DocH3 from '../components/DocH3.vue'
import DocImg from '../components/DocImg.vue'
import DocTemplateVue from '../components/DocTemplate.vue'
</script>

<style scoped>
@import "../css/DocTemplate.css";
</style>
