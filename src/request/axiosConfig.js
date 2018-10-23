import axios from 'axios'
import qs from 'qs'

import httpServer from './serverConfig'
import { getToken, handleErrorCode } from './tool'

const instance = axios.create({
  baseURL: httpServer.mockURL,
  timeout: 20000
})
const CancelToken = instance.CancelToken;
const requestMap = new Map();
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
instance.interceptors.request.use(
  config => {
    const { method, data, url } = config
    // 防重复提交: 原理：在请求还未返回内容时取消再次发起的请求
    const keyString = qs.stringify(Object.assign({}, { url, method }, data));
    if (requestMap.get(keyString)) {
      // 取消当前请求
      config.cancelToken = new CancelToken((cancel) => {
        cancel('Please slow down a little');
      });
    }
    requestMap.set(keyString, true);
    Object.assign(config, { _keyString: keyString });
    if (method === 'post') { config.data = qs.stringify(data) }
    const token = getToken()
    token && (config.headers['user_token'] = token)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  res => {
    // 请求成功后重置requestMap
    requestMap.set(res.config._keyString, false)
    const { status, data } = res
    if (status === 200) {
      // if (data.code === 0) {
      //   return data
      // }
      return data
      // 通过code来处理错误码
      handleErrorCode(data.code)
    }
    console.log('request error');
    // 在参数进行传递之前进行错误提示处理
    return Promise.reject(res)
  },
  error => {
    console.log('服务器异常')
    return Promise.reject(error)
  }
)
export default instance
