import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Members from '../views/Members.vue'
import Modeling from '../views/Modeling.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Members',
        name: 'Members',
        component: Members
    },
    {
        path: '/Modeling',
        name: 'Modeling',
        component: Modeling
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router