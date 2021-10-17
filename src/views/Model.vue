<template>
    <DocTemplateVue>
        <template v-slot:index="{ s }">
            <DocA
                href="#Data-collection"
                content="Data collection"
                bgc="#00AB8E"
                h="96"
                :s="s"
                :cps="0"
            ></DocA>
            <DocA
                href="#Data-analysis"
                content="Data analysis"
                bgc="#2D6A65"
                h="89"
                :s="s"
                :cps="1"
            ></DocA>
            <DocA href="#Method" content="Method" bgc="#1C4D7C" h="82" :s="s" :cps="2"></DocA>
            <DocA href="#Introduction" content="Introduction" bgc="#3076B5" h="75" :s="s" :cps="3"></DocA>
            <DocA href="#Results" content="Results" bgc="#03A1FF" h="68" :s="s" :cps="4"></DocA>
            <DocA2 href="#Object1-I" content="Object1 I" bgc="#56C1FF" h="61" :s="s" :cps="5"></DocA2>
            <DocA2 href="#Object1-II" content="Object1 II" bgc="#56C1FF" h="54" :s="s" :cps="6"></DocA2>
            <DocA2 href="#Object2-I" content="Object2 I" bgc="#56C1FF" h="47" :s="s" :cps="7"></DocA2>
            <DocA2 href="#Object2-II" content="Object2 II" bgc="#56C1FF" h="40" :s="s" :cps="8"></DocA2>
            <DocA3 href="#" bgc="#FFD368" w="20" h="26">
                <span class="-rotate-90 block absolute top-8 left-[55%] -translate-x-1/2">TOP</span>
            </DocA3>
        </template>
        <template v-slot:content>
            <DocH2 title="Data collection" id="Data-collection"></DocH2>
            <p>For the reason of pandemic-controlling period, we used the data published online instead of collecting samples from children and their mothers.</p>
            <DocH2 title="Data analysis" id="Data-analysis"></DocH2>
            <p>Statistical analyses were performed by R (version 3.6.3) and RStudio (version 1.2.5033). All statistical tests were two-sided. The significance level was set at α = 0.05 and applied to all the analyses.</p>
            <DocH2 title="Method" id="Method"></DocH2>
            <h4>Pathway enrichment analysis</h4>
            <p>Pathway enrichment analysis of the interaction between differentially expressed genes was analyzed by the DAVID database (https://david.ncifcrf.gov/). We calculated the P-value, False Discovery Rate (FDR), and enrichment value and selected the immune-related pathways with P-value &lt; 0.05 for further analysis.</p>
            <h4>Gene set enrichment analysis (GSEA)</h4>
            <p>The 159 cases were generated from the GEO dataset. The 159 cases were categorized into an ASD group and a TD group. We performed GSEA analysis using GSEA v4.1.0 software(http://software.broadinstitute.org/gsea/index.jsp). Briefly, the enrichment score (ES) was calculated as the maximum deviation from zero of the weighted fractions of genes present minus the fraction not present up to a given index in a gene expression matrix ordered by phenotype correlation. Statistical significance was assessed by comparing the enrichment score with the enrichment results generated from 1000 random permutations of the gene set to obtain P-values.</p>
            <h4>Decision trees</h4>
            <p>A predictive modeling method (decision trees) was used to identify important variables for predicting the risk of ASD in the offsprings based on the expression of significant genes and determine cutoff points for chosen variables. Patients were randomly split into two groups, the first to train the model and the second to validate the model.</p>
            <h4>Random forest (RF) predictive modeling</h4>
            <p>RF classifiers were constructed to differentiate between two subject groups (ASD and TD). RF modeling was performed using the leave-one-out cross-validation (LOOCV) strategy, removing one sample as a testing set and using the rest as training set. This strategy is repeated until each sample is left out at least once. The input features was the transcriptome expression of ASD and TD samples. Prediction accuracy and area under the curve (AUC) were calculated to evaluate model performance.</p>
            <h4>PCA，PLSDA</h4>
            <p>Multivariate statistical analysis including principal component analysis (PCA) and partial least-squares discriminant analysis (PLS-DA) was used to analyze data from the GEO dataset.</p>
            <DocH2 title="Introduction" id="Introduction"></DocH2>
            <p>Our goal is to assist and validate the project design. The model includes three objects:</p>
            <h4>Objective 1:</h4>
            <p>I: Analyse dataet of RNA-seq characteristics of the pregnant to search for a reasonable target to identity and decrease the risk of autism.</p>
            <p>II:Identity the pregnant whose children with high-risk of autism through machine learning and offer measures of primary prevention.</p>
            <h4>Objective 2:</h4>
            <p>I:Analyse metabolic characteristics of the offsprings to find targets to identity and offer treatments.</p>
            <p>II:Propose a screening model for autism by detecting immue factors in the peripheral blood .</p>
            <h4>Objective 3:</h4>
            <p>Verify the rationality of the project design through mathematical modeling and 3-D modeling</p>
            <DocH2 title="Results" id="Results"></DocH2>
            <DocH3 title="Object1 I" id="Object1-I"></DocH3>
            <p>Analyse dataet of RNA-seq characteristics of the pregnant to search for a reasonable target to identity and decrease the risk of autism.</p>
            <h4>1. Pathway enrichment analysis</h4>
            <p>To achieve the goal to find a reasonable target to identity and interference pregnant mothers that can indicate an increased risk of autism in their offsprings, We used GSE148450 datasets from Gene Expression Omnibus (GEO)[1](Figure 1A). In this dataset, high quality RNA was isolated from 300 maternal peripheral blood samples collected during pregnancy from the MARBLES high risk ASD cohort. Children from MARBLES pregnancies were diagnosed at 3 years old as ASD (67, including 47 male and 20 female) and TD (154, including 79 male and 75 female).</p>
            <DocImg src="https://2021.igem.org/wiki/images/1/12/T--NJMU-China--Model1.1.png"></DocImg>
            <p>ASD: Autism Spectrum Disorder; TD: Typical development</p>
            <p>First, in order to identify the changes of the pregnant when exposed to risk factors, we conducted pathway enrichment analysis in the three databases(Diseases, GO, KEGG), as shown in the figure.</p>
            <p>In the disease database, we found that upregulated and downregulated genes mainly involved in the pathway of psychology and immune discoder. For the purpose to search for treatment target, we focused on the pathway of “IMMUNE”(Figure 1B).</p>
            <DocImg src="https://2021.igem.org/wiki/images/f/fa/T--NJMU-China--Model1.2.png"></DocImg>
            <p>We search genes which enriched in the “IMMUNE” pathway on the PubMed(https://pubmed.ncbi.nlm.nih.gov/) to annotate specific functions. The result showed the upregulated and downregulated genes are mainly associated to CD4+ T cells, Th17 cells and Treg cells(Figure 1C).</p>
            <DocImg src="https://2021.igem.org/wiki/images/a/ac/T--NJMU-China--Model1.3.png"></DocImg>
            <p>Reasearches have reported that fetus’ exposure to maternal inflammation increases the likelihood of autism spectrum disorder[2]. The imbalance of Th17 and Treg cells in mothers’ gut caused inflammatory cytokines, as IL-17, to be transferred across the placental barrier and injured the nervous system of the fetus[3]. Based on the researches and the results of pathway enrichment, we selected inflammation and immune disorder as our indentification and interference target to achieve prevention and treatment for our experiment design.</p>
            <p>In addition, GO and KEGG pathway analysis revealed that the top-ranked enriched pathways of downregulated genes in ASD children’s mothers mainly involved neurotransmitter ligand connection, neurotransmitter ligand activity, and gastrointestinal digestion pathways(Figure 1D&E).</p>
            <p>Gene Set Enrichment Analysis (GSEA) is routinely used to analyze and interpret coordinate pathway-level changes in transcriptomics experiments[4].In the meanwhile we selected specific channel reactome transmission for GSEA analysis. The results also verified the results of pathway enrichment(Figure 1F). These results above revealed that the condition of metabolism, nerve system and neurotransmitter regulatory system of the pregnant influence the risk of autism in their offsprings.</p>
            <DocImg src="https://2021.igem.org/wiki/images/9/9f/T--NJMU-China--Model1.4.png"></DocImg>
            <DocImg src="https://2021.igem.org/wiki/images/6/6b/T--NJMU-China--Model1.5.png"></DocImg>
            <DocImg src="https://2021.igem.org/wiki/images/7/7d/T--NJMU-China--Model1.6.png"></DocImg>
            <br />
            <br />
            <DocH3 title="Object1 II" id="Object1-II"></DocH3>
            <p>Identity the pregnant whose children with high-risk of autism through machine learning and offer measures of primary prevention.</p>
            <h4>2. Parallel screening strategy</h4>
            <p>For the reason that we found dyfunction in some impartant pathways in pregnant mothers of high autism risk in their offsprings, we constructed a decision tree and random forest as a predictive model to predict the risk of ASD in the offsprings based on the expression of significant genes, serving as an important method for the aim of our project to realize screening and treating in the early time.</p>
            <p>A Random Forest Regressor is a type of ensemble model that allows the user to run many decision trees, that are then averaged to make the best prediction possible[5]. Random Forest was used to develop models to distinguish ASD from typically developing (TD) children and to detect potential gene markers in the pregnant women, which is a effective measure to screening of potential children with autism.</p>
            <p>The procedures are shown below(Figure 2A).</p>
            <DocImg src="https://2021.igem.org/wiki/images/5/5d/T--NJMU-China--Model2.1.png"></DocImg>
            <p>The model building process employed t-test as guidance for variable selection. The final results of the full models in this process were shown in table below(Figure 2B).</p>
            <DocImg src="https://2021.igem.org/wiki/images/b/b0/T--NJMU-China--Model2.2.png"></DocImg>
            <p>The PCA result on training set with all genes on (Figure 2C). From the figure, we saw that PCA could not distinguish between ASD and TD groups effectively. We chose significantly different genes conduct PCA analysis(Figure 2D). The ASD and TD groups are significantly divided, indicating a better effect to conduct random forest model using these genes.</p>
            <DocImg src="https://2021.igem.org/wiki/images/e/e7/T--NJMU-China--Model2.3.png"></DocImg>
            <DocImg src="https://2021.igem.org/wiki/images/d/da/T--NJMU-China--Model2.4.png"></DocImg>
            <p>The error curve of random forest model is shown below(Figure 2E).</p>
            <p>To avoid any possible overfitting, we tested the full model on the independent testing set and obtained AURs is 0.796(Figure 2F).</p>
            <DocImg src="https://2021.igem.org/wiki/images/8/84/T--NJMU-China--Model2.5.png"></DocImg>
            <DocImg src="https://2021.igem.org/wiki/images/e/e5/T--NJMU-China--Model2.6.png"></DocImg>
            <p>However, the random forest model indicates high error of prediction, may leading to serious missed diagnosis and misdiagnosis. Considering that we chose a small number of genes into the model, a decision tree may have a better effect of prediction through researches review[6].</p>
            <p>A decision tree is a graphical depiction of a decision and every potential outcome or result of making that decision. Decision Tree algorithms can be applied and used in various different fields. It can be used as a replacement for statistical procedures to find data, to extract text, to find missing data in a class, to improve search engines and it also finds various applications in medical fields[6]. Using decision tree modeling and receiver operating characteristic curve analysis, we identified four significant genes that discriminated between the maternal peripheral blood samples samples from ASD and TD children (LOC, GHRHR, ISYNA1, TMEM)(Figure 2G).</p>
            <DocImg src="https://2021.igem.org/wiki/images/c/c0/T--NJMU-China--Model2.7.png"></DocImg>
            <p>The AUC area is 0.820, achieving an obvious improvement compared to Random Forest.</p>
            <DocImg src="https://2021.igem.org/wiki/images/0/04/T--NJMU-China--Model2.8.png"></DocImg>
            <!--  -->
            <DocH3 title="Object2 I" id="Object2-I"></DocH3>
            <p>Analyse metabolic characteristics of the offsprings to find targets to identity and offer treatments.</p>
            <h4>1. Pathway enrichment analysis</h4>
            <p>Considering for disorder of immune and metabolism in pregnant mothers, we attempted to explore changes of immune system and metabolism system in their offsprings.</p>
            <p>We performed metabolite and immune factors profile of 26 ASD individuals and 26 TDs[7]. Then we detected the immune and metabolism conditions in autistic children for the purpose to screen autistic children in the early stage and put forward a reasonable plan for our experiment design to identity and treat children with autism in the meanwhile.</p>
            <p>Based on the data of untargeted metabolomics in the offsprings, we found differential metabolites between ASD individuals and controls. The results of variation analysis are shown below.</p>
            <p>To find major problems in metabolism, we conducted pathway enrichment analysis. The results indicated that metabolic disorders occurred in the gut of autistic children, metabolites involved in the pathways accumulated(Figure 3A). Connect with our experiment part, we chose tryptophan as our sensor in autistic children to start coding oxytocin.</p>
            <DocImg src="https://2021.igem.org/wiki/images/0/04/T--NJMU-China--Model2.8.png"></DocImg>
            <h4>2. The regression model</h4>
            <DocH3 title="Object2 II" id="Object2-II"></DocH3>
            <p>Propose a screening model for autism by detecting immue factors in the peripheral blood .</p>
            <h4>3. Random Forest Regressor</h4>
            <p>Based on the data of immune factors, we discovered that important immue factors(eg.(IL-1β,IL-4,IL-6,IL-10,IL-17A,MCP-1,TGF-β) are significantly upregulated in autistic children. The aims of this part were to identify metabolic signatures of ASD and to find potential biomarkers for autism diagnosis and possible etiology.</p>
            <p>We first conducted a two sample t-test on these seven immune factors. The specific results are shown in the table below. P-values are less than the significance level, indicating that the immune factors of ASD group and control group have significant statistical differences at the 95% confidence level(Figure 4A).</p>
            <DocImg src="https://2021.igem.org/wiki/images/a/a6/T--NJMU-China--Model3.1.png"></DocImg>
            <p>Principal component analysis (PCA) is a mathematical algorithm that reduces the dimensionality of the data while retaining most of the variation in the data set1. It accomplishes this reduction by identifying directions, called principal components, along which the variation in the data is maximal. By using a few components, each sample can be represented by relatively few numbers instead of by values for thousands of variables. Samples can then be plotted, making it possible to visually assess similarities and differences between samples and determine whether samples can be grouped[8].</p>
            <p>In order to observe the approximate distribution of the data, we conducted PCA and selected the first two principal components(Figure 4B). The results show that the first two principal components can better distinguish the difference of immune factors between ASD group and control group, and draw the cumulative contribution rate diagram. The results show that the contribution of IL4, IL17A and IL10 is high(Figure 4C).</p>
            <DocImg src="https://2021.igem.org/wiki/images/6/65/T--NJMU-China--Model3.2.png"></DocImg>
            <DocImg src="https://2021.igem.org/wiki/images/e/e1/T--NJMU-China--Model3.3.png"></DocImg>
            <p>We classified the data into test set and training set (7:3). We use the training set to build a random forest model. 52 observation points are randomly selected from the training set, and 3 variables are randomly selected at each node of each tree, so as to generate 500 classical decision trees. Compared with the real category, the out of bag prediction (OOB) error, that is, OOB estimate of error rate, is 5.57%, which shows that the accuracy of the classifier model is very high and can effectively identify the two groups.</p>
            <p>We tested the training set by ourselves. All samples can be classified well. The confusion matrix shows that both ASD group and control group have 100% classification accuracy.</p>
            <p>In order to prevent over fitting, we tested the test set and found that 4 of the 6 samples in ASD group could be correctly classified, while 17 of the 19 samples in control group could be correctly classified. The area under AUC curve(Figure 4D) is 83.3%, which can better classify data.</p>
            <DocImg src="https://2021.igem.org/wiki/images/5/56/T--NJMU-China--Model3.4.png"></DocImg>
            <p>The indexes can be sorted from high to low according to the calculated value of index importance (such as "mean decrease accuracy"), and the indexes can be selected according to the cross validation curve by performing 10 fold cross validation for 5 times. The function of cross validation method is to try to use different training set / validation set division to do multiple groups of different training / validation of the model, so as to deal with the problems of too one-sided individual test results and insufficient training data. The training set itself is used here for cross validation.</p>
            <p>At this step, some key immune factors can be selected as representative factors as biomarkers to effectively distinguish ASD.</p>
            <p>The cross validation curve(Figure 4E) shows the relationship between the model error and the number of immune factors used for fitting. Firstly, the error will decrease with the increase of the number of immune factors. At the beginning, the decline is very obvious, but at a specific range, the decline will no longer change significantly or even increase. Then, according to the principle of simplicity, roughly select the top 4 immune factors (IL4, IL10, IL17A, TGFbeta).</p>
            <DocImg src="https://2021.igem.org/wiki/images/5/5d/T--NJMU-China--Model3.5.png"></DocImg>
            <p>The PCA of the data(Figure 4F) shows that the amount of information of the original data represented by the first two principal components of the simplified model is higher than 60.5% and 92.6% of the initial model, indicating that the data concentration of the simplified model is better.</p>
            <DocImg src="https://2021.igem.org/wiki/images/7/70/T--NJMU-China--Model3.6.png"></DocImg>
            <p>The above cross validation curve can reflect that not all variables contribute to the prediction model, and the effect of the variables with lower importance ranking is not obvious, or even negative. As for the examples in this article, some indicators do not contribute much to classification, and some may have little difference between groups, or even increase the error rate.</p>
            <p>Therefore, for the random forest classifier constructed at the beginning, many variables can be eliminated. It is advisable to model the first four most important indicators selected above instead of all immune factors in the original data set, which can not only simplify the classifier model, but also improve the classification accuracy. The NMDS dimensionality reduction sorting diagram(Figure 4G) shows the classification.</p>
            <DocImg src="a"></DocImg>
            <p>Actually, simplified model achieved an AUR of 1.00(Figure 4H) which was very high than the value of 0.83 in full model, and this suggest that these top 4 Immune factor could capture most of the features of ASD.</p>
            <DocImg src="a"></DocImg>
            <p>Compared with the classifiers constructed with all OTUs above, OOB estimate of error rate is reduced, and there is no error classification in the fusion matrix, which shows that the accuracy is improved.</p>
            <DocH3 title="Object3" id="Object3"></DocH3>
            <p>Verify the rationality of the project design through mathematical modeling and 3-D modeling</p>
            <h4>1. MicroRNA 3-D model</h4>
            <p>As a preliminary characterization and verification of our parts, we simulated the interactions between microRNA 126a and DNMT3B.We first simulated the 3p and 5p of the microRNA structure in 3dRNAwebsite[9](http://biophy.hust.edu.cn/new/3dRNA) (Figure 5A).</p>
            {{ 'img' }}
            {{ 'img' }}
            <p>Analysis by BiBiServ website[10](https://bibiserv.com/ )showed that the seed sequence of miRNA-126a 3p end had four potential binding sites (2 in 3’ UTR, 1 in CDS and 1 in 5’ UTR) with DNMT3B mRNA. The seed sequence of miRNA-126a 5p end had three potential binding sites (3 in CDS) with DNMT3B mRNA(Figure 5B).</p>
            <p>The absolute entropy value of the site bindings was greater than 20; therefore, we speculated that miRNA-126a could bind DNMT3B mRNA and inhibit the translation process.</p>
            <h4>2. RNA switch 3-D model</h4>
            <p>Three-dimensional (3D) structures of RNAs play important role in performing their functions . For riboswitches, we must find out how their active centers combine and react with the small molecules to truly understand the regulatory mechanism.</p>
            <p>Firstly,we successfully built the RNA 3D structure of our riboswitch by 3dRNA v2,0[9](Figure 5C).</p>
            {{ 'img' }}
            <p>Then we obtained the structure of Tryptophan from PubChem.(Figure 5D)</p>
            <p>(https://pubchem.ncbi.nlm.nih.gov)</p>
            {{ 'img' }}
            <p>As for the docking of RNA-chemical interaction, we simulated it using AutoDock Vina[11, 12] (Figure 5E).AutoDock Vina is an open-source program for doing molecular docking. It was designed and implemented by Dr. Oleg Trott in the Molecular Graphics Lab at The Scripps Research Institute.</p>
            {{ 'img' }}
            <p>We simulated 50 structures at a time.The binding energy and RMSD of top five models(by the binding energy) are as follows(Figure 5F).We showed the first model.</p>
            {{ 'img' }}
            <h4>3. Oxytocin and receptor 3-D models</h4>
            {{ 'img' }}
            {{ 'img' }}
            <p>QMEANDisCo global score is the average per-residue QMEANDisCo score (see below) which has been found to correlate well with the lDDT score. The provided error estimate is based on QMEANDisCo global scores estimated for a large set of models and represents the root mean squared difference between QMEANDisCo global score and lDDT (the ground truth). As the reliability of the prediction depends on model size, the provided error estimate is calculated based on models of similar size to the input.</p>
            {{ 'img' }}
            <p>The "Local Quality" plot in the figure above shows, for each residue of the model (reported on the x-axis), the expected similarity to the native structure (y-axis).</p>
            {{ 'img' }}
            <p>The QMEAN score is shown above.</p>
            <p>The x-axis shows protein length (number of residues). The y-axis is the "QMEAN" score. Every dot represents one experimental protein structure. Black dots are experimental structures with a "QMEAN" score within 1 standard devation of the mean (|Z-score| between 0 and 1), experimental structures with a |Z-score| between 1 and 2 are grey. Experimental structure that are even further from the mean are light grey. The actual model is represented as a red star.</p>
            <h4>4. Cell growth model</h4>
            <p>As a engineered bacteria of therapeutic effects, it is of great importance to predicte growth rate--we need to know whether the growth of our bacteria meets up our expectations in vivo and vitro.</p>
            <p>Optical density (OD) measurement determines the concentration of the medium by detecting the absorption of light of a particular wavelength in the medium, which represents the number of EScherichia coli in the medium. The concentration of the medium is proportional to the OD value. A larger OD value indicates a greater number of bacteria. All OD values can be used to indicate the relative increase of bacteria in the medium over a period of time. All OD values can be used to indicate the relative increase of bacteria in the medium over time.We made OD600 measurements on the two tubes at the same time, and the following is our time and OD600 data.</p>
            {{ 'img' }}
            <p>The Logistic equation is the most commonly used model for describing bacterial growth dynamics[15], especially in systems biology and computational biology. This equation is commonly used to fit growth curves based on optical density (OD) to understand the dynamics of living systems.</p>
            <p>The Logistic model with the form of differential equation was first proposed by Veshulst in 1838, which can usually describe the growth curve of organisms well. According to their own needs and on the basis of summarizing the results of previous studies, many scholars at home and abroad have put forward many modifications and improvements on the Logistic equation model.</p>
            {{ 'img' }}
            <p>where N is the population size, t - resource, K - maximum result, r - birthrate. And the equation can be solved as followed.</p>
            {{ 'img' }}
            {{ 'img' }}
            <p>As a result, the Logistic equation of population N(t) and time T is</p>
            {{ 'img' }}
            <p>We have used R package deSolve to fit our data and found that the P value is very small and therefore statistically significant. Then we have plotted with ggplot2 and the following is our map based on time and OD600:</p>
            {{ 'img' }}
            <p>The Equation is: N(t) = 1.7184 / (1 + 33.4369 * exp(-0.0212t))</p>
            {{ 'img' }}
            <p>The Equation is: N(t) = 1.6310 / (1 + 42.4933 * exp(-0.0236t))</p>
            <DocH2 title="Future Plan" id="Future-Plan"></DocH2>
            <!-- <h2>
                Future Plan
                <span id="Future-Plan" class="anchor"></span>
            </h2>-->
            <p>1.We will build a network platform based on our screening model to assist us in providing timely prevention and treatment measures.</p>
            <p>2.Combined with experimental data, we will predict the efficacy of our engineering bacteria.</p>
            <pre class="whitespace-pre-line italic p-10 selection:bg-gray-400">
                1.	Barrett, T., et al., NCBI GEO: archive for functional genomics data sets--update. Nucleic Acids Res, 2013. 41(Database issue): p. D991-5.
                2.	Lal, G. and J.S. Bromberg, Epigenetic mechanisms of regulation of Foxp3 expression. Blood, 2009. 114(18): p. 3727-35.
                3.	Wing, J.B., A. Tanaka, and S. Sakaguchi, Human FOXP3(+) Regulatory T Cell Heterogeneity and Function in Autoimmunity and Cancer. Immunity, 2019. 50(2): p. 302-316.
                4.	Powers, R.K., et al., GSEA-InContext: identifying novel and common patterns in expression experiments. Bioinformatics, 2018. 34(13): p. i555-i564.
                5.	Brieuc, M.S.O., et al., A practical introduction to Random Forest for genetic association studies in ecology and evolution. Molecular Ecology Resources, 2018. 18(4): p. 755-766.
                6.	Ghiasi, M.M. and S. Zendehboudi, Application of decision tree-based ensemble learning in the classification of breast cancer. Comput Biol Med, 2021. 128: p. 104089.
                7.	Liu, Z., et al., Gene variations in autism spectrum disorder are associated with alteration of gut microbiota, metabolites and cytokines. Gut Microbes, 2021. 13(1): p. 1-16.
                8.	Yatawara, C.J., et al., The effect of oxytocin nasal spray on social interaction deficits observed in young children with autism: a randomized clinical crossover trial. Mol Psychiatry, 2016. 21(9): p. 1225-31.
                9.	Ringnér, M., What is principal component analysis? Nat Biotechnol, 2008. 26(3): p. 303-4.
                10.	Wang, J., et al., 3dRNA v2.0: An Updated Web Server for RNA 3D Structure Prediction. Int J Mol Sci, 2019. 20(17).
                11.	Morgenstern, B., DIALIGN: multiple DNA and protein sequence alignment at BiBiServ. Nucleic Acids Res, 2004. 32(Web Server issue): p. W33-6.
                12.	Trott, O. and A.J. Olson, AutoDock Vina: improving the speed and accuracy of docking with a new scoring function, efficient optimization, and multithreading. J Comput Chem, 2010. 31(2): p. 455-61.
                13.	Luo, J., et al., Challenges and current status of computational methods for docking small molecules to nucleic acids. Eur J Med Chem, 2019. 168: p. 414-425.
                14.	Goddard, T.D., et al., UCSF ChimeraX: Meeting modern challenges in visualization and analysis. Protein Sci, 2018. 27(1): p. 14-25.
                15.	Pettersen, E.F., et al., UCSF ChimeraX: Structure visualization for researchers, educators, and developers. Protein Sci, 2021. 30(1): p. 70-82.
                16.	Thevenet, P., et al., PEP-FOLD: an updated de novo structure prediction server for both linear and disulfide bonded cyclic peptides. Nucleic Acids Res, 2012. 40(Web Server issue): p. W288-93.
                17.	Shen, Y., et al., Improved PEP-FOLD Approach for Peptide and Miniprotein Structure Prediction. J Chem Theory Comput, 2014. 10(10): p. 4745-58.
                18.	Esser, D.S., J.H. Leveau, and K.M. Meyer, Modeling microbial growth and dynamics. Appl Microbiol Biotechnol, 2015. 99(21): p. 8831-46.
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
</script>

<style scoped>
@import "../css/DocTemplate.css";
</style>
