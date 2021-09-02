<template>
    <transition name="mynav">
        <div v-show="count">
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
            <!-- <h2 class="relative text-white text-5xl w-full leading-relaxed">AppleLikeScroll</h2> -->
            <div class="div h-[60%] w-[60%] bg-white">ass</div>
            <p
                class="text relative text-white text-[1.2rem]"
            >As a medical college, students in Nanjing Medical University often actively participate in voluntary activities such as the COVID-19 nucleic acid testing.</p>
        </section>
        <!-- <section class="sect flex-col text-left" :style="{ opacity: value3 }">
            <h2 class="relative text-white text-5xl w-full leading-relaxed">AppleLikeScroll</h2>
            <p
                class="relative text-white text-[1.2rem]"
            >2. They present with varying degrees of dysfunctional communication and social skills, repetitive and stereotypic behaviors, and attention, cognitive, learning and sensory defects.[1]</p>
        </section>
        <section class="sect flex-col text-left" :style="{ opacity: value4 }">
            <h2 class="relative text-white text-5xl w-full leading-relaxed">AppleLikeScroll</h2>
            <p
                class="relative text-white text-[1.2rem]"
            >3. Autism is the fastest-growing developmental disability. According to American CDC, prevalence of autism in the U.S. has increased from 1 in 68 births in 2010 to 1 in 54 births in 2020. And in China the statistic is about 1 in 100 births.</p>
        </section>
        <section class="sect flex-col text-left" :style="{ opacity: value5 }">
            <h2 class="relative text-white text-5xl w-full leading-relaxed">AppleLikeScroll</h2>
            <p
                class="relative text-white text-[1.2rem]"
            >4. Although autism is a biological disorder, it is primarily treated through education and behavioral services, with medication as an important adjunct. However, to date, there is no effective drug to treat ASD.</p>
        </section>-->
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
    min-height: 80vh;
    padding: 50px 100px;
    position: relative;
}
.div {
    position: relative;
    display: inline-block;
}
.text {
    display: inline-block;
}
/* MyNav transition */
.mynav-enter-from,
.mynav-leave-to {
    opacity: 0;
}
.mynav-enter-active,
.mynav-leave-active {
    transition: all 0.4s ease;
}
</style>
