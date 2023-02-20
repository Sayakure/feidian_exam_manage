<template>
  <el-card>
    <div class="head">
      <div class="avatar">
        <img src="@/assets/common/head.jpg" alt="">
      </div>
      <div class="info">您好，姓名</div>
    </div>
  </el-card>
</template>

<script>
import store from '@/store'
export default {
  data() {
    return {
      userInfo: {}
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      console.log(111)
      console.log(store.state.user.userInfo)
    }
  }
}
</script>

<style scoped>
.head {
    display: flex;
}
.avatar {
    margin: 0 50px;
}
.info {
    padding: 40px 50px;
}
.info {
    font-size: 20px;
}
</style>
