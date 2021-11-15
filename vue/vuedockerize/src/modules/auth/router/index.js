import isAuthenticatedGuard from './auth-guard';
import isUnauthenticatedGuard from './unauth-guard';
export default {
    name: 'auth',
    component: () => import(/* webpackChunkName: "auth" */ '@/modules/auth/layouts/AuthLayout.vue'),
    children: [
        {
            path: '',
            beforeEnter: [ isUnauthenticatedGuard ],
            name: 'login',
            component: () => import(/* webpackChunkName: "auth-login" */ '@/modules/auth/views/Login.vue'),
        },
        {
            path: '/register',
            beforeEnter: [ isUnauthenticatedGuard ],
            name: 'register',
            component: () => import(/* webpackChunkName: "auth-login" */ '@/modules/auth/views/Register.vue'),
        },
        {
            path: '/profile',
            beforeEnter: [ isAuthenticatedGuard ],
            name: 'profile',
            component: () => import(/* webpackChunkName: "auth-login" */ '@/modules/auth/views/Profile.vue'),
        }
    ]
}