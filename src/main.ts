import 'normalize.css'
import { createApp } from 'vue'
import axios from 'axios'
import zhLocale from '@smallwei/avue/lib/locale/lang/zh'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as Sentry from '@sentry/vue'
import App from './App.vue'
import { __PROD__, VITE_API_BASE_URL, VITE_DOMAIN, VITE_SENTRY_DSN, VITE_TIMEOUT, VITE_WITH_CREDENTIALS } from './config/env'
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
import '@/plugins/shepherd'

const app = createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus, {
        locale: zhCn,
    })
    .use(Avue, {
        axios: axios.create({
            baseURL: VITE_API_BASE_URL,
            timeout: VITE_TIMEOUT,
            withCredentials: VITE_WITH_CREDENTIALS,
        }),
        locale: zhLocale,
    })

if (__PROD__ && VITE_SENTRY_DSN && location.host.endsWith(VITE_DOMAIN)) {
    Sentry.init({
        app,
        dsn: VITE_SENTRY_DSN,
        integrations: [
            Sentry.browserTracingIntegration({ router }),

            Sentry.replayIntegration({}),
        ],
        tracesSampleRate: 0.1,
        tracePropagationTargets: ['localhost', '127.0.0.1', /\/api/],
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
    })
}

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

for (const [key, component] of Object.entries(components)) {
    app.component(key, component)
}

app.mount('#app')

