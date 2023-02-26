<template>
  <div class="exam-questions">
    <div v-for="(question,index) in questions" :key="index" class="question">
      <template v-if="question.questionType === 'x'">
        <div class="top">
          <div class="context">{{ question.context }}</div>
          <el-input v-model="input[question.questionId]" :key="index" @blur="blur(question,input[question.questionId])" class="input"></el-input>
        </div>
          <div class="options">
          <div class="option">A: {{ question.optionA }}</div>
          <div class="option">B: {{ question.optionB }}</div>
          <div class="option">C: {{ question.optionC }}</div>
          <div class="option">D: {{ question.optionD }}</div>
        </div>
      </template>
      <template v-if="question.questionType === 't'">
        <div class="top">
          <div class="context">{{ question.context }}</div>
          <el-input v-model="input[question.questionId]" :key="index" @blur="blur(question,input[question.questionId])" class="input"></el-input>
        </div>
      </template>
    </div>
    <el-button type="primary" class="submit" @click="submit">提交</el-button>
  </div>
</template>

<script>
import { getExamQuestion, submitExam, studentBreak } from '@/api/exam'
export default {
  mounted(){
    //添加监听事件
    window.addEventListener('beforeunload', e => this.beforeunloadHandler(e))
  },
  destroyed() {
    window.removeEventListener('beforeunload', e => this.beforeunloadFn(e))
  },
  created() {
    this.getExamInfo()
    window.addEventListener('beforeunload', e => this.beforeunloadFn(e))
  },
  data() {
    return {
      input: [],
      answer: [],
      questions: {}
    }
  },
  methods: {
    demo(e) {
      console.log("%%%%%%%", e);
    },
    beforeunloadFn(e) {
      const exam = JSON.parse(sessionStorage.getItem("exam"))
      const courseId = exam.courseId
      const examId = exam.examId
      const userId = JSON.parse(sessionStorage.getItem("userId"))
      const res = {
        "courseId": courseId,
        "examId": examId,
        "userId": userId,
        "questions": this.answer
      }
      try {
        studentBreak(res)
        this.$message.success('学生中途退出，已提交试卷')
        window.open("","_self").close()
      } catch (error) {
        this.$message(error)
      } 
    },
    submit() {
      const exam = JSON.parse(sessionStorage.getItem("exam"))
      const courseId = exam.courseId
      const examId = exam.examId
      const userId = JSON.parse(sessionStorage.getItem("userId"))
      const res = {
        "courseId": courseId,
        "examId": examId,
        "userId": userId,
        "questions": this.answer
      }
      try {
        submitExam(res)
        this.$message.success('提交成功')
        window.open("","_self").close()
        this.answer = {}
        this.input = []
      } catch (error) {
        this.$message(error)
      } 
    },
    blur(question,input) {
      const res = {
        "questionId": question.questionId,
        "reply": input 
      }
      this.answer.push(res)
    },
    demo() {
      console.log(this.input);
      for(let i = 0; i < this.input.length; i++){
        console.log(this.input[i]);
      }
    },
    async getExamInfo() {
      const exam = JSON.parse(sessionStorage.getItem('exam'))
      const query = {
        courseId: exam.courseId,
        examId: exam.examId,
        state: exam.state
      }
      const res = await getExamQuestion(query)
      this.questions = res.questions
      console.log(this.questions)
    }
  }
}
</script>

<style scoped>
.context {
  font-size: 20px;
  margin: 20px 0;
}
.top {
  display: flex;
  justify-content: space-between;
}
.input {
  width: 100px
}
.option {
  margin-bottom: 15px;
}
.submit {
  margin-top: 50px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
