/*
 * @Author: chykea
 * @Date: 2023-08-10 17:53:26
 * @LastEditors: chykea
 * @LastEditTime: 2023-08-11 09:27:43
 * @Description: 路由类,客户端请求的接口
 */
import Router from 'koa-router'
import controller from '../controller/index.js'

const router = new Router({ prefix: '/' })

router.get('', controller.test)
router.get('/getContent', controller.getContent)

export default router