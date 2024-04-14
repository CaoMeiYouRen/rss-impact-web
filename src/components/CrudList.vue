<template>
    <div class="app-container">
        <!-- <slot
            name="header"
            v-bind="crud"
        /> -->
        <avue-crud
            ref="formDom"
            v-model="form"
            v-model:page="page"
            v-model:search="search"
            :option="option"
            :table-loading="loading"
            :data="list"
            @row-update="rowUpdate"
            @row-save="rowSave"
            @row-del="rowDel"
            @search-change="searchChange"
            @search-reset="searchReset"
            @current-change="currentChange"
            @size-change="sizeChange"
            @refresh-change="refreshChange"
            @selection-change="selectionChange"
        />
        <!-- <slot
            name="footer"
            v-bind="crud"
        /> -->
    </div>
</template>

<script lang="ts" setup>
import { PropType, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useCrudAjax } from '@/hooks/use-crud-ajax'

const route = useRoute()

const props = defineProps({
    model: {
        type: String,
        required: true,
    },
    postGet: {
        type: Function as PropType<(data: any) => any>,
    },
    preSave: {
        type: Function as PropType<(data: any) => any>,
    },
    preUpdate: {
        type: Function as PropType<(data: any) => any>,
    },
    globalWhere: {
        type: Object,
        default: () => ({}),
    },
})
const form = defineModel<any>({ default: {} as any })
const crud = useCrudAjax(form, props.model, props, true)
const {
    option,
    loading,
    list,
    page,
    formDom,
    rowUpdate,
    rowSave,
    rowDel,
    currentChange,
    sizeChange,
    searchChange,
    searchReset,
    refreshChange,
    selectionChange,
    updateDic,
    search,
} = crud
watch(
    () => route.path,
    async () => {
        if (route.path.includes(props.model)) {
            document.title = option.value.title || document.title
            await updateDic() // 显示当前页面时刷新字典，解决新增用户等字典未更新问题
            await refreshChange() // 重新载入数据，确保数据同步
        }
    },
)

defineExpose({
    searchReset,
    refreshChange,
    updateDic,
})

</script>

<style lang="scss" scoped>
</style>
