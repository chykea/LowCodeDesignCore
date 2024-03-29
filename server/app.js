import Koa from 'koa'
import { koaBody } from 'koa-body'
import base from './router/index.js'

const app = new Koa()


app.use(koaBody())
app.use(async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*")
    ctx.set("Access-Control-Allow-Headers", "*")
    await next()
})

app.use(base.routes())


app.listen(5174, () => console.log("http://localhost:5174 server is running"))