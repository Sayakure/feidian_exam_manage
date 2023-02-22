export default {
  path: '/goTest',
  name: 'goTest',
    component: () => import('@/views/goTest'),
    meta:{
      title: '进行考试',
      icon: 'skill'
    }
}
