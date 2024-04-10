import { Method, AxiosRequestHeaders } from 'axios'
import { VITE_API_BASE_URL } from '@/config/env'
import { instance } from '@/api'

export interface AjaxConfig {
    url: string
    query?: Record<string, unknown>
    data?: Record<string, unknown>
    method?: Method
    headers?: AxiosRequestHeaders
    timeout?: number
    baseURL?: string
}

/**
 * axios 接口封装
 *
 * @author CaoMeiYouRen
 * @export
 * @param {AjaxConfig} config
 * @returns {Promise<AxiosResponse<any>>}
 */
export async function ajax<T = any>(config: AjaxConfig): Promise<T> {
    // try {
    const { url, query = {}, data = {}, method = 'GET', headers = {}, timeout = 10000, baseURL = VITE_API_BASE_URL } = config
    const resp = await instance(url, {
        method,
        headers,
        params: query,
        data,
        timeout,
        baseURL,
    })
    return resp.data
    // } catch (error: any) {
    //     if (error.toJSON) {
    //         console.error(error.toJSON())
    //     } else {
    //         console.error(error)
    //     }
    //     throw error
    // }
}
