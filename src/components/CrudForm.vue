<template>
    <div>
        <h3 v-if="formOption.title">
            {{ formOption.title }}
        </h3>
        <avue-form
            ref="formDom"
            v-model="form"
            :option="option"
            @submit="submit"
            @reset-change="resetChange"
        />
    </div>
</template>

<script lang="ts" setup>
import { PropType, Ref, ref, toRefs, onMounted } from 'vue'
import { Method } from 'axios'
import { ElMessage as Message } from 'element-plus'
import { AjaxConfig, ajax } from '@/utils/ajax'
import { AvueFormOption } from '@/interfaces/avue'
import { remove$key } from '@/utils/helper'

type Form = Record<string, unknown>

const defaultAvueFormOption: AvueFormOption = {
    column: [],
}
const props = defineProps({
    url: { // 提交到的URL
        type: String,
        required: false,
    },
    method: { // 请求方法
        type: String as PropType<Method>,
        default: 'POST',
    },
    option: { // 配置
        type: Object as PropType<AvueFormOption>,
    },
    optionUrl: { // 配置的URL
        type: String,
    },
    defaultValue: {
        type: Object as PropType<Form>,
    },
    config: {
        type: Object as PropType<AjaxConfig>,
    },
    disabled: {
        type: Boolean,
    },
})
const emit = defineEmits(['submit', 'reset-change', 'success', 'fail'])

const { url, method, optionUrl, option, defaultValue, config, disabled } = toRefs(props)

const form = defineModel<Form>({ default: {} as Form })

const loading = ref(false)
const formDom = ref()
const formOption: Ref<AvueFormOption> = ref({ ...defaultAvueFormOption })

const submit = async (data: any, done: () => void) => {
    try {
        const response = await ajax({
            ...config?.value || {},
            url: url?.value || '',
            method: method.value,
            data: remove$key({ ...data }),
        })
        emit('submit', response)
        emit('success', response)
    } catch (error: any) {
        console.error(error)
        // Message.error('提交失败！')
        emit('submit', error)
        emit('fail', error)
    } finally {
        done()
    }
}
const resetChange = () => {
    emit('reset-change')
    formDom.value?.clearValidate()
}

const getOption = async () => {
    try {
        if (option?.value) {
            formOption.value = option.value
        } else {
            loading.value = true
            const _url = optionUrl?.value || `${url?.value}/option`
            const response = await ajax<AvueFormOption>({
                url: _url,
                method: 'GET',
            })
            if (!response) {
                Message.error('获取表单配置失败')
                return
            }
            formOption.value = response
        }
        formOption.value.column?.forEach((col) => {
            if (typeof col.value !== 'undefined' && col.prop) {
                form.value[col.prop] = col.value
            }
        })
        formOption.value.disabled = disabled.value
    } catch (error) {
        Message.error('获取表单配置失败')
    } finally {
        loading.value = false
    }
}

// 更新字典
const updateDic = async() => {
    try {
        await formDom.value?.updateDic()
    } catch (error) {
        console.error(error)
    }
}

onMounted(async () => {
    await getOption()
    await updateDic()
    if (defaultValue?.value) {
        form.value = {
            ...defaultValue.value,
        }
    }
})

</script>

<style lang="scss" scoped>
</style>
