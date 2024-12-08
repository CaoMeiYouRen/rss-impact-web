import { createRouter, createWebHistory, RouteLocationNormalized, RouteRecordRaw, RouterOptions } from 'vue-router'
import { HomeFilled, InfoFilled, UserFilled, Histogram, Grid, Setting, Document } from '@element-plus/icons-vue'
import Layout from '@/layout/Layout.vue'
import { Role } from '@/constant/role'

export type RouteConfig = RouteRecordRaw

export type Route = RouteLocationNormalized

export const constantRoutes: RouteConfig[] = [
    {
        path: '/404',
        component: () => import('@/views/Page404.vue'),
        meta: {
            hidden: true,
            title: '404',
        },
    },
    {
        path: '/login',
        component: () => import('@/views/Login.vue'),
        meta: {
            hidden: true,
            title: '登录',
        },
    },
    {
        path: '/register',
        component: () => import('@/views/Register.vue'),
        meta: {
            hidden: true,
            title: '注册',
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
        path: '/',
        component: Layout,
        meta: {
            title: '数据管理',
            icon: Histogram,
        },
        children: [
            {
                path: 'feed', // subscribe 订阅
                // // 避免 RSSHub Radar 匹配到 /feed 路由
                component: () => import('@/views/data/Feed.vue'),
                meta: {
                    title: '订阅管理',
                    icon: 'iconfont icon-xinhao',
                },
            },
            {
                path: 'category',
                component: () => import('@/views/data/Category.vue'),
                meta: {
                    title: '分类管理',
                    icon: 'iconfont icon-fenlei',
                },
            },
            {
                path: 'article',
                component: () => import('@/views/data/Article.vue'),
                meta: {
                    title: '文章管理',
                    icon: 'iconfont icon-wenzhang',
                },
            },
            {
                path: 'hook',
                component: () => import('@/views/data/Hook.vue'),
                meta: {
                    title: 'Hook管理',
                    icon: 'iconfont icon-webhook',
                },
            },
            {
                path: 'custom-query',
                component: () => import('@/views/data/CustomQuery.vue'),
                meta: {
                    title: '自定义查询',
                    icon: 'iconfont icon-custom-query',
                },
            },
            {
                path: 'proxy-config',
                component: () => import('@/views/data/ProxyConfig.vue'),
                meta: {
                    title: '代理管理',
                    icon: 'iconfont icon-proxy',
                },
            },
            {
                path: 'resource',
                component: () => import('@/views/data/Resource.vue'),
                meta: {
                    title: '资源管理',
                    icon: 'iconfont icon-ziyuanguanli',
                },
            },
            {
                path: 'webhook-log',
                component: () => import('@/views/data/WebhookLog.vue'),
                meta: {
                    title: 'Webhook和通知日志',
                    icon: 'iconfont icon-tongzhirizhi',
                },
            },
        ],
    },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'personal',
                name: 'Personal',
                component: () => import('@/views/user/Personal.vue'),
                meta: {
                    title: '个人中心',
                    icon: UserFilled,
                },
            },
        ],
    },
    {
        path: '/docs',
        component: Layout,
        children: [
            {
                path: '',
                name: 'Docs',
                component: () => import('@/views/Docs.vue'),
                meta: {
                    title: '文档',
                    icon: Document,
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
    {
        path: '/(.*)',
        redirect: '/404',
        meta: { hidden: true },
    },
]

export const asyncRoutes: RouteConfig[] = [
    {
        path: '/admin',
        component: Layout,
        meta: {
            title: '后台管理',
            icon: Grid,
            roles: [Role.admin],
        },
        children: [
            {
                path: 'user',
                name: 'User',
                component: () => import('@/views/admin/User.vue'),
                meta: {
                    title: '用户管理',
                    icon: UserFilled,
                },
            },
            {
                path: 'system',
                name: 'System',
                component: () => import('@/views/admin/System.vue'),
                meta: {
                    title: '系统管理',
                    icon: Setting,
                },
            },
            {
                path: 'daily-count',
                name: 'DailyCount',
                component: () => import('@/views/admin/DailyCount.vue'),
                meta: {
                    title: '使用统计',
                    icon: 'iconfont icon-tongji',
                },
            },
        ],
    },
]

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
