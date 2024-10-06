<template>
    <div class="register-container">
        <div class="register-form">
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
            <avue-form
                v-model="registerForm"
                :option="option"
                @submit="submit"
            >
                <template #menu-form="{size}">
                    <el-row class="button-row" justify="space-between">
                        <el-col :span="11">
                            <el-button
                                type="success"
                                native-type="submit"
                                class="register-button"
                                :size="size"
                                @click="onRegister"
                            >
                                <el-icon><Position /></el-icon>
                                <span>注册</span>
                            </el-button>
                        </el-col>
                        <el-col :span="11">
                            <el-button
                                type="danger"
                                class="clear-button"
                                :size="size"
                                @click="clearForm"
                            >
                                <el-icon><Delete /></el-icon>
                                <span>清空</span>
                            </el-button>
                        </el-col>
                        <el-col :span="11">
                            <el-button
                                type="primary"
                                class="login-button"
                                :size="size"
                                @click="$router.push('/login')"
                            >
                                <el-icon><CaretLeft /></el-icon>
                                <span>返回登录</span>
                            </el-button>
                        </el-col>
                    </el-row>
                </template>
            </avue-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, shallowRef } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { RegisterDto } from '@/api/api'
import { baseValidatePassword, isEmail, isValidUsername } from '@/utils/validate'
import { api } from '@/api'
import logo from '@/assets/images/logo.png'
import { AvueFormOption } from '@/interfaces/avue'

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
    formRef.value.submit()
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

            &:hover {
                background-color: #66bb6a;
            }
        }

        .clear-button {
            background-color: #f56c6c;
            border-color: #f56c6c;

            &:hover {
                background-color: #f78989;
                border-color: #f78989;
            }
        }

        .register-button {
            background-color: #42b983;
            border-color: #42b983;

            &:hover {
                background-color: #3da87a;
                border-color: #3da87a;
            }
        }

        .login-button {
            margin-top: 20px;
            background-color: #409eff;
            border-color: #409eff;

            &:hover {
                background-color: #66b1ff;
                border-color: #66b1ff;
            }
        }
    }
}
</style>
