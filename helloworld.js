/**
 * @Author : Amnhh
 * @Date : 2018/10/21
 * @Email : amnhhlod@163.com
 * @Description :
 */
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
// 初始化 router
const router = new Router()

router
    .get(
        'user',
        /^\/user.*$/,
        (ctx, next) => {
            next()
            console.log(12345)
        },
        (ctx, next) => {
            ctx.body = '这里的 router 为 /'
        }
    )

app
    .use(router.routes())
    .listen(3000)


/**
 * used on 2018-10-22
 */
// 写法上感觉是从上往下，先 logger 再到获取 response time 再到主控制器
// 因为有 await 的存在，所以执行其实是设置了 ctx.body
// 之后计算 response time, 并且写入 X-Response-Time
// 然后再 logger

// // logger
// app.use(async (ctx, next) => {
//     console.log('fn1')
//     next()
//     const rt = ctx.response.get('X-Response-Time')
//     console.log(`${ctx.method} ${ctx.url} - ${rt}`)
// })
//
// // get response time
// app.use(async (ctx, next) => {
//     console.log('fn2')
//     const start = Date.now()
//     await next()
//     const ms = Date.now() - start
//     console.log('fn3')
//     console.log(next)
//     ctx.body = 'Hello World'
//     ctx.set('X-Response-Time', `${ms}ms`)
// })
//
// // main controller
// app.use(async (ctx, next) => {
// })

// app.listen(3000)