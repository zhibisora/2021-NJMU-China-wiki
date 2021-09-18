<template>
    <transition name="mynav" @before-leave="bl" @after-enter="ae">
        <div v-show="count" class="for-nav-deep">
            <MyNav></MyNav>
        </div>
    </transition>
    <div class="bigBody relative">
        <div class="body bg-[#2070a5]">
            <section class="sect portrait:bg-white" :style="{ opacity: value }">
                <!-- 视频播放完毕回调待稳定后可以搞一下 -->
                <video
                    src="https://2021.igem.org/wiki/images/6/6d/T--NJMU-China--story.mp4"
                    autoplay
                    muted
                    class="portrait:object-contain landscape:object-cover portrait:scale-150"
                ></video>
            </section>
            <section class="sect2 text-left" :style="{ opacity: value2 }">
                <div class="grid gap-x-4 cell h-full">
                    <div class="letter bg-white rounded-2xl overflow-hidden box">
                        <div
                            class="h-full absolute w-full rounded-2xl bg-cover bg-center"
                            style="background-image: url(https://2021.igem.org/wiki/images/e/e5/T--NJMU-China--1.1.png)"
                        ></div>
                        <div
                            class="h-full absolute w-full rounded-2xl bg-cover img2"
                            style="background-image: url(https://2021.igem.org/wiki/images/a/af/T--NJMU-China--1.3.png)"
                        ></div>
                        <div
                            class="h-full absolute w-full rounded-2xl bg-cover img3"
                            style="background-image: url(https://2021.igem.org/wiki/images/9/9e/T--NJMU-China--1.2.png)"
                        ></div>
                    </div>
                    <div class="letter">{{ content[0] }}</div>
                </div>
                <div></div>
                <div></div>
            </section>
            <section class="sect3 text-left" :style="{ opacity: value2 }">
                <div class="grid gap-x-4 cell3 h-full" style="grid-template-columns: 3fr 7fr;">
                    <div class="letter">{{ content[1] }}</div>
                    <div class="letter bg-white rounded-2xl overflow-hidden box">
                        <div
                            class="h-full absolute w-full rounded-2xl bg-cover bg-center"
                            style="background-image: url(https://2021.igem.org/wiki/images/d/d8/T--NJMU-China--2.1.png)"
                        ></div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </section>
            <section class="sect3 text-left" :style="{ opacity: value2 }">
                <div class="grid gap-x-4 cell2 h-full">
                    <div class="letter bg-white rounded-2xl overflow-hidden box">
                        <div
                            class="h-full absolute w-full rounded-2xl bg-cover bg-center"
                            style="background-image: url(https://2021.igem.org/wiki/images/e/e5/T--NJMU-China--1.1.png)"
                        ></div>
                    </div>
                    <div class="letter">{{ content[2] }}</div>
                </div>
                <div></div>
                <div></div>
            </section>
            <section class="sect3 text-left" :style="{ opacity: value2 }">
                <div class="grid gap-x-4 cell3 h-full">
                    <div class="letter">{{ content[3] }}</div>
                    <div class="letter bg-white rounded-2xl overflow-hidden box">
                        <div
                            class="h-full absolute w-full rounded-2xl bg-cover bg-center"
                            style="background-image: url(https://2021.igem.org/wiki/images/e/e5/T--NJMU-China--1.1.png)"
                        ></div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </section>
            <section class="sect3 text-left" :style="{ opacity: value2 }">
                <div class="grid gap-x-4 cell2 h-full">
                    <div class="letter bg-white rounded-2xl overflow-hidden box">
                        <div
                            class="h-full absolute w-full rounded-2xl bg-cover bg-center"
                            style="background-image: url(https://2021.igem.org/wiki/images/e/e5/T--NJMU-China--1.1.png)"
                        ></div>
                    </div>
                    <div class="letter">{{ content[4] }}</div>
                </div>
                <div></div>
                <div></div>
            </section>
            <section class="sect3 text-left" :style="{ opacity: value2 }">
                <div class="grid gap-x-4 cell3 h-full">
                    <div class="letter">{{ content[5] }}</div>
                    <div class="letter bg-white rounded-2xl overflow-hidden box">
                        <div
                            class="h-full absolute w-full rounded-2xl bg-cover bg-center"
                            style="background-image: url(https://2021.igem.org/wiki/images/e/e5/T--NJMU-China--1.1.png)"
                        ></div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </section>
            <section class="sect3 text-left" :style="{ opacity: value2 }">
                <div class="grid gap-x-4 cell2 h-full">
                    <div class="letter bg-white rounded-2xl overflow-hidden box">
                        <div
                            class="h-full absolute w-full rounded-2xl bg-cover bg-center"
                            style="background-image: url(https://2021.igem.org/wiki/images/e/e5/T--NJMU-China--1.1.png)"
                        ></div>
                    </div>
                    <div class="letter">{{ content[6] }}</div>
                </div>
                <div></div>
                <div></div>
            </section>
            <section class="sect3 text-left" :style="{ opacity: value2 }">
                <div class="grid gap-x-4 cell3 h-full" style="grid-template-columns: 4fr 6fr;">
                    <div class="letter">{{ content[7] }}</div>
                    <div class="letter bg-white rounded-2xl overflow-hidden box">
                        <div
                            class="h-full absolute w-full rounded-2xl bg-cover bg-center"
                            style="background-image: url(https://2021.igem.org/wiki/images/e/e5/T--NJMU-China--1.1.png)"
                        ></div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </section>
            <section class="sect3 text-left" :style="{ opacity: value2 }">
                <div class="grid gap-x-4 cell2 h-full">
                    <div class="letter bg-white rounded-2xl overflow-hidden box">
                        <div
                            class="h-full absolute w-full rounded-2xl bg-cover bg-center"
                            style="background-image: url(https://2021.igem.org/wiki/images/e/e5/T--NJMU-China--1.1.png)"
                        ></div>
                    </div>
                    <div class="letter">{{ content[8] }}</div>
                </div>
                <div></div>
                <div></div>
            </section>
        </div>
        <MyFooter></MyFooter>
    </div>
