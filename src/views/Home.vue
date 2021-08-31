<template>
    <div class="body bg-[#2070a5]">
        <section class="sect portrait:bg-white" :style="{ opacity: value }">
            <video
                src="/videos/story.mp4"
                autoplay
                muted
                loop
                class="portrait:object-contain landscape:object-cover portrait:scale-150"
            ></video>
        </section>
        <section class="sect flex-col text-left" :style="{ opacity: value2 }">
            <h2 class="relative text-white text-5xl w-full leading-relaxed">AppleLikeScroll</h2>
            <p
                class="relative text-white text-[1.2rem]"
            >1. There are stars twinkling in the distant sky.They are all waiting for their time to drop on the earth.And some of them happened to be trapped in a bottle.And when the trapped one falls into a human’s bosom, the lady becomes his or her dear mother. When they grow up, they find it hard to make friends with other ‘normal’ kids. So the little one stays in his or her own planet. Apart from them, nobody has ever landed on their planets. And nobody can be certain about what their planets are like. Is that lonely? Is that empty ? Nobody knows… And they are what we call ‘Children From the Star’. Professionally speaking, ‘Children with ASDs’.</p>
        </section>
        <section class="sect flex-col text-left" :style="{ opacity: value3 }">
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
        </section>
    </div>
    <MyFooter></MyFooter>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import { useStore } from '../store'
import MyFooter from '../components/MyFooter.vue'

const store = useStore()
store.commit('initCount')
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', navHidden)
    // 防止页面切换之后再切换回来需要滚动一下才能触发状态的修改
    // 我们这边一旦调用切换到该页面立刻调用一次判断状态的函数，保证组件状态的正确
    navHidden()
    handleScroll()
})
onUnmounted(() => {
    window.removeEventListener('scroll', navHidden)
    store.commit('changeCountToOne')
})
let value = $ref(1)
let value2 = $ref(0)
let value3 = $ref(0)
let value4 = $ref(0)
let value5 = $ref(0)
let handleScroll = () => {
    let height = window.innerHeight / 2
    // let scrollY = window.scrollY
    console.log(window.scrollY)

    value = 1 + window.scrollY / -600

    value2 = 0 + (window.scrollY - height) / 300
    // console.log(value2)
    console.log(height)

    value3 = 0 + (window.scrollY - height * 3) / 300
    console.log(value3)

    value4 = 0 + (window.scrollY - height * 5) / 300
    value5 = 0 + (window.scrollY - height * 7) / 300
}
let navHidden = () => {
    if (window.scrollY > window.innerHeight * 0.8) {
        store.commit('changeCountToOne')
    } else {
        store.commit('initCount')
    }
    console.log(store.state.count)
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
</style>
