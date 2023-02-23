<template>
  <div ref="dashbord" class="dashboard-container">
    <el-drawer
      :withHeader="false"
      :before-close="handleClose"
      :visible.sync="dialog"
      direction="ltr"
      custom-class="demo-drawer"
      ref="drawer"
      >
      <div class="demo-drawer__content">
        <el-form :model="form">
          <el-form-item label="考试描述" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="考试开始时间" :label-width="formLabelWidth">
            <div class="block">
            <el-date-picker
              v-model="value1"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
          </el-form-item>
          <el-form-item label="考试结束时间" :label-width="formLabelWidth">
            <div class="block">
            <el-date-picker
              v-model="value1"
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
export default {
  data() {
    return {
      value1: [new Date(2023, 2, 23, 8, 40), new Date(2023, 2, 23, 9, 40)],
      loading: false,
      dialog: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '80px',
      timer: null,
    }
  },
  mounted() {
    this.cancelScroll()
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
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(_ => {});
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
