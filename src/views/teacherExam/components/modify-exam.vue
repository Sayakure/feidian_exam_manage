<template>
  <div class="dashboard-container">
    <div class="app-container">
      <div class="modify-inner">
        <div slot="header" class="card-title" justify="space-between">
          <div class="title" style="font-size: 28px;">课程名</div>
          <el-button size="small" style="float: right;margin-top: -33px;" type="primary" @click="addTest()">增加试题</el-button>
        </div>
          <TestTools v-for="i in 10" :key="i" @editTest="editTest()" />
        <AddTest :show-dialog.sync="showDialog" @click="addTest()" />
      </div>
    </div>
  </div>
</template>

<script>
import AddTest from './add-test.vue'
import TestTools from './test-tools.vue'
export default {
  components: { TestTools, AddTest},
  data() {
    return {
      showDialog: false,
      editDialog: false
    }
  },
  methods: {
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
.app-container {
  top: 0;
  bottom: 0;
  background-color: red;
  position: fixed;
  overflow-x: hidden;
  overflow-y: scroll;
  opacity: 0.8;
  width: 100%;
  z-index: 3;
}
.modify-inner {
  background-color: pink;
  width: 70%;
  max-width: 700px;
  opacity: 1;
}
</style>
