<template>
    <DocTemplateVue>
        <template v-slot:index="{ s, i }">
            <DocA href="#Contribution-" content="Contribution " bgc="#1C4D7C" h="96" :s="s" :f="i"></DocA>
            <DocA2
                href="#1.Nitric-oxide-induced-sensor"
                content="1.Nitric oxide-induced sensor"
                bgc="#56C1FF"
                h="89"
                :s="s"
                :f="i"
            ></DocA2>
            <DocA2
                href="#2.L-arabinose--MazF"
                content="2.L-arabinose -MazF"
                bgc="#56C1FF"
                h="82"
                :s="s"
                :f="i"
            ></DocA2>

            <DocTop></DocTop>
        </template>
        <template v-slot:content>
            <DocH2 title="Contribution " id="Contribution-"></DocH2>
            <p>For the Contribution, we completed the experimental characterization of the previous parts (BBa_K2447012,BBa_K2447011,BBa_K554003,BBa_K206000,BBa_K302033) and added the data of them to the corresponding BioBricks.</p>
            <DocImg src="https://2021.igem.org/wiki/images/3/35/T--NJMU-China--Contribution1.1.png"></DocImg>
            <p>All of these may be helpful to other teams. We hope it will make some contribution to the iGEM community.</p>
            <DocH3 title="1.Nitric oxide-induced sensor" id="1.Nitric-oxide-induced-sensor"></DocH3>
            <DocImg src="https://2021.igem.org/wiki/images/7/7b/T--NJMU-China--Contribution1.2.png"></DocImg>
            <p>As for the prove of the function of SoxR&SoxS, we conducted rt-PCR, the results revealed that NO activated the sensor and transcribed more microRNA.</p>
            <DocImg src="https://2021.igem.org/wiki/images/7/76/T--NJMU-China--Contribution1.3.png"></DocImg>
            <DocH3 title="2.L-arabinose -MazF" id="2.L-arabinose--MazF"></DocH3>
            <p>MazF is toxin protein in MazF-MazE, toxin-antitoxin module. It was first registered in 2013 and used as an mRNA endonuclease. It kills bacteria without cracking them, which will directly influence the value of OD600.</p>
            <p>In order to quantify the toxicity of mazF, colony forming unit (CFU) cell viability assays were used to measure functionality of the circuit.</p>
            <p>We construct the circuit “L-arabinose -MazF” in ECN to characterize its function.</p>
            <DocImg src="https://2021.igem.org/wiki/images/0/04/T--NJMU-China--Contribution1.4.png"></DocImg>
            <p>We predicted the growth curve of the engineering bacteria and verified its killing effect induced by arabinose during different period.</p>
            <p>[1] Bacteria are in the logarithmic phase. It can be seen that the CFU of bacteria decreased significantly after arabinose induction.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/5/50/T--NJMU-China--Contribution1.5--compressed.png"
            ></DocImg>
            <p>[2] Bacteria are in the logarithmic phase. It can be seen that the CFU of bacteria decreased significantly after arabinose induction.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/b/b8/T--NJMU-China--Contribution1.6--compressed.png"
            ></DocImg>
            <p>[3] Normal bacteria entered the decay stage, but arabinose cut down the quantity of the bacteria and in turn delayed the decay stage, so there were colonies in the induction group and no colonies in the normal group.</p>
            <DocImg src="https://2021.igem.org/wiki/images/b/b5/T--NJMU-China--Contribution1.7.png"></DocImg>
            <p>[4] At 6h, 9h and 12h, no colonies were found. Completely dead.</p>
            <DocImg src="https://2021.igem.org/wiki/images/3/38/T--NJMU-China--Contribution1.8.png"></DocImg>
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
