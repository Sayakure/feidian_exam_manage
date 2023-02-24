<template>
  <div class="dashboard-container">
    <el-drawer
      class="drawer"
      size="60%"
      :withHeader="false"
      :visible.sync="show"
      direction="ltr">
      <div class="modify-inner">
        <div slot="header" class="card-title" justify="space-between">
          <div class="title" style="font-size: 28px;">课程名</div>
          <el-button size="small" style="float: right;margin-top: -33px;" type="primary" @click="addTest()">增加试题</el-button>
        </div>
          <TestTools v-for="question in questions" :question='question' @editTest="editTest()" />
        <AddTest :show-dialog.sync="showDialog" @click="addTest()" />
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { getExam } from '@/api/exam'
import AddTest from './add-test.vue'
import TestTools from './test-tools.vue'
export default {
  components: { TestTools, AddTest},
  data() {
    return {
      show: false,
      showDialog: false,
      editDialog: false,
      questions: []
    }
  },
  methods: {
    async openEdit(id) {
      this.show = true
      console.log('55555', id);
      const res = await getExam(id)
      console.log(res);
      this.questions = res
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
