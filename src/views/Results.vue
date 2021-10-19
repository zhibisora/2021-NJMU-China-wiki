<template>
    <DocTemplateVue>
        <template v-slot:index="{ s, i }">
            <DocA
                href="#MATERNAL-GENERATION"
                content="MATERNAL GENERATION"
                bgc="#1C4D7C"
                h="96"
                :s="s"
                :f="i"
            ></DocA>
            <DocA2
                href="#Proof-of-the-successful-transformation"
                content="Proof of the successful transformation"
                bgc="#56C1FF"
                h="89"
                :s="s"
                :f="i"
            ></DocA2>
            <DocA2
                href="#Sensor-and-functional-gene"
                content="Sensor and functional gene"
                bgc="#56C1FF"
                h="82"
                :s="s"
                :f="i"
            ></DocA2>
            <DocA
                href="#FETAL-GENERATION"
                content="FETAL GENERATION"
                bgc="#3076B5"
                h="75"
                :s="s"
                :f="i"
            ></DocA>
            <DocA2
                href="#Proof-of-the-successful-transformation2"
                content="Proof of the successful transformation"
                bgc="#56C1FF"
                h="68"
                :s="s"
                :f="i"
            ></DocA2>
            <DocA2
                href="#Sensor-and-functional-gene2"
                content="Sensor and functional gene"
                bgc="#56C1FF"
                h="61"
                :s="s"
                :f="i"
            ></DocA2>
            <DocA2
                href="#Killing-Switch"
                content="Killing Switch"
                bgc="#56C1FF"
                h="54"
                :s="s"
                :f="i"
            ></DocA2>

            <DocTop></DocTop>
        </template>
        <template v-slot:content>
            <DocH2 title="MATERNAL GENERATION" id="MATERNAL-GENERATION"></DocH2>
            <DocH3
                title="Proof of the successful transformation"
                id="Proof-of-the-successful-transformation"
            ></DocH3>
            <p>We successfully transformed our plasmid into EcN by electroporation. (Figure1,2)</p>
            <DocImg src="https://2021.igem.org/wiki/images/1/17/T--NJMU-China--Results1.1.png"></DocImg>
            <DocImgDetail>Figure 1. After electroporation, plasmid from bacteria was extracted and verified by double enzyme(SphI/XhoI) digestion. This is the map of circular plasmid without enzyme digestion and linear plasmid after enzyme digestion.</DocImgDetail>
            <DocImg src="https://2021.igem.org/wiki/images/a/a6/T--NJMU-China--Results1.2.png"></DocImg>
            <DocH3 title="Sensor and functional gene" id="Sensor-and-functional-gene"></DocH3>
            <DocImg src="https://2021.igem.org/wiki/images/1/12/T--NJMU-China--Results1.3.png"></DocImg>
            <p>As for the prove of the function of SoxR&SoxS, we referred to some formal teams’ method and found that most teams used paraquat to simulate the hyperoxide environment caused by inflammatory molecular NO. But it’s not easy to attain paraquat nowadays since it’s a highly toxic pesticide. So we decided to follow 2019-NEU_China to use 100 μM Sodium Nitroprusside Dihydrate (SNP) aqueous solution since it can continuously release NO and the final concentration can be stabilized at about 5.5μM,</p>
            <p>which was the same as the NO concentration in IBD patients. And then we constructed PT-PCR to prove the mi126a is expressed.</p>
            <DocImg src="https://2021.igem.org/wiki/images/f/ff/T--NJMU-China--Results1.4.png"></DocImg>
            <DocImgDetail>Figure 2. RT-qPCR detected the mRNA expression levels of mi126a in Control and SNP treated cells, and GAPDH gene used as a control.</DocImgDetail>
            <DocH2 title="FETAL GENERATION" id="FETAL-GENERATION"></DocH2>
            <DocH3
                title="Proof of the successful transformation"
                id="Proof-of-the-successful-transformation2"
            ></DocH3>
            <p>We successfully transformed our plasmid into EcN by electroporation. (Figure3)</p>
            <DocImg src="https://2021.igem.org/wiki/images/b/bf/T--NJMU-China--Results1.5.png"></DocImg>
            <DocImgDetail>Figure 3. This is the map of circular plasmid Pet28a-OT.</DocImgDetail>
            <DocH3 title="Sensor and functional gene" id="Sensor-and-functional-gene2"></DocH3>
            <DocImg src="https://2021.igem.org/wiki/images/c/c7/T--NJMU-China--Results1.6.png"></DocImg>
            <p>By using ELISA to detect the extracellular oxytocin at 2h, 4h and 6h after induction with 0,0.001,0.01,0.1g/L tryptophan LB solution, we found that the expression level of oxytocin increased with time and induced concentration. (Figure 4)</p>
            <!-- <p>We used 0g/L, 0.001g/L and 1g/L tryptamine solution to induce the expression of oxytocin in the engineering bacteria and detected the intracellular and extracellular levels of oxytocin at 6 h respectively by Elisa.</p>
            <p>The results showed that the higher the induced concentration is, the more oxytocin will be expressed.</p>
            <p>Moreover, the amount of intracellular oxytocin is lower than the amount of extracellular oxytocin, indicating that our signal peptide does play a role.(Figure 4)</p>
            <DocImg src="https://2021.igem.org/wiki/images/7/71/T--NJMU-China--Results1.7.png"></DocImg>
            <DocImgDetail>Figure 4. 0g/L, 0.001g/L and 1g/L tryptamine solution were used to induce the expression of oxytocin in the engineering bacteria and intracellular and extracellular levels of oxytocin were detected after 6 h respectively by Elisa.</DocImgDetail>
            <p>Based on the above experimental results, we wanted to further explore the changes in the expression level of oxytocin over time and find the most suitable concentration of tryptophan to induce the expression. By detecting the extracellular oxytocin at 2h, 4h and 6h after induction with 0,0.001,0.01,0.1g/L tryptophan LB solution, we found that the expression level of oxytocin increased with time and induced concentration.</p>-->
            <DocImg src="https://2021.igem.org/wiki/images/3/33/T--NJMU-China--Results1.8.png"></DocImg>
            <DocImgDetail>Figure 5. Detect the extracellular oxytocin at 2h, 4h and 6h after induction with 0,0.001,0.01,0.1g/L tryptophan LB solution and the expression level of oxytocin increased with time and induced concentration.</DocImgDetail>
            <DocH3 title="Killing Switch" id="Killing-Switch"></DocH3>
            <DocImg src="https://2021.igem.org/wiki/images/3/35/T--NJMU-China--Results1.9.png"></DocImg>
            <p>As for the killing switch, we refer to the arabinos-induced suicide system of 2019-BNU_China, which uses arabinos-induced promoter (pBAD) to express the toxic protein MazF. So when the patient takes in arabinos, the engineering bacteria will commit a suicide.</p>
            <p>When we repeat the experimental methods provided by 2019-NEU_China(Induce the engineering bacteria at the concentration of 1.25μM/L and 2.5μM/L L-arabinose respectively and every 6 hours spread 100ul bacteria into the plate. Count the number of colonies in 5 cm2 per plate after cultured for 24 hours at 37℃), we found that the results are not good. We repeat 5 times and no expected outcome was achieved. As we thought maybe we failed to build the part, our advisor Xiaoting Luan reminded us that our bacteria grow very fast——2h to achieve the logarithmic phase, 4h to reached the plateau phase, 6h to recession phase.(Figure6)</p>
            <DocImg src="https://2021.igem.org/wiki/images/a/a4/T--NJMU-China--Results1.10.png"></DocImg>
            <DocImgDetail>Figure 6. The growing curve of EcN-PET28a.</DocImgDetail>
            <p>We also got in touch with 2019-BNU_China and discussed the method. So we shorten the experiment time and after we did that, the outcome proved that our part was effective.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/0/0a/T--NJMU-China--Results1.11--compressed.png"
            ></DocImg>
            <DocImgDetail>Figure 7. Bacteria are in the logarithmic phase. It can be seen that the CFU of bacteria decreased significantly after arabinose induction.</DocImgDetail>
            <DocImg
                src="https://2021.igem.org/wiki/images/d/d4/T--NJMU-China--Results1.12--compressed.png"
            ></DocImg>
            <DocImgDetail>Figure 8. Bacteria are in the logarithmic phase. It can be seen that the CFU of bacteria decreased significantly after arabinose induction.</DocImgDetail>
            <DocImg
                src="https://2021.igem.org/wiki/images/6/66/T--NJMU-China--Results1.13--compressed.png"
            ></DocImg>
            <DocImgDetail>Figure 9. Normal bacteria entered the decay stage, but arabinose cut down the quantity of the bacteria and in turn delayed the decay stage, so there were colonies in the induction group and no colonies in the normal group.</DocImgDetail>
            <DocImg src="https://2021.igem.org/wiki/images/7/79/T--NJMU-China--Results1.14.png"></DocImg>
            <DocImgDetail>Figure 9. Normal bacteria entered the decay stage, but arabinose cut down the quantity of the bacteria and in turn delayed the decay stage, so there were colonies in the induction group and no colonies in the normal group.</DocImgDetail>
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
