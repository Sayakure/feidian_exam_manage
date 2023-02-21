import Layout from '@/layout'

export default {
  path: '/stuTest',
  name: 'stuTest',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/stuTest'),
    name: 'stuTest',
    meta: {
      title: '学生考试',
      icon: 'education'
    }
  }]
}
