import { createRouter, createWebHashHistory } from 'vue-router'

import authRouter from '../modules/auth/router';
import kudoboardRouter from '../modules/kudoboard/router';
import projectRouter from '../modules/project/router';
import teamRouter from '../modules/team/router';

import isAuthenticatedGuard from '../modules/auth/router/auth-guard';
const routes = [
  {
    path: '/',
    name: 'Home',
    beforeEnter: [ isAuthenticatedGuard ],
    redirect: {name: 'kudoboard-list'}
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
  {
    path: '/project',
    beforeEnter: [ isAuthenticatedGuard ],
    ...projectRouter
  },
  {
    path: '/team',
    beforeEnter: [isAuthenticatedGuard],
    ...teamRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
