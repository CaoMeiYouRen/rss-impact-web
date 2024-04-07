import { defineStore } from 'pinia'
import { ref } from 'vue'
import { asyncRoutes, constantRoutes, RouteConfig } from '@/router'
import { Role } from '@/constant/role'

export const hasPermission = (roles: string[], route: RouteConfig) => {
    const routeRoles = route?.meta?.roles as string[]
    if (routeRoles?.length) {
        return roles.some((role) => routeRoles.some((role2) => role === role2))
    }
    return true
}

export const filterAsyncRoutes = (routes: RouteConfig[], roles: string[]): RouteConfig[] => {
    const res: RouteConfig[] = []
    routes.forEach((route) => {
        const r = { ...route }
        if (hasPermission(roles, r)) {
            if (r.children) {
                r.children = filterAsyncRoutes(r.children, roles)
            }
            res.push(r)
        }
    })
    return res
}

export interface IPermissionState {
    routes: RouteConfig[]
    dynamicRoutes: RouteConfig[]
}

export const usePermissionStore = defineStore('permission', () => {
    const routes = ref<RouteConfig[]>([])
    const dynamicRoutes = ref<RouteConfig[]>([])

    // TODO 修改 admin 路由逻辑，处理 404
    const generateRoutes = (roles: string[]) => {
        let accessedRoutes: RouteConfig[] = []
        if (roles.includes(Role.admin)) {
            // 如果有 admin 权限直接放行
            accessedRoutes = asyncRoutes
        } else {
            accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        }
        routes.value = constantRoutes.concat(accessedRoutes)
        dynamicRoutes.value = accessedRoutes
    }

    return { routes, dynamicRoutes, generateRoutes }
})
