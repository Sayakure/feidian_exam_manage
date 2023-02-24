import request from '@/utils/request'
/**
 * 发布考试
 */
export function publishExam(data) {
  return request({
    url: '/exam/add/publish',
    method: 'post',
    data
  })
}

/**
 * 查看试题
 */
export function  getExam(id) {
  return request({
    url: `/course/publish/question/${courseId}`
  })
}

/**
 * 增加考题
 */
export function addExam(data) {
  return request({
    url: '/course/publish/question',
    method: 'post',
    data
  })
}

/**
 * 删除试题
 */
export function deleteExam(data) {
  return request({
    url: '/course/publish/question',
    method: 'delete',
    data
  })
}

/**
 * 修改试题
 */
export function editExam(data) {
  return request({
    url: '/course/publish/question',
    method: 'put',
    data
  })
}

/**
 * 加载考试题目
 */
export function getExamQuestion(data) {
  return request({
    url: '/exam/check/question',
    data
  })
}

/**
 * 学生中途退出
 */
export function studentBreak(data) {
  return request({
    url: '/exam/check/break',
    method: 'post',
    data
  })
}

/**
 * 学生提交答题
 */
export function submitExam(data) {
  return request({
    url: '/exam/check/submit',
    method: 'post',
    data
  })
}