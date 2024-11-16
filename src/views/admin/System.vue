<template>
    <div>
        <el-row :gutter="20">
            <el-col
                :sm="24"
                :md="12"
                :lg="8"
            >
                <CrudForm
                    ref="formDom"
                    v-model="databaseInfo"
                    method="GET"
                    url="/system/getDatabaseInfo"
                />
                <el-tooltip
                    class="box-item"
                    effect="dark"
                    content="触发 sqlite 的 VACUUM 命令以释放未使用空间"
                    placement="bottom"
                >
                    <el-button
                        v-if="enableSqliteVacuum"
                        type="primary"
                        @click="onCompactDatabase"
                    >
                        压缩数据库
                    </el-button>
                </el-tooltip>
                <el-tooltip
                    class="box-item"
                    effect="dark"
                    content="禁用所有不包含 Hook 和 自定义查询的订阅"
                    placement="bottom"
                >
                    <el-button
                        v-if="enableSqliteVacuum"
                        type="primary"
                        @click="onDisableEmptyFeeds"
                    >
                        禁用空订阅
                    </el-button>
                </el-tooltip>
            </el-col>
            <el-col
                :sm="24"
                :md="12"
                :lg="8"
            >
                <CrudForm method="GET" url="/system/getOsInfo" />
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, shallowRef } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { DatabaseInfoDto } from '@/api/api'
import { api } from '@/api'

const formDom = shallowRef()

const databaseInfo = ref<DatabaseInfoDto>({} as any)

const enableSqliteVacuum = computed(() => databaseInfo.value.type === 'sqlite')
// 压缩数据库
const onCompactDatabase = async () => {
    try {
        await api.api.systemSqliteVacuum()
        ElMessage.success('执行成功！')
        if (formDom.value) {
            await formDom.value.initForm()
        }
    } catch (error) {
        ElMessage.error('执行失败！')
        console.error(error)
    }
}

// 禁用空订阅
const onDisableEmptyFeeds = async () => {
    try {
        // 警告
        const action = await ElMessageBox.confirm('确定禁用所有不包含 Hook 和 自定义查询的订阅吗？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        })
        if (action === 'confirm') {
            await api.api.systemDisableEmptyFeeds()
            ElMessage.success('执行成功！')
        }
    } catch (error) {
        ElMessage.error('执行失败！')
        console.error(error)
    }
}

</script>

<!-- <style lang="scss" scoped>
</style> -->
