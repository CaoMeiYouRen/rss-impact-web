/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

interface ImportMetaEnv {
    // 环境变量
    readonly VITE_API_BASE_URL: string

}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
