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
                <div class="grid gap-4 cell h-full">
                    <div class="letter bg-white rounded-2xl overflow-hidden box">
                        <div
                            class="h-full absolute w-full rounded-2xl bg-cover"
                            style="background-image: url('https://2021.igem.org/wiki/images/e/e5/T--NJMU-China--1.1.png')"
                        ></div>
                        <div
                            class="h-full absolute w-full rounded-2xl bg-cover img2"
                            style="background-image: url('https://2021.igem.org/wiki/images/a/af/T--NJMU-China--1.3.png')"
                        ></div>
                        <div
                            class="h-full absolute w-full rounded-2xl bg-cover img3"
                            style="background-image: url('https://2021.igem.org/wiki/images/9/9e/T--NJMU-China--1.2.png')"
                        ></div>
                    </div>
                    <div
                        class="letter"
                    >As a medical college, students in Nanjing Medical University often actively participate in voluntary activities such as the COVID-19 nucleic acid testing.</div>
                </div>
            </section>
        </div>
        <MyFooter></MyFooter>
    </div>
</template>

<script lang="ts" setup>
import MyNav from '../components/MyNav.vue'
import { computed, onMounted, ref } from 'vue'
import MyFooter from '../components/MyFooter.vue'

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
let sect2: HTMLElement = null!
let box: HTMLElement = null!
let bigBody: HTMLElement = null!
let sect2Img2: HTMLElement = null!
let sect2Img3: HTMLElement = null!
onMounted(() => {
    window.addEventListener('scroll', sect2Scroll, { passive: false })
    sect2 = document.querySelector('.body')!
    box = document.querySelector('.box')!
    bigBody = document.querySelector('.bigBody')!
    sect2Img2 = document.querySelector('.img2')!
    sect2Img3 = document.querySelector('.img3')!
})
let sect2Scroll = (e: Event) => {
    let height = window.innerHeight / 2

    let elScroll = window.scrollY - height * 2
    if (elScroll > 0 && elScroll < 4 * height) {
        e.preventDefault()

        bigBody.style.top = elScroll + 'px'

        let Img2Scroll = 100 + box.clientWidth - elScroll
        if (!(Img2Scroll < -5)) {
            sect2Img2.style.left = Img2Scroll + 'px'
            sect2Img3.style.right = Img2Scroll + 'px'
        } else {
            sect2Img2.style.left = '0px'
            sect2Img3.style.right = '0px'
        }

        console.log("233")
    }
}
</script>

<style scoped>
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
    height: 100vh;
    padding: 150px 100px;
    position: relative;
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
    font-size: 1.5rem;
    padding: 20px;
    color: white;
    line-height: 1.5;
    font-family: "Microsoft Yahei";
    cursor: default;
    transition: all 0.3s ease;
}
.cell {
    grid-template-columns: 70% 30%;
    grid-template-rows: 100%;
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
