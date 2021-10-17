<template>
    <DocTemplateVue>
        <template v-slot:index="{ s }">
            <DocA href="#Design" bgc="#1C4D7C" w="75" h="96" content="Design" :cps="0" :s="s"></DocA>
            <DocA href="#Part-I" bgc="#3076B5" w="75" h="89" content="Part I" :cps="1" :s="s"></DocA>
            <DocA2 href="#Sensor" bgc="#56C1FF" w="60" h="82" content="Sensor" :cps="2" :s="s"></DocA2>
            <DocA2
                href="#Function-gene"
                bgc="#56C1FF"
                w="60"
                h="75"
                content="Function gene"
                :cps="3"
                :s="s"
            ></DocA2>
            <DocA2
                href="#Suicide-switch"
                bgc="#56C1FF"
                w="60"
                h="68"
                content="Suicide switch"
                :cps="4"
                :s="s"
            ></DocA2>
            <DocA href="#Part-II" bgc="#03A1FF" w="75" h="61" content="Part II" :cps="5" :s="s"></DocA>
            <DocA2 href="#Sensor2" bgc="#56C1FF" w="60" h="54" content="Sensor" :cps="6" :s="s"></DocA2>
            <DocA2
                href="#Function-gene2"
                bgc="#56C1FF"
                w="60"
                h="47"
                content="Function gene"
                :cps="7"
                :s="s"
            ></DocA2>
            <DocA2
                href="#Suicide-switch2"
                bgc="#56C1FF"
                w="60"
                h="40"
                content="Suicide switch"
                :cps="8"
                :s="s"
            ></DocA2>
            <DocA3 href="#" bgc="#FFD368" w="20" h="26">
                <span class="-rotate-90 block absolute top-8 left-[55%] -translate-x-1/2">TOP</span>
            </DocA3>
        </template>
        <template v-slot:content>
            <DocH2 title="Design" id="Design"></DocH2>
            <p>The etiology of autism is normally thought to be environmental or genotypic. According to the article published in Cell which presents the largest exome sequencing study of ASD to date (n = 35,584 total samples, 11,986 with ASD), there are 102 genes identified as the risk genes for ASD (at a false discovery rate of 0.1 or less)[1]. While the potentially dangerous environmental factors to the maternal generation, such as Maternal immune activation (MIA) and Gestational diabetes mellitus (GDM), can also be the cause of ASD.</p>
            <p>According to the gut-brain axis theory, whether it is maternal immune activation or genetic factors, the etiologies of autism are all related to the gut microbiome.</p>
            <p>Active communication between the gut microbiome and the central nervous system (CNS) can be achieved through at least three parallel and interconnecting routes--Immune/Endocrine/Neuronal[2].</p>
            <p>The gut microbiome interacts intimately with the intestines. And CNS diseases such as ASD or stroke can modify the composition of the gut microbiome, leading to a vicious cycle where gut dysbiosis exacerbates the neuroimmune response and aggravates brain pathology and behavior.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/2/2d/T--NJMU-China--Design1.1--compressed.png"
            ></DocImg>
            <p></p>
            <DocImg
                src="https://2021.igem.org/wiki/images/2/27/T--NJMU-China--Design1.2--compressed.png"
            ></DocImg>
            <p>Our project aims at using synthetic biology to prevent and treat autism through gut-brain axis.</p>
            <p>
                Our experimental design involves two parts:
                <br />
                <span style="font-weight: 700;">Part I：</span> Prevention in the maternal generation
                <br />
                <span style="font-weight: 700;">Part II：</span>Treatment in the fetal generation
            </p>
            <DocH2 title="Part I:" id="Part-I"></DocH2>
            <p>Epidemiological studies suggest that, in humans, fetus’ exposure to maternal inflammation increases the likelihood of autism spectrum disorder[3].</p>
            <DocImg src="https://2021.igem.org/wiki/images/a/a0/T--NJMU-China--Design2.1.png"></DocImg>
            <p>When the immune system of a will-be-mother is activated due to infections or autoinflammatory syndromes, the Th17 and Treg cells in her bowel will lose their balance and inflammatory factors, such as IL-17, can then be transferred across the placental barrier to harm the nervous system of the fetus. In this case, her child will have an increased risk of neurodevelopmental disorders.</p>
            <p>We decided to develop a probiotic strain of E. coli as a novel, self-tuning “drug” for pregnant women to reduce the risk of autism in the offspring.</p>
            <p>
                Our core design are as follows:
                <br />1.Building an AND gate composed of a 36℃-induced promoter and NO-induced promoter as a multi input module
                <br />2. Coding miRNA 126a to increase the expression of Foxp3
                <br />3. Arabinose-induced killing switch
            </p>
            <p>They are presented in the classical framework of synthetic biology--including a sensor, a functional gene and a suicide gene.</p>
            <DocH3 title="Sensor:" id="Sensor"></DocH3>
            <p>We used nitric oxide (NO) as metabolic markers of the overactivation of Th17 function, the increase of which indicates related immune response. Apart from that, we use a special promoter which enables protein to be expressed only above 36℃.</p>
            <DocImg src="https://2021.igem.org/wiki/images/3/3f/T--NJMU-China--Design2.2.png"></DocImg>
            <p>Here is how it works——We constructed a constitutive promoter followed by the protein TlpA36, a protein whose monomers aggregate to form dimers when the temperature is lower than 36 degree Celsius and in the presence of tlpa36 protein-dimers Promoter PtlpA36 will be repressed. So this guarantees the protein SoxR being expressed only if the temperature is above 36 degree Celsius. And here comes SoxR&SoxS system——SoxR is a transcription factor found in bacteria and is activated during superoxide or nitric oxide stress. SoxR protein in solution is a homodimer that contains two binuclear iron–sulfur clusters ([2Fe–2S]) which are then oxidized upon superoxide stress. In this form, the protein induces transcription through binding at SoxS promoter. Thus, in the presence of NO, SoxR activates transcription of the gene regulated by SoxS promoter (Hidalgo et al, 1998).</p>
            <DocH3 title="Function gene:" id="Function-gene"></DocH3>
            <p>Regulatory T cells play important roles in the control of autoimmunity and maintenance of transplantation tolerance. Foxp3, a member of the forkhead/winged-helix family of transcription factors, acts as the master regulator for regulatory T-cell (Treg) development and function. Several epigenetic markers, such as histone acetylation and methylation, and cytosine residue methylation in CpG dinucleotides, have been reported at the Foxp3 locus. Methylation of CpG residues represses Foxp3 expression, whereas complete demethylation is required for stable Foxp3 expression[3].</p>
            <DocImg src="https://2021.igem.org/wiki/images/5/54/T--NJMU-China--Design2.3.png"></DocImg>
            <p>Inhibitors of DNA methyltransferase (Dnmt) enzymes have been advocated as a means to promote and stabilize Foxp3 expression in Tregs undergoing expansion in vitro before their injection in vivo.</p>
            <p>MicroRNA (miRNA) transferred by exosomes plays a key role in cell-cell communication in many different contexts and pathologies[4]. In our part, miRNA126a---a microRNA which can target the mRNA of DNA methyltransferase (DNMT) 3B, is coded to downregulate the expression of DNMTs. The inhibition of DNMTs in turn promotes the expression of FOXP3. Therefore, the imbalance of immune homeostasis can be recovered to some degree.</p>
            <DocH3 title="Suicide switch:" id="Suicide-switch"></DocH3>
            <DocImg src="https://2021.igem.org/wiki/images/5/50/T--NJMU-China--Design2.4.png"></DocImg>
            <p>Biological safety is also regarded as an important part of our project. Therefore, we designed a killing switch which would be activated by taking in arabinose. We added the toxic protein MAF in the downstream of BAD promoter. Therefore, upon achieving the expected effect, the expression of MAF will lead to the host bacteria lysis.</p>
            <DocH2 title="Part II:" id="Part-II"></DocH2>
            <p>As for treatment in the fetal generation, we attempted to code secretory oxytocin, which can be transported to the central nervous system through the gut-brain axis.</p>
            <p>
                Our core design are as follows:
                <br />1.Building an AND gate composed of a 36℃-induced promoter and Tryptophan riboswitch as a multi input module
                <br />2.Coding secretory oxytocin
                <br />3.Arabinose-induced killing switch
            </p>
            <DocH3 title="Sensor:" id="Sensor2"></DocH3>
            <p>Clinical evidence indicates brain serotonin (5-HT) stores and neurotransmission may be inadequate in subpopulations of individuals with autism, and this may contribute to characteristically impaired social behaviors. Findings proved that depletion of the 5-HT precursor tryptophan (TRP) worsens autism symptoms[5]. Some autistic children suffer from metabolic disorders, such as overloading tryptophan in their gut.</p>
            <DocImg src="https://2021.igem.org/wiki/images/d/de/T--NJMU-China--Design3.1.png"></DocImg>
            <p>Here is how it works——We also constructed the TlpA36/PtlpA36 system to guarantee that the expression of tryptone aptamer can only happen if the temperature is above 36 degree Celsius. As for the aptamer, we are inspired by 2018 Oxford who used a riboswitch for adenine so we referred to some articles and found the riboswitch of tryptophan. It consists of a tryptone aptamer and a ribosome.</p>
            <DocH3 title="Function gene:" id="Function-gene2"></DocH3>
            <p>Oxytocin (Oxt) is a nonapeptide hormone best known for its role in lactation and parturition.</p>
            <DocImg
                src="https://2021.igem.org/wiki/images/6/62/T--NJMU-China--Design3.2--compressed.png"
            ></DocImg>
            <p>Oxt is important for social memory and attachment, sexual and maternal behavior, and aggression. Recent work implicates Oxt in human bonding and trust as well. Human disorders characterized by aberrant social interactions, such as autism and schizophrenia, may also involve Oxt expression[5].</p>
            <p>The neuropeptide oxytocin (OT) has emerged as a key regulator of diverse social behaviors in vertebrates and, thus, has been identified as a potential therapeutic target for improving social dysfunction, which can be transported to the central nervous system through gut-brain axis[6,7].</p>
            <p>We attempted to improve the emotional function and social behaviors of autistic children by coding oxytocin. We also added a signal peptide to make it secretory.</p>
            <h3>
                Suicide switch:
                <span id="Suicide-switch2" class="anchor"></span>
            </h3>
            <p>Similarly, we use the same part as that for the maternal generation.</p>
            <pre class="whitespace-pre-line italic p-10 selection:bg-gray-400">
                1.	Satterstrom, F.K., et al., Large-Scale Exome Sequencing Study Implicates Both Developmental and Functional Changes in the Neurobiology of Autism. Cell, 2020. 180(3): p. 568-584 e23.
                2.	Agirman, G. and E.Y. Hsiao, SnapShot: The microbiota-gut-brain axis. Cell, 2021. 184(9): p. 2524-2524 e1.
                3.	Lal, G. and J.S. Bromberg, Epigenetic mechanisms of regulation of Foxp3 expression. Blood, 2009. 114(18): p. 3727-35.
                4.	Wang, L., et al., Foxp3+ T-regulatory cells require DNA methyltransferase 1 expression to prevent development of lethal autoimmunity. Blood, 2013. 121(18): p. 3631-9.
                5.	Lee, H.J., et al., Oxytocin: the great facilitator of life. Prog Neurobiol, 2009. 88(2): p. 127-51.
                6.	Kaluzna-Czaplinska, J., et al., How important is tryptophan in human health? Crit Rev Food Sci Nutr, 2019. 59(1): p. 72-88.
                7.	Aoki, Y., et al., Oxytocin improves behavioural and neural deficits in inferring others' social emotions in autism. Brain, 2014. 137(Pt 11): p. 3073-86.
            </pre>
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
