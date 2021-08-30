<template>
    <!-- 第一区域开始 -->
    <div class="first">
        <div class="bigdiv -first">
            <h1 class="title">Wiki & Art</h1>
            <div class="middlediv">
                <img class="leftarrow" src="/images/Members/left-arrow.jpg" alt />
                <img class="rightarrow" src="/images/Members/right-arrow.jpg" alt />
                <div class="Carousel">
                    <div
                        @animationend="animStatus = 1"
                        @click="changeAnim(1)"
                        class="left"
                        :class="{
                            todisappear: status == 1,
                            toappear: status == 2,
                            tobig: status == 3,
                            tosmall: status == 4,
                            canHover: animStatus == 1
                        }"
                        :style="{ 'backgroundImage': srcArray[0] }"
                    ></div>
                    <div
                        @click="changeAnim(2)"
                        class="middle"
                        :class="{
                            tosmall: status == 1,
                            todisappear: status == 2,
                            toappear: status == 3,
                            tobig: status == 4,
                        }"
                        :style="{ backgroundImage: srcArray[1] }"
                    ></div>
                    <div
                        @click="changeAnim(3)"
                        class="right"
                        :class="{
                            tobig: status == 1,
                            tosmall: status == 2,
                            todisappear: status == 3,
                            toappear: status == 4,
                        }"
                        :style="{ backgroundImage: srcArray[2] }"
                    ></div>
                    <div
                        @click="changeAnim(4)"
                        class="invisible_"
                        :class="{
                            toappear: status == 1,
                            tobig: status == 2,
                            tosmall: status == 3,
                            todisappear: status == 4,
                        }"
                    ></div>
                    <div
                        class="introduction"
                        :class="{
                            'text-appear': status == 2 || status == 4,
                            'text-disappear': status == 1 || status == 3,
                        }"
                    >
                        <h6>{{ titleArray[lazyStatus] }}</h6>
                        <br />
                        <p class="content" v-html="articleArray[lazyStatus]"></p>
                    </div>
                    <div
                        class="introduction2"
                        :class="{
                            'text-appear': status == 1 || status == 3,
                            'text-disappear': status == 2 || status == 4,
                        }"
                    >
                        <h6>{{ titleArray[lazyStatus] }}</h6>
                        <br />
                        <p class="content" v-html="articleArray[lazyStatus]"></p>
                    </div>
                </div>
                <img src alt />
            </div>
        </div>
    </div>
    <!-- 第一区域结束 -->
</template>

<script lang="ts" setup>
import { onMounted } from '@vue/runtime-core'

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

let animStatus = $ref(0)
let status = $ref(0)
let lazyStatus = $ref(0)
let changeAnim = (index: number) => {
    console.log("click")

    clearInterval(timer)
    change(index)
    timer = window.setInterval(() => {
        change(0)
    }, 2500)
}

let change = (index: number) => {
    // if (index == 1 && status == 1 || status == 4) {
    //     status--
    // } else {
    //     status++
    // }
    animStatus = 0
    status++
    if (status > 4) {
        status = 1
    }

    let temp = status
    window.setTimeout(() => {
        console.log(temp)

        lazyStatus = temp
    }, 500)
}

var timer: number = null!
onMounted(() => {
    timer = window.setInterval(() => {
        change(0)
    }, 2500)
})
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
    background-color: #fff;
    height: calc(100% - 150px);
    border-radius: 50px;
    box-shadow: 1px 1px 5px #666 inset;
    overflow: hidden;
}

.bigdiv .middlediv .leftarrow {
    position: absolute;
    width: 250px;
    height: 250px;
    left: 100px;
    top: 50px;
}

.bigdiv .middlediv .rightarrow {
    position: absolute;
    width: 250px;
    height: 250px;
    right: 100px;
    top: 50px;
}

.bigdiv .Carousel .left:hover,
.bigdiv .Carousel .middle:hover,
.bigdiv .Carousel .right:hover,
.bigdiv .Carousel .invisible_:hover {
    cursor: pointer;
}

.bigdiv .Carousel .left,
.bigdiv .Carousel .right {
    width: 300px;
    height: 200px;
    box-shadow: 1px 1px 10px #666 inset;
    border-radius: 20px;
    overflow: hidden;
    position: absolute;
    top: 300px;
}

.bigdiv .Carousel .middle {
    width: 450px;
    height: 300px;
    box-shadow: 1px 1px 10px #666 inset;
    border-radius: 30px;
    overflow: hidden;
    position: absolute;
    top: 100px;
}

