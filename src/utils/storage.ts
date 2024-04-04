import { useLocalStorage } from '@vueuse/core'

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
