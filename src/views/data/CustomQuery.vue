<template>
    <CrudList
        model="custom-query"
        :post-get="postGet"
        :pre-save="customPreSave"
        :pre-update="customPreSave"
    />
</template>

<script lang="ts" setup>
import { CustomQuery } from '@/api/api'
import { useIdTransformer } from '@/hooks/use-id-transformer'
const { postGet, preSave } = useIdTransformer(['categories', 'feeds'])

const customPreSave = (data: CustomQuery) => {
    data = preSave(data)
    if (!data.feedId) {
        data.feedId = null as any
    }
    return data
}

</script>

<style lang="scss" scoped>
</style>
