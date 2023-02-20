import Layout from '@/layout'

export default {
  path: '/modifyTest',
  name: 'modifyTest',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/modifyTest'),
    name: 'modifyTest',
    meta: {
      title: '修改试题',
      icon: 'tree'
    }
  }]
}
