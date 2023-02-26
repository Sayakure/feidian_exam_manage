<template>
  <div class="goTest-container">
    <TestInfo :show-dialog.sync="showDialog" :info="info" />
  </div>
</template>

<script>
import { studentCheckExam } from '@/api/exam'
import TestInfo from './components/test-info.vue'
export default {
  components: { TestInfo },
  data() {
    return {
      info: [],
      showDialog: false,
      query:{
        pageNum: 1,
        pageSize: 5,
      }
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const res = await studentCheckExam(this.query)
      this.info = res.rows 
      console.log("course rows", res);
      this.info.forEach((item) => {
        if (item.pass == 0) {
          item.pass = "未考试"
        } 
        else if (item.pass == 1) {
          item.pass = "已考试"
        } else{
          item.pass = "考试中断"
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
