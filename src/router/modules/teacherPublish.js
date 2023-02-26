import Layout from '@/layout'
export default {
  path: '/teacherPublish',
  name: 'teacherPublish',
  component: Layout,
  children: [{
    path: '',
    // name: 'teacherPublish',
    component: () => import('@/views/teacherPublish'),
    meta: {
      title: '发布课程',
      icon: 'chart'
    }
  }]
}
