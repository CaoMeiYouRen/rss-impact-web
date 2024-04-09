import { AxiosError } from 'axios'
import { ElMessage } from 'element-plus'
import { Api } from './api'
import router from '@/router'
import { useUserStore } from '@/store/modules/user'

export const api = new Api({
    // baseURL: VITE_API_BASE_URL,
    timeout: 10000,
})
/**
 * axios 实例
 */
export const instance = api.instance

// 添加响应拦截器
// 2xx 范围内的状态码都会触发该函数。
// 对响应数据做点什么
instance.interceptors.response.use((response) => response, async (error: Error | AxiosError) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    let message = '访问后台接口出现错误'
    if (error instanceof AxiosError) {
        message = error.response?.data?.message
        if (message) {
            ElMessage.error(message)
        }
        if (error.response?.status === 401) {
            const userStore = useUserStore()
            // 如果是 401 则要求登录
            if (router.currentRoute.value.path !== '/login') {
                await userStore.logout()
                await router.push({
                    path: '/login',
                    query: {
                        redirect: '/',
                    },
                })
            }
        }
        return Promise.reject(error)
    }
    if (error?.message) {
        message = error.message
    }
    if (message) {
        ElMessage.error(message)
    }
    return Promise.reject(error)
})
