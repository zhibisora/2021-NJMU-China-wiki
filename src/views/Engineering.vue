<template>
    <DocTemplateVue>
        <template v-slot:index="{ s, i }">
            <DocA href="#Overview" content="Overview" bgc="#1C4D7C" h="96" :s="s" :f="i"></DocA>
            <DocA
                href="#Engineering-Success"
                content="Engineering Success"
                bgc="#3076B5"
                h="89"
                :s="s"
                :f="i"
            ></DocA>
            <DocA2
                href="#MATERNAL-GENERATION"
                content="MATERNAL GENERATION"
                bgc="#56C1FF"
                h="82"
                :s="s"
                :f="i"
            ></DocA2>
            <DocA2
                href="#FETAL-GENERATION"
                content="FETAL GENERATION"
                bgc="#56C1FF"
                h="75"
                :s="s"
                :f="i"
            ></DocA2>
            <DocTop></DocTop>
        </template>
        <template v-slot:content>
            <DocH2 title="Overview" id="Overview"></DocH2>
            <p>In 2021, NJMU-China have put forward our project's problems and use synthetic biology tools to generate expected results. Our project contains two parts (for the maternal generation and for the fetal generation), every part has three systems: sensor, functional gene and kill switch systems.</p>
            <p>Combined with the results of literature analysis, model prediction and Human Practices, we found several candidates. Totally, 7 new BioBricks were designed for our project (See the Parts and Design details in Parts and Design).</p>
            <p>We have done a lot of amazing work to make sure that they can realize the goals we set. These three BioBricks works well to perform their functions and works as expected. All data related are recorded here. We hope they will make some contribution to the iGEM community.</p>
            <DocH2 title="Engineering Success" id="Engineering-Success"></DocH2>
            <DocH3 title="MATERNAL GENERATION" id="MATERNAL-GENERATION"></DocH3>
            <h4>1.Proof of the successful transformation</h4>
            <p>We successfully transformed our plasmid into EcN by electroporation.</p>
            <DocImg src="https://2021.igem.org/wiki/images/3/36/T--NJMU-China--Engineering1.1.png"></DocImg>
            <DocImg src="https://2021.igem.org/wiki/images/3/3f/T--NJMU-China--Engineering1.2.png"></DocImg>
            <h4>
                2.Sensor &functional gene
                <DocPart2 n="BBa_K3873333" l="( " r=" )"></DocPart2>
            </h4>
            <p>Then, we have successfully verified the function of NO sensor and the normal expression of mi126a.</p>
            <DocImg src="https://2021.igem.org/wiki/images/e/e4/T--NJMU-China--Engineering1.3.png"></DocImg>
            <p>In the meanwhile, the function of miRNA is simulated by modeling method. (See the details in Model).</p>
            <DocImg src="https://2021.igem.org/wiki/images/d/db/T--NJMU-China--Engineering1.4.png"></DocImg>
            <DocImg src="https://2021.igem.org/wiki/images/9/96/T--NJMU-China--Engineering1.5.png"></DocImg>
            <h4>
                3. kill switch systems
                <DocPart2 n="BBa_K206000" l="( " r=" &"></DocPart2>
                <DocPart2 n="BBa_K302033" l=" " r=" )"></DocPart2>
            </h4>
            <p>As for the killing switch, we tested its effectiveness in inducing suicide in a plate experiment.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/7/7d/T--NJMU-China--Engineering1.6--compressed.png"
            ></DocImg>
            <DocH3 title="FETAL GENERATION" id="FETAL-GENERATION"></DocH3>
            <h4>1.Proof of the successful transformation</h4>
            <p>We successfully transformed our plasmid into EcN by electroporation.</p>
            <DocImg src="https://2021.igem.org/wiki/images/0/0c/T--NJMU-China--Engineering1.7.png"></DocImg>
            <h4>
                2.Sensor and functional gene
                <DocPart2 n="BBa_K3873873" l="( " r=" &"></DocPart2>
                <DocPart2 n="BBa_K3873387" l=" " r=" )"></DocPart2>
            </h4>
            <p>We used 0g/L, 0.001g/L and 1g/L tryptamine solution to induce the expression of oxytocin in the engineering bacteria and detected the intracellular and extracellular levels of oxytocin at 6 h respectively by Elisa.</p>
            <p>The results showed that the expression level of oxytocin increased with time. In addition, the higher the induced concentration is, the more oxytocin will be expressed.</p>
            <p>Moreover, the amount of intracellular oxytocin is lower than the amount of extracellular oxytocin, indicating that our signal peptide does play a role.</p>
            <DocImg src="https://2021.igem.org/wiki/images/1/17/T--NJMU-China--Engineering1.8.png"></DocImg>
            <p>By detecting the extracellular oxytocin at 2h, 4h and 6h after induction with 0,0.001,0.01,0.1g/L tryptophan LB solution, we found that the expression level of oxytocin increased with time.</p>
            <DocImg src="https://2021.igem.org/wiki/images/0/09/T--NJMU-China--Engineering1.9.png"></DocImg>
            <p>In the meanwhile, the function of sensor and oxytocin were confirmed by model.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/6/67/T--NJMU-China--Engineering1.10--compressed.png"
            ></DocImg>
            <p>As for the docking of RNA-chemical interaction, we simulated it using AutoDock Vina. We simulated 50 structures at a time. The binding energy and RMSD of top five models (by the binding energy) are as follows.</p>
            <DocImg src="https://2021.igem.org/wiki/images/8/80/T--NJMU-China--Engineering1.11.png"></DocImg>
            <DocImgDetail>（RMSD should lower than 2；Binding energy should lower than -1.2）</DocImgDetail>
            <p>To characterize and verify our parts preliminarily, we simulated the interactions between oxytocin and the receptor.</p>
            <DocImg src="https://2021.igem.org/wiki/images/7/72/T--NJMU-China--Engineering1.12.png"></DocImg>
            <DocImg src="https://2021.igem.org/wiki/images/d/df/T--NJMU-China--Engineering1.13.png"></DocImg>
            <p>The top five models (by the binding energy) of our 20 predicted models are as follows.</p>
            <DocImg src="https://2021.igem.org/wiki/images/4/4c/T--NJMU-China--Engineering1.14.png"></DocImg>
            <h4>3.Killing Switch</h4>
            <p>The same as the MATERNAL GENERATION.</p>
        </template>
    </DocTemplateVue>
</template>

<script lang="ts" setup>
import DocPart from '../components/DocPart.vue'
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