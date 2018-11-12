/**
 * 所有的 router 的集合列表
 */
const routes = {
    // 列表页
    list : require('./list')
}

module.exports = function routersRegister (router) {
    Object.values(routes)
        .map(routeFn => {
            routeFn(router)
        })
}