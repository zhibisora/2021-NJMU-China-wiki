<template>
    <MyNav></MyNav>
    <div class="Modeling bg-[#2070a5] relative font-sans selection:bg-gray-400">
        <!-- #5BBDFE -->
        <div
            class="sidebar fixed w-1/6 h-[calc(100vh-(1.3vw+4vh))] text-left"
            :class="{ isBottom: is_bottom }"
        >
            <slot name="index" :s="s" :i="geti"></slot>
        </div>
        <article class="article bg-white w-[77.5%] relative left-[16.6667%] p-12 text-left pt-2">
            <slot name="content"></slot>
        </article>
    </div>
    <MyFooter></MyFooter>
</template>

<script lang="ts" setup>
// import DocA3 from '../components/DocA3.vue'
// import DocImg from '../components/DocImg.vue'
// import DocA2 from '../components/DocA2.vue'
// import DocA from '../components/DocA.vue'
// import DocH2 from '../components/DocH2.vue'
// import DocH3 from '../components/DocH3.vue'
import { computed, onMounted, ref } from 'vue'
import MyFooter from "../components/MyFooter.vue"
import MyNav from "../components/MyNav.vue"

var as: NodeListOf<HTMLAnchorElement> = null!
var anchors: NodeListOf<HTMLAnchorElement> = null!
var anchorslen: number = null!
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    as = document.querySelectorAll('a')
    anchors = document.querySelectorAll('.anchor')
    anchorslen = anchors.length - 1
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
let s = computed(() => {
    return inRangeStatus.value
})
let handleInRangeStatus = (scrollTop: number) => {
    // scrollTop -= 67


    for (let i = 0; i < anchorslen; i++) {
        // console.log(scrollTop)
        // console.log(anchors[0].offsetTop)
        // console.log(anchors[1].offsetTop)

        if (scrollTop > anchors[i].offsetTop && scrollTop < anchors[i + 1].offsetTop) {
            inRangeStatus.value = i
        }
    }
    if (scrollTop > anchors[anchorslen].offsetTop) {
        inRangeStatus.value = anchorslen
    }
    if (scrollTop < anchors[0].offsetTop) {
        inRangeStatus.value = -1
    }
}
// 
let i = -1
let geti = () => {
    i++
    return i
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
    font-family: "Microsoft YaHei";
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
/* .toWider {
    width: 85%;
} */
/* .toWider2 {
    width: 70%;
} */
.article {
    box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.2);
}
/* .tailwind {
    @apply block right-0 absolute bottom-0 rounded-tl-2xl text-white p-[0.7rem] text-xl transition-all duration-300;
} */
</style>
