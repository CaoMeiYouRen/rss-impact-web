<template>
    <div
        v-if="!item.meta || !item.meta.hidden"
        :class="['menu-wrapper', isCollapse ? 'simple-mode' : 'full-mode', {'first-level': isFirstLevel}]"
    >
        <template v-if="theOnlyOneChild && !theOnlyOneChild.children">
            <SidebarItemLink
                v-if="theOnlyOneChild.meta"
                :to="resolvePath(theOnlyOneChild.path)"
            >
                <el-menu-item
                    :index="resolvePath(theOnlyOneChild.path)"
                    :class="{'sub-menu-title-noDropdown': isFirstLevel}"
                >
                    <el-icon v-if="theOnlyOneChild.meta && theOnlyOneChild.meta.icon">
                        <i
                            v-if="typeof theOnlyOneChild.meta.icon === 'string'"
                            :class="theOnlyOneChild.meta.icon"
                        />
                        <component :is="theOnlyOneChild.meta.icon" v-else />
                    </el-icon>
                    <span
                        v-if="theOnlyOneChild.meta.title && (!isFirstLevel || !isCollapse)"
                    >{{ theOnlyOneChild.meta.title }}</span>
                </el-menu-item>
            </SidebarItemLink>
        </template>
        <el-sub-menu
            v-else
            :index="resolvePath(item.path)"
            popper-append-to-body
        >
            <template #title>
                <el-icon v-if="item.meta && item.meta.icon">
                    <i
                        v-if="typeof item.meta.icon === 'string'"
                        :class="item.meta.icon"
                    />
                    <component :is="item.meta.icon" v-else />
                </el-icon>
                <span
                    v-if="item.meta && item.meta.title"
                >{{ item.meta.title }}</span>
            </template>
            <template v-if="item.children">
                <sidebar-item
                    v-for="child in item.children"
                    :key="child.path"
                    :item="child"
                    :is-collapse="isCollapse"
                    :is-first-level="false"
                    :base-path="resolvePath(child.path)"
                    class="nest-menu"
                />
            </template>
        </el-sub-menu>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, computed } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { resolve } from 'path-browserify'
import SidebarItemLink from './SidebarItemLink.vue'
import { isExternal } from '@/utils/validate'

export default defineComponent({
    name: 'SidebarItem',
    components: {
        SidebarItemLink,
    },
    props: {
        item: {
            type: Object as PropType<RouteRecordRaw>,
            required: true,
        },
        isCollapse: {
            type: Boolean,
            default: false,
        },
        isFirstLevel: {
            type: Boolean,
            default: true,
        },
        basePath: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        const { item, basePath } = toRefs(props)
        const showingChildNumber = computed(() => {
            if (item.value.children) {
                const showingChildren = item.value.children.filter((subItem) => !subItem.meta || !subItem.meta.hidden)
                return showingChildren.length
            }
            return 0
        })

        const theOnlyOneChild = computed( () => {
            if (showingChildNumber.value > 1) {
                return null
            }
            if (item.value.children) {
                for (const child of item.value.children) {
                    if (!child.meta || !child.meta.hidden) {
                        return child
                    }
                }
            }
            return { ...item.value, path: '' }
        })

        function resolvePath(routePath: string) {
            if (isExternal(routePath)) {
                return routePath
            }
            if (isExternal(basePath.value)) {
                return basePath.value
            }
            return resolve(basePath.value, routePath)
        }
        return {
            showingChildNumber,
            theOnlyOneChild,
            resolvePath,
        }
    },
})
</script>

<style lang="scss">
    .el-sub-menu.is-active > .el-sub-menu__title {
        color: $subMenuActiveText !important;
    }

    .full-mode {
        a {
            text-decoration: none !important; /* 移除下划线 */
        }

        .nest-menu .el-sub-menu > .el-sub-menu__title,
        .el-sub-menu .el-menu-item {
            min-width: $sideBarWidth !important;
            background-color: $subMenuBg !important;

            &:hover {
                background-color: $subMenuHover !important;
            }
        }
    }

    .simple-mode {
        &.first-level {
            .sub-menu-title-noDropdown {
                position: relative;
                padding: 0 15px;

                .el-tooltip {
                    padding: 0 !important;
                }
            }

            .el-sub-menu {
                overflow: hidden;

                & > .el-sub-menu__title {
                    padding: 0 15px;
                    .el-sub-menu__icon-arrow {
                        display: none;
                    }

                    & > span {
                        visibility: hidden;
                    }
                }
            }
        }
    }
</style>

<style lang="scss" scoped>
    .svg-icon {
        margin-right: 16px;
    }

    i[class^="el-icon-"] {
        margin-right: 16px;
    }

    i[class^="iconfont"] {
        width: 24px;

        margin-right: 16px;
        margin-left: 4px;
        text-align: center;
    }

    .simple-mode {
        .svg-icon {
            margin-left: 20px;
        }

        i[class^="el-icon-"] {
            margin-left: 16px;
        }

        i[class^="iconfont"] {
            margin-left: 16px;
        }
    }
</style>
