<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
            :collapse="isCollapse"
            :background-color="variables.menuBg"
            :text-color="variables.menuText"
            :active-text-color="variables.menuActiveText"
            :unique-opened="false"
            :collapse-transition="false"
            :default-active="$route.path"
            mode="vertical"
        >
            <SidebarItem
                v-for="route in routes"
                :key="route.path"
                :item="route"
                :base-path="route.path"
                :is-collapse="isCollapse"
            />
        </el-menu>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import SidebarItem from './SidebarItem.vue'
import { useAppStore } from '@/store/modules/app'
import variables from '@/styles/variables'
import { usePermissionStore } from '@/store/modules/permission'
const permissionStore = usePermissionStore()
const state = useAppStore()
// TODO 修改 routes
const routes = computed(() => permissionStore.routes)
const isCollapse = computed(() => !state.sidebar.opened)
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
.sidebar-container {
    // reset element-ui css
    .horizontal-collapse-transition {
        transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
    }

    .scrollbar-wrapper {
        overflow-x: hidden !important;
    }

    .el-scrollbar__view {
        height: 100%;
    }

    .el-scrollbar__bar {
        &.is-vertical {
            right: 0;
        }

        &.is-horizontal {
            display: none;
        }
    }
}
</style>

<style lang="scss" scoped>
.el-scrollbar {
    height: 100%;
}

.el-menu {
    width: 100% !important;
    height: 100%;
    border: none;
}
</style>
@/store/modules/app
