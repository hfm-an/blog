module.exports = function listRouter (router) {
    router
        .get('/views', async (ctx, next) => {
            await ctx.render('views.html')
        })
}