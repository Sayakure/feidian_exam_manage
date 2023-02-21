<template>
  <div class="dashboard-container">
    <Test />
    <el-card style="padding: 20px 0">
      <el-row type="flex" justify="space-between" style="width:80%;padding-top: 15px;">
        <el-col>
          <div class="avatar">
            <ImageUpload ref="staffPhoto" />
            <!-- <img src="@/assets/common/img.jpeg" alt=""> -->
            <el-button type="primary" size="small" style="margin-left: 18px; margin-top: 58px" @click.native="editInfo()">修改个人信息</el-button>
          </div>
        </el-col>
        <el-col style="min-width: 500px">
          <el-row type="flex" justify="space-between">
            <el-col>
              <div class="describe">姓名：</div>
              <div class="describe">性别：</div>
              <div class="describe">ID:</div>
              <div class="describe">所在学院：</div>
              <div class="describe">手机号：</div>
            </el-col>
            <el-col>
              <div class="describe">{{ info.name }}</div>
              <div class="describe">{{ info.gender }}</div>
              <div class="describe">{{ info.id }}</div>
              <div class="describe">{{ info.college }}</div>
              <div class="describe">{{ info.mobile }}</div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
    <EditInfo :show-dialog.sync="showDialog" />
    <ExamCalender />
  </div>
</template>

<script>
import Test from './components/test.vue'
import ExamCalender from './components/exam-calender.vue'
import EditInfo from './components/edit-info.vue'
import store from '@/store'
export default {
  name: 'Dashboard',
  components: { EditInfo, ExamCalender, Test },
  data() {
    return {
      showDialog: false,
      info: {
        name: '1',
        gender: '2',
        id: '3',
        college: '4',
        mobile: '5'
      }
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      this.info.name = store.state.user.userInfo.id
      // if (store.state.user.userInfo.staffPhoto)
      //   // this.$refs.staffPhoto.fileList = [{ url: store.state.user.userInfo.staffPhoto, upload: true }]
      // } else {
      //   console.log(1)
      // }
    },
    editInfo() {
      this.showDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

.avatar {
  width: 200px;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
.describe {
  font-size: 18px;
  margin-bottom: 8px;
}
</style>
