<template>
    <!-- 页脚开始 -->
    <footer>
        <transition @beforeEnter="be" @enter="pe">
            <p v-show="isShow">Thanks to our sponsors!</p>
        </transition>
        <transition-group tag="ul" @beforeEnter="be" @enter="e">
            <li v-for="(link, i) in links" v-show="isShow" :key="link" :data-i="i">
                <a :href="link" target="_blank">
                    <img :src="imgs[i]" />
                </a>
            </li>
        </transition-group>
    </footer>
    <!-- 页脚结束 -->
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
let imgs = ref([
    "https://2021.igem.org/wiki/images/5/50/T--NJMU-China--njmu.gif",
    "https://2021.igem.org/wiki/images/9/9b/T--NJMU-China--bms.png",
    "https://2021.igem.org/wiki/images/3/35/T--NJMU-China--public.png",
    "https://2021.igem.org/wiki/images/a/ab/T--NJMU-China--bmei.png",
    "https://2021.igem.org/wiki/images/f/f0/T--NJMU-China--shengrenyi.png",
    "https://2021.igem.org/wiki/images/b/ba/T--NJMU-China--genscript.png",
    "https://2021.igem.org/wiki/images/f/f8/T--NJMU-China--matlab.png",
])
// 注意 links 里面的内容必须和图片代表的内容一一对应(同一个sponsor的图片和链接在数组里的索引应该是一致的，这样才能保证在读取link的索引来查找对应的img的时候找到正确的对应的图片)
let links = ref([
    "http://www.njmu.edu.cn/",
    "http://jcyxy.njmu.edu.cn/",
    "http://gwxy.njmu.edu.cn/",
    "http://bmei.njmu.edu.cn/",
    "http://www.jsph.org.cn/",
    "https://www.genscript.com/",
    "https://www.mathworks.com/",
])

let isShow = ref(false)
var footer: HTMLElement = null!
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    footer = document.querySelector('footer')!
})
let handleScroll = () => {
    let footerToScreenTopDistance = footer.offsetTop - document.documentElement.scrollTop
    if (footerToScreenTopDistance < window.innerHeight) {
        isShow.value = true
    }
    // console.log(footerToScreenTopDistance)
    // console.log(window.innerHeight)
    // console.log(isShow.value)
}
let be = (el: Element) => {
    let li = el as HTMLLIElement
    li.style.opacity = '0'
    li.style.transform = 'translateY(20px)'
}
let e = (el: Element) => {
    let li = el as HTMLLIElement
    gsap.to(li, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: li.dataset.i as unknown as number * 0.2
    })
}
let pe = (el: Element) => {
    let p = el as HTMLLIElement
    gsap.to(p, {
        opacity: 1,
        y: 0,
        duration: 0.4,
    })
}
</script>

<style scoped>
/* 初始化元素 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

li {
    list-style-type: none;
}
/* li:hover {
    transform: scale(1.2);
    transition: all 0.3s;
} */

a {
    text-decoration: none;
}

footer {
    background-color: rgb(151, 106, 106);
    /* background-color: rgb(201, 230, 245); */
    /* 和ul一样，详见ul */
    min-height: 501px;
}

html {
    overflow-x: hidden;
    overflow-y: auto;
}

img {
    display: inline-block;
    vertical-align: bottom;
}

/* 页脚开始 */
footer {
    position: relative;
    padding: 90px;
    text-align: center;
}

footer p {
    padding: 30px;
    border-top: 2px solid rgb(254, 213, 123);
    color: rgb(252, 179, 23);
    font-size: 30px;
    font-weight: 500;
    cursor: default;
}

footer ul {
    padding: 0 90px;
    /* min-height 由所有图片渲染完成后得出，目的是为了保证在没有渲染图片的时候footer的高度不影响其他的一些布局或者效果 */
    /* 同时也保证了直接滚动到最后的时候，不会因为之前没有渲染出来而卡在进度条之前的底端的部位，也保证了未渲染时进度条不会有太大的变化 */
    /* 这对于制作自制的进度条是很有帮助的，不会出现突然缩短的bug */
    /* 如果修改了图片或其它影响ul高度的东西，请及时修改这一条css属性，保证其他效果或程序(代码块)的兼容性 */
    min-height: 214px;
}

footer li {
    display: inline-block;
    width: 320px;
    height: 75px;
}

footer li img {
    width: 320px;
}

/* 页脚结束 */
</style>
