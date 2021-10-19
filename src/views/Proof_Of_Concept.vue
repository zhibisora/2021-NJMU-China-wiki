<template>
    <DocTemplateVue>
        <template v-slot:index="{ s, i }">
            <DocA
                href="#Proof-of-concept"
                content="Proof of concept"
                bgc="#1C4D7C"
                h="96"
                :s="s"
                :f="i"
            ></DocA>
            <DocA2
                href="#MATERNAL-GENERATION"
                content="MATERNAL GENERATION"
                bgc="#56C1FF"
                h="89"
                :s="s"
                :f="i"
            ></DocA2>
            <DocA2
                href="#FETAL-GENERATION"
                content="FETAL GENERATION"
                bgc="#56C1FF"
                h="82"
                :s="s"
                :f="i"
            ></DocA2>
            <DocTop></DocTop>
        </template>
        <template v-slot:content>
            <DocH2 title="Proof of concept" id="Proof-of-concept"></DocH2>
            <p>In 2021, NJMU-China have put forward the project of “maternal prevention and offspring treatment of autism induced by maternal infection during pregnancy” and use synthetic biology tools to prove the concept.</p>
            <p>Our project contains two parts (for the maternal generation and for the fetal generation), every part has three systems: sensor, functional gene and kill switch systems.</p>
            <DocH3 title="MATERNAL GENERATION" id="MATERNAL-GENERATION"></DocH3>
            <h4>1.Proof of the successful transformation</h4>
            <DocImg
                src="https://2021.igem.org/wiki/images/5/51/T--NJMU-China--Proof_Of_Concept1.1.png"
            ></DocImg>
            <DocImg
                src="https://2021.igem.org/wiki/images/f/f8/T--NJMU-China--Proof_Of_Concept1.2.png"
            ></DocImg>
            <p>We successfully transformed our plasmid into EcN by electroporation.</p>
            <h4>2.Sensor &functional gene</h4>
            <p>Then, we have successfully verified the function of NO sensor and the normal expression of mi126a.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/c/ca/T--NJMU-China--Proof_Of_Concept1.3--compressed.png"
            ></DocImg>
            <p>In the meanwhile, the function of miRNA to combine with DNMTs is simulated by modeling method (See the details in Model).</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/f/fb/T--NJMU-China--Proof_Of_Concept1.4.png"
            ></DocImg>
            <DocImg
                src="https://2021.igem.org/wiki/images/8/8a/T--NJMU-China--Proof_Of_Concept1.5--compressed.png"
            ></DocImg>
            <DocH3 title="FETAL GENERATION" id="FETAL-GENERATION"></DocH3>
            <h4>1.Proof of the successful transformation</h4>
            <p>We successfully transformed our plasmid into EcN by electroporation.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/2/2a/T--NJMU-China--Proof_Of_Concept1.6--compressed.png"
            ></DocImg>
            <h4>
                2.Sensor and functional gene
                <DocPart2 n="BBa_K3873873" l="( " r=" &"></DocPart2>
                <DocPart2 n="BBa_K3873387" l=" " r=" )"></DocPart2>
            </h4>
            <p>We used 0g/L, 0.001g/L and 1g/L tryptamine solution to induce the expression of oxytocin in the engineering bacteria and detected the intracellular and extracellular levels of oxytocin at 6 h respectively by Elisa.</p>
            <p>The results showed that the expression level of oxytocin increased with time. In addition, the higher the induced concentration is, the more oxytocin will be expressed.</p>
            <p>Moreover, the amount of intracellular oxytocin is lower than the amount of extracellular oxytocin, indicating that our signal peptide does play a role.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/f/ff/T--NJMU-China--Proof_Of_Concept1.7.png"
            ></DocImg>
            <p>By detecting the extracellular oxytocin at 2h, 4h and 6h after induction with 0,0.001,0.01,0.1g/L tryptophan LB solution, we found that the expression level of oxytocin increased with time.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/7/74/T--NJMU-China--Proof_Of_Concept1.8.png"
            ></DocImg>
            <p>In the meanwhile, the function of sensor and oxytocin were confirmed by model.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/b/b1/T--NJMU-China--Proof_Of_Concept1.9--compressed.png"
            ></DocImg>
            <p>As for the docking of RNA-chemical interaction, we simulated it using AutoDock Vina. We simulated 50 structures at a time. The binding energy and RMSD of top five models (by the binding energy) are as follows.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/8/85/T--NJMU-China--Proof_Of_Concept1.10.png"
            ></DocImg>
            <DocImgDetail>（RMSD should lower than 2；Binding energy should lower than -1.2）</DocImgDetail>
            <p>To characterize and verify our parts preliminarily, we simulated the interactions between oxytocin and the receptor.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/2/26/T--NJMU-China--Proof_Of_Concept1.11--compressed.png"
            ></DocImg>
            <DocImg
                src="https://2021.igem.org/wiki/images/b/bd/T--NJMU-China--Proof_Of_Concept1.12--compressed.png"
            ></DocImg>
            <p>The top five models (by the binding energy) of our 20 predicted models are as follows.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/b/b1/T--NJMU-China--Proof_Of_Concept1.13.png"
            ></DocImg>
            <h4>3.Kill Switch</h4>
            <p>We predicted the growth curve of the engineering bacteria and verified its killing effect induced by arabinose during different period.</p>
            <p>[1] Bacteria are in the logarithmic phase. It can be seen that the CFU of bacteria decreased significantly after arabinose induction.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/2/25/T--NJMU-China--Proof_Of_Concept1.14--compressed.png"
            ></DocImg>
            <p>[2] Bacteria are in the logarithmic phase. It can be seen that the CFU of bacteria decreased significantly after arabinose induction.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/1/19/T--NJMU-China--Proof_Of_Concept1.15--compressed.png"
            ></DocImg>
            <p>[3] Normal bacteria entered the decay stage, but arabinose cut down the quantity of the bacteria and in turn delayed the decay stage, so there were colonies in the induction group and no colonies in the normal group.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/f/fe/T--NJMU-China--Proof_Of_Concept1.16--compressed.png"
            ></DocImg>
            <p>[4] At 6h, 9h and 12h, no colonies were found. Completely dead.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/5/5f/T--NJMU-China--Proof_Of_Concept1.17--compressed.png"
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
