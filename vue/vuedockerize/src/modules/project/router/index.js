export default {
    name: 'project',
    component: () => import(/* webpackChunkName: "project" */ '@/modules/project/layouts/ProjectLayout.vue'),
    children: [
        {
            path: "",
            name: 'project-list',
            component: () => import(/* webpackChunkName: "project-list" */ '@/modules/project/views/List.vue'),
        },
        {
            path: ":id",
            name: 'project-item',
            component: () => import(/* webpackChunkName: "project-item" */ '@/modules/project/views/Project.vue'),
            props: (route) => {
                return {
                    id: route.params.id
                }
            }
        }
    ]
}