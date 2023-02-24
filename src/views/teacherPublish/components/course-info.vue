<template>
  <div>
  <div class="course" style="margin-bottom: 15px;">
    <el-card >
      <div class="course-info-contain">
        <el-collapse class="collapse">
        <el-collapse-item name="1">
          <template #title>
            <div class="info-left">
            <!-- <span>课程号：{{ courseInfo.courseId }}</span>
            <span>课程名：{{ courseInfo.courseName}}</span>
            <span>授课老师：{{ courseInfo.teacherName}}</span> -->
            <div class="info">课程号：{{ course.courseId}}</div>
            <div class="info">课程名：{{ course.courseName}}</div>
            <div class="info">授课老师：{{ course.teacherName }}</div>
          </div>
        <div class="info-right">
            <el-button class="check" type="primary" @click="showStuTest()">查看所有成绩</el-button>
        </div>
        </template>
          <div class="drawer-item">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            >
            <el-table-column
              fixed
              prop= "userName"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="state"
              label="考试情况"
              width="180">
            </el-table-column>
            <el-table-column
              prop="score"
              label="考试分数">
            </el-table-column>
          </el-table>
       </div>
        </el-collapse-item>
        </el-collapse>
      </div>
    </el-card>
  </div>
</div>
</template>

<script>
import { checkStudentScore } from '@/api/course'
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
    data() {
      return {
        drawer: false,
        direction: 'ltr',
        tableData: []
      }
    },
    methods: {
      async showStuTest() {
        this.drawer = true
        console.log(this.drawer);
        const res = await checkStudentScore(this.course.courseId)
        // console.log("!1!", this.$store.state.user.token);
        console.log('ewss',res[0]);
        this.tableData = res
      }
    }
}
</script>

<style lang="scss" scoped>
.course {
  position: relative;
}
.collapse {
  border: none;
  width: 100%;
}
.course-info-contain {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.check {
  position: absolute;
  right: 0;
  top: 4px;
}
.info-left {
  display: flex;
  position: absolute;
  left: 0;
}
.info {
  margin-right: 30px
}
</style>