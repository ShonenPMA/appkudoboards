import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import authRouter from '../modules/auth/router';
import kudoboardRouter from '../modules/kudoboard/router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    ...authRouter
  },
  {
    path: '/kudoboard',
    ...kudoboardRouter
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
