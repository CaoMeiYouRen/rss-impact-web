import { computed, ref, Ref, unref } from 'vue'
import { ElMessage } from 'element-plus'
import { AvueCrudOption } from '@/interfaces/avue'
import { ajax } from '@/utils/ajax'

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
// eslint-disable-next-line max-lines-per-function
export function useCrudAjax<T = any>(model: string | Ref<string>, transform: IProps = {}, autoMount: boolean = true) {

    const option = ref({ ...defaultOption })
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

    const form = ref<T>({} as any)
    const formDom = ref()
    const slotColumns = computed(() => option.value.column?.filter((e) => e.slot))
    // 排除转换的 key
    const excludeKeys = computed(() => option.value.column?.filter((e) => {
        if (!e.type) {
            return false
        }
        if (['array', 'img', 'password'].includes(e.type)) {
            return true
        }
        if (e.type === 'select' && e.multiple) {
            return true
        }
        return false
    }).map((e) => e.prop))

    const searchWhere = computed(() => search.value)

    const { postGet, preSave, preUpdate, globalWhere = {} } = transform

    async function getOption() {
        loading.value = true
        try {
            const response = await ajax<GetConfigResponse>({
                url: `${unref(model)}/config`,
                method: 'GET',
            })
            if (!response) {
                ElMessage.error('获取表格配置失败')
                return
            }
            option.value = response.option
            if (response.option.pageSizes) {
                page.value.pageSizes = response.option.pageSizes
            }
        } catch (error) {
            ElMessage.error('获取表格配置失败')
        } finally {
            loading.value = false
        }
    }

}
