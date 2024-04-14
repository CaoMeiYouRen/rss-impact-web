<template>
    <div>
        <el-collapse>
            <el-collapse-item name="1">
                <template #title>
                    <h3>快速添加订阅</h3>
                </template>
                <CrudForm
                    ref="formDom"
                    url="/feed/quickCreate"
                    :pre-submit="preSave"
                    @success="onSuccess"
                    @reset-change="onReset"
                />
            </el-collapse-item>
        </el-collapse>

        <CrudList
            model="feed"
            :post-get="postGet"
            :pre-save="preSave"
            :pre-update="preUpdate"
        />
    </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { shallowRef } from 'vue'
import { useIdTransformer } from '@/hooks/use-id-transformer'

const { postGet, preSave, preUpdate } = useIdTransformer(['hooks'])
const formDom = shallowRef()
const onSuccess = () => {
    ElMessage.success('添加成功！！')
}
const onReset = () => {

}

</script>

<style lang="scss" scoped>
</style>
