<template>
  <div class="search-course-container">
    <el-input class="search-input" v-model="searchText" placeholder="请输入所查询课程号或课程名">
    </el-input>

    <el-button slot="suffix" @click="search()" icon="el-icon-search" style="margin-right: 10px;margin-left: -5px;"></el-button>

    <el-radio v-model="searchBy" label="courseName" >课程名称</el-radio>
    <el-radio v-model="searchBy" label="courseId">课程ID</el-radio>
  </div>
</template>

<script>
export default {
data() {
  return {
    searchBy: 'courseName',
    searchText : '',
    searchInfo: {
      pageNum: '1',
      pageSize: '100',
      courseId: '',
      courseName: ''
    },
  }
},
created() {
},
methods: {
  async search() {
    // console.log("查询");
    // console.log(this.searchBy);
    // console.log(this.searchText);
    if (this.searchBy === 'courseName') {
      this.searchInfo.courseName = this.searchText
    } else {
      this.searchInfo.courseId = this.searchText
    }
    console.log("请求查询的信息是", this.searchInfo);
    // const res = await stuGetCourse(this.searchInfo)
    this.$emit('search', this.searchInfo)
    this.searchText = ""
    this.searchInfo = {
      pageNum: '1',
      pageSize: '5',
      courseId: '',
      courseName: ''
    }
    // this.course = res
    // console.log("@@@@@", this.course);
  }
}
}
</script>

<style scoped>
.search-course-container {
position: relative;
}
.search-input {
margin-right: 10px;
height: 40px;
width: 250px
}
.search-icon {
position: absolute;
right: 6px;
top: 12px;
}
</style>
