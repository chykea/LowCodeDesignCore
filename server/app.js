import Koa from 'koa'
import { koaBody } from 'koa-body'
import base from './router/index.js'

const app = new Koa()


app.use(koaBody())

app.use(base.routes())


app.listen(5174, () => console.log("http://localhost:5174 server is running"))