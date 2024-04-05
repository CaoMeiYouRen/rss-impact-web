<template>
    <div class="home">
        <p>{{ message }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ajax } from '@/utils/ajax'

// defineProps<{ msg: string }>()

const message = ref('Hello Home.vue')

onMounted(() => {

})
</script>

<style lang="scss" scoped>
.home {
    // color: red;
    // text-align: center;
}
</style>
