<template>
    <!-- 第一区域开始 -->
    <div class="first">
        <div class="bigdiv -first">
            <h1 class="title">Wiki & Art</h1>
            <div class="middlediv">
                <div>
                    <div class="left z-10" @click="turnLeft">
                        <span>&lt;</span>
                    </div>
                    <div class="right z-10" @click="turnRight">
                        <span>&gt;</span>
                    </div>
                </div>
                <ul class="Carousel w-full h-full">
                    <li
                        v-for="(title,i) in titles"
                        :key="title"
                        class="item w-full h-full absolute"
                    >
                        <transition
                            @before-enter="be"
                            @enter="e"
                            @after-enter="ae"
                            @before-leave="bl"
                            @leave="l"
                        >
                            <div v-if="status[i]" class="w-full h-full">
                                <div class="middle" :style="{ backgroundImage: srcs[i] }"></div>
                                <!-- 考虑转变transform动画，把introduction这一段拿出来，用v-for重新渲染一下 -->
                                <div
                                    class="introduction"
                                    @mouseenter="stop"
                                    @mouseleave="initTimer"
                                >
                                    <h6>{{ title }}</h6>
                                    <br />
                                    <p class="content" v-html="articles[i]"></p>
                                </div>
                            </div>
                        </transition>
                    </li>
                </ul>
                <!-- <img src alt /> -->
            </div>
        </div>
    </div>
    <!-- 第一区域结束 -->
</template>

<script lang="ts" setup>
import gsap from 'gsap/all'
import { onMounted, ref } from 'vue'

const props = defineProps({
    titleArray: {
        default: [],
        type: Array,
        required: true,
    },
    articleArray: {
        default: [],
        type: Array,
        required: true,
    },
    srcArray: {
        default: [],
        type: Array,
        required: true,
    }
})
let titles = props.titleArray as string[]
let articles = props.articleArray as string[]
let srcs = props.srcArray as string[]

// 处理切换状态更新
let status = ref([] as boolean[])
let len = titles.length
for (let i = 0; i < len; i++) {
    status.value.push(false)
}
let index = ref(0)
status.value[0] = true
var translateX = ''
var x = 0
let _turnLeft = () => {
    translateX = 'translateX(-100px)'
    x = 100
    status.value[index.value] = false
    if (index.value > 0) {
        index.value -= 1
    } else {
        index.value = len - 1
    }
    status.value[index.value] = true

}
let _turnRight = () => {
    translateX = 'translateX(100px)'
    x = -100
    status.value[index.value] = false
    if (index.value < len - 1) {
        index.value += 1
    } else {
        index.value = 0
    }
    status.value[index.value] = true
}
// 处理动画
let be = (el: Element) => {
    let div = el as HTMLDivElement
    div.style.opacity = '0'
    div.style.transform = translateX
}
let e = (el: Element, done: () => void) => {
    let div = el as HTMLDivElement
    gsap.to(div, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        delay: 0.4,
        onComplete: done
    })
}
let ae = (el: Element) => {
    let div = el as HTMLDivElement
    // 移除transfrom样式，保证z-index在切换后不被破坏(同时也保证了不在切换后自动添加relative定位，但是这里没有用到，这里使用父元素连续w-full, h-full解决了子元素突然定位到没有宽和高的该变换元素上，导致子元素百分比宽高时，突然失去高度和宽度，从而不显示在屏幕上)
    div.style.transform = ""
}
let bl = (el: Element) => {
    let div = el as HTMLDivElement
    div.style.opacity = '1'
    div.style.transform = 'translateX(0)'
}
let l = (el: Element, done: () => void) => {
    let div = el as HTMLDivElement
    gsap.to(div, {
        opacity: 0,
        x: x,
        duration: 0.4,
        onComplete: done
    })
}
// 处理自动切换
var timer = 0
onMounted(() => {
    initTimer()
})
let initTimer = () => {
    timer = window.setInterval(() => {
        _turnRight()
    }, 3000)
}
let timerControl = (func?: () => void) => {
    window.clearInterval(timer)
    if (func !== undefined) {
        func()
        initTimer
    }
}
let stop = () => {
    timerControl()
}
let turnRight = () => {
    timerControl(_turnRight)
}
let turnLeft = () => {
    timerControl(_turnLeft)
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    line-height: 1;
}
/* 第一区域(Members)开始 */
.first {
    background-color: #2070a5;
}

.bigdiv {
    position: relative;
    padding: 50px 100px;
    height: 1030px;
}

.bigdiv .title {
    text-align: left;
    font-size: 82px;
    font-weight: normal;
    color: #fff;
    font-family: "StarLight", "Microsoft YaHei";
    text-shadow: 1px 2px 3px #666;
}

.bigdiv .middlediv {
    position: relative;
    /* background-color: #fff; */
    background-color: #d2cbbf;
    height: calc(100% - 150px);
    border-radius: 50px;
    box-shadow: 1px 1px 5px #666 inset;
    overflow: hidden;
}
/* 按钮处理 */
.left,
.right {
    position: absolute;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 10%;
    text-align: center;
    color: #fff;
    transition: all 0.4s ease;
    cursor: pointer;
    box-shadow: 0 0 2px #666;
}
.left {
    left: 0;
}
.right {
    right: 0;
}
.left span,
.right span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.left:hover,
.right:hover {
    opacity: 1;
}

/* 列表处理 */
/* .bigdiv .Carousel .middle:hover {
    cursor: pointer;
    transform: translate(-50%) scale(1.2);
} */

.bigdiv .Carousel .middle {
    width: 100%;
    height: 100%;
    /* box-shadow: 1px 1px 10px #666 inset; */
    border-radius: 50px;
    overflow: hidden;
    position: absolute;
    background-size: cover;
    background-position: center;
    /* background-size: 100% 100%; */
    transform: translate(-50%);
    left: 50%;
    /* transition: all 0.4s ease; */
    transition: all 0.4s ease;
}
.Carousel::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 1px 1px 10px #666 inset;
    border-radius: 50px;
}

/* .Carousel {
    pointer-events: none;
} */

.bigdiv .Carousel .introduction {
    /* pointer-events: auto; */
    background-color: rgba(0, 0, 0, 1);
    opacity: 0.6;
    position: absolute;
    transform: translate(-50%);
    left: 50%;
    bottom: 0;
    text-align: center;
    width: 100%;
    z-index: 100;
    transition: all 0.4s ease;
    padding: 10px 0;
}
.bigdiv .Carousel .introduction:hover {
    opacity: 0.8;
}

.bigdiv .introduction h6 {
    color: rgb(158, 208, 241);
    font-family: "StarLight";
    font-size: 30px;
}

.bigdiv .introduction p {
    font-family: "Microsoft YaHei";
    font-size: 24px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 1);
}
/* 第一区域(Members)结束 */
</style>
