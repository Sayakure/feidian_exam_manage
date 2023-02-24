<!-- eslint-disable vue/valid-template-root -->
<template>
  <div class="goTest-container">
    <TestInfo :show-dialog.sync="showDialog" :info="info" />
    <TipsTest :show-dialog.sync="showDialog" :show-test-data.sync="showTestData" @getTestId="getTestId" />
  </div>
</template>

<script>
import { stuGetCourse } from '@/api/course'
import TipsTest from './components/tips-test.vue'
import TestInfo from './components/test-info.vue'
export default {
  components: { TestInfo, TipsTest },
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
      const res = await stuGetCourse(this.query)
      this.info = res.rows 
    },
    getTestId() {
      // 清空桌面
      this.showDialog = false
    }
  }
}
</script>

<style scoped>

</style>
