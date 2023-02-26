// import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'
// import { login, getUserInfo, getUserDetailById } from '@/api/user'
// import { resetRouter } from '@/router'
const state = {
  exam: ''
}
const mutations = {
  // 设置token的mutations
  setExam(state, exam) {
    state.exam = exam
  },
  removeExamId(state) {
    state.exam = ''
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
