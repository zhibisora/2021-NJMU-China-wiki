<template>
    <MyNav></MyNav>
    <div class="init">
        <Member2 :title-array="titleArray1" :article-array="articleArray1" :src-array="srcArray1"></Member2>
        <Member2 :title-array="titleArray2" :article-array="articleArray2" :src-array="srcArray2"></Member2>
        <Member2 :title-array="titleArray3" :article-array="articleArray3" :src-array="srcArray3"></Member2>
        <Member2 :title-array="titleArray4" :article-array="articleArray4" :src-array="srcArray4"></Member2>
        <Member2 :title-array="titleArray5" :article-array="articleArray5" :src-array="srcArray5"></Member2>
        <Member2 :title-array="titleArray6" :article-array="articleArray6" :src-array="srcArray6"></Member2>
        <Member2 :title-array="titleArray7" :article-array="articleArray7" :src-array="srcArray7"></Member2>
    </div>
    <MyFooter></MyFooter>
</template>

<script lang="ts" setup>
import MyFooter from "../components/MyFooter.vue"
import MyNav from "../components/MyNav.vue"
import Member2 from "../components/Member2.vue"
import { ref } from 'vue'

// PI
let titleArray1 = ref([
    "Zhibin Hu",
    "Ran Huo",
    "Chuan Su",
    "Li Yuan",
    "Xingyin Liu",
])
let articleArray1 = ref([
    "Zhibin Hu, doctor, professor, doctoral supervisor. Now he is the president of Nanjing Medical University and director of State Key Laboratory of reproductive medicine of Nanjing Medical University. His main research direction is molecular mechanism and genetic epidemiology of reproductive related diseases. He guides the work of iGEM team from the general direction and provides the most fundamental ideas.",
    "Ran Huo is currently a professor, doctoral supervisor and deputy director of the State Key Laboratory of reproductive medicine of Nanjing Medical University. In recent years, she mainly focus on the functional research of oocyte expression protein and its correlation with clinical female reproductive disorders.",
    "Chuan Su, Prof, M.D., Ph.D., is the dean of School of Basic Medicial Sciences and the director of the Key Laboratory of Pathogenic Biology of Jiangsu Province, mainly engaged in research work related to the regulation of infection immune response. He guided our specific experimental process, and explained the attention points of the project in detail.",
    "Li Yuan is a professor and master supervisor. In 2002, she received a doctor's degree in biochemistry and molecular biology from Sun Yat sen University. In the same year, she joined the Department of Biochemistry and molecular biology of Nanjing Medical University. At present, Xenopus laevis is mainly used as a model animal to study the molecular mechanism of organ development.",
    "Professor Xingyin Liu is a doctoral supervisor in the School of Basic Medicine Science at Nanjing Medical University. Her researches mainly focus on gut-microbiota-brain axis in Autism disease and investigating bacteria activity linking to pathogenesis of Autism disease. Professor Liu has provided us with the laboratory, full support and supervision on our project, especially for the research direction, the engineered bacterial experiment and public welfare activities for Autism family. She is a key member of our consultant team.",
])
let srcArray1 = ref([
    // "url(/Team:NJMU-China/images/Members/照片/Zhibin Hu.jpg)",
    // "url(/Team:NJMU-China/images/Members/照片/Ran Huo.jpg)",
    // "url(/Team:NJMU-China/images/Members/照片/Chuan Su.jpg)",
    // "url(/Team:NJMU-China/images/Members/照片/Li Yuan.jpg)",
    // "url(/Team:NJMU-China/images/Members/照片/Xingyin Liu.jpg)",
])


// Leaders
let titleArray2 = ref([
    "Xuanwei Jiang",
    "Qinwen Wang",
    "Shuyu Wang",
])
let articleArray2 = ref([
    "I am Xuanwei Jiang from the School of Public Health of Nanjing Medical University. A boring tech enthusiast keeps staying hungry and staying foolish.",
    "Qinwen Wang, a student of basic medicine from NJMU, join in iGEM as the leader of the experimental group. I am passionate about the essense of life, both biologically and philosophically. And I am also interested in classical music and fine arts. I am willing to dedicate my life into something meaningful.",
    // "",
])
let srcArray2 = ref([
    "url(https://2021.igem.org/wiki/images/8/89/T--NJMU-China--姜璇玮.jpg)",
    "url(https://2021.igem.org/wiki/images/b/bc/T--NJMU-China--王沁雯.jpg)",
    // "url(/Team:NJMU-China/images/Members/照片/王舒宇.jpg)",
])


