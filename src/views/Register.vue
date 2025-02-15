<template>
    <div class="register-container">
        <div class="register-form">
            <div>
                <div class="logo" tabindex="-1">
                    <el-image
                        :src="logo"
                        tabindex="-1"
                        lazy
                    >
                        <template #placeholder>
                            <div class="image-slot">
                                Loading<span class="dot">...</span>
                            </div>
                        </template>
                        <template #error>
                            <div class="image-slot">
                                <el-icon><icon-picture /></el-icon>
                            </div>
                        </template>
                    </el-image>
                </div>
                <h1 class="logo-title">
                    RSS Impact
                </h1>
            </div>
            <avue-form
                ref="formRef"
                v-model="registerForm"
                :option="option"

                @submit="submit"
            >
                <template #menu-form="{size}">
                    <el-row class="button-row" justify="space-between">
                        <!-- <el-col :span="11">
                            <el-button
                                type="danger"
                                class="clear-button"
                                :size="size"
                                @click="clearForm"
                            >
                                <el-icon><Delete /></el-icon>
                                <span>清空</span>
                            </el-button>
                        </el-col> -->
                        <el-col :span="11">
                            <el-button
                                type="primary"
                                class="login-button"
                                size="large"
                                @click="$router.push('/login')"
                            >
                                <el-icon><CaretLeft /></el-icon>
                                <span>返回登录</span>
                            </el-button>
                        </el-col>
                        <el-col :span="11">
                            <el-button
                                type="success"
                                native-type="submit"
                                class="register-button"
                                size="large"
                                :disabled="disablePasswordRegister"
                                @click="onRegister"
                            >
                                <el-icon><Position /></el-icon>
                                <span>注册</span>
                            </el-button>
                        </el-col>
                    </el-row>
                </template>
            </avue-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, shallowRef } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { RegisterDto } from '@/api/api'
import { baseValidatePassword, isEmail, isValidUsername } from '@/utils/validate'
import { api } from '@/api'
import logo from '@/assets/images/logo.png'
import { AvueFormOption } from '@/interfaces/avue'
import { useAppStore } from '@/store/modules/app'

const router = useRouter()
const state = useAppStore()

const disablePasswordRegister = computed(() => state.authMeta.disablePasswordRegister)

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

const formRef = shallowRef<any>(null)

const registerForm = ref<RegisterDto>({
    username: '',
    password: '',
    email: '',
})

const option: AvueFormOption = {
    submitBtn: false,
    submitText: '注册',
    emptyBtn: false,
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
    } as any,
}

const onRegister = () => {
    formRef.value?.submit()
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

const clearForm = () => {
    registerForm.value = {
        username: '',
        password: '',
        email: '',
    }
}
</script>

<style lang="scss" scoped>
.register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, #83a4d4, #b6fbff);

    .register-form {
        background: rgba(255, 255, 255, 1);
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        width: 400px;
        text-align: center;

        .logo {
            margin: 0 auto 20px;
            width: 150px;
        }

        .logo-title{
            color:rgb(20, 34, 51);
        }

        .el-form-item {
            margin-bottom: 20px;
        }

        .button-row {
            margin-top: 20px;
            margin-bottom: 20px;
        }

        .el-button {
            width: 100%;
            border-radius: 5px;
            transition: background-color 0.3s ease;

            // &:hover {
            //     background-color: #66bb6a;
            // }
        }

        .clear-button {
            background-color: #f56c6c;
            border-color: #f56c6c;

            &:hover {
                background-color: #f78989;
                border-color: #f78989;
            }
        }
    }
}
</style>
