/*
 * @Author: chykea
 * @Date: 2023-08-10 17:53:26
 * @LastEditors: chykea
 * @LastEditTime: 2023-08-11 18:07:35
 * @Description: 路由类,客户端请求的接口
 */
import Router from 'koa-router'
import controller from '../controller/index.js'

const router = new Router({ prefix: '/test' })

router.get('/', controller.test)
router.get('/getContent', controller.getContent)
router.post('/postContent', controller.postContent)
// router.all('/*', controller.tip);

export default router