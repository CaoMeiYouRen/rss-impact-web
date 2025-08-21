import { computed, onMounted, ref, Ref, unref, shallowRef } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { AvueCrudOption } from '@/interfaces/avue'
import { ajax } from '@/utils/ajax'
import { objectValueToString, remove$key, stringValueToObject, transformObjectByColumns } from '@/utils/helper'

const Message = ElMessage
const MessageBox = ElMessageBox

export interface GetConfigResponse {
    option: AvueCrudOption
}

export interface GetListResponse<T = any> {
    total: number
    data: T[]
    page: number
    lastPage: number
}

export interface TransformOption {
    /**
     * 获取后执行转换操作
     *
     */
    postGet?: (data: any) => any
    /**
     * 保存前执行转换操作
    */
    preSave?: (data: any) => any
    /**
     * 更新前执行转换操作
     */
    preUpdate?: (data: any) => any
}

interface IProps extends TransformOption {
    postGet?: (data: any) => any
    /**
     * 保存前执行转换操作
    */
    preSave?: (data: any) => any
    /**
     * 更新前执行转换操作
     */
    preUpdate?: (data: any) => any

    model?: string
    btnText2?: string
    titleProp?: string
    noteProp?: string
    formUrl?: string
    disabled?: boolean
    globalWhere?: Record<string, unknown>
}

interface Page {
    currentPage: number
    pageSize: number
    total: number
    pageSizes: number[]
}

const defaultOption: AvueCrudOption = {
    title: '',
    index: false,
    align: 'center',
    border: true,
    stripe: true,
    columnBtn: false,
    refreshBtn: false,
    grid: false,
    column: [],
}

/**
 *
 * crud 封装
 * @author CaoMeiYouRen
 * @export
 * @param model
 * @param [transform]
 * @param [autoMount] 自动挂载
 * @returns
 */

