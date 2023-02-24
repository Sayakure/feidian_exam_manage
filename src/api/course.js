import request from '@/utils/request'

/**
 * 学生获取课程
 */
export function stuGetCourse(data) {
  return request({
    url: `/course/join`,
    params: data
  })
}
/**
 * 老师获取课程
 */
export function teacherGetCourse(data) {
  return request({
    url: '/course/publish',
    params: data
  })
}
/**
 * 发布课程
 */
export function addCourse(data) {
  return request({
    url: '/course/publish/add',
    method: 'post',
    data
  })
}
/**
 * 发布课程所需要的学生
 */
export function addCourseStu() {
  return request({
    url: '/course/publish/students'
  })
}

/**
 * 查看课程下的学生
 */
// 查看该课程下学生成绩
export function checkStudentScore(id) {
  return request({
    url: `/exam/add/${id}`,
  })
}

/**
 * 打回考试
 */
// export function backExam() {
//   return request({
//     url: ''
//   })
// }

