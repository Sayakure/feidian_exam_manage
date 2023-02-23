<!-- eslint-disable vue/valid-template-root -->
<template>
  <div class="goTest-container">
    <PublishTest ref="publish"/>
    <ModifyExam ref="modify"/>
    <TestInfo @show="show()" @showDialog="showDialog()" :show-test-data.sync="showTestData" class="testinfo"/>
  </div>
</template>

<script>
import PublishTest from './components/publish-test.vue'
import ModifyExam from './components/modify-exam.vue';
import TestInfo from './components/test-info.vue'
export default {
  components: { TestInfo, ModifyExam , PublishTest},
  data() {
    return {
    }
  },
  methods: {
    show() {
      this.$refs.modify.openEdit()
    },
    showDialog() {
      this.$refs.publish.showDialog()
    }
  }
}
</script>

<style scoped>
.goTest-container {
  position: relative;
}
</style>
