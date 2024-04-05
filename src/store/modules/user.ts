import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCookies } from '@vueuse/integrations/useCookies'
import { LoginDto, User } from '@/api/api'
import { api } from '@/api'
import * as storage from '@/utils/storage'

export const useUserStore = defineStore('user', () => {
    const user = ref<User | null>(null)
    const isLoadRoutes = ref(false)
    const { remove } = useCookies()

    const setIsLoadRoutes = (value: boolean) => {
        isLoadRoutes.value = value
    }

    const login = async (data: LoginDto) => {
        const response = await api.api.authLogin(data)
        return response.data
    }

    const logout = async () => {
        // 向后端发起登出请求
        // 移除本地的cookie
        remove('connect.sid')
        setIsLoadRoutes(false)
    }

    const setUser = (newUser: User) => {
        user.value = newUser
        storage.setUser(newUser)
    }

    const getUserInfo = async () => {
        const resp = await api.api.userMe()
        if (resp.data) {
            setUser(resp.data)
        }
    }

    return {
        user,
        isLoadRoutes,
        login,
        logout,
        setUser,
        setIsLoadRoutes,
    }
})
