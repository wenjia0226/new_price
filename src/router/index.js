import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Compare from '@/components/compare'
import Main from '@/components/main'
import Product from '@/components/product'
import ProductDetail from '@/components/proDetail'
import Introduce from '@/components/introduce'
import Report from '@/components/report'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/main'},
    {
      path: '/',
      component: Home,
      children: [
        {path: '/main', component: Main},
        {path: '/compare', component: Compare },
        {path: '/product', component: Product },
        {path: '/productDetail', component: ProductDetail},
        {path: '/introduce', component: Introduce},
         {path: '/report', component: Report}
      ]
    }
  ]
})
