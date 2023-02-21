<template>
  <div class="exam-table">
    <el-row>
      <el-col>
        <div class="exam-title">考试题目</div>
      </el-col>
      <el-col>
        <div class="exam-info">
          <div class="exam-subject">考试科目</div>
          <div class="exam-time">考试时间</div>
        </div>
      </el-col>
      <el-col>
        <el-button type="primary" @click="examMaking()">我准备好了，现在去考试</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import store from '@/store'
export default {
  props: {
    isExam: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.getExamInfo()
  },
  methods: {
    examMaking() {
      this.$emit('update:isExam', true)
    },
    getExamInfo() {
      console.log(store.state.examTable)
      // 得到id后请求信息，请求题目
      // 渲染信息，传出题
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
