<template>
  <div>
  <div class="course" style="margin-bottom: 15px;">
    <el-card >
      <div class="course-info-contain">
        <el-collapse v-model="activeNames" class="collapse">
        <el-collapse-item name="1">
          <template #title>
            <div class="info-left">
            <!-- <span>课程号：{{ courseInfo.courseId }}</span>
            <span>课程名：{{ courseInfo.courseName}}</span>
            <span>授课老师：{{ courseInfo.teacherName}}</span> -->
            <span>课程号：</span>
            <span>课程名：</span>
            <span>授课老师：</span>
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
              prop= "name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="status"
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
    },
    data() {
      return {
        drawer: false,
        direction: 'ltr',
        tableData: [{
          name: '王小虎',
          status: '2016-05-02',
          score: '60'
        }, {
          name: '王小虎',
          status: '2016-05-04',
          score: '59'
        }, {
          name: '王小虎',
          status: '2016-05-01',
          score: '60'
        }, {
          name: '王小虎',
          status: '2016-05-03',
          score: '99'
        }]
      }
    },
    methods: {
      showStuTest() {
        this.drawer = true
        console.log(this.drawer);
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
  position: absolute;
  left: 0;
}
</style>