</template>

<script lang="ts" setup>
import MyNav from '../components/MyNav.vue'
import { onMounted, ref } from 'vue'
import MyFooter from '../components/MyFooter.vue'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


let content = ['As medical students of Nanjing Medical University, we often actively participate in voluntary activities such as the COVID-19 nucleic acid testing.',
    'Last year, we went to Star Of The Sea（海之星）to do volunteer activities. Because of this opportunity in such an educational institution specially for autistic children, we got to know a group of special kids - autistic children',
    'After in-depth understanding, we discovered that autism is one of the fastest-growing developmental disability. According to American CDC, prevalence of autism in the U.S. has increased from 1 in 68 births in 2010 to 1 in 54 births in 2020. And in China the statistic is about 1 in 100 births.',
    'On May 14, 2021, SJTU & Science released the booklet 125 Questions: Exploration and Discovery. The problem what is the etiology of autism indicated that autism has aroused strong social concern.',
    'In contact with these children, we found that this set of heterogeneous neurodevelopmental conditions are characterised by early-onset difficulties in social communication and unusually restricted, repetitive behaviour and interests.',
    'In our hometown-China, children with ASDs are also what we call Children From the Star. Because they are like stars twinkling in the distant sky, lonely and silent but twinkling on their own planets.',
    'Last year, we carried out the project “Sound of Silence and won the Gold Award. We proposed a domestic autism screening method based on urinary metabolites in view of problems of screening in autism.',
    'This year, NJMU-China team completely upgraded the project. We constructed the project of the prevention and treatment of autism children. In more detail, we focus on maternal prevention and offspring treatment of autism caused by maternal infection during pregnancy.',
    'Our project aims at building up a stairway to the starlight, using engineering probiotics to prevent autism caused by maternal infection during pregnancy and treat children, thus structuring a way to health for the ‘Children From the Star’.',
]

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', navHidden)
})
// 处理滚动淡入淡出效果
let value = ref(1)
let value2 = ref(0)
let value3 = ref(0)
let value4 = ref(0)
let value5 = ref(0)
let handleScroll = () => {
    let height = window.innerHeight / 2
    // let scrollY = window.scrollY
    // console.log(window.scrollY)

    value.value = 1 + window.scrollY / -600

    value2.value = 0 + (window.scrollY - height) / 300
    // console.log(value2)
    // console.log(height)

    value3.value = 0 + (window.scrollY - height * 3) / 300
    // console.log(value3)

    value4.value = 0 + (window.scrollY - height * 5) / 300
    value5.value = 0 + (window.scrollY - height * 7) / 300
}
// 处理nav的显示与消失
let count = ref(0)
let navHidden = () => {
    if (window.scrollY > window.innerHeight * 0.8) {
        count.value = 1
    } else {
        count.value = 0
    }
    // console.log(count.value)
}
// 用于在保证nav变化时的层级关系的同时，不影响sect2的点击事件的算法的第二版，宗旨是只有在动画停止的时候才能使用鼠标事件
// 这样的话，鼠标事件和nav的动画就不冲突了，我们在nav消失后，因为nav可能马上开始动画，所以一旦消失就无法使用点击事件了
// 保证在nav出现后正常浏览界面是可以使用事件的，nav消失后视频占屏幕80%，这种情况下sect的鼠标事件舍弃是可以接受的，并且
// 得益于这些鼠标事件的舍弃，nav动画表现得像是body完全使用了z-index=-1一样，而事实上大部分情况下都可以得到完全z-index=-1
// 所不具备的点击事件能力 这样的话，也便捷了调试方式，提升了开发的速度
let body: HTMLElement = null!
onMounted(() => {
    body = document.querySelector('.body')!
})
let bl = () => {
    body.style.zIndex = "-1"
}
let ae = () => {
    body.style.zIndex = "0"
}
// sect2 滚动逻辑
let box: HTMLElement = null!
let sect2Img2: HTMLElement = null!
let sect2Img3: HTMLElement = null!
let sect2Letters: NodeListOf<HTMLElement> = null!
onMounted(() => {
    window.addEventListener('scroll', sect2Scroll)
    box = document.querySelector('.box')!
    sect2Img2 = document.querySelector('.img2')!
    sect2Img3 = document.querySelector('.img3')!
    sect2Letters = document.querySelectorAll('.sect2 .letter')
    sect2ImgChange(100 + box.clientWidth + 'px')
})
let sect2Scroll = (e: Event) => {

    // gsap.to
    let height = window.innerHeight / 2

    let elScroll = window.scrollY - height * 2
    if (elScroll > 0 && elScroll < 2 * height) {
        sect2Letters[0].style.transform = "translateY(" + elScroll + 'px' + ')'
        sect2Letters[1].style.transform = "translateY(" + elScroll + 'px' + ')'

        let Img2Scroll = 100 + box.clientWidth - 2 * elScroll
        if (!(Img2Scroll < -5)) {
            sect2ImgChange(Img2Scroll + 'px')
        } else {
            sect2ImgChange('0px')
        }

        console.log("233")
    }
}
let sect2ImgChange = (pos: string) => {
    sect2Img2.style.left = pos
    sect2Img3.style.right = pos
}
</script>

