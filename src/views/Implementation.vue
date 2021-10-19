<template>
    <DocTemplateVue>
        <template v-slot:index="{ s, i }">
            <DocA
                href="#Proposed-Implementation"
                content="Proposed Implementation"
                bgc="#1C4D7C"
                h="96"
                :s="s"
                :f="i"
            ></DocA>
            <DocA href="#Target-User" content="Target User" bgc="#3076B5" h="89" :s="s" :f="i"></DocA>
            <DocA href="#Safety" content="Safety" bgc="#03A1FF" h="82" :s="s" :f="i"></DocA>
            <DocTop></DocTop>
        </template>
        <template v-slot:content>
            <DocH2 title="Proposed Implementation" id="Proposed-Implementation"></DocH2>
            <p>Autism is the fastest growing developmental disorder. According to the American CDC, the prevalence of autism in the United States increased from 1 in 68 people in 2010 to 1 in 54 in 2020. Although autism is a biological disorder, it is primarily treated through education and behavioral services, with medication as an important adjunct. However, to date, there are no effective drugs to treat autism.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/d/de/T--NJMU-China--Implementation1.1.png"
            ></DocImg>
            <p>In order to use synthetic biology to prevent and treat autism through the gut-brain axis, our experimental design consists of two parts: prevention in the maternal generation and treatment in the fetal generation.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/1/1c/T--NJMU-China--Implementation1.2.png"
            ></DocImg>
            <DocImg
                src="https://2021.igem.org/wiki/images/c/c3/T--NJMU-China--Implementation1.3.png"
            ></DocImg>
            <p>Epidemiological studies have shown that in humans, fetal exposure to maternal inflammation increases the likelihood of developing autism spectrum disorders. When a mother-to-be's immune system is activated by an infection or autoinflammatory syndrome, Th17 and Treg cells in her gut are thrown out of balance, and inflammatory factors, such as IL-17, can transfer across the placental barrier and damage the fetus's nervous system. In that case, her child would be at increased risk for neurodevelopmental disorders. Therefore, we decided to develop a probiotic strain of probiotics as a novel, self-regulating "drug" for pregnant women to ward off the risk of autism in their offspring. As for treatment in the fetal generation, we attempted to code secretable oxytocin, which can be transported to the central nervous system through the gut-brain axis.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/6/62/T--NJMU-China--Implementation1.4.png"
            ></DocImg>
            <DocH2 title="Target User" id="Target-User"></DocH2>
            <p>Children with autism are also what we call children from the stars. They are stars twinkling in the distant sky, all waiting for time to land on Earth, but happen to be trapped in a bottle. When a trapped person falls into a person's arms, the woman becomes his or her beloved mother. When they grow up, they find it difficult to make friends with other "normal" children. So the little guy stays on his or her own planet, and no one has ever landed on theirs and determined what their planet is like.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/c/c5/T--NJMU-China--Implementation1.5.png"
            ></DocImg>
            <p>Our project aims to build a stairway to starlight, use engineered probiotics to prevent autism caused by mothers' infections during pregnancy, and treat children, thus building a healthy path for "children from the stars".</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/e/e4/T--NJMU-China--Implementation1.6.png"
            ></DocImg>
            <p>Professionally, children with autism exhibit varying degrees of dysfunction and social skills, repetitive and stereotyped behaviors, and deficits in attention, cognition, learning, and sensation. Autism is the fastest growing developmental disorder. In China, the statistics are about one in ten births. Although autism is a biological disorder, it is primarily treated through education and behavioral services, with medication as an important adjunct. However, to date, there are no effective drugs to treat autism.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/f/f3/T--NJMU-China--Implementation1.7.png"
            ></DocImg>
            <DocImg
                src="https://2021.igem.org/wiki/images/8/86/T--NJMU-China--Implementation1.8.png"
            ></DocImg>
            <p>The causes of autism are often thought to be environmental or genetic. According to the paper published in Cell, the largest exome sequencing study to date (n= 35,584 samples, 119,86ASD) identified 102 genes as risk genes for ASD (error detection rate of 0.1 or less). Environmental factors that pose a serious risk to the maternal generation, such as maternal immune activation (MIA) and gestational diabetes mellitus (GDM), may also contribute to ASD.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/d/d5/T--NJMU-China--Implementation1.9.png"
            ></DocImg>
            <p>So pregnant mothers and children with autism are both our target population.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/7/7d/T--NJMU-China--Implementation1.10.png"
            ></DocImg>
            <DocImg
                src="https://2021.igem.org/wiki/images/b/b1/T--NJMU-China--Implementation1.11.png"
            ></DocImg>
            <DocH2 title="Safety" id="Safety"></DocH2>
            <p>Biosafety is also considered an important part of our program. So we designed a kill switch that can be activated by the absorption of arabinose. We added the toxic protein MAF downstream of the BAD promoter. Thus, after the desired effect is achieved, MAF expression will result in lysis of the host bacteria.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/f/fe/T--NJMU-China--Implementation1.12.png"
            ></DocImg>
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
import DocTop from '../components/DocTop.vue'
import DocLink2 from '../components/DocLink2.vue'
import DocPart2 from '../components/DocPart2.vue'
</script>

<style scoped>
@import "../css/DocTemplate.css";
</style>
