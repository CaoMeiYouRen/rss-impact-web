import { defineStore } from 'pinia'

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。

export const useAppStore = defineStore('app', {
    state() {
        return {
            opened: true,
        }
    },
    actions: {
        ToggleDevice() {
            this.opened = !this.opened
        },
    },
})
