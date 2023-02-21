import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 前置守卫
const whileList = ['/login', '/404', '/assign']
router.beforeEach(async(to, from, next) => {
  NProgress.start() // 开启进度条
  // next是一个必须执行的钩子 不执行就卡主了
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 在vuex中没有用户资料才需要获取用户信息
      if (!store.getters.userId) {
        await store.dispatch('user/getUserInfo')
        // const result =
        // const routes = await store.dispatch('permission/filterRoutes', result.roles.menu)
        // console.log(routes, 111)
        // router.addRoutes(...routes, { path: '*', redirect: '/404', hidden: true })
        next(to.path)
      } else {
        next()
      }
    }
  } else {
    if (whileList.indexOf(to.path) > -1) {
      // 表示在白名单里面
      next()
    } else {
      next('/login')
    }
  }
  NProgress.done() // 是为了解决手动输入地址时 进度条不关闭的问题
})

// 后置守卫
router.afterEach(() => {
  NProgress.done()
})
