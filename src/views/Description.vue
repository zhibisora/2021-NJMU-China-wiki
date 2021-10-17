<template>
    <DocTemplateVue>
        <template v-slot:index="{ s }">
            <DocA
                href="#Inspiration"
                bgc="#56C1FF"
                w="75"
                h="96"
                content="Inspiration"
                :cps="0"
                :s="s"
            ></DocA>
            <DocA3 href="#" bgc="#FFD368" w="20" h="26">
                <span class="-rotate-90 block absolute top-8 left-[55%] -translate-x-1/2">TOP</span>
            </DocA3>
        </template>
        <template v-slot:content>
            <DocH2 title="Inspiration" id="Inspiration"></DocH2>
            <p>Autism is the fastest-growing developmental disability, characterized by early-onset difficulties in social communication, unusually restricted behavior and interests. In our hometown-China, children with autism are also called ‘Children from the star’. Because they are like stars twinkling in the distant sky, lonely and silent.</p>
            <DocImg src="https://2021.igem.org/wiki/images/7/7c/T--NJMU-China--Description.1.1.png"></DocImg>
            <p>According to American CDC, prevalence of autism in the U.S. has increased significantly from 2010 to 2020. And in China the statistic is unpromising. In our city—Nanjing, we got to know many autistic children during human practice in Nanjing Brain Hospital, behind them are countless families with heavy burdens.</p>
            <DocImg src="https://2021.igem.org/wiki/images/0/04/T--NJMU-China--Description.1.2.png"></DocImg>
            <DocImg src="https://2021.igem.org/wiki/images/b/b7/T--NJMU-China--Description.1.3.png"></DocImg>
            <p>In 2020, NJMU-China’s first taste of iGEM, our team carried out the project “Sound of Silence: Domestic autism screening based on urinary metabolites” stood out in 256 teams and won the Gold Award. We proposed a domestic autism screening method based on urinary metabolites in view of problems of screening in autism.</p>
            <DocImg src="https://2021.igem.org/wiki/images/e/e9/T--NJMU-China--Description.1.4.png"></DocImg>
            <p>This year, we shifted our attention from the diagnostic track to the therapeutic track and really getting into the depth of autism. The current treatment methods for autism mainly include medication, behavior therapy and psychotherapy, but the effect is limited.</p>
            <p>In our project, we constructed engineered probiotics transfected with constructed plasmids to treat autism based on the regulation of brain-gut axis.</p>
            <p>Based on our project, we really hope to lead a helping hand to every autistic child and their families. We believed that every child from the star will have his own sky.</p>
        </template>
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
import DocLink from '../components/DocLink.vue'
import DocImgDetail from '../components/DocImgDetail.vue'
</script>

<style scoped>
@import "../css/DocTemplate.css";
</style>
