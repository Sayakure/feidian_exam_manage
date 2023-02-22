<template>
    <div class="search-course-container">
      <el-input class="search-input" v-model="searchText" placeholder="请输入所查询课程号或课程名">
        <i slot="suffix" class="el-icon-search icon" style="color: #4C7CFB;"></i>
      </el-input>
    </div>
</template>

<script>
import store from '@/store'
export default {
  data() {
    return {
      searchText : '',
      userInfo: {}
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      console.log(store.state.user.userInfo)
    }
  }
}
</script>

<style scoped>
.search-course-container {
  position: relative;
}
.search-input {
  height: 40px;
  width: 250px
}
.icon {
  position: absolute;
  right: 6px;
  top: 12px;
}
</style>
