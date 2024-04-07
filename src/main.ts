import 'normalize.css'
import { createApp } from 'vue'
import axios from 'axios'
import zhLocale from '@smallwei/avue/lib/locale/lang/zh'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import {
    ElementPlus,
    ElementPlusIconsVue,
} from '@/plugins/element-plus'
import Avue from '@/plugins/avue'
import '@/permission'
import components from '@/components'

const app = createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .use(Avue, { axios, locale: zhLocale })

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

for (const [key, component] of Object.entries(components)) {
    app.component(key, component)
}

app.mount('#app')

