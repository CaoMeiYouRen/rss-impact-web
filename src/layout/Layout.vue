<template>
    <div
        :class="classObj"
        class="app-wrapper"
    >
        <Sidebar class="sidebar-container" />
        <div class="main-container">
            <Navbar />
            <AppMain />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { AppMain, Navbar, Sidebar } from './components'
import { useAppStore } from '@/store/modules/app'

const state = useAppStore()
const classObj = computed(() => ({
    hideSidebar: !state.sidebar.opened,
    openSidebar: state.sidebar.opened,
}))
</script>

<style lang="scss" scoped>

.app-wrapper {
    @include clearfix;

    position: relative;
    width: 100%;
    height: 100%;
}

.drawer-bg {
    position: absolute;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.3;
}

.main-container {
    position: relative;
    min-height: 100%;
    margin-left: $sideBarWidth;
    transition: margin-left 0.28s;
}

.sidebar-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    width: $sideBarWidth !important;
    height: 100%;
    overflow: hidden;
    font-size: 0;
    transition: width 0.28s;
}

.hideSidebar {
    .main-container {
        margin-left: 54px;
    }

    .sidebar-container {
        width: 54px !important;
    }
}

/* for mobile response 适配移动端 */
.mobile {
    .main-container {
        margin-left: 0;
    }

    .sidebar-container {
        width: $sideBarWidth !important;
        transition: transform 0.28s;
    }

    &.openSidebar {
        position: fixed;
        top: 0;
    }

    &.hideSidebar {
        .sidebar-container {
            transform: translate3d(-$sideBarWidth, 0, 0);
            transition-duration: 0.3s;
            pointer-events: none;
        }
    }
}

.withoutAnimation {
    .main-container,
    .sidebar-container {
        transition: none;
    }
}
</style>
@/store/modules/app
