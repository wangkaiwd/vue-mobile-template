import Vue from 'vue'
import App from './App'
import store from './store'

import '@/assets/styles'
import '@/utils/rem.js'

// 在开发环境引入'vconsole',方便移动端调试
if (process.env.NODE_ENV === 'development') {
  import('vconsole').then((VConsole) => {
    new VConsole();
  }).catch(err => console.error(err));
}


import '@/request/axiosConfig'
import Api from '@/api'
import BaseIcon from '@/components/icon'

Vue.component('base-icon', BaseIcon)

Vue.prototype.$api = Api

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // router,
  store,
  components: { App },
  template: '<App/>'
})
