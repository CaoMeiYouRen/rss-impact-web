<template>
    <el-breadcrumb
        class="app-breadcrumb"
        separator="/"
    >
        <transition-group name="breadcrumb">
            <el-breadcrumb-item
                v-for="(item, index) in breadcrumbs"
                :key="item.path"
            >
                <span
                    v-if="item.redirect === 'noredirect' || index === breadcrumbs.length-1"
                    class="no-redirect"
                >{{ item.meta.title }}</span>
                <a
                    v-else
                    @click.prevent="handleLink(item)"
                >{{ item.meta.title }}</a>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RouteRecord, RouteRecordRaw } from 'vue-router'
import { compile } from 'path-to-regexp'
export default defineComponent({
    name: 'Breadcrumb',
    // props: {},
    setup() {
        const breadcrumbs = ref<RouteRecord[]>([])
        return {
            breadcrumbs,
        }
    },
    watch: {
        $route(route: RouteRecordRaw) {
            if (route.path.startsWith('/redirect/')) {
                return
            }
            this.getBreadcrumb()
        },
    },
    created() {
        this.getBreadcrumb()
    },
    methods: {
        getBreadcrumb() {
            const matched = this.$route.matched.filter((item) => item.meta && item.meta.title)
            this.breadcrumbs = matched.filter((item) => item.meta && item.meta.title && item.meta.breadcrumb !== false)
        },
        pathCompile(path: string) {
            const { params } = this.$route
            const toPath = compile(path)
            return toPath(params)
        },
        handleLink(item: any) {
            const { redirect, path } = item
            if (redirect) {
                this.$router.push(redirect)
                return
            }
            this.$router.push(this.pathCompile(path))
        },
    },
})
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
    display: inline-block;
    margin-left: 8px;
    font-size: 14px;
    line-height: 50px;

    .no-redirect {
        color: #97a8be;
        cursor: text;
    }
}
</style>
