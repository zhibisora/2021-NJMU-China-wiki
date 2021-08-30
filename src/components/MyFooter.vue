<template>
    <!-- 页脚开始 -->
    <footer>
        <p>Thanks to our sponsors!</p>
        <transition-group tag="ul" appear>
            <li>
                <a href="http://www.njmu.edu.cn/" target="_blank">
                    <img src="/images/T--NJMU-China--njmu.gif" />
                </a>
            </li>
            <li>
                <a href="http://jcyxy.njmu.edu.cn/" target="_blank">
                    <img src="/images/T--NJMU-China--bms.png" />
                </a>
            </li>
            <li>
                <a href="http://gwxy.njmu.edu.cn/" target="_blank">
                    <img src="/images/T--NJMU-China--public.png" />
                </a>
            </li>
            <li>
                <a href="http://bmei.njmu.edu.cn/" target="_blank">
                    <img src="/images/T--NJMU-China--bmei.png" />
                </a>
            </li>
            <li>
                <a href="http://www.jsph.org.cn/" target="_blank">
                    <img src="/images/T--NJMU-China--shengrenyi.png" />
                </a>
            </li>
            <li>
                <a href="https://www.genscript.com/" target="_blank">
                    <img src="/images/T--NJMU-China--genscript.png" />
                </a>
            </li>
            <li>
                <a href="https://www.mathworks.com/" target="_blank">
                    <img src="/images/T--NJMU-China--matlab.png" />
                </a>
            </li>
        </transition-group>
    </footer>
    <!-- 页脚结束 -->
</template>

<script lang="ts" setup>
let imgs = $ref([
    "/images/T--NJMU-China--genscript.png",
    "/images/T--NJMU-China--shengrenyi.png",
    "/images/T--NJMU-China--bmei.png",
    "/images/T--NJMU-China--public.png",
    "/images/T--NJMU-China--bms.png",
    "/images/T--NJMU-China--njmu.gif",
    "/images/T--NJMU-China--matlab.png",
])
let links = $ref([
    "http://www.jsph.org.cn/",
    "https://www.genscript.com/",
    "https://www.mathworks.com/",
])
// 预加载实验失败
// import { onMounted } from 'vue'
// onMounted(() => {
//     let count = 0
//     let imgs = [
//         "/images/T--NJMU-China--matlab.png",
//         "/images/T--NJMU-China--genscript.png",
//         "/images/T--NJMU-China--snap.png",
//         "/images/T--NJMU-China--shengrenyi.png",
//         "/images/T--NJMU-China--bmei.png",
//         "/images/T--NJMU-China--public.png",
//         "/images/T--NJMU-China--bms.png",
//         "/images/T--NJMU-China--njmu.gif"
//     ]
//     for (let img of imgs) {
//         let image = new Image()
//         image.src = img
//         image.onload = () => {
//             count++
//             console.log(count)
//         }
//     }
// })
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
}

footer ul {
    padding: 0 90px;
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