<style scoped>
/* 用于修复nav变化时层
/* 用于修复nav变化时层
/* 用于修复nav变化时层级在.sect2和.div之下的bug */
/* 然而混合模式无法修复，
/* 用于修复nav变化时层级在.sect2和.div之下的bug */
/* 然而混合模式无法修复，导致依旧很奇怪 一劳永逸的解决办法就是不要让它在转变的时候就碰到文字 */
/* 等把文字框的padding设置起来应该就可以删掉了，当然，保守起见，如果不碍事，造成很大麻烦的话，可以继续保留 */
.body {
    /* postion relative 是为了保证z-index生效 */
    position: relative;
    z-index: -1;
}
/* 修复结束 下面还有一个修改.sect和.div的z-index值的 */
.sect {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 100px;
}
.sect video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
/* 新样式 */
.sect2 {
    height: 200vh;
    padding: 150px 100px;
    position: relative;
}
.sect3 {
    height: 100vh;
    padding: 150px 100px;
    position: relative;
    transition: background-color 0.2s;
}
.sect2:hover,
.sect3:hover {
    background-color: rgba(0, 0, 0, 0.144);
}
/* 用于修复nav变化时层级在.sect2和.div之下的bug (旧版) */
/* .sect2 {
    z-index: -1;
} */
/* 修复结束 */

.letter {
    /* background-color: #0069b3; */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-size: 1.5rem; */
    font-size: 3.5vh;
    padding: 20px;
    color: white;
    line-height: 1.5;
    font-family: "Microsoft Yahei";
    cursor: default;
    /* transition: all 0.3s ease; */
}
.cell {
    grid-template-columns: 7fr 3fr;
    grid-template-rows: 5fr 5fr;
    row-gap: 200px;
}
.cell2 {
    grid-template-columns: 7fr 3fr;
    /* grid-template-rows: 5fr 5fr; */
    /* row-gap: 200px; */
}

.cell3 {
    grid-template-columns: 3fr 7fr;
    /* grid-template-rows: 5fr 5fr; */
    /* row-gap: 200px; */
}
@media screen and (orientation: portrait) {
    .cell {
        grid-template-columns: 100%;
        grid-template-rows: 5fr 5fr 5fr 5fr;
    }
}
/* 实验失败 可能child不支持和grid一起使用 */
/* .cell:first-child {
    background-color: #fff;
/* }
/* MyNav transition */
.mynav-enter-from,
.mynav-leave-to {
    opacity: 0;
}
.mynav-enter-active,
.mynav-leave-active {
    /* transition: all 0.4s ease; */
    transition: all 0.2s ease-out;
}
/* 修改nav中.zero的占位样式，使得在nav快速消失时不出现透明占位延迟消失的bug */
/* :deep()是新的深度选择器 */
.for-nav-deep :deep(.zero) {
    height: 0;
}
</style>
