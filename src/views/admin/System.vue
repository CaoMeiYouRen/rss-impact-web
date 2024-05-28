<template>
    <div>
        <el-row :gutter="20">
            <el-col
                :sm="24"
                :md="12"
                :lg="8"
            >
                <CrudForm
                    method="GET"
                    url="/system/getDatabaseInfo"
                />
            </el-col>
            <el-col
                :sm="24"
                :md="12"
                :lg="8"
            >
                <CrudForm
                    method="GET"
                    url="/system/getOsInfo"
                />
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
</style>
