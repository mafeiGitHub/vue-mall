import axios from 'axios'
import store from '@/store'
import router from '@/router'
// 基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 5000
})
// 拦截业务逻辑
// 请求配置的修改
// 如果本地有token就在头部携带

instance.interceptors.request.use(config => {
  // 获取用户信息
  const { profile } = store.state.profile
  // 如果有token
  if (profile.token) {
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})
// res=>res.data 取出data数据
instance.interceptors.response.use(res => res.data, err => {
  // 401状态码,进入该函数
  if (err.response && err.response.status === 401) {
    // 清空无效用户信息
  //  跳转到登录页
  //  跳转需要传参给登录页码
    store.commit('user/setUser', {})
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    // 转换url编码防止解析地址出问题
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})
// 请求工具函数
export default (url, method, submitData) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