export function useCrudAjax<T extends Record<string, unknown> = any>(form: Ref<T>, model: string | Ref<string>, transform: IProps = {}, autoMount: boolean = true) {
    const option = ref<AvueCrudOption>({ ...defaultOption })
    const list = ref<T[]>([])
    const selections = ref<T[]>([])
    const loading = ref(false)
    const page = ref<Page>({
        currentPage: 1,
        pageSize: 10,
        total: 0,
        pageSizes: [10, 20, 30, 40, 50, 100],
    })
    const search = ref<Record<string, unknown>>({})

    const formDom = shallowRef<any>(null)
    const slotColumns = computed(() => option.value.column?.filter((e) => e.slot))
    // 排除转换的 key
    const excludeKeys = computed(() => option.value.column?.filter((e) => {
        if (e.component === 'CrudForm') {
            return true
        }
        if (!e.type) {
            return false
        }
        if (['array', 'img', 'url', 'password'].includes(e.type)) {
            return true
        }
        if (e.type === 'select' && e.multiple) {
            return true
        }
        return false
    }).map((e) => e.prop || '').filter(Boolean))

    const searchWhere = computed(() => remove$key(search.value))

    const { postGet, preSave, preUpdate, globalWhere = {} } = transform

    async function getOption() {
        loading.value = true
        try {
            const response = await ajax<GetConfigResponse>({
                url: `${unref(model)}/config`,
                method: 'GET',
                // baseURL: '/api',
            })
            if (!response) {
                Message.error('获取表格配置失败')
                return
            }
            option.value = response.option
            if (response.option.pageSizes) {
                page.value.pageSizes = response.option.pageSizes
            }
        } catch (error) {
            Message.error('获取表格配置失败')
        } finally {
            loading.value = false
        }
    }

    // 查询
    async function getList(where?: Record<string, unknown>, sort?: Record<string, unknown>) {
        loading.value = true
        try {
            const response = await ajax<GetListResponse<T>>({
                url: unref(model),
                method: 'GET',
                query: {
                    query: JSON.stringify({
                        limit: page.value.pageSize,
                        page: page.value.currentPage,
                        sort: {
                            id: 'DESC', // 倒序
                            createdAt: 'DESC', // 倒序
                            ...sort || {},
                        },
                        where: {
                            ...globalWhere,
                            ...where || {},
                        },
                    }),
                },
            })
            if (!response) {
                Message.error('获取数据失败')
                list.value = []
                page.value.total = 0
                return
            }
            const { total = 0 } = response
            let { data = [] } = response
            data = data.map((e) => objectValueToString(e as any, excludeKeys.value) as any)
            if (postGet) {
                data = data.map((e) => postGet(e))
            }
            list.value = data as any[]
            page.value.total = total
        } catch (error) {
            Message.error('获取数据失败')
        } finally {
            loading.value = false
        }
    }

    // 新增
    async function rowSave(row: T, done: () => void) {
        let obj = { ...row }
        if (preSave) {
            obj = preSave(obj)
        }
        delete obj.id
        obj = stringValueToObject(obj, excludeKeys.value) as any
        obj = transformObjectByColumns(obj, option.value.column || [])
        try {
            const newObj = await ajax({
                url: unref(model),
                method: 'POST',
                data: obj,
            })
            if (!newObj) {
                Message.error('新增失败')
                return
            }
            Message.success('新增成功')
            await searchChange() // 重新拉取数据，直接新增会导致分页错误
        } catch (error) {
            Message.error('新增失败')
        } finally {
            done()
        }
    }
    // 更新
    async function rowUpdate(row: any, index: number, done: () => void) {
        let obj = { ...row }
        if (preUpdate) {
            obj = preUpdate(obj)
        }
        obj = stringValueToObject(obj, excludeKeys.value)
        obj = transformObjectByColumns(obj, option.value.column || [])
        try {
            const newObj = await ajax({
                url: `${unref(model)}`,
                method: 'PUT',
                data: obj,
            })
            if (!newObj) {
                Message.error('修改失败')
                return
            }
            Message.success('修改成功')
            await searchChange() // 更新不会导致分页错误
        } catch (error) {
            Message.error('修改失败')
        } finally {
            done()
        }
    }
    // 删除
    async function rowDel(row: any) {
        const id = row.id
        try {
            await MessageBox.confirm('此操作将永久删除该条数据, 是否继续？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            })
            loading.value = true
            const newObj = await ajax({
                url: `${unref(model)}/${id}`,
                method: 'DELETE',
            })
            if (!newObj) {
                Message.error('删除失败')
                return
            }
            Message.success('删除成功')
            await searchChange() // 重新拉取数据，直接删除会导致分页错误
        } catch (error) {
            console.error(error)
            // 排除正常关闭
            if (typeof error === 'string' && ['cancel', 'close'].includes(error)) {
                return
            }
            Message.error('删除失败')
        } finally {
            loading.value = false
        }
    }

    async function currentChange() {
        return searchChange()
    }

    async function sizeChange() {
        return searchChange()
    }

    // 搜索
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    async function searchChange(_searchForm: Record<string, unknown> = {}, done: () => void = () => { }) {
        const where = Object.fromEntries(Object.entries(searchWhere.value).filter(([, value]) => {
            if (typeof value === 'string' && value === '') {
                return false
            }
            return true
        }).map(([key, value]) => {
            const column = option.value.column?.find((e) => e.prop === key)
            if (column?.type === 'select') { // 如果为单选则精确匹配
                if (column?.multiple) {
                    if ((value as any)?.length === 0) { // 如果为空数组则不查询
                        return [
                            key,
                            undefined,
                        ]
                    }
                    return [
                        key,
                        {
                            $op: 'In',
                            value,
                        },
                    ]
                }
                return [
                    key,
                    value,
                ]
            }
            if ((column?.type === 'url' || column?.type === 'img') && column?.alone && Array.isArray(value)) { // 如果为 url/img 单选
                if (value?.length && value[0]) {
                    return [
                        key,
                        value[0],
                    ]
                }
                return [
                    key,
                    undefined,
                ]
            }
            if (column?.type === 'datetime' && column?.searchRange && Array.isArray(value)) { // 如果为日期且为范围选择
                if (value.length === 2) {
                    return [
                        key,
                        {
                            $op: 'Between',
                            value,
                            // 大于等于第一个时间
                            // 小于第二个时间，左闭右开 [date1,date2)
                        },
                    ]
                }
                return [
                    key,
                    undefined,
                ]
            }
            if (Array.isArray(value)) {
                if (value.length > 0) {
                    return [
                        key,
                        {
                            // $op: 'In',
                            // value,
                            $op: 'ILike', // 模糊查询
                            value: `%${value.map((e) => e.replaceAll('%', '\\%')).join('%')}%`, // 模糊查询
                        },
                    ]
                }
                return [
                    key,
                    undefined,
                ]
            }
            if (typeof value === 'string') {
                return [
                    key,
                    {
                        $op: 'ILike', // 模糊查询
                        value: `%${value?.replaceAll('%', '\\%')}%`, // 模糊查询
                    },
                ]
            }
            return [
                key,
                value,
            ]
        }))
        await getList(where)
        done()
    }

    async function searchReset() {
        page.value.currentPage = 1
        page.value.total = 0
        return getList()
    }

    async function refreshChange() {
        return searchChange()
    }

    async function initDic() {
        if (!formDom.value) {
            return
        }
        try {
            await formDom.value?.dicInit()
        } catch (error) {
            console.error(error)
        }
    }

    // 更新字典
    async function updateDic() {
        if (!formDom.value) {
            return
        }
        try {
            await formDom.value?.dicInit()
        } catch (error) {
            console.error(error)
        }
    }

    function selectionChange(newList: any[]) {
        selections.value = newList
    }

    if (autoMount) {
        onMounted(async () => {
            await getOption()
            await initDic()
            await getList()
        })
    }

    return {
        option,
        loading,
        list,
        page,
        form,
        formDom,
        getOption,
        getList,
        rowUpdate,
        rowSave,
        rowDel,
        currentChange,
        sizeChange,
        searchChange,
        searchReset,
        refreshChange,
        initDic,
        updateDic,
        slotColumns,
        selections,
        selectionChange,
        search,
        searchWhere,
    }
}
