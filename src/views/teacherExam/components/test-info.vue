<template>
  <el-card class="test-info" style="margin-top: 30px;">
    <div class="title" style="margin-bottom: 50px;font-size: 25px;color: #4171F8;">考试详情</div>
    <div class="test-message">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="courseName" label="考试科目" style="width:50%" />
        <el-table-column prop="state" label="考试情况" style="width:50%" />

         <el-table-column ref="info">
          <template slot-scope="scope">
            <el-button type="primary"  @click="checkExam(scope)">查看考试题</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
import { teacherGetCourse } from '@/api/course'
export default {
  data() {
    return {
      tableData: [],
      query: {
        pageNum: '1',
        pageSize: '5'
      }
    }
  },
  created() {
    this.teacherGetCourse()
  },
  methods: {
    async teacherGetCourse() {
      const res = await teacherGetCourse(this.query)
      this.tableData = res.rows
      console.log('555555', this.tableData);
    },
    showPublish(scope) {
      this.$emit('showDialog', scope.row.courseId)
    },
    checkExam(scope) {
      this.$emit('show', scope.row.courseId)
      // console.log(this.scope);
      console.log(scope.row.courseId);
    },
    goTest() {
      console.log('去考试')
    }
  }
}
</script>

<style scoped>
</style>
