import Layout from '@/layout'
export default {
  path: '/goTest',
  name: 'goTest',
  component: Layout,
  children: [{
    path: '',
    // name: 'goTest',
    component: () => import('@/views/goTest'),
    meta:{
      title: '学生查看考试情况',
      icon: 'skill'
    }
  }]
}
