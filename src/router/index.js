import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('pages/home')
const Mine = () => import('pages/mine')
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', exact: true, name: 'home', component: Home },
    { path: '/mine', name: 'mine', component: Mine }
  ],
  // 切换到新路由后时，页面滚动到顶部
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
