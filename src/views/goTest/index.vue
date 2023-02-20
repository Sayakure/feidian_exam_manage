<!-- eslint-disable vue/valid-template-root -->
<template>
  <div class="goTest-container">
    <TestInfo :show-test-data.sync="showTestData" :show-dialog.sync="showDialog" />
    <TipsTest :show-dialog.sync="showDialog" :show-test-data.sync="showTestData" @getTestId="getTestId" />
  </div>
</template>

<script>
import TipsTest from './components/tips-test.vue'
import TestInfo from './components/test-info.vue'
export default {
  components: { TestInfo, TipsTest },
  data() {
    return {
      showDialog: false,
      showTestData: true,
      showExam: false
    }
  },
  methods: {
    getTestId(id) {
      // 清空桌面
      this.showTestData = false
      this.showDialog = false
      // 请求考试信息
      // console.log(id)
      this.showExam = true
    }
  }
}
</script>

<style scoped>

</style>
