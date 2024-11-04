<template>
    <div class="home-container">
        <div class="home-content">
            <p class="welcome-title">
                欢迎用户 {{ userStore.user?.username }} 访问 RSS Impact
            </p>
            <p class="description">
                这是一个支持 Hook 的 RSS 订阅工具。<br>
                了解更多：<a
                    href="https://rss-docs.cmyr.dev/"
                    target="_blank"
                    title="rss-impact-server docs"
                >文档</a>
            </p>
            <p class="powered-by">
                由  <a
                    href="https://github.com/CaoMeiYouRen/rss-impact-server"
                    target="_blank"
                    title="rss-impact-server"
                >rss-impact-server</a>
                强力驱动
            </p>
            <p class="issues">
                问题反馈： <a
                    href="https://github.com/CaoMeiYouRen/rss-impact-server/issues"
                    target="_blank"
                    title="rss-impact-server/issues"
                >issues</a>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'
const userStore = useUserStore()
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
        background: rgba(255, 255, 255, 0.9);
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
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

        .powered-by ,.issues{
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
