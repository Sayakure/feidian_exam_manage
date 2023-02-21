const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  name: state => state.user.userInfo.username,
  // 要改成name
  userId: state => state.user.userInfo.userId,
  // 要删了？或者改成id
  staffPhoto: state => state.user.userInfo.staffPhoto,
  // 改名改名改名
  routes: state => state.permission.routes
}
export default getters
