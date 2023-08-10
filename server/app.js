import Koa from 'koa'
import { koaBody } from 'koa-body'
import base from './router/index.js'
import Router from 'koa-router'

const app = new Koa()

// import Router from 'koa-router'
// const router = new Router()


// router.get('/', (ctx, next) => {
//     ctx.body = 'hello koa'
// })
// router.get('/test', (ctx, next) => {
//     ctx.body = 'test'
// })

app.use(koaBody())

app.use(base.routes())


app.listen(5174, () => console.log("http://localhost:5174 server is running"))