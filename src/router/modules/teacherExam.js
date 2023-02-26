import Layout from '@/layout'
export default {
  path: '/teacherExam',
  name: 'teacherExam',
  component: Layout,
  children: [{
    path: '',
    // name: 'teacherExam',
    component: () => import('@/views/teacherExam'),
    meta: {
      title: '教师查看考试情况',
      icon: 'guide'
    }
  }]
}
