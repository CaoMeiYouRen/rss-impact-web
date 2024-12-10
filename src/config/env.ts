// API基础路径
export const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL
export const VITE_WITH_CREDENTIALS = import.meta.env.VITE_WITH_CREDENTIALS === 'true'

export const VITE_SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN

export const VITE_BAIDU_STATISTICS = import.meta.env.VITE_BAIDU_STATISTICS
export const VITE_DOMAIN = import.meta.env.VITE_DOMAIN

export const __PROD__ = import.meta.env.PROD
export const __DEV__ = import.meta.env.DEV

export const VITE_GIT_HASH = import.meta.env.VITE_GIT_HASH
export const VITE_GIT_DATE = import.meta.env.VITE_GIT_DATE

export const VITE_TIMEOUT = parseInt(import.meta.env.VITE_TIMEOUT) || 30000

export const VITE_PETERCAT_AI_TOKEN = import.meta.env.VITE_PETERCAT_AI_TOKEN
