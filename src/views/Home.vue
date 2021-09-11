<template>
    <transition name="mynav">
        <div v-show="count" class="for-nav-deep">
            <MyNav></MyNav>
        </div>
    </transition>
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
                <div class="letter bg-white rounded-2xl overflow-hidden">
                    <div
                        class="h-full absolute w-full bg-black rounded-2xl bg-cover"
                        style="background-image: url('https://2021.igem.org/wiki/images/e/e5/T--NJMU-China--1.1.png')"
                    ></div>
                    <div
                        class="h-full absolute w-full bg-black rounded-2xl bg-cover"
                        style="background-image: url('https://2021.igem.org/wiki/images/a/af/T--NJMU-China--1.3.png')"
                    ></div>
                    <div
                        class="h-full absolute w-full bg-black rounded-2xl bg-cover"
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
</template>

<script lang="ts" setup>
import MyNav from '../components/MyNav.vue'
import { onMounted, ref } from 'vue'
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
    console.log(window.scrollY)

    value.value = 1 + window.scrollY / -600

    value2.value = 0 + (window.scrollY - height) / 300
    // console.log(value2)
    console.log(height)

    value3.value = 0 + (window.scrollY - height * 3) / 300
    console.log(value3)

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
    console.log(count.value)
}
</script>

<style scoped>
/* 用于修复nav变化时层级在.sect2和.div之下的bug */
/* 然而混合模式无法修复，导致依旧很奇怪 一劳永逸的解决办法就是不要让它在转变的时候就碰到文字 */
/* 等把文字框的padding设置起来应该就可以删掉了，当然，保守起见，如果不碍事，造成很大麻烦的话，可以继续保留 */
* {
    z-index: -2;
}
.body {
    position: relative;
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
/* 用于修复nav变化时层级在.sect2和.div之下的bug */
.div,
.sect2 {
    z-index: -1;
}
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
    cursor: pointer;
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
