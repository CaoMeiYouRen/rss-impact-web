import 'normalize.css'
import { createApp } from 'vue'
import axios from 'axios'
import zhLocale from '@smallwei/avue/lib/locale/lang/zh'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import { VITE_API_BASE_URL } from './config/env'
import router from '@/router'
import store from '@/store'
import {
    ElementPlus,
    ElementPlusIconsVue,
} from '@/plugins/element-plus'
import Avue from '@/plugins/avue'
import '@/permission'
import components from '@/components'
import '@/plugins/xlsx'

const app = createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus, {
        locale: zhCn,
    })
    .use(Avue, {
        axios: axios.create({
            baseURL: VITE_API_BASE_URL,
            timeout: 10000,
        }),
        locale: zhLocale,
    })

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

for (const [key, component] of Object.entries(components)) {
    app.component(key, component)
}

app.mount('#app')

