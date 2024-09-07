import {
    createRouter,
    createWebHistory
} from "vue-router";
import PostsIndex from "@/Components/Posts/Index.vue";
import PostsCreate from "@/Components/Posts/Create.vue";
import PostsEdit from "@/Components/Posts/Edit.vue";
import AuthenticatedLayout from "@/Layouts/Authenticated.vue";
import GuestLayout from "@/Layouts/Guest.vue";

function auth(to, from, next) {
    if (JSON.parse(localStorage.getItem('loggedIn'))) {
        next()
    }
    next('/login')
}

const routes = [{
        path: "/",
        redirect: {
            name: 'login'
        },
        component: GuestLayout,
        children: [{
            path: "/login",
            name: "login",
            component: () => import("@/Components/Auth/Login.vue"),
        }, ],
    },
    {
        component: AuthenticatedLayout,
        beforeEnter: auth,
        children: [{
                path: "/posts",
                name: "posts.index",
                component: PostsIndex,
                meta: {
                    title: "Posts",
                },
            },
            {
                path: "/posts/create",
                name: "posts.create",
                component: PostsCreate,
                meta: {
                    title: "Add new post",
                },
            },
            {
                name: "posts.edit",
                path: "/posts/edit/:id",
                component: PostsEdit,
                meta: {
                    title: "Edit post",
                },
            },
        ],
    },
    {
        name: "notFound",
        path: "/:pathMatch(.*)*",
        component: () => import("@/Pages/NotFound.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
