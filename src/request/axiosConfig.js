import axios from 'axios'
import qs from 'qs'

import httpServer from './serverConfig'
import { getToken } from './tool'

const instance = axios.create({
  baseURL: httpServer.mockURL,
  timeout: 20000
})
const CancelToken = instance.CancelToken;
const requestMap = new Map();
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
instance.interceptors.request.use(
  config => {
    const {method, data,url} = config
    // 防重复提交: 原理：在请求还未返回内容时取消再次发起的请求
    const keyString = qs.stringify(Object.assign({}, {url, method}, data));
    if (requestMap.get(keyString)) {
      // 取消当前请求
      config.cancelToken = new CancelToken((cancel) => {
        cancel('Please slow down a little');
      });
    }
    requestMap.set(keyString, true);
    Object.assign(config, {_keyString: keyString});
    if (method === 'post') {
      config.data = qs.stringify(data)
    }
    const token = getToken()
    token && (config.headers['user_token'] = token)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  response => {
    // 请求成功后重置requestMap
    requestMap.set(res.config._keyString, false);
    if (response.status === 200) {
      return response.data
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    return Promise.reject(error)
  }
)
export default instance
