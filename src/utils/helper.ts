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
 * 将 obj 中的支持 nullable 的字段 替换为 null
 *
 * @author CaoMeiYouRen
 * @date 2024-04-26
 * @param obj
 * @param column
 */
export function emptyToNull(obj: Record<string, unknown>, column: Field[]) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => {
        // 除了 boolean 类型的字段
        if (typeof value === 'boolean') {
            return [key, value]
        }
        // 对于 nullable 的字段，如果为 空，则设置为 null；
        if (!value && column.find((e) => e.prop === key)?.nullable) {
            return [key, null]
        }
        return [key, value]
    }))
}

