export default {
    name: 'team',
    component: () => import(/* webpackChunkName: "team" */ '@/modules/team/layouts/TeamLayout.vue'),
    children: [
        {
            path: "",
            name: 'team-list',
            component: () => import(/* webpackChunkName: "team-list" */ '@/modules/team/views/List.vue'),
        },
        {
            path: ":id",
            name: 'team-item',
            component: () => import(/* webpackChunkName: "team-item" */ '@/modules/team/views/Team.vue'),
            props: (route) => {
                return {
                    id: route.params.id
                }
            }
        }
    ]
}