<template>
    <MyNav></MyNav>
    <div class="init">
        <Member2 :title-array="titleArray" :article-array="articleArray" :src-array="srcArray"></Member2>
    </div>
    <MyFooter></MyFooter>
</template>

<script lang="ts" setup>
import MyFooter from "../components/MyFooter.vue"
import MyNav from "../components/MyNav.vue"
import Member2 from "../components/Member2.vue"

// Wiki & Art
let titleArray = $ref([
    "Weiyu Yuan",
    "Chengxi Jin",
    "Na Shen",
    "Zhengyang Zhu",
    "Weiyu Yuan",
])
let articleArray = $ref([
    "Hello, I am Yuan Weiyu<br />from Nanjing Medical University,<br />responsible for art designing in our team.<br />An amateur artist, a future dentist.",
    "My name is Chenxi Jin.<br />I am from the school of Biomedical Engineering and information,<br />Medical University,majoring in bioinformatics. I worked in the 2021 NJMU-iGEM team<br />As a newcomer to the iGEMer family, I am very happy to participate in the iGEM competition in 2021.<br />In my daily life, I like to study some theories and technologies.<br />And also, I always develop some strange little programs in the dormitory,<br />or study some knowledge in other fields.",
    'Hello, my name is Na Shen,<br />from the school of basic medicine<br />sciences of Nanjing Medical University.<br />I love all interesting new things,<br />like to try new things, like<br />to laugh and love life',
    'I am Zhu Zhengyang,<br />studying forensic medicine at the School of<br />Basic Medical Sciences, Nanjing Medical University.<br />Currently working as an artist in the web team,<br />participating in the production of games,<br />writing lyrics and arranging music.',
    "Hello, I am Yuan Weiyu<br />from Nanjing Medical University,<br />responsible for art designing in our team.<br />An amateur artist, a future dentist.",

])
let srcArray = $ref([
    "url(/Team/Members/images/Members/照片/朱政扬.jpg)",
    "url(/Team/Members/images/Members/照片/袁玮煜.jpg)",
    "url(/Team/Members/images/Members/照片/金晨曦.jpg)",
    "url(/Team/Members/images/Members/照片/沈娜.jpg)",
])
</script>

<style scoped>
</style>
