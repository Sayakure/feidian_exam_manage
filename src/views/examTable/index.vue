<template>
  <div class="exam-table">
    <el-card class="test-area">
      <WaitTips v-show="!isExam" :is-exam.sync="isExam" />
      <ExamMain v-show="isExam" />
    </el-card>
  </div>
</template>

<script>
import WaitTips from './components/waitTips.vue'
import ExamMain from './components/exam-main.vue'
export default {
  components: { WaitTips, ExamMain },
  data() {
    return {
      isExam: false
    }
  }
}
</script>

<style scoped>
.exam-table {
  display: flex;
  justify-content: center;
  background-color: #ffffffc5;
  padding: 50px 0;
}
.test-area {
  width: 70%;
  min-width: 700px;
}
</style>
