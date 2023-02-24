<template>
  <el-card style="margin-top: 30px;">
    <button @click="demo">测试</button>
    <div class="title" style="margin-bottom: 50px;font-size: 25px;color: #4171F8;">考试详情</div>
    <div class="test-message">
      <el-table :data="info" style="width: 100%">
        <el-table-column prop="courseName" label="考试科目" style="width:50%" />
        <el-table-column prop="status" label="考试状态" style="width:50%" />
        <el-table-column prop="score" label="考试分数" style="width:50%" />
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
    info: {
      type:Array,
      default: []
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
    demo() {
      console.log(this.info);
    },
    goTest() {
      console.log('去考试')
      this.$emit('update:showDialog', true)
    }
  }
}
</script>

<style scoped>

</style>
