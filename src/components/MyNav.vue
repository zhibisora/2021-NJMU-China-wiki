<template>
    <!-- 导航栏开始 -->
    <nav>
        <span>
            <a href="https://2021.igem.org/Team:NJMU-China">
                <img src="/images/ico.jpg" />
            </a>
        </span>
        <ul>
            <li>
                <div>
                    <a href="https://2021.igem.org/Team:NJMU-China">Background</a>
                    <!-- <a href="#">Description</a> -->
                    <a href="#">Design</a>
                </div>Project
            </li>
            <li>
                <div>
                    <a href="#">Experiment</a>
                    <a href="#">Safety</a>
                    <a href="#">Contribution</a>
                </div>Laboratory
            </li>
            <li>
                <div>
                    <a href="#">Parts Overview</a>
                    <a href="#">Basic Part</a>
                </div>Parts
            </li>
            <li>
                <div>
                    <a href="https://2021.igem.org/Team:NJMU-China/Modeling">Data collection</a>
                    <a href="#">Data analysis</a>
                    <a href="#">Method</a>
                    <a href="#">Introduction</a>
                    <a href="#">Results</a>
                </div>Modeling
            </li>
            <li>
                <div>
                    <a href="#">Summary</a>
                    <a href="#">Survey</a>
                    <a href="#">Collaboration</a>
                    <a href="#">Education</a>
                </div>Human Practice
            </li>
            <li>
                <div>
                    <a href="https://2021.igem.org/Team:NJMU-China/Members">Members</a>
                    <a href="#">Attributions</a>
                    <a href="#">Call(?)</a>
                </div>Our Team
            </li>
            <li>
                <div>
                    <a href="#">Judging from</a>
                </div>Judging From
            </li>
        </ul>
    </nav>
    <div class="zero"></div>
    <!-- 导航栏结束 -->
</template>

<script lang="ts" setup>

</script>

<style scoped>
@font-face {
    font-family: "StarLight";
    src: url("https://2021.igem.org/wiki/images/f/fd/T--NJMU-China--StarLight.ttf");
}

/* 初始化元素 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

li {
    list-style-type: none;
}

a {
    text-decoration: none;
}

body {
    background-color: rgb(151, 106, 106);
    /* background-color: rgb(201, 230, 245); */
}

html {
    overflow-x: hidden;
    overflow-y: auto;
}

img {
    max-width: none;
}

/* 导航栏设置开始 */

/* 设置导航栏样式 */
nav {
    position: relative;
    position: fixed;
    width: 100vw;
    height: 75px;
    padding: 10px;
    background-color: #0f354ef3;
    /* background-color: rgb(91, 189, 254); */
    /* border-bottom: 2px solid rgb(254, 213, 123); */
    box-shadow: 0px 2px 5px #555;
    z-index: 1000000;
    transition: all 0.4s ease;
}
nav:hover {
    background-color: #0f354e;
}

/* 设置导航栏中头像框样式 */
nav span {
    position: relative;
    width: 55px;
    height: 55px;
    float: left;
    margin-left: 30px;
    margin-right: 30px;
    border-radius: 50%;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0px 2px 5px #666;
}

nav span img {
    position: absolute;
    top: -16px;
    left: -16px;
    width: 92px;
    height: 92px;
    object-fit: cover;
    border-radius: 50%;
}

/* 添加箭头符号
nav li::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 19px;
    transform: translateY(-75%) rotate(45deg);
    border: 5px solid transparent;
    border-right: 5px solid #fff;
    border-bottom: 5px solid #fff;
} */

/* 设置导航栏中各选项属性 */
nav li {
    /* 定位 */
    position: relative;
    float: left;
    /* 大小形状颜色 */
    padding: 12px 19px;
    padding-right: 43px;
    border-radius: 28px;
    /* 字体 */
    font-size: 25px;
    color: #fff;
    /* font-family: "StarLight"; */
    font-family: "Microsoft YaHei";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 2px 3px #666;
    /* 鼠标默认 */
    cursor: default;
}

nav li:hover {
    color: rgb(254, 213, 123);
}

nav li:hover::after {
    border-right: 5px solid rgb(254, 213, 123);
    border-bottom: 5px solid rgb(254, 213, 123);
}

nav li:hover div {
    display: block;
    animation: unfold 0.3s forwards;
}

nav div {
    display: inline-block;
    position: absolute;
    top: 50px;
    left: 7px;
    /* max-width: 30px; */
    max-height: 30px;
    border-radius: 15px;
    background-color: rgb(130, 207, 255);
    box-shadow: 0px 8px 16px 0px rgb(0, 0, 0, 0.2);
    display: none;
    overflow: hidden;
}

@keyframes unfold {
    to {
        max-width: 160px;
        max-height: 220px;
    }
}

nav div a {
    display: block;
    padding: 15px;
    border-radius: 15px;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    white-space: nowrap;
}

nav div a:hover {
    background-color: rgb(39, 162, 233);
}

/* 使用zero占位，去除nav定位设置为fixed后的影响 */
.zero {
    height: 75px;
    background-color: #2070a5;
}

/* 导航栏结束 */
</style>
