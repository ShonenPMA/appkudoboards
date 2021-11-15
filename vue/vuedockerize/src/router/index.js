import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import authRouter from '../modules/auth/router';
import kudoboardRouter from '../modules/kudoboard/router';
import isAuthenticatedGuard from '../modules/auth/router/auth-guard';
const routes = [
  {
    path: '/',
    name: 'Home',
    beforeEnter: [ isAuthenticatedGuard ],
    component: Home
  },
  {
    path: '/auth',
    ...authRouter
  },
  {
    path: '/kudoboard',
    beforeEnter: [ isAuthenticatedGuard ],
    ...kudoboardRouter
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
