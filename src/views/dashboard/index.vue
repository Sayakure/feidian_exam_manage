<template>
  <div class="dashboard-container">
    <button @click="demo()">册数</button>
    <el-card style="padding: 20px 0">
      <el-row type="flex" justify="space-between" style="width:80%;padding-top: 15px;">
        <el-col>
          <div class="avatar">
            <img src="@/assets/common/img.jpeg" alt="">
            <el-button type="primary" size="small" style="margin-left: 49px; " @click.native="editInfo()">修改个人信息</el-button>
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
              <div class="describe">{{ info.sex }}</div>
              <div class="describe">{{ info.userId }}</div>
              <div class="describe">{{ info.college }}</div>
              <div class="describe">{{ info.phonenumber }}</div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
    <EditInfo :show-dialog.sync="showDialog" v-if="showDialog" @edit="edit"/>
    <div class="others">
      <ExamCalender />
      <div class="small-items">
        <Helpers />
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
import Helpers from './components/helpers.vue'
import Test from './components/test.vue'
import ExamCalender from './components/exam-calender.vue'
import EditInfo from './components/edit-info.vue'
export default {
  name: 'Dashboard',
  components: { EditInfo, ExamCalender, Test, Helpers},
  data() {
    return {
      showDialog: false,
      info: {
        userId: '',
        name: '',
        phonenumber: '',
        college: '',
        avatar: '',
        sex: '',
      }
    }
  },
  created() {
    this.demo()
    this.getInfo()
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    demo() {
      this.getInfo()
    },
    edit(res) {
      console.log('res', res);
      this.info.college = res.college
      this.info.name = res.name
      this.info.phonenumber = res.phonenumber
      this.info.sex = res.sex
    },
    async getInfo() {
      const res = await getUserInfo()
      // this.$store.dispatch('user/getUserInfo')
      console.log("@@用户信息11", res)
      // this.info = res
      this.info.college = res.college
      this.info.name = res.name
      this.info.phonenumber = res.phonenumber
      this.info.role = res.role
      this.info.sex = res.sex
      this.info.userId = res.userId
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
.others {
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
}
.small-items {
  display: flex;
  flex-direction: column;
}
.describe {
  font-size: 18px;
  margin-bottom: 8px;
}
</style>
