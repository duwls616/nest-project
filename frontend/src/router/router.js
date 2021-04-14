import Vue from 'vue'
import Router from 'vue-router'
import ContList from '../views/admin/ContList.vue'
import Home from '../views/Home.vue'
import Join from '../views/cont/Join.vue'
import JoinAuth from '../views/cont/JoinAuth.vue'
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
},
{
    path: '/cont/join/:contId',
    component: Join,
    props: { sidebar: false }
},
{
    path: '/cont/joinAuth',
    component: JoinAuth,
    props: { sidebar: false }
}
]
})