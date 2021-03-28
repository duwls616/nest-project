import Vue from 'vue'
import Router from 'vue-router'
import ContList from './views/ContList.vue'
import Home from './views/Home.vue'

Vue.use(Router) //플러그인 등록

export default new Router({
mode: 'history',
routes: [
{
    path: '/contlist',
    component: ContList
},
{
    path: '/',
    component: Home
}
]
})