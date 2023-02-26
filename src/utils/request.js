import axios from 'axios'
import router from '@/router'
import { Message } from 'element-ui'
import { getTimeStamp } from './auth'
import store from '@/store'
const TimeOut = 3600
const service = axios.create({
//    设置基础地址
// 环境变量 npm run dev  /api   /生产环境 npm run build  /prod-api
  // baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: 'http://10.162.67.2',
  baseURL: "http://121.4.111.212:8081",
  timeout: 5000
})
// 请求拦截器
service.interceptors.request.use(config => {
  // 请求接口  config是请求配置
  if (store.getters.token) {
    if (IsCheckTimeOut()) {
      store.dispatch('user/logout')
      router.push('/login')
      return Promise.reject(new Error('token超时了'))
    }
    config.headers.token = `${store.state.user.token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})
// 响应拦截器
service.interceptors.response.use(response => {
  // 成功执行
  // axios默认加了一层data的包裹

  // success 变成code了，一会要查 数据结构也不一样，要改
  const { code, message, data } = response.data
  if (code == 200) {
    return data
  } else {
    Message.error(message)
    return Promise.reject(new Error(message))
  }
}, error => {
  // 后端告诉是否超时
  // 后端的码是否是10002
  if (error.response && error.response.data && error.response.data.code === 10002) {
    store.dispatch('user/logout')
    router.push('/login')
  } else {
    Message.error(error.message)
  }
  return Promise.reject(error)
})
/**
 * 是否超时
 */
function IsCheckTimeOut() {
  var currentTime = Date.now()
  var timeStamp = getTimeStamp()
  return (currentTime - timeStamp) / 1000 > TimeOut
}
export default service
