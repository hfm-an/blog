/**
 * @Author : Amnhh
 * @Date : 2018/10/21
 * @Email : amnhhlod@163.com
 * @Description :
 */
const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
    ctx.body = 'Hello World'
})

app.listen(3000)