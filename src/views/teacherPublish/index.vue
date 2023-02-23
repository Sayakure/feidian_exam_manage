<template>
  <div >
    <div class="show-course-container">
      <div slot="header" class="clearfix">
      <span class="title" style="font-size: 25px;color: #4171F8;line-height: 40px;">全部课程</span>
      </div>
      <div class="right-nav">
        <SearchCourse />
        <el-button @click="dialogVisible = true" style="float: right;margin-left: 30px;" type="primary">发布课程</el-button>
      </div>
    </div>
    <div class="test-message">
      <CoursrInfo v-for="i in 10"/>
      <!-- <CoursrInfo v-for="item in courseList" :key="item.coursrId" :courseInfo="item"/> -->
      <el-pagination
      @current-change="pageChange"
      layout="prev, pager, next"
      :total="50"
      class="pagination"
      >
    </el-pagination>
    </div>
    <el-dialog
      title="添加课程"
      :visible.sync="dialogVisible"
      width="30%"
      >
      <span>业务流程是？学生？？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import { getCourse } from '@/api/course'
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
      dialogVisible: false,
      courseList: [],
      query:{
        pageNum: 1,
        pageSize: 10
      },
      page: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      tableData: [{
        name: '1',
        subject: '1',
        score: '1',
        date: '1'
      }]
    }
  },
  methods: {
    async pageChange(page) {
      this.page.page = page
      this.query.pageNum = page
      console.log('page', page)
      // 获取新数据
      // const res = await getCourse(query)
      // this.courseList = res.rows
    }
  },
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
