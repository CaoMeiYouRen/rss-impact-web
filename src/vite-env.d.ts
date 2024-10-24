/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

interface ImportMetaEnv {
    // 环境变量
    readonly VITE_API_BASE_URL: string
    readonly VITE_WITH_CREDENTIALS: string
    readonly VITE_SENTRY_DSN: string
    readonly VITE_BAIDU_STATISTICS: string
    readonly VITE_DOMAIN: string

}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
