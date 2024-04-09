import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getSidebarStatus, setSidebarStatus } from '@/utils/storage'

export enum DeviceType {
    Mobile,
    Desktop,
}

export interface Sidebar {
    opened: boolean
    withoutAnimation: boolean
}

export interface IAppState {
    device: DeviceType
    sidebar: Sidebar
}

export const useAppStore = defineStore('app', () => {
    const device = ref<DeviceType>(DeviceType.Desktop)
    const sidebar = ref<Sidebar>({
        opened: getSidebarStatus() !== 'closed',
        withoutAnimation: false,
    })

    function toggleSidebar(withoutAnimation: boolean) {
        sidebar.value.opened = !sidebar.value.opened
        sidebar.value.withoutAnimation = withoutAnimation
        if (sidebar.value.opened) {
            setSidebarStatus('opened')
        } else {
            setSidebarStatus('closed')
        }
    }

    function closeSidebar(withoutAnimation: boolean) {
        sidebar.value.opened = false
        sidebar.value.withoutAnimation = withoutAnimation
        setSidebarStatus('closed')
    }

    function toggleDevice(deviceType: DeviceType) {
        device.value = deviceType
    }

    return { device, sidebar, toggleSidebar, closeSidebar, toggleDevice }
})
