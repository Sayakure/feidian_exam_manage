import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'
import { login, getUserInfo } from '@/api/user'
import { resetRouter } from '@/router'
const state = {
  token: getToken(), // 设置token为共享
  // token: '123',
  userInfo: {}
}
const mutations = {
  // 设置token的mutations
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  removeToken(state) {
    state.token = null // 设置vuex中的token为null
    removeToken() // 同步删除缓存中的token
  },
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  },
  removeUserInfo(state) {
    state.userInfo = {} // 重置为空对象
  }
}
const actions = {
  async login(context, data) {
    const result = await login(data)
    console.log(data);
    // result就是token
    context.commit('setToken', result)
    // context.commit('setToken', result.token)
    setTimeStamp()
  },
  // 获取用户资料
  async getUserInfo(context) {
    // 下面的两段都要删 改成
    const result = await getUserInfo()
    context.commit('setUserInfo', result)
    return result
  },
  // 登出操作
  logout(context) {
    context.commit('removeToken')
    context.commit('removeUserInfo')
    // 重置路由
    resetRouter()
    context.commit('permission/setRoutes', [], { root: true })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
