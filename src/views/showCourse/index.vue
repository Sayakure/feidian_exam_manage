<template>
  <div >
    <button @click="demo()">测试</button>
    <div class="show-course-container">
      <div slot="header" class="clearfix">
      <span class="title" style="font-size: 25px;color: #4171F8;line-height: 40px;">学生全部课程</span>
      </div>
      <div class="right-nav">
        <SearchCourse @search="search(course)"/>
      </div>
    </div>
    <div class="test-message">
      <CoursrInfo v-for="i in 5"/>
      <!-- <CoursrInfo v-for="item in courseList" :key="item.coursrId" :courseInfo="item"/> -->
      <el-pagination
      @current-change="pageChange"
      layout="prev, pager, next"
      :total="50"
      class="pagination"
      >
    </el-pagination>
    </div>
  </div>
</template>

<script>
import { stuGetCourse } from '@/api/course'
import SearchCourse from './components/search-course.vue'
import CoursrInfo from './components/course-info.vue'
export default {
  components: { CoursrInfo, SearchCourse },
  data() {
    return {
      // {
      //   "courseId": "1",
      //   "courseName": "C++程序测试",
      //   "teacherName": "test2",
      //   "userId": "13",
      //   "userName": "测试"
      // }
      courseList: [],
      query:{
        pageNum: 1,
        pageSize: 5,
      },
      page: {
        page: 1,
        pageSize: 5,
        total: 50
      }
    }
  },
  created() {
    this.pageChange()
  },
  methods: {
    demo() {
      console.log(queryInfo.pageNum);
    },
    search(course) {
      console.log("传递到父组件的数据是", course);
      this.page.total = course.total
      this.courseList = course.rows
      console.log("courseList是", this.courseList)
    },
    async pageChange(page) {
      this.page.page = page
      this.query.pageNum = page
      console.log('page', page)
      console.log(this.query)
      const res = await stuGetCourse(this.query)
      this.courseList = res.rows
      console.log("学生请求到的课程数据是：", this.courseList)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.show-course-container {
  padding: 30px 40px 0 40px;
  display: flex;
  justify-content: space-between;
}
.right-nav {
  display: flex;
}

.test-message {
  margin-top: 50px;
  margin: 50px 40px 0 40px;
}
.pagination {
  margin: 50px 0;
}
</style>
