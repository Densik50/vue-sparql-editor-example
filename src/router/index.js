import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'EditorView',
    component: () => import('../views/EditorView.vue')
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
