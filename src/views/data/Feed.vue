<template>
    <div>
        <el-collapse>
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
        </el-collapse>

        <CrudList
            ref="crudListDom"
            model="feed"
            :post-get="postGet"
            :pre-save="preSave"
            :pre-update="preUpdate"
        />
    </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useIdTransformer } from '@/hooks/use-id-transformer'
import CrudForm from '@/components/CrudForm.vue'
import CrudList from '@/components/CrudList.vue'

const route = useRoute()

const { postGet, preSave, preUpdate } = useIdTransformer(['hooks'])
const crudFormDom = shallowRef<InstanceType<typeof CrudForm> | null>(null)
const crudListDom = shallowRef<InstanceType<typeof CrudList> | null>(null)
const onSuccess = async () => {
    ElMessage.success('添加成功！！')
    await crudListDom.value?.updateDic()
    await crudListDom.value?.refreshChange()

}
const onReset = async () => {
    crudFormDom.value?.initForm()
}

watch(
    () => route.path,
    async () => {
        if (route.path.includes('/feed')) {
            await crudFormDom.value?.updateDic()  // 显示当前页面时刷新字典，解决新增用户等字典未更新问题
        }
    },
)

</script>

<style lang="scss" scoped>
</style>
