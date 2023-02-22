import request from '@/utils/request'

/**
 *  下边的是新api
 */
// 注册
// export function register(data) {
//   return request({
//     url: '/register',
//     method: 'post',
//     data
//   })
// }
// // 登录
// export function login(data) {
//   return request({
//     url: '/login',
//     method: 'post'
//     data
//   })
// }

// 获取权限路由
// export function getPermissionRouter() {
//   return request({
//     url: '/getRouters'
//   })
// }

// 获取用户信息
// export function getUserInfo() {
//   return request({
//     url: '/info',
//     method: 'post'
//   })
// }
// 退出登录
// export function logout() {
// return request({
//     url: '/info',
//     method: 'post'
//   })
// }
// 修改用户信息
// export function setUserInfo() {
//   return request({
//     url: '/update',
//     method: postInfoVue
//   })
// }

export function login(data) {
  // 返回了promise对象
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
export function getUserInfo() {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

/**
 * 根据用户ID获取用户详情
 */
export function getUserDetailById(id) {
  return request({
    url: `/sys/user/${id}`
  })
}

