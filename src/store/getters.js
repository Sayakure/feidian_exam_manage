const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  name: state => state.user.userInfo.name,
  avatar: state => state.user.userInfo.avatar,
  // 要改成name
  userInfo: state => state.user.userInfo,
  userId: state => state.user.userInfo.userId,
  // 改名改名改名
  routes: state => state.permission.routes,
}
export default getters
