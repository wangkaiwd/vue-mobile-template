import Vue from 'vue'
import Router from 'vue-router'
import Testing from './testing'

Vue.use(Router)

export default new Router({
  routes: [
    ...Testing, //测试模块
  ],
  // 切换到新路由后时，页面滚动到顶部 
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
