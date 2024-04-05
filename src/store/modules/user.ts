import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useCookies } from '@vueuse/integrations/useCookies'
import { LoginDto, User } from '@/api/api'
import { api } from '@/api'
import * as storage from '@/utils/storage'

export const useUserStore = defineStore('user', () => {
    const user = ref<User | null>(storage.getUser() || null)
    const isLoadRoutes = ref(false)
    const isLogin = computed(() => Boolean(user.value))
    const { remove } = useCookies()

    const setIsLoadRoutes = (value: boolean) => {
        isLoadRoutes.value = value
    }

    const login = async (data: LoginDto) => {
        const response = await api.api.authLogin(data)
        return response
    }

    const logout = async () => {
        // 移除本地的cookie
        user.value = null
        storage.removeUser()
        setIsLoadRoutes(false)
        // remove('connect.sid') // 无法移除 http only
        await api.api.authLogout()
    }

    const setUser = (newUser: User) => {
        user.value = newUser
        storage.setUser(newUser)
    }

    const getUserInfo = async () => {
        const newUser = await api.api.userMe()
        if (newUser) {
            setUser(newUser)
        }
    }

    return {
        user,
        isLogin,
        isLoadRoutes,
        login,
        logout,
        setUser,
        setIsLoadRoutes,
        getUserInfo,
    }
})
