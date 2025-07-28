<template>
    <div class="login-container">
        <div class="login-form">
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
            <el-tabs v-model="activeTab">
                <el-tab-pane
                    v-if="!disableForm"
                    label="表单登录"
                    name="legacy"
                >
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
                                        v-if="!disablePasswordRegister"
                                        type="success"
                                        class="register-button"
                                        size="large"
                                        @click="$router.push('/register')"
                                    >
                                        <el-icon>
                                            <Position />
                                        </el-icon>
                                        <span>前往注册</span>
                                    </el-button>
                                </el-col>
                                <el-col :span="11">
                                    <el-button
                                        type="primary"
                                        native-type="submit"
                                        class="login-button"
                                        size="large"
                                        @click="onLogin"
                                    >
                                        <el-icon>
                                            <Lock />
                                        </el-icon>
                                        <span>登录</span>
                                    </el-button>
                                </el-col>
                            </el-row>
                        </template>
                    </avue-form>
                </el-tab-pane>
                <el-tab-pane
                    v-if="enableAuth0"
                    label="一键登录"
                    name="one-click"
                >
                    <el-row class="one-click-button-row" justify="space-between">
                        <el-col :span="11">
                            <el-button
                                v-if="enableRegister"
                                type="success"
                                size="large"
                                @click="onOneClickRegister"
                            >
                                <el-icon>
                                    <Position />
                                </el-icon>
                                <span>一键注册</span>
                            </el-button>
                        </el-col>
                        <el-col :span="11">
                            <el-button
                                type="primary"
                                size="large"
                                @click="onOneClickLogin"
                            >
                                <el-icon>
                                    <Lock />
                                </el-icon>
                                <span>一键登录</span>
                            </el-button>
                        </el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, shallowRef } from 'vue'
import { useRouter } from 'vue-router'
import { LoginDto } from '@/api/api'
import { baseValidatePassword, isValidUsername } from '@/utils/validate'
import { useUserStore } from '@/store/modules/user'
import logo from '@/assets/images/logo.png'
import { AvueFormOption } from '@/interfaces/avue'
import { useAppStore } from '@/store/modules/app'
import { Dictionary, getOtherQuery } from '@/utils/helper'

const router = useRouter()
const userStore = useUserStore()
const state = useAppStore()

const enableRegister = computed(() => state.authMeta.enableRegister)
const disablePasswordLogin = computed(() => state.authMeta.disablePasswordLogin)
const disablePasswordRegister = computed(() => state.authMeta.disablePasswordRegister)
const enableAuth0 = computed(() => state.authMeta.enableAuth0)

const disableForm = computed(() => disablePasswordLogin.value && disablePasswordRegister.value)

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
// one-click 一键登录
// legacy 表单登录
const activeTab = ref('one-click')

const onOneClickRegister = () => {
    const url = new URL(window.location.href)
    url.pathname = '/api/auth/register'
    // url.searchParams.set('redirect', window.location.origin)
    window.location.href = url.href
}

const onOneClickLogin = () => {
    const url = new URL(window.location.href)
    url.pathname = '/api/auth/login'
    // url.searchParams.set('redirect', window.location.origin)
    window.location.href = url.href
}

const onAuth0LoginCallback = async () => {
    try {
        if (otherQuery.value?.state?.startsWith('auth0_login_') || otherQuery.value?.state?.startsWith('oidc_login_')) { // 如果从 auth0 回调
            await userStore.getUserInfo()
            await router.push({
                path: redirect.value || '/',
                query: {},
            })
        }

    } catch (error) {
        console.error(error)
        await userStore.logout()
    }
}

onMounted(async () => {
    if (enableAuth0.value) {
        activeTab.value = 'one-click'
    } else {
        activeTab.value = 'legacy'
    }
    const query = router.currentRoute.value.query as Dictionary<string>
    redirect.value = query?.redirect
    otherQuery.value = getOtherQuery(query)
    await onAuth0LoginCallback()
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

        .logo-title {
            color: rgb(20, 34, 51);
        }

        .el-form-item {
            margin-bottom: 20px;
        }

        .button-row {
            // margin-top: 20px;
            margin-bottom: 20px;
        }

        .one-click-button-row {
            margin-top: 30px;
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

        .login-button {
            // background-color: #409eff;
            // border-color: #409eff;

            // &:hover {
            //     background-color: #66b1ff;
            //     border-color: #66b1ff;
            // }
        }

        .register-button {
            // margin-top: 20px;
            // background-color: #42b983;
            // border-color: #42b983;

            // &:hover {
            //     background-color: #3da87a;
            //     border-color: #3da87a;
            // }
        }
    }
}
</style>
