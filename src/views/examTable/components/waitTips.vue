<template>
  <div class="exam-table">
    <el-row>
      <el-col>
        <div class="exam-title">课程ID: {{ info.courseId }}</div>
      </el-col>
      <el-col>
        <div class="exam-info">
          <div class="exam-subject">考试名称： {{ info.examName }}</div>
          <div class="exam-time" style="margin-top: 50px;">最后更新时间:  {{ info.updateTime }}</div>
        </div>
      </el-col>
      <el-col>
        <el-button type="primary" @click="examMaking()">我准备好了，现在去考试</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getExamQuestion } from '@/api/exam'
export default {
  props: {
    isExam: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      info: {}
    }
  },
  created() {
    this.getExamInfo()
  },
  methods: {
    examMaking() {
      this.$emit('update:isExam', true)
    },
    async getExamInfo() {
      const exam = JSON.parse(sessionStorage.getItem('exam'))
      const query = {
        courseId: exam.courseId,
        examId: exam.examId,
        state: exam.state
      }
      const res = await getExamQuestion(query)
      this.info = res.exam
      console.log(res)

    }
  }
}
</script>

<style scoped>
.exam-title {
  font-size: 35px;
  margin-bottom: 80px;
}
.exam-info {
  margin-bottom: 60px;
}
</style>