// Lab
let titleArray3 = ref([
    "Shaoyang Ni",
    "Xiao Zhang",
    "Qihan Fan",
    "Xiaoyu Yin",
    "Yifan Gu",
    "Yu Peng",
])
let articleArray3 = ref([
    "Shaoyang Ni from the School of Basic Medical Sciences of Nanjing Medical University. I am 20 years old and I am in the experimental group of the iGEM team at Nanjing Medical University. My hobbies are basketball and swimming. I am currently studying in rotation at the State Key Laboratory of Reproductive Medicine, and I have a strong interest in scientific research.",
    "Hello, my name is Xiao Zhang, from the School of Public Health, Nanjing Medical University. I am a wild native space guard who loves eating rice noodles and photography, and dreams of opening a village home stay.",
    "Hello, I'm Qihan Fan from the school of public health, Nanjing Medical University. I'm a foodie who loves two dimensions. I'm also a rookie who is striving to make progress in my studies. I hope that the experience of participating in iGEM can become an unforgettable memory in my life.",
    "Hello everyone, I am Xiaoyu Yin, from the First Clinical Medical College of Nanjing Medical University. I participate in the work of the experimental group. So I feel honored to have the opportunity to grow together with so many outstanding iGEMers, and to complete this competition from invisibility to visibility. I believe we will eventually get it.",
    "I’m Yifan Gu, a student of basic medicine from NJMU. I'm a member of the experimental group. I am passionate about experiments and like to use experiments to verify my ideas. I hope I can become a pure scientific research person.",
    "Yu Peng, a student of basic medicine from NJMU, join in iGEM as a member of the experimental group. Being a cranky/sentimental/innocent person, I hope to use my hard work, patience and courage to do something vital.",
])
let srcArray3 = ref([
    "url(https://2021.igem.org/wiki/images/9/97/T--NJMU-China--倪绍洋.jpg)",
    "url(https://2021.igem.org/wiki/images/1/1e/T--NJMU-China--张晓.jpg)",
    "url(https://2021.igem.org/wiki/images/4/47/T--NJMU-China--范启涵.jpg)",
    // "url(/Team:NJMU-China/images/Members/照片/Xiaoyu Yin.jpg)",
    "url(https://2021.igem.org/wiki/images/5/50/T--NJMU-China--顾一凡.jpg)",
    "url(https://2021.igem.org/wiki/images/5/5c/T--NJMU-China--彭煜.jpg)",
])


// Models
let titleArray4 = ref([
    "Zhongyu Zou",
    "Yicheng Ma",
    "Pengcheng Wang",
    "Yinxi Zhu",
])
let articleArray4 = ref([
    "Hello, everyone! My name is Zhongyu Zou! I am a member of the modeling group of NJMU-iGEM team, and an emerging research rookie with a wide range of interests.",
    "Hello! I’m Yicheng Ma from NanJing Medical University in China, majoring in Bioinformatics in the school of Biomedical Engineering and Information. It is my great honor to participate in this iGEM competition. As a Bioinformatics student, I was mainly responsible for solving the mathematical modeling part and do some bioanalysis. Through this competition, I hope to learn a lot of cutting-edge knowledge, master a variety of skills, and meet excellent students.At the same time, I am confident of a good result.",
    "Hello,everyone! My name is Pengcheng Wang, a sophomore from school of  Biomedical Engineering and information, NanJing Medical University. In this iGEM competition, I was mainly responsible for the modeling work. I hope that in this competition, I can constantly improve myself and contribute my own strength to our team.",
    "I am Yinxi Zhu from Nanjing Medical University. A junior student major in Basic Medicine. Full of curiosity about the mysteries of life. So glad to be iGEMer and participate in the project which can change the world.",
])
let srcArray4 = ref([
    "url(https://2021.igem.org/wiki/images/1/12/T--NJMU-China--邹仲宇.jpg)",
    "url(https://2021.igem.org/wiki/images/9/98/T--NJMU-China--马轶成.jpg)",
    "url(https://2021.igem.org/wiki/images/6/6b/T--NJMU-China--王鹏程.jpg)",
    "url(https://2021.igem.org/wiki/images/1/1b/T--NJMU-China--朱迎禧.jpg)",
])


// HP
let titleArray5 = ref([
    "Feng Jiang",
    "Hanxiao Hua",
    "Zidi Ning",
    "Yanqing Yan",
])
let articleArray5 = ref([
    "I'm Feng Jiang from the first clinical medical college of Nanjing Medical University. Although we haven't found out when we don't have to struggle, I believe that people should strive for happiness. I love human beings and am willing to learn for our happiness.",
    "Hanxiao Hua , a sophomore student in Nanjing Medical University, is a member of HP group. As a clinical medicine student, she often hangs out in the public health laboratory instead. She’s a nightbird, by staying up late and getting up early in exchange for the longterm stay together with the cell room. She like drawing and badminton, behave poorly but play addictedly.",
    "Hello, I'm Ning Zidi from the school of basic medicine, Nanjing Medical University. I have a wide range of interests and am willing to try new things. In the face of scientific research, I am serious and rigorous, and constantly explore. I am concerned about autism, and join in related volunteer services, hoping to help autistic children and families through my own efforts in scientific research and volunteer work.",
    "Hello!hello!I am Yanqing Yan, major in basic medicine and HP group. I like to think about all kinds of strange questions. I am new here and looking forward to making more friends.",
])
let srcArray5 = ref([
    "url(https://2021.igem.org/wiki/images/1/1a/T--NJMU-China--蒋枫.jpg)",
    // "url(/Team:NJMU-China/images/Members/照片/花含笑.jpg)",
    // "url(/Team:NJMU-China/images/Members/照片/宁子迪.jpg)",
    "url(https://2021.igem.org/wiki/images/e/ec/T--NJMU-China--严彦青.jpg)",
])


