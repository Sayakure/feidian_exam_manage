import router from '@/router'
import { constantRoutes } from '@/router'
import goTest from '@/router/modules/goTest'
import showCourse from '@/router/modules/showCourse'
import teacherExam from '@/router/modules/teacherExam'
import teacherPublish from '@/router/modules/teacherPublish'
console.log(constantRoutes)
const state = {
  routes: [...constantRoutes],
  role: '',
}
const mutations = {
  setRoutes(state, newRoutes) {
    console.log("*******", newRoutes);
    state.routes = [...newRoutes]
    console.log(state.routes)
    router.addRoutes([goTest])
    console.log(router)
  },
  getRoutes(state) {
    return state.routes
  },
  removeRoutes(state) {
    state.routes = ""
  },
  setRole(state, role) {
    console.log("!!!", role);
    state.role = role
  },
  getRole(state) {
    return state.role
  },
  removeRole(state, role) {
    state.role = ""
  },
}
const actions = {
  // 筛选权限路由也要改
  filterRoutes(context) {
    console.log(context);
    const role = context.state.role
    console.log("role", role);
    let menus = []
    if (role === "学生") {
      menus.push(goTest)
      console.log('pushGo');
      menus.push(showCourse)
      console.log('@@@@', menus);
    }
    if (role === "老师") {
      menus.push(teacherExam)
      menus.push(teacherPublish)
      console.log('@@@@', menus);
    }
    console.log('!~!~!', context.state.routes,menus);
    context.commit('setRoutes', menus)
    return menus
    // const routes = []
    // await menus = getPermissionRouter()
    // menus.forEach(key => {
    //   routes.push(...asyncRoutes.filter(item => item.name === key))
    // })
    // return routes
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
