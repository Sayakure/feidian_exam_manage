import { getTests } from '@/api/test'
const state = {
  testInfo: {}
}
const mutations = {
  setTestInfo(state, testInfo) {
    state.testInfo = testInfo
  },
  removeUserInfo(state) {
    state.userInfo = {} // 重置为空对象
  }
}
const actions = {
  // 获取用户资料
  async getTests(context) {
    const result = await getTests()
    // 用户的详情数据
    const baseInfo = await getTests(result.userId)
    context.commit('setTestInfo', baseInfo) // 修改state中的用户资料
    return result
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
