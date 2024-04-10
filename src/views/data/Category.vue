<template>
    <CrudList
        model="category"
        :post-get="postGet"
        :pre-save="preSave"
        :pre-update="preUpdate"
    />
</template>

<script lang="ts" setup>
import { useIdTransformer } from '@/hooks/use-id-transformer'

const { postGet, preSave, preUpdate } = useIdTransformer(['feeds'])
</script>

<style lang="scss" scoped>
</style>
