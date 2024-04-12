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
