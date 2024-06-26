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
                v-model="loginForm"
                :option="option"
                @submit="submit"
            />
            <el-row class="row-bg" justify="end">
                <el-col :span="6">
                    <el-button type="success" @click="$router.push('/register')">
                        <el-icon><Position /></el-icon>
                        <span>注册</span>
                    </el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { LoginDto } from '@/api/api'
import { baseValidatePassword, isValidUsername } from '@/utils/validate'
import { useUserStore } from '@/store/modules/user'
import logo from '@/assets/images/logo.png'

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

const loginForm = ref<LoginDto>({
    username: '',
    password: '',
})
const redirect = ref('')
const otherQuery = ref<Dictionary<string>>({})

const option = {
    submitText: '登录',
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
    },
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

onMounted(() => {
    const query = router.currentRoute.value.query as Dictionary<string>
    redirect.value = query?.redirect
    otherQuery.value = getOtherQuery(query)
})

</script>

<style lang="scss" scoped>
.login-container {
    display: flex;
    width: 100%;
    height: 100%;

    .login-form {
        .logo {
            margin: auto;
            margin-bottom: 12%;
            width: 250px;
        }
        margin: auto;
        margin-top: 5%;
        width: 400px;
    }
}
</style>
