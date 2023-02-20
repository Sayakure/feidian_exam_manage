<template>
  <div class="dashboard-container">
    <div class="app-container">
      <PersonalInfo />
      <TestInfo />
    </div>
  </div>
</template>

<script>
import PersonalInfo from './components/personal-info.vue'
import TestInfo from './components/testInfo.vue'
export default {
  components: { PersonalInfo, TestInfo }
}
</script>

<style>

</style>
