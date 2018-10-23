import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('pages/home')
const Mine = () => import('pages/mine')
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', exact: true, name: 'home', component: Home },
    { path: '/mine', name: 'mine', component: Mine }
  ]
})
