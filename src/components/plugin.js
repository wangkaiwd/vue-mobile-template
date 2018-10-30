import Toast from './myToast'
let currentToast
const install = Vue => {
  Vue.prototype.$message = function(message, options) {
    if (currentToast) {
      currentToast.close()
    }
    currentToast = createToast(message, options, Vue)
  }
}
// 创建toast实例，将toast实例添加到浏览器，并返回toast
const createToast = (message, options, Vue) => {
  // Vue.extend: 使用Vue基础构造器，创建一个子类。参数是一个包含组件选项的对象
  const Constructor = Vue.extend(Toast)
  // 这里重新生成一个Vue实例的原因：要将toast进行重新挂载
  const toast = new Constructor({
    propsData: {
      message,
      ...options
    }
  })
  // 如果通过lslot插槽进行toast插入的话，需要通过为组件的slot属性动态赋值
  // toast.$slots.default = [message]
  toast.$mount()
  // vm.$el: Vue实例使用的根dom元素
  document.body.appendChild(toast.$el)
  return toast
}
export default {
  install
}

// toast组件实现思路
// 1. 如何调用生成toast的方法: 通过调用Vue实例对象上的方法(this.$message())
// 2. 如何实现：
//      a. 在构造函数原型上绑定$message方法：Vue.prototype.$message = function() {}
//      b. 通过install方法进行方法定义,使用Vue.use()来使用插进
// 3. props传递：通过在调用实例的$message(params)进行参数传递
// 4. 之后通过重新创建Vue实例，通过propsData进行组件props参数的传递，将实例根节点放入到body中。
// 5. 之后在元素消失的时候的动画实现是通过setTimeout实现的，可能有一些问题
