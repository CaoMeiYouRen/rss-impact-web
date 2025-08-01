import path from 'path'
import { execSync } from 'child_process'
import { env } from 'process'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import { vitePluginSwaggerTypescriptApi, GenerateApiOption } from 'vite-plugin-swagger-typescript-api'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import dayjs from 'dayjs'
import Sonda from 'sonda/vite'

// 生成 gitHash
let gitHash = process.env.HEROKU_SLUG_COMMIT?.slice(0, 7) || process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7)
let gitDate: string | undefined
if (!gitHash) {
    try {
        gitHash = execSync('git rev-parse HEAD').toString().trim().slice(0, 7)
        const gitDateValue = new Date(execSync('git log -1 --format=%cd').toString().trim())
        if (dayjs(gitDateValue).isValid()) {
            gitDate = gitDateValue.toISOString()
        } else {
            gitDate = new Date().toISOString()
        }
    } catch {
        gitHash = 'unknown'
        gitDate = 'unknown'
    }
}

if (!gitDate) {
    gitDate = new Date().toISOString()
}

env.VITE_GIT_HASH = gitHash
env.VITE_GIT_DATE = gitDate

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        tsconfigPaths(),
        vitePluginSwaggerTypescriptApi({ // swagger-typescript-api 的配置，具体可参考 https://github.com/acacode/swagger-typescript-api
            name: 'api.ts', // 要生成的文件名称
            output: path.resolve('./src/api'), // 生成的文件所在的文件夹，注意要使用 path.resolve 解析出绝对路径，否则路径可能会有错误
            url: 'http://localhost:3000/docs-json', // 如果从远程接口载入
            httpClientType: 'axios', // or "fetch" 生成的接口类型
            primitiveTypeConstructs: (constructs) => ({
                ...constructs,
                string: {
                    'date-time': 'Date', // 修复 Date 类型问题
                },
            } as any),
            unwrapResponseData: true, // 解包 response 中的 data
        } as GenerateApiOption),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        Sonda({
            enabled: process.env.NODE_ENV === 'production', // 是否启用，仅在生产环境启用
            format: 'html',
            filename: 'sonda-report.html',
            open: false, // 是否自动打开浏览器
            // detailed: true, // 是否显示详细信息
            sources: true, // 是否显示源码
            gzip: true, // 是否启用 gzip 压缩
            brotli: true, // 是否启用 brotli 压缩
        }),
    ],
    server: {
        port: Number(process.env.PORT) || 4400,
        open: true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000',
                changeOrigin: true,
                // rewrite: (url) => url.replace(/^\/api/, ''),
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/styles/mixins.scss"; @import "@/styles/variables.scss";', // 添加公共样式
                silenceDeprecations: ['import', 'legacy-js-api'], // 忽略警告
            },
        },
    },
    build: {
        // 增大代码块大小警告的阈值
        chunkSizeWarningLimit: 1024,
        minify: 'esbuild',
        sourcemap: true,
        rollupOptions: {
            output: {
                // 手动划分代码块
                manualChunks: {
                    vendor: ['vue', 'vue-router', 'pinia', '@sentry/vue', '@vueuse/core'],
                    elementPlusIcons: ['@element-plus/icons-vue'],
                    // elementPlus: ['element-plus'],
                    // avue: ['@smallwei/avue'],
                    echarts: ['echarts', 'vue-echarts'],
                    utils: ['axios', 'dayjs', 'lodash-es', 'file-saver', 'nprogress', 'path-browserify', 'path-to-regexp'],
                },
            },
        },
    },
    define: {
        'process.env': {},
    },
})
