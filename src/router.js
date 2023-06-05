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
      path: '/function',
      component: () => import('@/views/Function.vue'),
    },
    {
      path: '/explore',
      component: () => import('@/views/Explore.vue'),
    },
  ],
})
