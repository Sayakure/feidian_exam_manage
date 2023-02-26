<template>
  <div >
    <div class="show-course-container">
      <div slot="header" class="clearfix">
      <span class="title" style="font-size: 25px;color: #4171F8;line-height: 40px;">全部课程</span>
      </div>
      <div class="right-nav">
        <SearchCourse @search="search(course)" />
        <el-button @click="dialogVisible = true" style="float: right;margin-left: 30px;" type="primary">发布课程</el-button>
      </div>
    </div>
    <div class="test-message">
      <CoursrInfo v-for="course in courseList" :course="course"/>
      <!-- <CoursrInfo v-for="item in courseList" :key="item.coursrId" :courseInfo="item"/> -->
      <el-pagination
      @current-change="pageChange"
      layout="prev, pager, next"
      :total="page.total"
      class="pagination"
      >
    </el-pagination>
    </div>

    <el-dialog
      title="添加课程"
      :visible.sync="dialogVisible"
      width="50%"
      >
    <el-form  ref="addCourseForm" :rules="rules" :model="addCourseForm" label-width="100px">
        <el-form-item label="用户id:" prop="userId">
          <el-input v-model="addCourseForm.userId" placeholder="请填入用户名称"></el-input>
        </el-form-item>
        <el-form-item label="课程名称:" prop="courseName">
          <el-input v-model="addCourseForm.courseName" placeholder="请填入课程名称"></el-input>
        </el-form-item>
        <el-form-item label="参课学生：">
          <el-checkbox-group v-model="addCourseForm.studentIds">
            <el-checkbox v-for="student in students" :label="student.userId">{{ student.name }}</el-checkbox>
        </el-checkbox-group>
        </el-form-item>

        <el-row  type="flex" justify="center">
          <!--放置列 -->
          <el-col :span="10">
            <el-button @click="btnCancel()">取消</el-button>
            <el-button type="primary" @click="btnOK()">确定</el-button>
          </el-col>
        </el-row>
      </el-form>
      </el-dialog>
  </div>
</template>

<script>
import { teacherGetCourse, addCourseStu, addCourse } from '@/api/course'
import SearchCourse from './components/search-course.vue'
import CoursrInfo from './components/course-info.vue'
export default {
  components: { CoursrInfo, SearchCourse },
  data() {
    return {
      dialogVisible: false,
      rules: {
        userId: [{ required: true, message: '用户ID不能为空', trigger: 'blur' }],
        courseName: [{ required: true, message: '课程名称不能为空', trigger: 'blur' }]
      },
      checkedStudents: [],
      students: [],
      addCourseForm: {
        userId: '',
        courseName: '',
        studentIds: []
      },
      courseList: [],
      query:{
        pageNum: 1,
        pageSize: 1000,
      },
      page: {
        page: 1,
        pageSize: 5,
        total: 0
      }
    }
  },
  created() {
    this.pageChange(1)
    this.addCourseStu()
  },
  methods: {
    async addCourseStu() {
      const res = await addCourseStu()
      this.students = res
      console.log("请求到的学生是", res)
      console.log("加入到待选项的学生是", this.students);
    },
    search(course) {
      console.log("传递到父组件的数据是", this.course);
      this.page.total = course.total
      this.courseList = course.rows
      console.log("courseList是", this.courseList)
    },
    async pageChange(page) {
      this.page.page = page
      this.query.pageNum = page
      console.log('page', page)
      console.log(this.query)
      const res = await teacherGetCourse(this.query)
      this.courseList = res.rows
      console.log("老师请求到的课程数据是：", this.courseList)
      this.page.total = res.total-0
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    btnOK() {
      this.$refs.addCourseForm.validate().then(async() => {
        const res = await addCourse(this.addCourseForm)
        console.log("添加课程的结果是", res);
      }).then(() => {
        this.pageChange(1)
        this.$message.success('添加成功')
        this.dialogVisible = false
      })
    },
    btnCancel() {
      this.addCourseForm= {
        userId: '',
        courseName: '',
        studentIds: []
      },
      this.$refs.addCourseForm.resetFields() // 重置方法
      this.dialogVisible = false
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
