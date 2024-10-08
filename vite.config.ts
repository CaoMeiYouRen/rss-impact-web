import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import { vitePluginSwaggerTypescriptApi, GenerateApiOption } from 'vite-plugin-swagger-typescript-api'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

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
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    server: {
        port: 4400,
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
            },
        },
    },
    build: {
        // 增大代码块大小警告的阈值
        chunkSizeWarningLimit: 1024,
        minify: 'esbuild',
        rollupOptions: {
            output: {
                // 手动划分代码块
                manualChunks: {
                    vendor: ['vue', 'vue-router', 'pinia', '@sentry/vue', '@vueuse/core', '@vueuse/integrations'],
                    elementPlus: ['element-plus', '@element-plus/icons-vue'],
                    avue: ['@smallwei/avue'],
                    echarts: ['echarts', 'vue-echarts'],
                    utils: ['axios', 'dayjs', 'lodash-es', 'file-saver', 'nprogress', 'path-browserify', 'path-to-regexp', 'universal-cookie'],
                },
            },
        },
    },

})
