<template>
    <div>
        <router-view />
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useAppStore } from './store/modules/app'
import { api } from '@/api'

const state = useAppStore()

onMounted(async () => {
  const meta = await api.api.authMeta()
  state.setAuthMeta(meta)
})

</script>

<style lang="scss">
#app {

}
</style>
