import Layout from '@/layout'

import goTest from './goTest'
import teacherExam from './teacherExam'

export default {
  path: '/allExam',
  name: 'allExam',
  component: Layout,
  meta: { title: '全部考试', icon: 'edit'},
  children: [ goTest, teacherExam ],
}
