import Layout from '@/layout'

import goTest from './goTest'

export default {
  path: '/allExam',
  name: 'allExam',
  component: Layout,
  meta: { title: '全部考试', icon: 'edit'},
  children: [ goTest]
}
