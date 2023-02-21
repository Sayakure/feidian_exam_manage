import Layout from '@/layout'

export default {
  path: '/showTest',
  name: 'showTest',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/showTest'),
    name: 'showTest',
    meta: {
      title: '考试信息',
      icon: 'message'
    }
  }]
}
