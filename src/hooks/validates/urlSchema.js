import z from 'zod'

export const urlSchema = z.object({
    url: z.string().url()
}).refine(data => data.url.split('v=')[0] === 'https://www.youtube.com/watch?', {
    message: 'Invalid youtube url',
    path: ['url']
})