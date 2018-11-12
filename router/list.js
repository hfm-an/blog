/**
 * 列表页 router
 */
module.exports = function listRouter (router) {
    router
        .get('/list', async (ctx, next) => {
            await ctx.render('list.html')
        })
}