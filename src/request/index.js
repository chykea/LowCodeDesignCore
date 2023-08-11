/*
 * @Author: chykea
 * @Date: 2023-08-11 09:46:54
 * @LastEditors: chykea
 * @LastEditTime: 2023-08-11 10:44:12
 * @Description: 请求api
 */
import service from './config.js'

async function getContent() {
    const res = await service.get('/test/getContent')
    return Promise.resolve(res)
}

export  {
    getContent
}