.bigdiv .Carousel .left {
    background: url(/images/Members/照片/朱政扬.jpg);
    background-size: 100% 100%;
    left: 6.7%;
}

.bigdiv .Carousel .middle {
    background: url(/images/Members/照片/袁玮煜.jpg);
    background-size: 100% 100%;
    transform: translate(-50%);
    left: 50%;
}

.bigdiv .Carousel .right {
    background: url(/images/Members/照片/金晨曦.jpg);
    background-size: 100% 100%;
    left: calc(93.3% - 300px);
}

.bigdiv .Carousel .invisible_ {
    background: url(/images/Members/照片/沈娜.jpg);
    background-size: 100% 100%;
    left: 100%;
    width: 0;
    height: 0;
    box-shadow: 1px 1px 10px #666 inset;
    border-radius: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
}

.bigdiv .Carousel .introduction,
.bigdiv .Carousel .introduction2 {
    position: absolute;
    transform: translate(-50%);
    left: 50%;
    top: 450px;
    font-family: "StarLight", "Microsoft YaHei";
    text-align: center;
    width: 1200px;
}

.bigdiv .introduction h6,
.bigdiv .introduction2 h6 {
    color: rgb(2, 123, 206);
    font-size: 30px;
}

.bigdiv .introduction p,
.bigdiv .introduction2 p {
    font-family: "Microsoft YaHei";
    font-size: 24px;
    line-height: 1.5;
}

.bigdiv .Carousel .introduction2 {
    opacity: 0;
}

.todisappear {
    /* 名称 持续时间 曲线 延时 播放次数 是否反向 */
    animation: todisappear 1s ease 0s 1 normal forwards;
}

.tosmall {
    /* 名称 持续时间 曲线 延时 播放次数 是否反向 */
    animation: tosmall 1s ease 0s 1 normal forwards;
}

.tobig {
    /* 名称 持续时间 曲线 延时 播放次数 是否反向 */
    animation: tobig 1s ease 0s 1 normal forwards;
}

.toappear {
    /* 名称 持续时间 曲线 延时 播放次数 是否反向 */
    animation: toappear 1s ease 0s 1 normal forwards;
}

/* .tobig.canHover:hover {
    
} */

@keyframes todisappear {
    from {
        width: 300px;
        height: 200px;
        border-radius: 20px;
        top: 300px;
        transform: translate(0%);
        left: 6.7%;
        opacity: 0.9;
    }

    to {
        width: 150px;
        height: 100px;
        border-radius: 10px;
        top: 750px;
        transform: translate(0%);
        left: -200px;
        opacity: 0;
    }
}

@keyframes tosmall {
    from {
        left: 50%;
        width: 450px;
        height: 300px;
        border-radius: 30px;
        top: 100px;
        transform: translate(-50%) scale(1.2);
    }

    to {
        width: 300px;
        height: 200px;
        border-radius: 20px;
        top: 300px;
        transform: translate(0%);
        left: 6.7%;
        opacity: 0.9;
    }
}

@keyframes tobig {
    from {
        width: 300px;
        height: 200px;
        border-radius: 20px;
        top: 300px;
        transform: translate(0%);
        left: calc(93.3% - 300px);
        opacity: 0.9;
    }

    to {
        left: 50%;
        width: 450px;
        /* width: 600px; */
        height: 300px;
        /* height: 400px; */
        border-radius: 30px;
        top: 100px;
        /* top: 50px; */
        transform: translate(-50%) scale(1.2);
    }
}

@keyframes toappear {
    from {
        width: 150px;
        height: 100px;
        border-radius: 10px;
        top: 750px;
        transform: translate(0%);
        left: calc(100% + 200px);
        opacity: 0;
    }

    to {
        width: 300px;
        height: 200px;
        border-radius: 20px;
        top: 300px;
        transform: translate(0%);
        left: calc(93.3% - 300px);
        opacity: 0.9;
    }
}

.text-disappear {
    /* 名称 持续时间 曲线 延时 播放次数 是否反向 */
    animation: text-disappear 0.5s ease-in 0s 1 normal forwards;
}

.text-appear {
    /* 名称 持续时间 曲线 延时 播放次数 是否反向 */
    animation: text-appear 0.5s ease-out 0.5s 1 normal both;
    z-index: 1;
}

@keyframes text-disappear {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

@keyframes text-appear {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

/* .content {
    white-space: pre-line;
    display: inline-block;
    font-size: 24px;
    font-family: "Microsoft YaHei";
    line-height: 32px;
} */

/* 第一区域(Members)结束 */
</style>
