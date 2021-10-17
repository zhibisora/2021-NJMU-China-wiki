<template>
    <MyNav></MyNav>
    <div class="Modeling bg-[#2070a5] relative font-sans selection:bg-gray-400">
        <!-- #5BBDFE -->
        <div
            class="sidebar fixed w-1/6 h-[calc(100vh-(1.3vw+4vh))] text-left"
            :class="{ isBottom: is_bottom }"
        >
            <a
                href="#Inspiration"
                class="block bg-[#56C1FF] w-[75%] h-[96%] right-0 absolute bottom-0 rounded-tl-2xl text-white p-[0.7rem] text-xl transition-all hover:w-[85%] duration-300 index"
                style="box-shadow: 0 0 10px 0 rgba(0,0,0,.2);"
                :class="{ toWider: inRangeStatus == 0 }"
            >Inspiration</a>
            <a
                href="#"
                class="block bg-[#FFD368] w-[20%] h-[26%] right-0 absolute bottom-0 rounded-tl-2xl text-white p-3 text-xl transition-all hover:w-[30%] duration-300"
                style="box-shadow: 0 0 10px 0 rgba(0,0,0,.2);"
            >
                <span class="-rotate-90 block absolute top-8 left-[55%] -translate-x-1/2">TOP</span>
            </a>
        </div>
        <article class="article bg-white w-[77.5%] relative left-[16.6667%] p-12 text-left pt-2">
            <h2>
                Inspiration
                <span id="Inspiration" class="anchor"></span>
            </h2>
            <p>Autism is the fastest-growing developmental disability, characterized by early-onset difficulties in social communication, unusually restricted behavior and interests. In our hometown-China, children with autism are also called ‘Children from the star’. Because they are like stars twinkling in the distant sky, lonely and silent.</p>
            <div class="text-center img_shell">
                <img
                    src="https://2021.igem.org/wiki/images/7/7c/T--NJMU-China--Description.1.1.png"
                    alt="Description.1.1"
                />
            </div>
            <p>According to American CDC, prevalence of autism in the U.S. has increased significantly from 2010 to 2020. And in China the statistic is unpromising. In our city—Nanjing, we got to know many autistic children during human practice in Nanjing Brain Hospital, behind them are countless families with heavy burdens.</p>
            <div class="text-center img_shell">
                <img
                    src="https://2021.igem.org/wiki/images/0/04/T--NJMU-China--Description.1.2.png"
                    alt="Description.1.2"
                />
            </div>
            <div class="text-center img_shell">
                <img
                    src="https://2021.igem.org/wiki/images/b/b7/T--NJMU-China--Description.1.3.png"
                    alt="Description.1.3"
                />
            </div>
            <p>In 2020, NJMU-China’s first taste of iGEM, our team carried out the project “Sound of Silence: Domestic autism screening based on urinary metabolites” stood out in 256 teams and won the Gold Award. We proposed a domestic autism screening method based on urinary metabolites in view of problems of screening in autism.</p>
            <div class="text-center img_shell">
                <img
                    src="https://2021.igem.org/wiki/images/e/e9/T--NJMU-China--Description.1.4.png"
                    alt="Description.1.4"
                />
            </div>
            <p>This year, we shifted our attention from the diagnostic track to the therapeutic track and really getting into the depth of autism. The current treatment methods for autism mainly include medication, behavior therapy and psychotherapy, but the effect is limited.</p>
            <p>In our project, we constructed engineered probiotics transfected with constructed plasmids to treat autism based on the regulation of brain-gut axis.</p>
            <p>Based on our project, we really hope to lead a helping hand to every autistic child and their families. We believed that every child from the star will have his own sky.</p>
            <!-- <h1 class="text-center position">Nanjing medical university, Nanjing, China</h1>
            <h1 class="text-center position">101 longmian Avenue, Jiangning District, Nanjing</h1>-->
        </article>
    </div>
    <MyFooter></MyFooter>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import MyFooter from "../components/MyFooter.vue"
import MyNav from "../components/MyNav.vue"

var as: NodeListOf<HTMLAnchorElement> = null!
var anchors: NodeListOf<HTMLAnchorElement> = null!
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    as = document.querySelectorAll('a')
    anchors = document.querySelectorAll('.anchor')
})
let is_bottom = ref(false)
let handleScroll = () => {
    let footerOffsetTop = document.querySelector('footer')!.offsetTop
    // console.log(footerOffsetTop)

    let scrollTop = window.scrollY
    // console.log(scrollTop)

    let winHeight = window.innerHeight
    // console.log(winHeight)


    if (scrollTop + winHeight > footerOffsetTop) {
        is_bottom.value = true
    } else {
        is_bottom.value = false
    }

    handleInRangeStatus(scrollTop)
}
let inRangeStatus = ref(-1)
let handleInRangeStatus = (scrollTop: number) => {
    scrollTop -= 67
    // for (let i = 0; i < 9; i++) {
    //     // console.log(scrollTop)
    //     // console.log(anchors[0].offsetTop)
    //     // console.log(anchors[1].offsetTop)

    //     if (scrollTop > anchors[i].offsetTop && scrollTop < anchors[i + 1].offsetTop) {
    //         inRangeStatus.value = i
    //     }
    // }
    // if (scrollTop > anchors[9].offsetTop) {
    //     inRangeStatus.value = 9
    // }
    // if (scrollTop < anchors[0].offsetTop) {
    //     inRangeStatus.value = -1
    // }
}
</script>

<style scoped>
@font-face {
    font-family: "StarLight";
    src: url("https://2021.igem.org/wiki/images/f/fd/T--NJMU-China--StarLight.ttf");
}
.index {
    padding-left: 36px;
    white-space: nowrap;
    font-size: 1.15rem;
}
.isBottom {
    bottom: 0;
    position: absolute;
}
h2 {
    /* font-family: "Microsoft YaHei", "StarLight"; */
    font-family: "StarLight";
    line-height: 6rem;
    font-size: 2rem;
    color: #004d80;
    font-weight: 700;
    letter-spacing: 2px;
}
h4 {
    font-weight: bold;
    line-height: 3rem;
    font-size: 1rem;
}
h3 {
    /* font-weight: bold; */
    /* font-weight: 600; */
    line-height: 4rem;
    font-size: 1.5rem;
}
p {
    font-size: 1rem;
    line-height: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.anchor {
    position: relative;
    top: -116px;
}
.toWider {
    width: 85%;
}
.toWider2 {
    width: 70%;
}
.article {
    box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.2);
}
.position {
    font-size: 1.5rem;
    line-height: 1.5em;
    text-shadow: 0.25rem 0.25rem 0.25rem #3076b5;
}
.article img {
    text-align: center;
    object-position: center;
    display: inline-block;
    max-height: 50vh;
}
/* .img_shell {
} */
</style>
