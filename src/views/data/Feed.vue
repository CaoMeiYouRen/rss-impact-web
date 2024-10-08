<template>
    <div>
        <el-collapse v-model="activeNames">
            <el-collapse-item name="1">
                <template #title>
                    <h3>快速添加订阅</h3>
                </template>
                <CrudForm
                    ref="crudFormDom"
                    url="/feed/quickCreate"
                    :pre-submit="preSave"
                    @success="onSuccess"
                    @reset-change="onReset"
                />
            </el-collapse-item>
            <el-collapse-item name="2">
                <template #title>
                    <h3>从 OPML 文件导入</h3>
                </template>
                <CrudForm
                    url="/feed/import"
                    :upload-after="onImportSuccess"
                    @success="onImportSuccess"
                />
            </el-collapse-item>
            <el-collapse-item name="3">
                <template #title>
                    <h3>导出为 OPML 文件</h3>
                </template>
                <el-button type="primary" @click="download">
                    <el-icon><Download /></el-icon> 导出
                </el-button>
            </el-collapse-item>
        </el-collapse>

        <CrudList
            ref="crudListDom"
            model="feed"
            alias="feed"
            :post-get="postGet"
            :pre-save="preSave"
            :pre-update="preUpdate"
        />
    </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { shallowRef, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { saveAs } from 'file-saver'
import { useIdTransformer } from '@/hooks/use-id-transformer'
import CrudForm from '@/components/CrudForm.vue'
import CrudList from '@/components/CrudList.vue'
import { api } from '@/api'
import { getSafeFileName } from '@/utils/helper'
import { timeFormat } from '@/utils/time'

const route = useRoute()

const { postGet, preSave, preUpdate } = useIdTransformer(['hooks'])
const crudFormDom = shallowRef<InstanceType<typeof CrudForm> | null>(null)
const crudListDom = shallowRef<InstanceType<typeof CrudList> | null>(null)
const activeNames = ref(['1'])

const onSuccess = async () => {
    ElMessage.success('添加成功！')
    await crudListDom.value?.updateDic()
    await crudListDom.value?.refreshChange()

}

const onReset = async () => {
    crudFormDom.value?.initForm()
}

const onImportSuccess = async () => {
    ElMessage.success('添加成功！')
    await crudListDom.value?.updateDic()
    await crudListDom.value?.refreshChange()

}

const download = async () => {
    try {
        const content = await api.api.feedExportByOpml()
        const blob = new Blob([content], { type: 'application/xml; charset=utf-8' })
        const filename = getSafeFileName(`rss-impact-${timeFormat(new Date(), 'YYYYMMDDHHmmss')}`)
        saveAs(blob, `${filename}.xml`)
        ElMessage.success('导出成功！')
    } catch (error) {
        ElMessage.error('导出失败！')
    }
}

watch(
    () => route.path,
    async () => {
        if (route.path.includes('/subscribe')) {
            await crudFormDom.value?.updateDic()  // 显示当前页面时刷新字典，解决新增用户等字典未更新问题
        }
    },
)

</script>

<style lang="scss" scoped>
</style>
