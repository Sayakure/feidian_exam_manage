<!-- eslint-disable vue/valid-template-root -->
<template>
  <div class="goTest-container">
    <ModifyExam ref="modify"/>
    <TestInfo @show="show" @showDialog="showDialog" class="testinfo"/>
  </div>
</template>

<script>
import ModifyExam from './components/modify-exam.vue';
import TestInfo from './components/test-info.vue'
export default {
  components: { TestInfo, ModifyExam },
  data() {
    return {
    }
  },
  methods: {
    show(id) {
      console.log('@@@@@@', id);
      this.$refs.modify.openEdit(id)
    },
    showDialog(id) {
      this.$refs.publish.showDialog(id)
    }
  }
}
</script>

<style scoped>
.goTest-container {
  position: relative;
}
</style>
