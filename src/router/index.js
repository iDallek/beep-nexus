import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/relatorios/perfomance-auditorias',
      name: 'PerfomanceAudits',
      component: () => import('@/views/PerfomanceAudits.vue')
    }
  ]
})

export default router
