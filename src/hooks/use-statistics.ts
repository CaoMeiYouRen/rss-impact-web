import { computed, onMounted, Ref, ref, watch } from 'vue'
import dayjs from 'dayjs'
import { get } from 'lodash-es'
import { useCrudAjax } from './use-crud-ajax'

/**
 *
 *
 * @author CaoMeiYouRen
 * @date 2024-06-28
 * @export
 * @param model
 * @param category 横轴数据
 * @param columns 纵轴数据
 */
export function useStatistics(model: string, category: string, columns: string[]) {
    const form = ref()
    const { loading, list, getOption, page, getList, option } = useCrudAjax(form, model, undefined, false)

    page.value.pageSize = 1000 // 设置记录条数

    const defaultDate = dayjs().hour(0).minute(0).second(0).millisecond(0)
    const defaultStart = defaultDate.add(-31, 'day')
    const defaultEnd = defaultDate.add(1, 'day').add(-1, 'millisecond')

    const datetimerange: Ref<Date[]> = ref([
        defaultStart.toDate(),
        defaultEnd.toDate(),
    ])

    const column = computed(() => option.value.column?.filter((e) => columns.includes(e?.prop || '')) || [])

    const chartOption = computed(() => ({
        xAxis: {
            type: 'category',
            data: list.value.map((e) => get(e, category)),
        },
        yAxis: {
            type: 'value',
        },
        series: column.value.map((col) => ({
            data: list.value.map((e) => get(e, col?.prop || '')),
            type: 'line',
            name: col.label,
        })),
        tooltip: {
            trigger: 'axis',
        },
    }))

    const onSearch = async () => {
        const start = datetimerange.value[0]
        const end = datetimerange.value[1]
        loading.value = true
        await getList(
            {
                date: {
                    $op: 'Between',
                    value: [start, end],
                },
            },
            {
                date: 'ASC', // 正序
                createdAt: 'ASC', // 正序
                id: 'ASC',
            },
        )
        loading.value = false
    }

    watch([datetimerange], async () => {
        await onSearch()
    })

    onMounted(async () => {
        await getOption()
        await onSearch()
    })

    return {
        loading,
        list,
        datetimerange,
        // chartData,
        // chartSettings,
        chartOption,
        onSearch,
    }
}
