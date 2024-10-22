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
                v-if="!disablePasswordLogin"
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
import { computed, onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { api } from '@/api'
import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'

const router = useRouter()
const state = useAppStore()
const userStore = useUserStore()
// 是否禁用密码登录，如果禁用了，则隐藏修改密码表单
const disablePasswordLogin = computed(() => Boolean(state.authMeta.disablePasswordLogin || userStore.user?.disablePasswordLogin))

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
