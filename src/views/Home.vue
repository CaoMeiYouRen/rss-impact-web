<template>
    <div class="home-container">
        <div class="home-content">
            <p class="welcome-title">
                欢迎用户 {{ userStore.user?.username }} 访问 RSS Impact
            </p>
            <p class="description">
                这是一个支持 Hook 的 RSS 订阅工具。<br>
                查看使用文档：<a
                    ref="docs"
                    href="https://rss-docs.cmyr.dev/docs/usage"
                    target="_blank"
                    title="rss-impact-server docs"
                >文档</a><br><br>
                <span v-if="hasAI">您也可以点击右下角的图标启动 AI 文档助手解答问题</span>
                <!-- 您也可以点击按钮启动交互式引导
                <el-button type="primary" @click="startTour">
                    打开引导
                </el-button> -->
            </p>
            <p class="powered-by">
                由 <a
                    href="https://github.com/CaoMeiYouRen/rss-impact-server"
                    target="_blank"
                    title="rss-impact-server"
                >rss-impact-server</a>
                强力驱动
            </p>
            <p class="issues">
                问题反馈： <a
                    ref="issues"
                    href="https://github.com/CaoMeiYouRen/rss-impact-server/issues"
                    target="_blank"
                    title="rss-impact-server/issues"
                >issues</a>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, shallowRef, onBeforeUnmount, computed } from 'vue'
import { useShepherd } from 'vue-shepherd'
import { useUserStore } from '@/store/modules/user'
import { VITE_PETERCAT_AI_TOKEN, VITE_DOMAIN } from '@/config/env'
const userStore = useUserStore()

const docs = shallowRef(null)
const issues = shallowRef(null)

const hasAI = computed(() => Boolean(VITE_PETERCAT_AI_TOKEN && location.host.endsWith(VITE_DOMAIN)))

const tour = useShepherd({
    useModalOverlay: true,
})

const startTour = () => {
    tour.start()
}

onMounted(() => {
    tour.addStep({
        attachTo: { element: docs.value, on: 'top' },
        text: '如果您更喜欢先查看使用文档，可以点击这里',
        buttons: [
            {
                text: '下一步',
                action: tour.next,
            },
        ],
    })
    tour.addStep({
        attachTo: { element: issues.value, on: 'top' },
        text: '如果您在使用中遇到了问题，可以点击这里反馈',
        buttons: [
            {
                text: '下一步',
                action: tour.next,
            },
        ],
    })
})

onBeforeUnmount(() => {
    tour.cancel()
})

</script>

<style lang="scss" scoped>
.home-container {
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100%;
    height: 100vh;

    // background: linear-gradient(135deg, #83a4d4, #b6fbff);
    // 设置背景颜色为浅灰色
    // background-color: rgba(245, 245, 245, 0.9);
    color: #333;
    font-family: 'Helvetica Neue', Arial, sans-serif;

    .home-content {
        background: rgb(255 255 255 / 0.9);
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 10px 20px rgb(0 0 0 / 0.1);
        text-align: center;
        max-width: 800px;
        width: 100%;

        .welcome-title {
            font-size: 1.8em;
            margin-bottom: 20px;
            color: #409eff;
        }

        .description {
            font-size: 1.5rem;
            margin-bottom: 20px;
            color: #666;

            a {
                color: #409eff;
                text-decoration: none;
                transition: color 0.3s ease;

                &:hover {
                    color: #66b1ff;
                }
            }
        }

        .powered-by,
        .issues {
            font-size: 1.2rem;
            color: #888;

            a {
                color: #409eff;
                text-decoration: none;
                transition: color 0.3s ease;

                &:hover {
                    color: #66b1ff;
                }
            }
        }
    }
}
</style>
