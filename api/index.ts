export const config = {
    runtime: 'edge',
}
const API_BASE_URL = process.env.API_BASE_URL
export default (request: Request): Response | Promise<Response> => {
    // 如果 VITE_API_BASE_URL 是 http url，则将请求转发到该地址，否则报错
    // 将 body method headers cookie 等信息转发到目标地址
    if (API_BASE_URL && (API_BASE_URL.startsWith('http://') || API_BASE_URL.startsWith('https://'))) {
        const url = new URL(request.url)
        url.hostname = new URL(API_BASE_URL).hostname
        // eslint-disable-next-line no-undef
        const init: RequestInit = {
            method: request.method,
            headers: request.headers,
            body: request.body,
            redirect: request.redirect,
            credentials: request.credentials,
        }
        const newRequest = new Request(url, init)
        return fetch(newRequest)
    }
    return new Response(`VITE_API_BASE_URL is not set or is not a valid HTTP URL: ${API_BASE_URL}`, {
        status: 500,
    })
}
