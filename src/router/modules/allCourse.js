import Layout from '@/layout'

import ShowCourse from './showCourse'
import teacherPublish from './teacherPublish'

export default {
  path: '/allCourse',
  name: 'allCourse',
  component: Layout,
  redirect: '/allCourse/showCourse',
  meta: { title: '全部课程', icon: 'form'},
  children: [ ShowCourse , teacherPublish]
}
