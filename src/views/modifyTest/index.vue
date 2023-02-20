<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card>
        <div slot="header" class="card-title" justify="space-between">
          <div class="title" style="font-size: 28px;">试题</div>
          <button @click="editTest()">测试</button>
          <el-button style="float: right;margin-top: -33px;" type="primary" @click="addTest()">增加试题</el-button>
        </div>
        <TestTools v-for="i in 10" :key="i" @editTest="editTest()" />
      </el-card>
      <AddTest :show-dialog.sync="showDialog" @click="addTest()" />
      <EditTest :edit-dialog.sync="editDialog" @click="addTest()" />
    </div>
  </div>
</template>

<script>
import EditTest from './components/edit-test.vue'
import AddTest from './components/add-test.vue'
import TestTools from './components/test-tools.vue'
export default {
  components: { TestTools, AddTest, EditTest },
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
</style>
