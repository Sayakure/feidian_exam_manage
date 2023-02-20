import request from '@/utils/request'

/**
 * 获取试题
 */
export function getTests() {
  return request({
    url: '/company/department'
  })
}

/**
 * 删除试题
 */
export function delTests(id) {
  return request({
    url: `/company/department/${id}`,
    method: 'delete'
  })
}
/**
 * 新增试题
 */
export function addTests(data) {
  return request({
    method: 'post',
    data,
    url: '/company/department'
  })
}
/**
 * 获取试题详情
 */
export function getDepartDetail(id) {
  return request({
    url: `/company/department/${id}`
  })
}
/**
 * 更新部门详情
 */
export function updateTest(data) {
  return request({
    url: `/company/department/${data.id}`,
    method: 'put',
    data
  })
}
