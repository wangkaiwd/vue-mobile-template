import instance from './axiosConfig'
// 添加toast提示
/**
 * 提前定义接口路径，请求方法
 * @param url {String} 请求地址
 * @param method {String} 请求方式
 * @returns {Promise} 返回调用接口函数
 */
export const ajaxFunc = (url, method = 'post') => {
  /**
   * 发起get或post请求
   * @param params {Object} 请求参数
   * @param success {Function} 成功回调
   * @param error {Function} 失败回调
   */
  return (params = {}) => {
    // 返回promise实例，方便通过async和await使异步代码变为同步
    return new Promise((resolve, reject) => {
      let value
      method.toLowerCase() === 'post' ? value = 'data' : value = 'params'
      return instance({
        url,
        method,
        [value]: params
      }).then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
}
/**
 * 判断本地存储中的token是否存在，从而在请求头中携带
 * @returns {string} [返回localStorage中的token,或者返回'']
 */
export const getToken = () => {
  var userInfo = localStorage.getItem('user') || ''
  let token = ''
  userInfo && (token = JSON.parse(userInfo).user_token)
  return token
}
// 错误码配置项
const codeMsg = {
  '10000': 'user_token为空',
  '10001': '登录信息过期或已失效，请登录！',
  '10002': 'user_token不存在 || 超级会员身份失效'
}
/**
 * 对错误code进行统一处理：
 * @param code {Number} 后端返回的code
 */
export const handleErrorCode = (code) => {
  codeMsg[code] && alert(codeMsg[code]);
}
