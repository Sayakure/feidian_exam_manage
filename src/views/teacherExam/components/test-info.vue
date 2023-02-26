<template>
  <el-card class="test-info" style="margin-top: 30px;">
    <div class="title" style="margin-bottom: 50px;font-size: 25px;color: #4171F8;">考试详情</div>
    <div class="test-message">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="courseId" label="课程ID" style="width:50%" />
        <el-table-column prop="courseName" label="考试科目" style="width:50%" />
        <el-table-column prop="state" label="考试情况" style="width:50%" />

         <el-table-column ref="info">
          <template slot-scope="scope">
            <el-button type="primary"  @click="checkExam(scope)">查看考试题</el-button>
            <el-button @click="publish(scope)">发布考试</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <PublishTest ref="publish" :scope="scope" @publish="teacherGetCourse"/>
  </el-card>
</template>

<script>
import PublishTest from './publish-test.vue'
import { teacherGetCourse } from '@/api/course'
export default {
  components: { PublishTest },
  props: {
    type: String,
    default: ''
  },
  data() {
    return {
      scope: {},
      tableData: [],
      query: {
        pageNum: '1',
        pageSize: '100'
      }
    }
  },
  created() {
    this.teacherGetCourse()
  },
  methods: {
    publish(scope) {
      this.$refs.publish.dialog = true
      this.scope = scope
      console.log("~~~~~~~~~~", this.scope.row);
    },
    async teacherGetCourse() {
      const res = await teacherGetCourse(this.query)
      this.tableData = res.rows
      this.tableData.forEach(item => {
        if (item.state == 0) {
          item.state = "未发布考试"
        } else {
          item.state = "已发布考试"
        }
      })
      console.log('555555', this.tableData);
    },
    showPublish(scope) {
      this.$emit('showDialog', scope.row.courseId)
    },
    checkExam(scope) {
      this.$emit('show', scope.row.courseId)
      // console.log(this.scope);
      console.log("++++++++++", scope.row.courseId);
    },
    goTest() {
      console.log('去考试')
    }
  }
}
</script>

<style scoped>
</style>
