import { Field } from '@/interfaces/avue'

/**
 * 移除对象中 $ 开头的 key
 *
 * @author CaoMeiYouRen
 * @export
 * @param obj
 * @returns
 */
export function remove$key(obj: Record<string, unknown>) {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => !String(key).startsWith('$')))
}

/**
 *
 * 转换 object 到 string
 * @author CaoMeiYouRen
 * @date 2024-04-06
 * @export
 * @param obj
 * @param [excludeKeys=[]] 排除的key
 */
export function objectValueToString(obj: Record<string, unknown>, excludeKeys: string[] = []) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => {
        if (excludeKeys.includes(key)) {
            return [key, value]
        }
        if (typeof value === 'object') {
            return [key, JSON.stringify(value, null, 4)]
        }
        return [key, value]
    }))
}

/**
 *
 * 转换 string 到 object
 * @author CaoMeiYouRen
 * @date 2024-04-06
 * @export
 * @param obj
 * @param [excludeKeys=[]] 排除的key
 */
export function stringValueToObject(obj: Record<string, unknown>, excludeKeys: string[] = []) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => {
        if (excludeKeys.includes(key)) {
            return [key, value]
        }
        if (typeof value === 'string') {
            try {
                return [key, JSON.parse(value)]
            } catch (error) {
                return [key, value]
            }
        }
        return [key, value]
    }))
}

/**
 * 格式化流量数据
 *
 * @author CaoMeiYouRen
 * @date 2024-04-12
 * @export
 * @param data 单位B
 */
export function dataFormat(data: number | bigint): string {
    const arr = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
    let i = 0
    let value: number | bigint

    if (typeof data === 'bigint' || data > Number.MAX_SAFE_INTEGER) {
        value = BigInt(data)
        while (value >= 1024n && i < arr.length - 1) {
            value /= 1024n
            i++
        }
        return `${value} ${arr[i]}`
    }
    value = data
    while (value >= 1024 && i < arr.length - 1) {
        value /= 1024
        i++
    }
    if (i === 0) {
        return `${value} ${arr[i]}`
    }
    return `${value.toFixed(2)} ${arr[i]}`
}

export function isNullOrUndefined(value: unknown) {
    return typeof value === 'undefined' || value === null
}

/**
 * 基于 columns 转换 object
 *
 * @author CaoMeiYouRen
 * @date 2024-05-26
 * @export
 * @template T
 * @param obj
 * @param columns
 */
export function transformObjectByColumns<T extends object = Record<string, unknown>>(obj: T, columns: Field[]): T {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => {
        // 除了 boolean 类型的字段
        if (typeof value === 'boolean') {
            return [key, value]
        }
        const column = columns.find((e) => e.prop === key)
        if (['url', 'img'].includes(column?.type || '') && column?.alone && Array.isArray(value)) { // 解决 url/img 的问题
            value = value[0]
        }
        // 对于支持 nullable 的字段，
        if (column?.nullable) {
            if (column?.isId && !value) { // 如果为 id，且为 假值，则设置为 null，解决 可选 id 的问题
                return [key, null]
            }
            if (value === '') { // 如果是空字符串，则设置为 null，解决 可选字段 的问题
                return [key, null]
            }
        }
        if (typeof value === 'object' && value !== null && column?.params?.option?.column) { // 如果 value 是 object ，则递归
            return [key, transformObjectByColumns(value as any, column?.params?.option?.column)]
        }
        return [key, value]
    })) as T
}
/**
 * 获取安全的文件名
 * @param filename
 */
export function getSafeFileName(filename: string) {
    const pattern = /[^\u4E00-\u9FA5A-Za-z0-9_-]/g
    return filename.replace(pattern, '_')
}

/**
 * 检测是否为 http/https 开头的 url
 * @param url
 * @returns
 */
export const isHttpURL = (url: string) => /^(https?:\/\/)/.test(url)

export type Dictionary<T> = { [key: string]: T }

export function getOtherQuery(query: Dictionary<string>) {
    return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
            acc[cur] = query[cur]
        }
        return acc
    }, {} as Dictionary<string>)
}
