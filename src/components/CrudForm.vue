<template>
    <div>
        <template v-if="form && formOption">
            <h3 v-if="formOption.title">
                {{ formOption.title }}
            </h3>
            <avue-form
                ref="formDom"
                v-model="form"
                :option="formOption"
                @submit="submit"
                @reset-change="resetChange"
            />
        </template>
        <template v-else>
            <span>无数据</span>
        </template>
    </div>
</template>

<script lang="ts" setup>
import { PropType, Ref, ref, toRefs, onMounted, watch, shallowRef } from 'vue'
import { Method } from 'axios'
import { ElMessage as Message } from 'element-plus'
import { AjaxConfig, ajax } from '@/utils/ajax'
import { AvueFormOption } from '@/interfaces/avue'
import { isNullOrUndefined, remove$key } from '@/utils/helper'

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
    dynamicOption: {
        type: Array as PropType<AvueFormOption[]>,
    },
    preSubmit: {
        type: Function as PropType<(data: any) => any>,
    },
})
const emit = defineEmits(['submit', 'reset-change', 'success', 'fail'])

const { url, method, optionUrl, option, defaultValue, config, disabled, dynamicOption, preSubmit } = toRefs(props)

const form = defineModel<Form>({ default: {} as Form })

const loading = ref(false)
const formDom = shallowRef()
const formOption: Ref<AvueFormOption> = ref({ ...defaultAvueFormOption })

const submit = async (data: any, done: () => void) => {
    try {
        let reqData = remove$key({ ...data })
        if (preSubmit?.value) {
            reqData = preSubmit?.value(reqData)
        }
        const response = await ajax({
            ...config?.value || {},
            url: url?.value || '',
            method: method.value,
            data: reqData,
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
        loading.value = true
        if (dynamicOption?.value?.length) { // 解决 Hook 的动态配置
            formOption.value = dynamicOption.value.find((e) => e.optionId === form.value?._type) as AvueFormOption
        } else if (option?.value) {
            formOption.value = option.value
        } else {
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

        if (formOption.value) {
            initForm()
        }
    } catch (error) {
        console.error(error)
        Message.error('获取表单配置失败')
    } finally {
        loading.value = false
    }
}

const initForm = async () => {
    if (formOption.value) {
        formOption.value.disabled = disabled.value
        // 过滤 hide
        formOption.value.column = formOption.value.column?.filter((col) => !col.hide)
        // 初始化默认值
        formOption.value.column?.forEach((col) => {
            if (!isNullOrUndefined(col.value) && col.prop && isNullOrUndefined(form.value[col.prop])) {
                form.value[col.prop] = col.value
            }
        })
        // 如果是 get ，则获取数据
        if (method.value?.toUpperCase() === 'GET' && url?.value) {
            const _url = url?.value
            const response = await ajax<Form>({
                url: _url,
                method: 'GET',
            })
            if (!response) {
                Message.error('获取表单内容失败')
                return
            }
            form.value = response
        }
    }
}

// 更新字典
const updateDic = async () => {
    try {
        // await formDom.value?.updateDic()
        await formDom.value?.dicInit()
    } catch (error) {
        console.error(error)
    }
}

onMounted(async () => {
    await getOption()
    await updateDic()
    if (defaultValue?.value && typeof defaultValue?.value === 'object') {
        form.value = {
            ...defaultValue.value,
        }
    }
    if (dynamicOption?.value?.length) { // 解决 Hook 的动态配置
        watch(() => form.value?._type, async () => {
            await getOption()
        })
    }
})

defineExpose({
    updateDic,
    resetChange,
    getOption,
    initForm,
})

</script>

<style lang="scss" scoped>
</style>
