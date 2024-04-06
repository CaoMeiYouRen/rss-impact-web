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
 * @date 2019-07-25
 * @export
 * @param {number} data 单位B
 * @returns {string}
 */
export function dataFormat(data: number): string {
    const arr = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
    for (let i = 0; i < arr.length; i++) {
        if (data < 1024) {
            return `${data.toFixed(2)} ${arr[i]}`
        }
        data /= 1024
    }
    return `${data.toFixed(2)} PB`
}
