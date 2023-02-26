<template>
  <div class="dashboard-container">
    <el-drawer
      class="drawer"
      size="60%"
      :withHeader="false"
      :visible.sync="show"
      direction="ltr">
      <button @click="demo()">测试</button>
      <div class="modify-inner">
        <div slot="header" class="card-title" justify="space-between">
          <div class="title" style="font-size: 28px;">课程名</div>
          <el-button size="small" style="float: right;margin-top: -33px;" type="primary" @click="addTest()">增加试题</el-button>
        </div>
          <TestTools @update="update()" :courseId="courseId" v-for="question in questions" :question='question' @editTest="editTest()" />
        <AddTest :courseId="courseId" :show-dialog.sync="showDialog" @click="addTest()" @addQuestion="addQuestion" />
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { checkQuestion } from '@/api/exam'
import AddTest from './add-test.vue'
import TestTools from './test-tools.vue'
import { setTimeout } from 'timers';
export default {
  components: { TestTools, AddTest},
  data() {
    return {
      courseId : "",
      show: false,
      showDialog: false,
      editDialog: false,
      questions: []
    }
  },
  methods: {
    async update() {
        let res = await checkQuestion(this.courseId)
        this.questions = res
      // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa', res);
    },
    demo() {
      console.log(this.questionsArr);
    },
    addQuestion(item) {
      console.log('++++++++++++++++++', item);
      const res = {
        "answer": item.answer,
        "context": item.context,
        "courseId": item.courseId,
        "optionA": item.option_a,
        "optionB": item.option_b,
        "optionC": item.option_c,
        "optionD": item.option_d,
        "questionType": item.question_type
      }
      this.questions.push(res)
    },
    async openEdit(id) {
      this.show = true
      const res = await checkQuestion(id)
      this.questions = res
      this.courseId = id
    },
    addTest() {
      this.showDialog = true
    },
    editTest() {
      this.editDialog = true
    }
  }
}
</script>

<style scoped>
.modify-inner {
  padding: 20px 10px;
  opacity: 1;
}
</style>
