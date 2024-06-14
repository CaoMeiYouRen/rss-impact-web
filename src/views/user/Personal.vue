<template>
    <div>
        <el-row :gutter="20">
            <el-col
                :sm="24"
                :md="12"
                :lg="8"
            >
                <CrudForm
                    v-model="userForm"
                    method="POST"
                    url="/user/me"
                    @success="onSuccess"
                    @fail="onFail"
                />
            </el-col>
            <el-col
                :sm="24"
                :md="12"
                :lg="8"
            >
                <CrudForm
                    v-model="passwordForm"
                    method="POST"
                    url="/user/resetPassword"
                    @success="onResetPasswordSuccess"
                    @fail="onFail"
                />
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { api } from '@/api'

const router = useRouter()

const userForm = ref({})
const passwordForm = ref({})

const onSuccess = () => {
    ElMessage.success('修改成功！')
}

const onFail = () => {
    ElMessage.error('修改失败！')
}

const onResetPasswordSuccess = () => {
    ElMessage.success('修改成功！即将跳转到登录页面重新登录')
    setTimeout(async () => {
        await router.push({
            path: '/login',
        })
    }, 3000)
}

onMounted(async () => {
    userForm.value = await api.api.userMe()
})

</script>

<style lang="scss" scoped>
</style>
