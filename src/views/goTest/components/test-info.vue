<template>
  <el-card style="margin-top: 30px;">
    <div class="title" style="margin-bottom: 50px;font-size: 25px;color: #4171F8;">考试详情</div>
    <div class="test-message">
      <el-table :data="info" style="width: 100%">
        <el-table-column prop="courseName" label="考试科目" style="width:50%" />
        <el-table-column prop="pass" label="考试状态" style="width:50%" />
        <el-table-column prop="score" label="考试分数" style="width:50%" />
        <el-table-column>
          <template slot-scope="scope">
            <el-button type="primary" @click="goTest(scope)" :disabled="hadTest(scope.row)">进行考试</el-button>
          </template>
        </el-table-column>
      </el-table>
      <TipsTest :showDialog="showDialog" @close="close" :exam="exam"/>
    </div>
  </el-card>
</template>

<script>
import TipsTest from './tips-test.vue'
export default {
  components: { TipsTest },
    props: {
      info: {
        type:Array,
        default: () => {}
      }
    },
  data() {
    return {
      exam: {},
      showDialog: false,
      tableData: [{
        name: '1',
        subject: '1',
        score: '1',
        date: '1'
      }]
    }
  },
  methods: {
    hadTest(row) {
      if(row.pass === "已考试") {
        return true
      }
    },
    goTest(scope) {
      console.log('去考试')
      this.showDialog = true
      this.exam = scope.row
      console.log('@@@@@@@@@@@@@@', this.exam);
    },
    close() {
      this.showDialog = false
    }
  }
}
</script>

<style scoped>

</style>
