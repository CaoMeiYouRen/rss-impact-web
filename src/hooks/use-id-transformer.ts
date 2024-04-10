
/**
 * 转换指定 props 上的 数组为 id 数组；并反过来
 *
 * @author CaoMeiYouRen
 * @date 2024-04-10
 * @export
 * @param props
 */
export function useIdTransformer(props: string[]) {
    const postGet = (data: any) => {
        props.forEach((prop) => {
            if (data?.[prop]?.length) {
                data[prop] = data[prop].map((e) => e.id) as any[]
            }
        })
        return data
    }

    const pre = (data: any) => {
        props.forEach((prop) => {
            if (data?.[prop]?.length) {
                data[prop] = data[prop].map((id) => ({ id })) as any[]
            }
        })
        return data
    }
    const preSave = pre
    const preUpdate = pre

    return {
        postGet,
        preSave,
        preUpdate,
    }
}
