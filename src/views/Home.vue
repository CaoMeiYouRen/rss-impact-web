<template>
    <div class="home">
        <h1>欢迎用户 {{ userStore.user?.username }} 访问 RSS Impact</h1>
        <p>这是一个基于 RSS 的 Hook 系统。</p>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'
const userStore = useUserStore()

</script>

<style lang="scss" scoped>

</style>
