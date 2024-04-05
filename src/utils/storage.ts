import { useLocalStorage } from '@vueuse/core'
import { User } from '@/api/api'

export function useMyLocalStorage<T = any>(key: string, initialValue?: T) {
    const state = useLocalStorage(key, initialValue)
    const setState = (value: T) => {
        state.value = value
    }
    const getState = () => state.value
    const removeState = () => {
        state.value = null
    }
    return {
        state,
        setState,
        getState,
        removeState,
    }
}

// App
const sidebarStatusKey = 'sidebar_status'
const {
    state: sidebarStatusStorage,
    setState: setSidebarStatus,
    getState: getSidebarStatus,
    removeState: removeSidebarStatus,
} = useMyLocalStorage(sidebarStatusKey, '')
export {
    sidebarStatusStorage,
    setSidebarStatus,
    getSidebarStatus,
    removeSidebarStatus,
}

// User
const userKey = 'rss_impact_user'
const {
    state: userStorage,
    setState: setUser,
    getState: getUser,
    removeState: removeUser,
} = useMyLocalStorage<User>(userKey, {} as any)
export {
    userStorage,
    setUser,
    getUser,
    removeUser,
}
