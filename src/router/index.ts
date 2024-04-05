import { createRouter, createWebHistory, RouteRecordRaw, RouterOptions } from 'vue-router'
import { HomeFilled, List, DocumentAdd, InfoFilled } from '@element-plus/icons-vue'
import Layout from '@/layout/Layout.vue'

export type RouteConfig = RouteRecordRaw

export const constantRoutes: RouteConfig[] = [
    {
        path: '/login',
        component: () => import('@/views/Login.vue'),
        meta: {
            hidden: true,
            title: '登录',
        },
    },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/views/Home.vue'),
                meta: {
                    title: '主页',
                    icon: HomeFilled,
                },
            },
        ],
    },
    {
        path: '/about',
        component: Layout,
        children: [
            {
                path: '',
                name: 'About',
                component: () => import('@/views/About.vue'),
                meta: {
                    title: '关于',
                    icon: InfoFilled,
                },
            },
        ],
    },
]

export const asyncRoutes: RouteConfig[] = []

const options: RouterOptions = {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: constantRoutes,
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition
        }
        return { left: 0, top: 0 }
    },
}

let router = createRouter(options)

export function resetRouter(): void {
    const newRouter = createRouter(options)
    router = newRouter
}

export default router
