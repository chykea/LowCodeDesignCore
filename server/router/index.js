import Router from 'koa-router'
import controller from '../controller/index.js'

const router = new Router({ prefix: '/test' })

router.get('/', controller.test)

export default router