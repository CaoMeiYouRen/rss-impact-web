import { Api } from './api'
import { VITE_API_BASE_URL } from '@/config/env'

export const api = new Api({
    baseURL: VITE_API_BASE_URL,
    timeout: 10000,
})
