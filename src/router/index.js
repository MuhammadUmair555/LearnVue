import { createRouter, createWebHistory } from 'vue-router'
import Explore from '../views/Explore.vue'
import Function from '../views/Function.vue'

const routes = [
    {
        path: '/explore',
        name: 'Explore',
        component: Explore
    },
    {
        path: '/function',
        name: 'Function',
        component: Function
    }
]
const router = createRouter({
    history: createWebHistory(proces.env.BASE_URL),
    routes
})

export default router 