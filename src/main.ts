import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import 'normalize.css'
import {
    ElementPlus,
    ElementPlusIconsVue,
} from '@/plugins/element-plus'
import Avue from '@/plugins/avue'

const app = createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .use(Avue, { axios })

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')
