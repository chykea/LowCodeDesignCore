/*
 * @Author: chykea
 * @Date: 2023-08-11 09:46:54
 * @LastEditors: chykea
 * @LastEditTime: 2023-08-18 14:42:18
 * @Description: 请求api
 */
import service from './config.js'



async function getContent() {
    const res = await service.get('/test/getContent')
    return Promise.resolve(res)
}
async function getTemplate() {
    const res = await service.get('/test/getTemplate')
    return Promise.resolve(res)
}
async function saveContent(params) {
    const res = await service.post('/test/postContent', params)
    return Promise.resolve(res)
}
export {
    getContent,
    getTemplate,
    saveContent,
}
