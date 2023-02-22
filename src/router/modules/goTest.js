export default {
  path: '/goTest',
  name: 'goTest',
    component: () => import('@/views/goTest'),
    meta:{
      title: '学生查看考试情况',
      icon: 'skill'
    }
}
