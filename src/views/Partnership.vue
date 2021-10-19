<template>
    <DocTemplateVue>
        <template v-slot:index="{ s, i }">
            <DocA
                href="#Partnership-with-Nanjing-China"
                content="Partnership with Nanjing-China"
                bgc="#1C4D7C"
                h="96"
                :s="s"
                :f="i"
            ></DocA>
            <DocA2
                href="#1.Early-stage-of-project:-about-plan-and-thoughts"
                content="Plan and thoughts"
                bgc="#56C1FF"
                h="89"
                :s="s"
                :f="i"
            ></DocA2>
            <DocA2
                href="#2.Early-stage-of-project:-experiment-design-and-preparation"
                content="Experiment design and preparation"
                bgc="#56C1FF"
                h="82"
                :s="s"
                :f="i"
            ></DocA2>
            <DocA2
                href="#3.-Early-stage-of-project:-modeling-and-prediction"
                content="Modeling and prediction"
                bgc="#56C1FF"
                h="75"
                :s="s"
                :f="i"
            ></DocA2>
            <DocA2
                href="#4.Middle-stage-of-the-project:-about-publicity-and-popularization"
                content="Publicity and popularization"
                bgc="#56C1FF"
                h="68"
                :s="s"
                :f="i"
            ></DocA2>
            <DocA2
                href="#5.Middle-stage-of-the-project:-about-modeling"
                content="Modeling"
                bgc="#56C1FF"
                h="61"
                :s="s"
                :f="i"
            ></DocA2>
            <DocA2
                href="#6.Middle-and-later-stage-of-the-project:-about-human-practice"
                content="Human practice"
                bgc="#56C1FF"
                h="54"
                :s="s"
                :f="i"
            ></DocA2>
            <DocA2
                href="#7.Middle-and-later-stage-of-the-project:-about-improvement-and-security"
                content="Improvement and security"
                bgc="#56C1FF"
                h="47"
                :s="s"
                :f="i"
            ></DocA2>
            <DocA2
                href="#8.Late-stage-of-the-project:-about-art-design"
                content="Art design"
                bgc="#56C1FF"
                h="40"
                :s="s"
                :f="i"
            ></DocA2>
            <DocA2
                href="#9.-Late-stage-of-the-project:-summary-and-meeting"
                content="Summary and meeting"
                bgc="#56C1FF"
                h="33"
                :s="s"
                :f="i"
            ></DocA2>

            <DocTop></DocTop>
        </template>
        <template v-slot:content>
            <DocH2 title="Partnership with Nanjing-China" id="Partnership-with-Nanjing-China"></DocH2>
            <DocH3
                title="1.Early stage of project: about plan and thoughts"
                id="1.Early-stage-of-project:-about-plan-and-thoughts"
            ></DocH3>
            <p>At the beginning of the project, we initially determined our main direction--“the prevention and treatment of autism”. At the communication meeting of Nanjing area, we introduced and shared our inspiration and preliminary plan. Since both teams’ projects aimed at the therapeutic track and connected closely with intestinal flora, we came up with the idea of long-term cooperation between our two iGEM teams.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/4/4a/T--NJMU-China--Partnership.1.1--compressed.png"
            ></DocImg>
            <h4>Nanjing-China → NJMU-China:</h4>
            <p>At the beginning, we attempted encoding target protein--FOXP3 and tight junction protein directly in the gut to improve the intestinal inflammatory environment. After listening to our design, the Nanjing-China team suggested that the protein, as a macromolecule, is difficult to secrete from the engineered bacteria into the gut. They advised us to consider small molecule like siRNA and microRNA. We reached an agreement and searched a large number of literature. Finally, we selected microRNA as functional molecule based on several communications and meetings.</p>
            <DocImg src="https://2021.igem.org/wiki/images/3/3b/T--NJMU-China--Partnership.1.2.png"></DocImg>
            <h4>NJMU-China ——> Nanjing-China:</h4>
            <p>Since our project focused on the gut microbiome, we suggested that Nanjing-China might notice the effect polyphosphate made on the gut microbiome after listening to their introduction. The idea inspired them to do the microbiome analysis and relevant modeling work at later stage of their project.</p>
            <DocH3
                title="2.Early stage of project: experiment design and preparation"
                id="2.Early-stage-of-project:-experiment-design-and-preparation"
            ></DocH3>
            <p>In the early stage of our team project, we discussed and helped each other better design the experiment.</p>
            <h4>Nanjing-China → NJMU-China:</h4>
            <p>After a thorough understanding of each other's projects, we advanced experimental progress respectively. To simulate the intestinal inflammatory environment, we developed many possible ideas. For example, we have tried to design experiments in vivo. Considering for its complexity and instability, we gave it up. Then Nanjing-China recommended us sodium nitroprusside (SNP)—a medicine that is often used to realize the simulation of inflammation. In the meanwhile, their PI’s research applied sodium nitroprusside (SNP) to release NO, and he told us that NO can be viewed as an important signal of inflammation. After studying and practicing, we completed our this part’s experiment.</p>
            <h4>NJMU-China ——> Nanjing-China:</h4>
            <p>When Nanjing-China designed their experiments, they encountered a challenge that they had no idea how to measure the degree of polymerization in polyphosphate. After reviewing several previous researches, they found that GPC (gel permeation chromatography) is a feasible method. However, GPC needs complex pretreatment of the sample which is time-consuming. Then we suggested that maybe they can try Urea PAGE. This method was proved to be efficient in their later experiments.</p>
            <DocH3
                title="3. Early stage of project: modeling and prediction"
                id="3.-Early-stage-of-project:-modeling-and-prediction"
            ></DocH3>
            <h4>Nanjing-China → NJMU-China & NJMU-China ——> Nanjing-China:</h4>
            <p>Considering that both teams would like to confirm the binding of the target protein and the receptor, our team members in the modeling group contacted with members in Nanjing-China team. We co-learning Autodock Vina and completed molecular docking effectively.</p>
            <DocImg src="https://2021.igem.org/wiki/images/1/15/T--NJMU-China--Partnership.1.3.png"></DocImg>
            <DocH3
                title="4.Middle stage of the project: about publicity and popularization"
                id="4.Middle-stage-of-the-project:-about-publicity-and-popularization"
            ></DocH3>
            <p>For the reason of pandemic-controlling period, both teams stopped some offline publicity about our projects. And we worked together to promote our projects to the public well.</p>
            <h4>Nanjing-China → NJMU-China:</h4>
            <p>Our team organized a lecture on autism and gut microbiota in our school and we invented members from Nanjing-China. They helped us prepare material and pictures about gut microbiota and took part in our lecture work.</p>
            <DocImg src="https://2021.igem.org/wiki/images/5/5b/T--NJMU-China--Partnership.1.4.png"></DocImg>
            <p>In addition, Nanjing-China publicized our iGEM project on their official account and expanded the publicity audience of our project.</p>
            <h4>NJMU-China ——> Nanjing-China:</h4>
            <p>Nanjing-China hoped to carried out face-to-face education activities in local middle schools. In order to give students an interesting lecture, they combined synthetic biology and intestinal health with easy-understanding examples. In their preparation stage, we gave them plenty of interesting knowledge about the effect of the gut microbiome on the overall health, which aroused the interest of students in their education activities.</p>
            <DocH3
                title="5.Middle stage of the project: about modeling"
                id="5.Middle-stage-of-the-project:-about-modeling"
            ></DocH3>
            <h4>Nanjing-China → NJMU-China：</h4>
            <p>Based on the GEO dataset, we communicated with students from Nanjing-China majored in biological information. They inspired us that effective early screening is an significant method to assist the treatment. Therefore, we constructed random forest and the decision tree model, aiding in prevention and treatment method, which achieved the target of prevention and treatment to a large degree.</p>
            <h4>NJMU-China ——> Nanjing-China:</h4>
            <p>Having abstracted a coherent feedforward loop composed of ions, active PPKs and polyP, Nanjing-China racked our brains to transform such a device from theory to practice. Since we concentrated on the gut microbiome, we gained the information that some researchers had applied bacterial transplantation to animals. Therefore, Nanjing-China began to think about letting our loop make a difference with the method of installing the bacteria factory in the user's intestine.</p>
            <DocH3
                title="6.Middle and later stage of the project: about human practice"
                id="6.Middle-and-later-stage-of-the-project:-about-human-practice"
            ></DocH3>
            <p>We and Nanjing-China got together to think about the prospect of therapeutic schedule that might be involved in the team project on both sides. We both applied engineered probiotics as the carrier that enter the human body. Professor Liu Xingyin from our team published a study about Lactobacillus plantarum L168 on the top journal "Cell Host & Microbe" in 2019. She has been researching the intestinal flora for years and has abundant experience in the application of engineering probiotics. So we took her advice and cooperated with each other.</p>
            <h4>Nanjing-China→NJMU-China：</h4>
            <p>Nanjing-China team provided individuals’ understanding and suggestions on engineering probiotics through the questionnaire. We analyzed the data and summarized the attention points about application of engineering probiotics.</p>
            <h4>NJMU-China ——> Nanjing-China:</h4>
            <p>Since our PI, Liu Xingyin, has been researching the gut microbiome for years and has abundant experience in the application of engineering probiotics. Therefore, Nanjing-China interviewed her about how to improve our product in order to gain expanded application. She suggested that Nanjing-China can try to improve our modified bacteria and apply it as the carrier that enter the human body, which can make a sustainable effect on the gut.</p>
            <DocH3
                title="7.Middle and later stage of the project: about improvement and security"
                id="7.Middle-and-later-stage-of-the-project:-about-improvement-and-security"
            ></DocH3>
            <h4>Nanjing-China→NJMU-CHINA & NJMU-China ——> Nanjing-China：</h4>
            <p>After that, considering for the ethical issues,we exchanged ideas with Nanjing-China. Nanjing-China provided us with details of ethical standards, which helped us promote the application of our engineering probiotics.</p>
            <DocH3
                title="8.Late stage of the project: about art design"
                id="8.Late-stage-of-the-project:-about-art-design"
            ></DocH3>
            <p>The design groups of the two teams also exchanged ideas and conducted cooperation. All of them are biology majors, not familiar with web design, art design and other matters. However, through mutual help, we still try our best to make our publicity materials beautiful and perfect.</p>
            <h4>Nanjing-China→NJMU-CHINA & NJMU-China ——> Nanjing-China：</h4>
            <p>Our design team also gave suggestions to Nanjing-China when they designed the team logo. We helped to improve the color and shape of the logo with respect to their project content and finally helped them design the team logo.</p>
            <DocImg src="https://2021.igem.org/wiki/images/b/bf/T--NJMU-China--Partnership.1.5.png"></DocImg>
            <DocH3
                title="9. Late stage of the project: summary and meeting"
                id="9.-Late-stage-of-the-project:-summary-and-meeting"
            ></DocH3>
            <p>In October, we had a concluding online meeting with Nanjing-China iGEMers. At the meeting, we summarized our respective projects and our thoughts and reflections on partnership throughout the season, as well as our vision for the future. In the end, we took a photo together, which left precious memories and contributed to our deep friendship.</p>
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
</script>

<style scoped>
@import "../css/DocTemplate.css";
</style>
