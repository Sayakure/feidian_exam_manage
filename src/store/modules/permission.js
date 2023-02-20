import { constantRoutes } from '@/router'
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
  // 筛选权限路由
  filterRoutes(context, menus) {
    // const routes = []
    // console.log(menus)
    // menus.forEach(key => {
    //   routes.push(...asyncRoutes.filter(item => item.name === key))
    // })
    // context.commit('setRoutes', routes)
    // return routes
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
