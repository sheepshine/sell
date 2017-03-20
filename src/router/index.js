import Vue from 'vue'
import Router from 'vue-router'
import Goods from '../components/goods/goods'
import Seller from '../components/seller/seller'
import Ratings from '../components/ratings/ratings'

Vue.use(Router)

export default new Router({
    routes: [
        // 动态路径参数 以冒号开头
        { path: '/goods', component: Goods },
        { path: '/seller', component: Seller },
        { path: '/ratings', component: Ratings }
    ],
    linkActiveClass: 'active'
})

