import Layout from '@/layout'

export default {
  path: '/goTest',
  name: 'goTest',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/goTest'),
    name: 'goTest',
    meta: {
      title: '进行考试',
      icon: 'tree'
    }
  }]
}
