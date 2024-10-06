<template>
    <div class="login-container">
        <div class="login-form">
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
                ref="formRef"
                v-model="loginForm"
                :option="option"
                @submit="submit"
            >
                <template #menu-form="{size}">
                    <el-row class="button-row" justify="space-between">
                        <el-col :span="11">
                            <el-button
                                type="primary"
                                native-type="submit"
                                class="login-button"
                                :size="size"
                                @click="onLogin"
                            >
                                <el-icon><Lock /></el-icon>
                                <span>登录</span>
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
                                type="success"
                                class="register-button"
                                :size="size"
                                @click="$router.push('/register')"
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
import { onMounted, ref, shallowRef } from 'vue'
import { useRouter } from 'vue-router'
import { LoginDto } from '@/api/api'
import { baseValidatePassword, isValidUsername } from '@/utils/validate'
import { useUserStore } from '@/store/modules/user'
import logo from '@/assets/images/logo.png'
import { AvueFormOption } from '@/interfaces/avue'

const router = useRouter()
const userStore = useUserStore()

type Dictionary<T> = { [key: string]: T }

function getOtherQuery(query: Dictionary<string>) {
    return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
            acc[cur] = query[cur]
        }
        return acc
    }, {} as Dictionary<string>)
}

const validateUsername = (rule: any, value: string, callback: (error?: Error) => void) => {
    if (isValidUsername(value)) {
        return callback(new Error('请输入用户名'))
    }
    callback()
}
const validatePassword = (rule: any, value: string, callback: (error?: Error) => void) => {
    const error = baseValidatePassword(value)
    if (error) {
        return callback(error)
    }
    callback()
}
const formRef = shallowRef<any>(null)
const loginForm = ref<LoginDto>({
    username: '',
    password: '',
})
const redirect = ref('')
const otherQuery = ref<Dictionary<string>>({})

const option: AvueFormOption = {
    submitBtn: false,
    submitText: '登录',
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

const onLogin = () => {
    formRef.value?.submit()
}

const submit = async (form: LoginDto, done: () => void) => {
    try {
        await userStore.login(form)
        await userStore.getUserInfo()
        await router.push({
            path: redirect.value || '/',
            query: otherQuery.value,
        })
    } catch (error) {
        console.error(error)
    } finally {
        done()
    }
}

const clearForm = () => {
    loginForm.value = {
        username: '',
        password: '',
    }
}

onMounted(() => {
    const query = router.currentRoute.value.query as Dictionary<string>
    redirect.value = query?.redirect
    otherQuery.value = getOtherQuery(query)
})

</script>

<style lang="scss" scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, #83a4d4, #b6fbff);

    .login-form {
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

        .login-button {
            background-color: #409eff;
            border-color: #409eff;

            &:hover {
                background-color: #66b1ff;
                border-color: #66b1ff;
            }
        }

        .register-button {
            margin-top: 20px;
            background-color: #42b983;
            border-color: #42b983;

            &:hover {
                background-color: #3da87a;
                border-color: #3da87a;
            }
        }
    }
}
</style>
