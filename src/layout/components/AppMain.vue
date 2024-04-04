<template>
    <section class="app-main">
        <transition
            name="fade-transform"
            mode="out-in"
        >
            <keep-alive :exclude="/404/ig">
                <router-view />
            </keep-alive>
        </transition>
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
