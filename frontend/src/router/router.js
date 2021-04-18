import Vue from 'vue'
import Router from 'vue-router'
import ContList from '../views/mr/ContList.vue'
import Home from '../views/Home.vue'
import Join from '../views/cont/Join.vue'
import JoinForm from '../views/cont/JoinForm.vue'
Vue.use(Router) //플러그인 등록

export default new Router({
mode: 'history',
routes: [
{
    path: '/mr/contlist',
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
    path: '/cont/joinForm',
    component: JoinForm,
    props: { sidebar: false }
}
]
})