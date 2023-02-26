<template>
  <el-card style="margin-bottom: 15px;">
    <div class="course-info-contain">
      <div class="info-left">
        <!-- <span>课程号：{{ courseInfo.courseId }}</span>
        <span>课程名：{{ courseInfo.courseName}}</span>
        <span>授课老师：{{ courseInfo.teacherName}}</span> -->
        <div class="info">课程号：{{ course.courseId}}</div>
        <div class="info">课程名：{{ course.courseName}}</div>
        <div class="info">授课老师：{{ course.teacherName}}</div>
      </div>
      </div>
  </el-card>
</template>

<script>
export default {
    props: {
        // {
        //   "courseId": "1",
        //   "courseName": "C++程序测试",
        //   "teacherName": "test2",
        //   "userId": "13",
        //   "userName": "测试"
        // }
        course: {
          type: Object,
          default: () => {}
        }
    },
}
</script>

<style scoped>
.course-info-contain {
  display: flex;
  justify-content: space-between;
}
.info-left {
  display: flex;
}
.info {
  margin-right: 10px;
}
</style>