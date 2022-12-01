import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/acomodacoes',
    name: 'acomodacoes',
    component: () => import('../views/AccommodationsView.vue')
  },
  {
    path: '/reservas',
    name: 'reservas',
    component: () => import('../views/ReservesView.vue')
  },
  {
    path: '/contato',
    name: 'contato',
    component: () => import('../views/ContactsView.vue')
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
