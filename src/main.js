import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/styles'
import '@/utils/rem.js'
import '@/request/axiosConfig'
import Api from '@/api'
import BaseIcon from '@/components/myIcon'

window.addEventListener('unhandledrejection', e => {
  console.log(e.reason);
})

Vue.component('base-icon', BaseIcon)

Vue.prototype.$api = Api

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
