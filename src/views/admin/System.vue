<template>
    <div>
        <el-row :gutter="20">
            <el-col
                :sm="24"
                :md="12"
                :lg="8"
            >
                <CrudForm v-model="databaseForm" url="/system/getDatabaseInfo" />
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { api } from '@/api'

const databaseForm = ref({})

onMounted(async () => {
    databaseForm.value = await api.api.systemGetDatabaseInfo()
})

</script>

<style lang="scss" scoped>
</style>
