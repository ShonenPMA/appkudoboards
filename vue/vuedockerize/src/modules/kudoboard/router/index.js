export default {
    name: 'kudoboard',
    component: () => import(/* webpackChunkName: "kudoboard" */ '@/modules/kudoboard/layouts/KudoboardLayout.vue'),
    children: [
        {
            path: "",
            name: 'kudoboard-list',
            component: () => import(/* webpackChunkName: "kudoboard-list" */ '@/modules/kudoboard/views/List.vue'),
        }
    ]
}