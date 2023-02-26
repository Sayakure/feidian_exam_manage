import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 前置守卫
const whileList = ['/login', '/404', '/assign']
router.beforeEach((to, from, next) => {
  NProgress.start() // 开启进度条
  // next是一个必须执行的钩子 不执行就卡主了
  console.log(store.state.permission)
  if (store.getters.token) {
    if(store.state.permission.routes.length !== 5) {
      console.log(store.state.permission.routes);
      console.log('yes')
      next()
    } else {
      console.log('no');
      console.log(store.state.permission.routes)
      // router.addRoutes('goTest')
      store.dispatch('permission/filterRoutes')
      console.log(store.state.permission.routes)
      // router.addRoutes(store.state.permission.routes)
    }
    if (to.path === '/login') {
      next('/')
    } else {
      // 在vuex中没有用户资料才需要获取用户信息
      if (!store.state.user.userInfo) {
        console.log("store中没有用户信息");

        // 底下的不知道是什么时候写的了，反正改成
        // const routes = await store.dispatch('permission/filterRoutes', roles.menus)
        // 此时得到的routes是当前用户的所拥有的的动态路由的权限
        // router.addRoutes([...routes, { path: '*', redirect: '/404', hidden: true }])

        
        // console.log(store.dispatch('user/getUserInfo'))
        // const result =
        const routes = store.commit('permission/getRoutes')
        console.log(routes, 111)
        router.addRoutes(...routes, { path: '*', redirect: '/404', hidden: true })
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
