<template>
  <el-card style="margin-top: 30px;">
    <div class="title" style="margin-bottom: 50px;font-size: 25px;color: #4171F8;">考试课程列表</div>
    <div class="test-message">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="姓名" style="width:50%" />
        <el-table-column prop="subject" label="考试科目" style="width:50%" />
        <el-table-column prop="score" label="成绩" style="width:50%" />
        <el-table-column prop="date" label="考试时间" style="width:50%" />
      </el-table>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        name: '1',
        subject: '1',
        score: '1',
        date: '1'
      }]
    }
  }
}
</script>

<style scoped>

</style>
