<template>
  <el-card style="margin-bottom: 15px;">
    <div class="course-info-contain">
      <div class="info-left">
        <!-- <span>课程号：{{ courseInfo.courseId }}</span>
        <span>课程名：{{ courseInfo.courseName}}</span>
        <span>授课老师：{{ courseInfo.teacherName}}</span> -->
        <span>课程号：</span>
        <span>课程名：</span>
        <span>授课老师：</span>
      </div>
  
      <div class="info-right">
        <el-button type="primary">查看所有成绩</el-button>
        <el-button>查看试题</el-button>
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
      courseInfo: {

      }
    }
}
</script>

<style scoped>
.course-info-contain {
  display: flex;
  justify-content: space-between;
}
</style>