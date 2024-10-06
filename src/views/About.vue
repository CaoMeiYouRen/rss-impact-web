<template>
    <div class="about-container">
        <div class="about-content">
            <h1 class="about-title">
                关于 RSS Impact
            </h1>
            <p class="about-description">
                RSS + Hook = RSS Impact<br>
                一个支持 Hook 的 RSS 订阅工具。
            </p>
            <p class="about-description" />

            <h2 class="about-subtitle">
                作者
            </h2>
            <p class="about-description">
                <b>CaoMeiYouRen</b><br>
                博客: <a href="https://blog.cmyr.ltd" target="_blank">https://blog.cmyr.ltd</a><br>
                GitHub: <a href="https://github.com/CaoMeiYouRen" target="_blank">@CaoMeiYouRen</a>
            </p>

            <h2 class="about-subtitle">
                项目链接
            </h2>
            <p class="about-description">
                GitHub:<br>
                前端部分：<a href="https://github.com/CaoMeiYouRen/rss-impact-web" target="_blank">rss-impact-web</a><br>
                后端部分：<a href="https://github.com/CaoMeiYouRen/rss-impact-server" target="_blank">rss-impact-server</a>
                <br>
                Demo: <a href="https://rss-demo.cmyr.dev" target="_blank">Demo 站</a>
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about-container {
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

    .about-content {
        background: rgba(255, 255, 255, 0.9);
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        text-align: center;
        max-width: 600px;
        width: 100%;

        .about-title {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: #409eff;
        }

        .about-subtitle {
            font-size: 1.8rem;
            margin-top: 30px;
            margin-bottom: 15px;
            color: #409eff;
        }

        .about-description {
            font-size: 1.2rem;
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
    }
}
</style>
