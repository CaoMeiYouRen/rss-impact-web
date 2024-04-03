<template>
    <div class="home">
        <p>{{ message }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const message = ref('Hello Home.vue')
</script>

<style lang="scss" scoped>
.home {
    color: red;
    text-align: center;
}
</style>
