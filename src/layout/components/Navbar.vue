<template>
    <div class="navbar">
        <Hamburger
            id="hamburger-container"
            :is-active="state.sidebar.opened"
            class="hamburger-container"
            @toggle-click="toggleSideBar"
        />
        <Breadcrumb
            id="breadcrumb-container"
            class="breadcrumb-container"
        />

        <div class="right-menu">
            <el-dropdown
                class="avatar-container hover-effect right-menu-item"
                trigger="click"
            >
                <div class="avatar-wrapper">
                    <!-- <p>RSS Impact</p> -->
                    <!-- <img
                        :src="logo"
                        class="user-avatar"
                    > -->
                    <!-- <i class="el-icon-caret-bottom" /> -->
                    <el-icon :size="20">
                        <Operation />
                    </el-icon>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <div
                            v-for="(item,index) in navbar"
                            :key="item.title"
                        >
                            <router-link
                                v-if="item.to"
                                :to="item.to"
                            >
                                <el-dropdown-item :divided="index>1">
                                    {{ item.title }}
                                </el-dropdown-item>
                            </router-link>
                            <span
                                v-else
                                @click="item.click"
                            >
                                <el-dropdown-item :divided="index>1">
                                    {{ item.title }}
                                </el-dropdown-item>
                            </span>
                        </div>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useAppStore } from '@/store/modules/app'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Hamburger from '@/components/Hamburger.vue'
import { useUserStore } from '@/store/modules/user'

const router = useRouter()
const state = useAppStore()
const userStore = useUserStore()

const navbar = [
    {
        title: '主页',
        to: '/',
    },
    // {
    //     title: '个人中心',
    //     to: '/user/index',
    // },
    {
        title: '退出',
        click: async () => {
            await userStore.logout()
            await router.push('/login')
        },
    },
]

function toggleSideBar() {
    state.toggleSidebar(true)
}
</script>

<style lang="scss" scoped>
.navbar {
    position: relative;
    height: 50px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

    .hamburger-container {
        float: left;
        height: 100%;
        padding: 0 15px;
        line-height: 46px;
        cursor: pointer;
        transition: background 0.3s;
        -webkit-tap-highlight-color: transparent;

        &:hover {
            background: rgb(0 0 0 / 2.5%);
        }
    }

    .breadcrumb-container {
        float: left;
    }

    .right-menu {
        float: right;
        height: 100%;
        line-height: 50px;

        &:focus {
            outline: none;
        }

        .right-menu-item {
            display: inline-block;
            height: 100%;
            padding: 0 8px;
            color: #5a5e66;
            font-size: 18px;
            vertical-align: text-bottom;

            &.hover-effect {
                cursor: pointer;
                transition: background 0.3s;

                &:hover {
                    background: rgb(0 0 0 / 2.5%);
                }
            }
        }

        .avatar-container {
            margin-right: 30px;

            .avatar-wrapper {
                position: relative;
                margin-top: 12px;

                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .el-icon-caret-bottom {
                    position: absolute;
                    top: 25px;
                    right: -20px;
                    font-size: 12px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>

