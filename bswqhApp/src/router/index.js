import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        // 首页
        {
            path: '/',
            name: 'Home',
            component: ()=>import('@/views/home')
        },
        // 分类
        {
            path: '/classification',
            name: 'Classification',
            component: ()=>import('@/views/classification')
        },
        // 微店
        {
            path: '/micro_shop',
            name: 'MicroShop',
            component: ()=>import('@/views/micro_shop')
        },
        // 购物车
        {
            path: '/shopping_cart',
            name: 'ShoppingCart',
            component: ()=>import('@/views/shopping_cart')
        },
        // 我的
        {
            path: '/mine',
            name: 'Mine',
            component: ()=>import('@/views/mine')
        }
    ]
})
