import request from '@/utils/request'

/**
 * 查看试题
 */
export function checkQuestion(id) {
  return request({
    url: `/course/publish/question/${id}`
  })
}
/**
 * 学生查看考核
 */
export function studentCheckExam(data) {
  return request({
    url: '/exam/check',
    params: data
  })
}
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
 * 加载考试题目
 */
export function getExamQuestion(data) {
  return request({
    url: '/exam/check/question',
    params: data
  })
}




/**
 * 增加考题
 */
export function addQuestion(data) {
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
    params: data
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