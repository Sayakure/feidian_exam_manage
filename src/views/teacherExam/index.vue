<!-- eslint-disable vue/valid-template-root -->
<template>
  <div class="goTest-container">
    <!-- <ModifyExam /> -->
    <TestInfo :show-test-data.sync="showTestData" class="testinfo"/>
  </div>
</template>

<script>
import ModifyExam from './components/modify-exam.vue';
import TestInfo from './components/test-info.vue'
export default {
  components: { TestInfo, ModifyExam },
  data() {
    return {
      showTestData: true
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.goTest-container {
  position: relative;
}
</style>
