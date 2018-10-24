/**
 * 全局事件绑定
 */

// 全局处理promise reject中没有捕获的内容
export const handlePromiseReject = () => {
  window.addEventListener('unhandledrejection', e => {
    console.log(e)
  })
}