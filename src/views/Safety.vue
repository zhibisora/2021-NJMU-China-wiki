<template>
    <DocTemplateVue>
        <template v-slot:index="{ s }">
            <DocA
                href="#Safe-Project-Design"
                bgc="#1C4D7C"
                w="75"
                h="96"
                content="Safe Project Design"
                :cps="0"
                :s="s"
            ></DocA>
            <DocA
                href="#Safe-Lab-Work"
                bgc="#3076B5"
                w="75"
                h="89"
                content="Safe Lab Work"
                :cps="1"
                :s="s"
            ></DocA>
            <DocA
                href="#Human-Practice-on-Safety"
                bgc="#03A1FF"
                w="75"
                h="82"
                content="Human Practice on Safety"
                :cps="2"
                :s="s"
            ></DocA>
            <DocTop></DocTop>
        </template>
        <template v-slot:content>
            <div>
                <DocH2 title="Safe Project Design" id="Safe-Project-Design"></DocH2>
                <p>
                    <DocP2>Great importance is attached to safety in our project design. Firstly, we use Nissle 1917 as our chassis organisms, which pose no harm to individuals or environment, and do not use any other organism. We would transform the engineered plasmid pet28a. Our mesenteric lymphocytes were isolated from experimental mice. Cell lines posed on harm to the environment. And experimental mice passed ethics application and experimental operation strictly followed the .This year, our team constructed engineered probiotics transfected with constructed plasmids to prevent and treat autism based on the regulation of brain-gut axis, which means our project includes two parts:</DocP2>
                    <DocP2>Part I：Prevention in the maternal generation</DocP2>
                    <DocP2>Part II：Treatment in the fetal generation</DocP2>
                </p>
                <p>
                    <DocP2>In Part I, our core design are as follows:</DocP2>
                    <DocP2>1.Building an AND gate composed of a 36℃-induced promoter and NO-induced promoter as a multi input module: the related proteins are all harmless to human body, and as a sensor part, they won’t be released to the environment.</DocP2>
                    <DocP2>2.Coding miRNA 126a to increase the expression of Foxp3: a kind of special RNA, which can cleave specific DNA sequence. It has no harm in the environment and is strictly controlled in the human body.</DocP2>
                    <DocP2>3.Arabinose-induced killing switch: a switch can effectively ensure biosecurity in the human body.</DocP2>
                </p>
                <p>
                    <DocP2>In Part II, our core design are as follows:</DocP2>
                    <DocP2>1.Building an AND gate composed of a 36℃-induced promoter and tryptophan riboseswitch as a multi input module: the related proteins are all harmless to human body, and as a sensor part, they won’t be released to the environment.</DocP2>
                    <DocP2>2.Coding secretable oxytocin: oxytocin is a pituitary neurohormone. It has no harm to the environment and human body.</DocP2>
                    <DocP2>3.Arabinose-induced killing switch: a switch can effectively ensure biosecurity in the human body.</DocP2>
                </p>
                <p>All the proteins are totally harmless to human body. All the plasmids are harmless for human beings and none of our parts would raise any safety issue according to the current expertise.</p>
            </div>
            <div>
                <DocH2 title="Safe Lab Work" id="Safe-Lab-Work"></DocH2>
                <p>
                    <DocP2>We strictly follow all of iGEM's and our University’s safety and security rules. Our PIs, Prof. Chuansu and Prof. Xingyin Liu reviewed every proposals and protocols of experiments to be carried out. Wet-lab team’s members have one year or more laboratory experience. And we have received comprehensive biosafety training before. Our cells and experimental animals sources all have passed the ethical review.</DocP2>
                    <DocP2>
                        <DocLink
                            href="https://2021.igem.org/wiki/images/2/21/T--NJMU-China--Animal-Ethics.pdf"
                        >Get Animal Ethics PDF</DocLink>
                    </DocP2>
                </p>
            </div>
            <div>
                <DocH2 title="Human Practice on Safety" id="Human-Practice-on-Safety"></DocH2>
                <p>Our HP is mainly around the volunteer work at Haizhixing Autism Rehab Center and questionnaire towards the public to know their understanding of autism. After contacting the special-education teachers in advance, we have been informed of several things we need to be cautious about like do not let the child be over-excited, making sure they are playing within our vision. We pay special attention to avoid photographing the front face of every child. We wrote the informed consent to each parent, which let them understand our project and ensure the protection of children's private information. In addition, we keep confidential all information of parents during the interview to prevent other influences caused by the disclosure of their information. What's more, we employed an anonymous questionnaire with the informed consent attached to the front page of the questionnaire, ensuring that personal information is not disclosed.</p>
            </div>
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
import DocP2 from '../components/DocP2.vue'
import DocTop from '../components/DocTop.vue'
</script>

<style scoped>
@import "../css/DocTemplate.css";
</style>
