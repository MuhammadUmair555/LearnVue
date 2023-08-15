import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/portfolio',
      component: () => import('@/views/Portfolio.vue'),
    },
    {
      path: '/services',
      component: () => import('@/views/Services.vue')
    },
    {
      path: '/contact',
      component: () => import('@/views/Contact.vue')
    }
  ],
})
