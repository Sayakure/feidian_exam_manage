<template>
  <el-card class="test-info" style="margin-top: 30px;">
    <div class="title" style="margin-bottom: 50px;font-size: 25px;color: #4171F8;">考试详情</div>
    <div class="test-message">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="subject" label="考试科目" style="width:50%" />
        <el-table-column prop="score" label="考试情况" style="width:50%" />
        <el-table-column>
            <el-button type="primary">查看考试题</el-button>
            <el-button>发布考试题</el-button>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    showTestData: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tableData: [{
        name: '1',
        subject: '1',
        score: '1',
        date: '1'
      }]
    }
  },
  methods: {
    goTest() {
      console.log('去考试')
    }
  }
}
</script>

<style scoped>
</style>
