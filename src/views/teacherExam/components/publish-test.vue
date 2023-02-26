<template>
  <div ref="dashbord" class="dashboard-container">
    <el-drawer
    size="60%"
      :withHeader="false"
      :before-close="handleClose"
      :visible.sync="dialog"
      direction="ltr"
      custom-class="demo-drawer"
      ref="drawer"
      >
      <div class="demo-drawer__content">
        <el-form :model="form">
          <el-form-item label="考试名称" :label-width="formLabelWidth">
            <el-input v-model="form.examName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="考试开始时间" :label-width="formLabelWidth">
          <div class="block">
            <el-date-picker
              value-format='yyyy-MM-dd HH:mm:ss'
              v-model="form.startTime"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
          </el-form-item>
          <el-form-item label="考试结束时间" :label-width="formLabelWidth">
            <div class="block">
            <el-date-picker
              value-format='yyyy-MM-dd HH:mm:ss'
              v-model="form.endTime"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
            </div>
          </div>
        </el-drawer>
  </div>
</template>

<script>
import { publishExam } from '@/api/exam'
export default {
  props: {
    scope: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      loading: false,
      dialog: false,
      form: {
        courseId: '',
        startTime: '',
        endTime: '',
        examName: ''
      },
      formLabelWidth: '80px',
      timer: null,
    }
  },
  methods: {
    showDialog() {
      this.dialog = true
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('确定要提交表单吗？')
        .then(_ => {
          this.loading = true;
          const a = this.form.startTime.split(' ')
          const b = this.form.endTime.split(' ')
          const str1 = a[0] + " " + a[1] + ' '
          const str2 = b[0] + " " + b[1] + ' '
          this.form.startTime = str1
          this.form.endTime = str2
          this.form.courseId = this.scope.row.courseId
          publishExam(this.form)
          this.$emit('publish')
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
          this.dialog = false
          this.$router.go(0)
          location.reload()
        })
        .catch(_ => {
          this.$message.error('提交失败')
        });
    }
  }
}
</script>

<style scoped>
.dashboard-container/deep/ .el-drawer__body{
  overflow-y: hidden;
}
.demo-drawer__content {
  margin-top: 50px;
  padding: 15px;
}
</style>
