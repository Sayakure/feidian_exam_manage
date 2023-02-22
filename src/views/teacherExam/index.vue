<!-- eslint-disable vue/valid-template-root -->
<template>
  <div class="goTest-container">
    <TestInfo :show-test-data.sync="showTestData"/>
  </div>
</template>

<script>
import TestInfo from './components/test-info.vue'
export default {
  components: { TestInfo },
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

</style>
