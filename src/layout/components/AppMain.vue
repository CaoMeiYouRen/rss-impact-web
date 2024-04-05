<template>
    <section class="app-main">
        <router-view v-slot="{Component}">
            <transition
                name="fade-transform"
                mode="out-in"
            >
                <keep-alive :exclude="/404/ig">
                    <component :is="Component" />
                </keep-alive>
            </transition>
        </router-view>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'AppMain',
})
</script>

<style lang="scss" scoped>
.app-main {
    overflow: hidden;
    padding: 20px;
}
</style>
