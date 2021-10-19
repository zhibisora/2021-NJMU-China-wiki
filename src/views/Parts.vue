<template>
    <DocTemplateVue>
        <template v-slot:index="{ s, i }">
            <DocA
                href="#Maternal-generation"
                bgc="#1C4D7C"
                w="75"
                h="96"
                content="Maternal generation"
                :f="i"
                :s="s"
            ></DocA>
            <DocA2
                href="#Basic-Parts"
                bgc="#56C1FF"
                w="60"
                h="89"
                content="Basic Parts"
                :f="i"
                :s="s"
            ></DocA2>
            <DocA2
                href="#Composite-Parts"
                bgc="#56C1FF"
                w="60"
                h="82"
                content="Composite Parts"
                :f="i"
                :s="s"
            ></DocA2>
            <DocA
                href="#Fetal-generation"
                bgc="#3076B5"
                w="75"
                h="75"
                content="Fetal generation"
                :f="i"
                :s="s"
            ></DocA>
            <DocA2
                href="#Basic-Parts2"
                bgc="#56C1FF"
                w="60"
                h="68"
                content="Basic Parts"
                :f="i"
                :s="s"
            ></DocA2>
            <DocA2
                href="#Composite-Parts2"
                bgc="#56C1FF"
                w="60"
                h="61"
                content="Composite Parts"
                :f="i"
                :s="s"
            ></DocA2>
            <DocTop></DocTop>
        </template>
        <template v-slot:content>
            <div>
                <DocH2 title="Maternal generation" id="Maternal-generation"></DocH2>
                <DocH3 title="Basic Parts" id="Basic-Parts"></DocH3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Designer</th>
                            <th>Length</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <DocPart n="BBa_J23100"></DocPart>
                            </td>
                            <td>Promoter</td>
                            <td>Constitutive promoter</td>
                            <td>John Anderson</td>
                            <td>35</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_B0064"></DocPart>
                            </td>
                            <td>RBS</td>
                            <td>Strong bacterial ribosome binding site (Elowitz and Leibler, 2000)</td>
                            <td>Jason Kelly</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_K2447012"></DocPart>
                            </td>
                            <td>Coding</td>
                            <td>TlpA36</td>
                            <td>Chee Wai Kit (david)</td>
                            <td>1116</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_K2447011"></DocPart>
                            </td>
                            <td>Promoter</td>
                            <td>pTlpA</td>
                            <td>Chee Wai Kit (david)</td>
                            <td>52</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_K554003"></DocPart>
                            </td>
                            <td>Coding</td>
                            <td>SoxR</td>
                            <td>UNICAMP EMSE</td>
                            <td>465</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_B0014"></DocPart>
                            </td>
                            <td>Terminator</td>
                            <td>Double terminator consisting of BBa_B0012 and BBa_B0011</td>
                            <td>Reshma Shetty</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_K554000"></DocPart>
                            </td>
                            <td>Promoter</td>
                            <td>SoxS</td>
                            <td>UNICAMP_EMSE Brazil team</td>
                            <td>62</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_K3873333"></DocPart>
                            </td>
                            <td>RNA</td>
                            <td>Target T cell's methylation enzyme to increases the foxp3 protein and promotes an increase the number of Treg cells.</td>
                            <td>Qinwen Wang</td>
                            <td>73</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_B0015"></DocPart>
                            </td>
                            <td>Terminator</td>
                            <td>
                                1.Double terminator consisting of BBa_B0010 and BBa_B0012.
                                2.This is the most commonly used terminator. It seems to be reliable.
                            </td>
                            <td>Reshma Shetty</td>
                            <td>129</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_K206000"></DocPart>
                            </td>
                            <td>Promoter</td>
                            <td>Promoter of the L-arabinose operon of E. coli; the araC regulatory gene is transcribed in the opposite direction (Guzman et al., 1995)</td>
                            <td>Amelia Hardjasa</td>
                            <td>285</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_K302033"></DocPart>
                            </td>
                            <td>Coding</td>
                            <td>MazF</td>
                            <td>Philip Hall</td>
                            <td>339</td>
                        </tr>
                    </tbody>
                </table>
                <DocH3 title="Composite Parts" id="Composite-Parts"></DocH3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Designer</th>
                            <th>Length</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <DocPart n="BBa_K3873888"></DocPart>
                            </td>
                            <td>Reporter</td>
                            <td>An AND gate composed of a 36℃-induced promoter and NO-induced promoter as a multi input module</td>
                            <td>Qinwen Wang</td>
                            <td>1891</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_K223047"></DocPart>
                            </td>
                            <td>Reporter</td>
                            <td>SoxR - SoxS - GFP Reporter with Lac Promoter</td>
                            <td>Suzanne Bartram</td>
                            <td>1867</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_K3873666"></DocPart>
                            </td>
                            <td>Reporter</td>
                            <td>A system to ensure protein being expressed only if the temperature is above 36 degree Celsius.</td>
                            <td>Qinwen Wang</td>
                            <td>1237</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_K3036005"></DocPart>
                            </td>
                            <td>Composite</td>
                            <td>Arabinose-induced suicide switch</td>
                            <td>Xiao Chen,Chunxu Han</td>
                            <td>475</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <DocH2 title="Fetal generation" id="Fetal-generation"></DocH2>
                <DocH3 title="Basic Parts" id="Basic-Parts2"></DocH3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Designer</th>
                            <th>Length</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <DocPart n="BBa_J23100"></DocPart>
                            </td>
                            <td>Promoter</td>
                            <td>Constitutive promoter</td>
                            <td>John Anderson</td>
                            <td>35</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_B0064"></DocPart>
                            </td>
                            <td>RBS</td>
                            <td>Strong bacterial ribosome binding site (Elowitz and Leibler, 2000)</td>
                            <td>Jason Kelly</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_K2447012"></DocPart>
                            </td>
                            <td>Coding</td>
                            <td>TlpA36</td>
                            <td>Chee Wai Kit (david)</td>
                            <td>1116</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_K2447011"></DocPart>
                            </td>
                            <td>Promoter</td>
                            <td>pTlpA</td>
                            <td>Chee Wai Kit (david)</td>
                            <td>52</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_K3873873"></DocPart>
                            </td>
                            <td>RNA</td>
                            <td>The aptamer of tryptophan</td>
                            <td>Qinwen Wang</td>
                            <td>64</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_B0064"></DocPart>
                            </td>
                            <td>RBS</td>
                            <td>Strong bacterial ribosome binding site (Elowitz and Leibler, 2000)</td>
                            <td>Jason Kelly</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_K3873387"></DocPart>
                            </td>
                            <td>Coding</td>
                            <td>Secretory oxytocin</td>
                            <td>Qinwen Wang</td>
                            <td>111</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_B0015"></DocPart>
                            </td>
                            <td>Terminator</td>
                            <td>
                                1.Double terminator consisting of BBa_B0010 and BBa_B0012.
                                <br />2.This is the most commonly used terminator. It seems to be reliable.
                            </td>
                            <td>Reshma Shetty</td>
                            <td>129</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_K206000"></DocPart>
                            </td>
                            <td>Promoter</td>
                            <td>Promoter of the L-arabinose operon of E. coli; the araC regulatory gene is transcribed in the opposite direction (Guzman et al., 1995)</td>
                            <td>Amelia Hardjasa</td>
                            <td>285</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_K302033"></DocPart>
                            </td>
                            <td>Coding</td>
                            <td>MazF</td>
                            <td>Philip Hall</td>
                            <td>339</td>
                        </tr>
                    </tbody>
                </table>
                <DocH3 title="Composite Parts" id="Composite-Parts2"></DocH3>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Designer</th>
                            <th>Length</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <DocPart n="BBa_K3873666"></DocPart>
                            </td>
                            <td>Reporter</td>
                            <td>A system to ensure protein being expressed only if the temperature is above 36 degree Celsius.</td>
                            <td>Qinwen Wang</td>
                            <td>1237</td>
                        </tr>
                        <tr>
                            <td>
                                <span>*</span>
                                <DocPart n="BBa_K3873999"></DocPart>*
                                <br />Group Favorite
                            </td>
                            <td>Reporter</td>
                            <td>An AND gate composed of a 36℃-induced promoter and Tryptophan riboswitch as a multi input module</td>
                            <td>Qinwen Wang</td>
                            <td>1329</td>
                        </tr>
                        <tr>
                            <td>
                                <DocPart n="BBa_K3036005"></DocPart>
                            </td>
                            <td>Composite</td>
                            <td>Arabinose-induced suicide switch</td>
                            <td>Xiao Chen,Chunxu Han</td>
                            <td>475</td>
                        </tr>
                    </tbody>
                </table>
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
import DocTop from '../components/DocTop.vue'
import DocPart from '../components/DocPart.vue'
</script>

<style scoped>
@import "../css/DocTemplate.css";
table {
    border-collapse: collapse;
}
th,
td {
    --height: calc(1.3vw + 4vh);
    border: rgb(161, 161, 161) solid 1px;
    border-collapse: collapse;
    padding: calc(var(--height) * 0.3) calc(var(--height) * 0.5);
}
</style>
