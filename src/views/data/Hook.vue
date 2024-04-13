<template>
    <CrudList
        v-model="form"
        model="hook"
        :post-get="postGet"
        :pre-save="preSave"
        :pre-update="preUpdate"
    />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { Hook } from '@/api/api'
import { remove$key } from '@/utils/helper'
const form = ref<Hook>({} as any)
const postGet = (data: Hook) => data

const pre = (data: Hook) => {
    if ((data?.config as any)?._type ) {
        delete (data.config as any)._type
    }
    data.config = remove$key(data.config as any) as any
    return data
}
const preSave = pre
const preUpdate = pre

watch(() => form.value?.type, (type) => {
    // console.log(form.value)
    // console.log(type)
    if (form.value?.config && type) {
        form.value.config = {    // 将 type 同步到 config
            ...form.value.config,
            _type: type,
        } as any
    }
})

</script>

<style lang="scss" scoped>
</style>
