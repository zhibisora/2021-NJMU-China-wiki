<template>
    <!-- 导航栏开始 -->
    <nav>
        <span>
            <a href="https://2021.igem.org/Team:NJMU-China">
                <img src="https://2021.igem.org/wiki/images/f/ff/T--NJMU-China--ico.jpg" />
            </a>
        </span>
        <ul>
            <li>
                <div>
                    <a href="https://2021.igem.org/Team:NJMU-China">Main</a>
                    <a href="https://2021.igem.org/Team:NJMU-China#Abstract">Abstract</a>
                </div>HOME
            </li>
            <li>
                <div>
                    <a href="https://2021.igem.org/Team:NJMU-China/Description">Description</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/Design">Design</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/Safety">Safety</a>
                    <a
                        href="https://2021.igem.org/Team:NJMU-China/Proof_Of_Concept"
                    >Proof of concept</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/Implementation">Implementation</a>
                </div>PROJECT
            </li>
            <li>
                <div>
                    <a href="https://2021.igem.org/Team:NJMU-China/Results">Results</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/Experiments">Experiment protocol</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/Notebook">NoteBook</a>
                </div>EXPERIMENTS
            </li>
            <li>
                <div>
                    <a href="https://2021.igem.org/Team:NJMU-China/Parts">Parts</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/Contribution">Contribution</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/Engineering">Engineering Success</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/Improve">Improve</a>
                </div>PARTS
            </li>
            <li>
                <div>
                    <a
                        href="https://2021.igem.org/Team:NJMU-China/Model#Data-collection"
                    >Data collection</a>
                    <a
                        href="https://2021.igem.org/Team:NJMU-China/Model#Data-analysis"
                    >Data analysis</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/Model#Method">Method</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/Model#Introduction">Introduction</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/Model#Results">Results</a>
                </div>MODEL
            </li>
            <li>
                <div>
                    <a
                        href="https://2021.igem.org/Team:NJMU-China/Human_Practices"
                    >Integrated Human Practices</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/Partnership">Partnership</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/Collaborations">Collaboration</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/Communication">Communication</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/Education">Education</a>
                    <a
                        href="https://2021.igem.org/Team:NJMU-China/Entrepreneurship"
                    >Entrepreneurship</a>
                    <a
                        href="https://2021.igem.org/Team:NJMU-China/Excellence in another area"
                    >Excellence in another area</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/poster">Poster</a>
                </div>HUMAN PRACTICE
            </li>
            <li>
                <div>
                    <a href="https://2021.igem.org/Team:NJMU-China/Members">Members</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/Team">Team</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/Attributions">Attributions</a>
                </div>TEAM
            </li>
            <li>
                <div>
                    <a href="https://2021.igem.org/Team:NJMU-China/Inclusivity">Inclusivity</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/Sustainability">Sustainability</a>
                </div>AWARDS
            </li>
            <li>
                <div>
                    <a href="https://2021.igem.org/Team:NJMU-China/Judging">Judging</a>
                    <a href="https://2021.igem.org/Team:NJMU-China/Judging Form">Judging Form</a>
                </div>JUDGING
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
    --height: calc(1.3vw + 4vh);
    position: relative;
    position: fixed;
    width: 100vw;
    height: var(--height);
    padding-left: 1vh;
    background-color: #0f354ef3;
    /* background-color: rgb(91, 189, 254); */
    /* border-bottom: 2px solid rgb(254, 213, 123); */
    /* box-shadow: 0px 2px 5px #555; */
    /* box-shadow: 0px 2px 2px rgb(121, 121, 121); */
    z-index: 9998;
    transition: all 0.4s ease;
    /* overflow: hidden; */
}
nav:hover {
    background-color: #0f354e;
}

/* 设置导航栏中头像框样式 */
nav span {
    position: relative;
    /* width: 55px;
    height: 55px; */
    width: calc(1.2 * var(--height));
    height: calc(1.2 * var(--height));
    float: left;
    margin-top: 1vh;
    margin-left: 1.2vw;
    margin-right: 0.8vw;
    border-radius: 50%;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0px 2px 5px #666;
}

nav span img {
    position: absolute;
    transform: scale(1.7) translate(1.1px, 1.6px);
    width: calc(1.2 * var(--height));
    height: calc(1.2 * var(--height));
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
nav ul {
    /* 定位 */
    position: relative;
    top: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
}

nav li {
    /* 定位 */
    position: relative;
    /* 大小形状颜色 */
    height: var(--height);
    padding: 1vh calc(0.7vw + 1vh);
    /* 字体 */
    font-size: calc(0.7vw + 2vh);
    white-space: nowrap;
    color: #fff;
    /* font-family: "StarLight"; */
    font-family: "Microsoft YaHei";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 2px 3px #666;
    /* 鼠标默认 */
    cursor: default;
    display: flex;
    flex-direction: column;
    align-items: center;
}
@media screen and (max-aspect-ratio: 1280/800) {
    /* nav ul {
        display: none;
    } */
    nav li {
        font-size: calc(0.7vw + 1vh);
        height: calc(1.3vw + 4vh);
    }
}
nav li:hover {
    color: rgb(254, 213, 123);
}

nav li:hover::after {
    border-right: 5px solid rgb(254, 213, 123);
    border-bottom: 5px solid rgb(254, 213, 123);
}

nav li:hover div {
    display: flex;
    animation: unfold 0.3s forwards;
}

nav div {
    /* max-width: 30px; */
    position: absolute;
    top: calc(1.3vw + 4vh);
    max-height: 30px;
    /* border-radius: 15px; */
    border-radius: 0 0 8px 8px;
    /* background-color: rgb(130, 207, 255); */
    background-color: #0f354e;
    box-shadow: 0px 4px 8px 0px rgb(0, 0, 0, 0.2);
    display: none;
    overflow: hidden;
    flex-direction: column;
}

@keyframes unfold {
    to {
        max-width: 300px;
        max-height: 800px;
    }
}

nav div a {
    position: relative;
    padding: 1.5vh 1vw;
    font-size: 1.3vw;
    font-weight: 500;
    color: #fff;
    white-space: nowrap;
    transition: all;
    z-index: 1;
}

nav div a::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* opacity: 0; */
    transform-origin: 0 50%;
    transform: scaleX(0);
    /* transition: all 0.3s ease-out; */
    /* background: linear-gradient(to right, #eb3349, #f45c43); */
    background: linear-gradient(to right, rgb(36, 158, 240), rgb(74, 203, 235));
}
nav div a:hover::before {
    transform: scaleX(1);
    /* opacity: 1; */
}

/* 使用zero占位，去除nav定位设置为fixed后的影响 */
.zero {
    height: calc(1.3vw + 4vh);
    background-color: #2070a5;
}

/* 导航栏结束 */
</style>
