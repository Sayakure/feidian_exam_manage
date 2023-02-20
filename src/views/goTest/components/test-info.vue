<template>
  <el-card style="margin-top: 30px;">
    <div class="title" style="margin-bottom: 50px;font-size: 25px;color: #4171F8;">考试详情</div>
    <div class="test-message">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="subject" label="考试科目" style="width:50%" />
        <el-table-column prop="score" label="考试情况" style="width:50%" />
        <el-table-column>
          <router-link to="/goTest">
            <el-button type="primary" @click="goTest()">进行考试</el-button>
          </router-link>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    showTest: {
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
      this.$emit('update:showDialog', true)
    }
  }
}
</script>

<style scoped>

</style>
