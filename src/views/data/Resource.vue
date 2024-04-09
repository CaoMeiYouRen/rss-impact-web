<template>
    <CrudList
        model="resource"
        :post-get="postGet"
    />
</template>

<script lang="ts" setup>
import { Resource } from '@/api/api'
import { dataFormat } from '@/utils/helper'

const postGet = (obj: Resource) => {
    if (obj.size) {
        obj.size = dataFormat(obj.size) as any
    }
    return obj
}
</script>

<style lang="scss" scoped>
</style>
