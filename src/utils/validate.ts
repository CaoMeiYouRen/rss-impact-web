export const isEmpty = (str: string): boolean => !str || str.trim().length === 0

export const isValidUsername = (str: string): boolean => isEmpty(str)

export const isExternal = (path: string): boolean => /^(https?:|mailto:|tel:)/.test(path)

export const isEmail = (str: string): boolean => /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(str)

export function baseValidatePassword(value: string): Error | null {
    if (isEmpty(value)) {
        return new Error('请输入密码')
    }
    if (value.length < 6) {
        return new Error('密码不得短于6位')
    }
    return null
}
