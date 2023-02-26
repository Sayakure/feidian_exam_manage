import Layout from '@/layout'

export default {
  path: '/showCourse',
  // name: 'showCourse',
  component: Layout,
  children: [{
    path: '',
    name: 'showCourse',
    component: () => import('@/views/showCourse'),
    meta: {
      title: '课程信息',
      icon: 'message'
    }
  }]
}
