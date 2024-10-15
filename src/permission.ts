import NProgress from 'nprogress'
import router from './router'
import '@/styles/nprogress.scss'
import { useUserStore } from './store/modules/user'
import { usePermissionStore } from './store/modules/permission'
import { Dictionary, getOtherQuery } from './utils/helper'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/register', '/404']

router.beforeEach(async (to, _, next) => {
    const userStore = useUserStore()
    const permissionStore = usePermissionStore()
    NProgress.start()

    const otherQuery = getOtherQuery(to.query as Dictionary<string>)
    const query = {
        ...otherQuery,
        redirect: to.path,
    }
    const search = new URLSearchParams(query)
    const loginUrl = `/login?${search}`
    if (userStore.isLogin) { // 如果已登录
        if (!userStore.isLoadRoutes) { // 未载入异步路由
            try {
                await userStore.getUserInfo()
                const roles = userStore.user?.roles
                if (roles?.length) {
                    permissionStore.generateRoutes(roles)
                }
                const accessedRoutes = permissionStore.dynamicRoutes
                accessedRoutes.forEach(router.addRoute)
                userStore.setIsLoadRoutes(true)
                next({ ...to, replace: true })
                return
            } catch (error: any) {
                console.error(error)
                await userStore.logout()
                // ElMessage.error(error?.message || '出现错误！')
                // next(`/login?redirect=${to.path}`)
                if (_.path !== '/login') {
                    next(loginUrl)
                    return
                }
                search.set('redirect', '/')
                next(`/login?${search}`)
                return
            }
        }
        if (to.path === '/login') {
            // 如果已经登录则跳转 home 页面
            next({ path: '/' })
            return
        }

        if (whiteList.includes(to.path)) {
            // 如果在白名单内，直接放行
            next()
            return
        }
        // 没有权限要求直接放行
        next()
        return
    }

    if (whiteList.includes(to.path)) {
        // 如果在白名单内，直接放行
        next()
        return
    }
    // await userStore.logout()
    // 其他情况回到 login 页面要求登录
    next(loginUrl)
})

router.afterEach((to) => {
    // Finish progress bar
    NProgress.done()

    // set page title
    document.title = to?.meta?.title as string || document.title
})