// Wiki & Art
let titleArray6 = ref([
    "Weiyu Yuan",
    "Chengxi Jin",
    "Na Shen",
    "Zhengyang Zhu",
])
let articleArray6 = ref([
    "Hello, I am Yuan Weiyu<br />from Nanjing Medical University,<br />responsible for art designing in our team.<br />An amateur artist, a future dentist.",
    "My name is Chenxi Jin.<br />I am from the school of Biomedical Engineering and information,<br />Medical University,majoring in bioinformatics. I worked in the 2021 NJMU-iGEM team<br />As a newcomer to the iGEMer family, I am very happy to participate in the iGEM competition in 2021.<br />In my daily life, I like to study some theories and technologies.<br />And also, I always develop some strange little programs in the dormitory,<br />or study some knowledge in other fields.",
    'Hello, my name is Na Shen,<br />from the school of basic medicine<br />sciences of Nanjing Medical University.<br />I love all interesting new things,<br />like to try new things, like<br />to laugh and love life',
    'I am Zhu Zhengyang,<br />studying forensic medicine at the School of<br />Basic Medical Sciences, Nanjing Medical University.<br />Currently working as an artist in the web team,<br />participating in the production of games,<br />writing lyrics and arranging music.'
])
let srcArray6 = ref([
    "url(https://2021.igem.org/wiki/images/b/bf/T--NJMU-China--袁玮煜.jpg)",
    "url(https://2021.igem.org/wiki/images/1/11/T--NJMU-China--金晨曦.jpg)",
    "url(https://2021.igem.org/wiki/images/b/b5/T--NJMU-China--沈娜.jpg)",
    "url(https://2021.igem.org/wiki/images/9/92/T--NJMU-China--朱政扬.jpg)",
])


// Other members
let titleArray7 = ref([
    "Yongkai Yu",
    "Jiani Ji",
    "Yuhang Yang",
    "Xinyuan Wang",
    "Qianyue Yang",
])
let articleArray7 = ref([
    "Hi, guys! I’m Neil from Nanjing Medical University. I’m now majoring in clinical medicine at First clinical medical college. As a medical student, I have a strong interest in biochemistry which is the basis of life science. Despite heavy study pressure, I spend part of my time doing scientific research out of my curiosity of unknown. Join IGEM, you will find a group of fellows sharing the same hobby with you. Last but not the least, I love the big family!",
    "Hello, everybody! I'm Ji Jiani from the First School of Clinical Medicine of Nanjing Medical University. I’m a sophomore majoring in clinical medicine. I enjoy encountering everything beautiful and iridescent and recording them with my camera, such as the ethereal meteor shower in the starry night. I am also a big fan of bands and I like playing the guitar and the piano.",
    "Hello,I’m Yuhang Yang, from The Second Clinical Medical School of Nanjing Medical University.I am interested in everything that is unknown and chanllenging.In my spare time, I like watch the star and go hiking.",
    "Hello,eveeybody!My name is Wang Xinyuan. I love sports and music, and I am willing to try new things. I am very happy to meet these excellent people in iGEM club, and I hope I can meet better myself in the coming days too!",
    'Rising sophomore. Majoring in pediatrics. Read, do chores, learn, love, make art, work out, pick up languages and play couple of traditional musical instruments unprofessionally. Thus unsurprisingly a quiet, boring book lover, a part-time housegirl-of-the-family, an sincere yet unsuccessful seeker of knowledge, an occasional romantic, a lazy sketcher, a weekend warrior, a multi-linguist and a music enthusiast. And a social phobic. "Diversity is essential to happiness..."',
])
let srcArray7 = ref([
    // "url(/Team:NJMU-China/images/Members/照片/Yongkai Yu.jpg)",
    "url(https://2021.igem.org/wiki/images/c/c8/T--NJMU-China--季佳妮.jpg)",
    // "url(/Team:NJMU-China/images/Members/照片/Yuhang Yang.jpg)",
    "url(https://2021.igem.org/wiki/images/3/35/T--NJMU-China--王信元.jpg)",
    "url(https://2021.igem.org/wiki/images/a/a4/T--NJMU-China--杨千月.jpg)",
])
</script>

<style scoped>
</style>
