import Vue from 'vue'
import Router from 'vue-router'
import Customers from './views/CustomerList.vue'

Vue.use(Router) //플러그인 등록

export default new Router({
mode: 'history',
routes: [
{
path: '/customers',
component: Customers
}
]
})