// import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'
// import { login, getUserInfo, getUserDetailById } from '@/api/user'
// import { resetRouter } from '@/router'
const state = {
  examId: ''
}
const mutations = {
  // 设置token的mutations
  setExamId(state, id) {
    state.id = id
  },
  removeExamId(state) {
    state.id = ''
  }
}
const actions = {
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
