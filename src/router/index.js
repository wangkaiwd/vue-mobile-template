import Vue from 'vue'
import Router from 'vue-router'
import Testing from './testing'

Vue.use(Router)

const router = new Router({
  routes: [...Testing],
  // 切换到新路由后时，页面滚动到顶部
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

// 路由全局导航守卫
router.beforeEach((to, from, next) => {
  next()
})

export default router
