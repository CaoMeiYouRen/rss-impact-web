<template>
    <div class="register-container">
        <div class="register-form">
            <avue-form
                v-model="registerForm"
                :option="option"
                @submit="submit"
            />
            <el-row class="row-bg" justify="end">
                <el-col :span="6">
                    <el-button type="success" @click="$router.push('/login')">
                        <el-icon><CaretLeft /></el-icon>
                        <span>返回</span>
                    </el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { RegisterDto } from '@/api/api'
import { baseValidatePassword, isEmail, isValidUsername } from '@/utils/validate'
import { api } from '@/api'

const router = useRouter()

const validateUsername = (_rule: any, value: string, callback: (error?: Error) => void) => {
    if (isValidUsername(value)) {
        return callback(new Error('请输入用户名'))
    }
    callback()
}
const validatePassword = (_rule: any, value: string, callback: (error?: Error) => void) => {
    const error = baseValidatePassword(value)
    if (error) {
        return callback(error)
    }
    callback()
}

const validateEmail = (_rule: any, value: string, callback: (error?: Error) => void) => {
    if (!isEmail(value)) {
        return callback(new Error('邮箱格式有误'))
    }
    callback()
}

const registerForm = ref<RegisterDto>({
    username: '',
    password: '',
    email: '',
})

const option = {
    submitText: '注册',
    column: {
        username: {
            span: 24,
            label: '用户名',
            prefixIcon: 'el-icon-user',
            autocomplete: 'off',
            rules: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { validator: validateUsername, trigger: 'blur' },
            ],
        },
        email: {
            span: 24,
            label: '邮箱',
            prefixIcon: 'el-icon-message',
            autocomplete: 'off',
            rules: [
                { required: true, message: '请输入邮箱', trigger: 'blur' },
                { validator: validateEmail, trigger: 'blur' },
            ],
        },
        password: {
            type: 'password',
            span: 24,
            label: '密码',
            prefixIcon: 'el-icon-lock',
            autocomplete: 'off',
            rules: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { validator: validatePassword, trigger: 'blur' },
            ],
        },
    },
}

const submit = async (form: RegisterDto, done: () => void) => {
    try {
        await api.api.authRegister(form)
        ElMessage.success('注册成功！即将跳转到登录页面')
        setTimeout(async () => {
            await router.push({
                path: '/login',
            })
        }, 3000)
    } catch (error) {
        console.error(error)
    } finally {
        done()
    }
}

</script>

<style lang="scss" scoped>
.register-container {
    display: flex;
    width: 100%;
    height: 100%;

    .register-form {
        margin: auto;
        margin-top: 15%;
        width: 400px;
    }
}
</style>
