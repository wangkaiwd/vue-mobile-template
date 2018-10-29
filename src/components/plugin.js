import Toast from './myToast'
const install = (Vue, options) => {
  Vue.prototype.$message = function(message) {
    // Vue.extend: 使用Vue基础构造器，创建一个子类。参数是一个包含组件选项的对象
    const Constructor = Vue.extend(Toast)
    // 这里重新生成一个Vue实例的原因：要将toast进行重新挂载
    const toast = new Constructor({
      propsData: {
        message
      }
    })
    // 如果通过lslot插槽进行toast插入的话，需要通过为组件的slot属性动态赋值
    // toast.$slots.default = [message]
    toast.$mount()
    // vm.$el: Vue实例使用的根dom元素
    document.body.appendChild(toast.$el)
  }
}
export default {
  install
}
