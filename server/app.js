const Koa = require('koa2')

const app = new Koa()


app.use((context, next) => {

    next()
})
