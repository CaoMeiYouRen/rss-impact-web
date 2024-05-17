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
            <el-col
                :sm="24"
                :md="12"
                :lg="8"
            >
                <CrudForm v-model="osForm" url="/system/getOsInfo" />
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { api } from '@/api'

const databaseForm = ref({})

const osForm = ref({})

onMounted(async () => {
    databaseForm.value = await api.api.systemGetDatabaseInfo()
    osForm.value = await api.api.systemGetOsInfo()
})

</script>

<style lang="scss" scoped>
</style>
