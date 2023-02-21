import { constantRoutes } from '@/router'
// 请求权限
// import { getPermissionRouter } from '@/api/user'

// , asyncRoutes
const state = {
  routes: constantRoutes
}
const mutations = {
  setRoutes(state, newRoutes) {
    state.routes = [...constantRoutes, ...newRoutes]
  }
}
const actions = {
  // 筛选权限路由也要改
  // async filterRoutes(context) {
    // const routes = []
    // await menus = getPermissionRouter()
    // menus.forEach(key => {
    //   routes.push(...asyncRoutes.filter(item => item.name === key))
    // })
    // context.commit('setRoutes', routes)
    // return routes
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
