import type { VercelRequest, VercelResponse } from '@vercel/node'

export const edge = true

export const config = {
    runtime: 'edge',
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
    return response.send(`Hello Edge! url: ${request.url}`)
}
