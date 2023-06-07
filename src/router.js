import { createRouter, createWebHistory } from 'vue-router'
// import Home from '@/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      component: () => import('@/views/Home.vue'),
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
    }
  ],
})
