<template>
  <div class="dashboard-container">
    <PageTools />
    <el-card>
      <el-row type="flex" justify="space-between" style="width:100%">
        <el-col>
          <div class="avatar">
            <img src="@/assets/common/img.jpeg" alt="">
            <el-button type="primary" size="small" style="margin-left: 50px;" @click.native="editInfo()">修改个人信息</el-button>
          </div>
        </el-col>
        <el-col style="min-width: 500px">
          <el-row type="flex" justify="space-between">
            <el-col>
              <div v-for="(item, index) in describe" :key="index" class="describe" style="height: 50px;line-height: 50px;">
                {{ item }}:
              </div>
            </el-col>
            <el-col>
              <el-col>
                <div v-for="(item, index) in info" :key="index" class="info" style="height: 50px;line-height: 50px;">
                  {{ info.name }}
                </div>
              </el-col>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
    <EditInfo :show-dialog.sync="showDialog" />
  </div>
</template>

<script>
import EditInfo from './components/edit-info.vue'
import store from '@/store'
import PageTools from '@/components/PageTools'
export default {
  name: 'Dashboard',
  components: { PageTools, EditInfo },
  data() {
    return {
      showDialog: false,
      describe: {
        name: '姓名',
        gender: '性别',
        mobile: '手机号',
        college: '所在学院',
        id: '',
        subject: ''
      },
      info: {
        name: '',
        gender: '2',
        mobile: '',
        college: '',
        id: '',
        subject: ''
      }
    }
  },
  created() {
    this.getInfo()
    this.changeDescribe('teacher')
  },
  methods: {
    getInfo() {
      this.info.name = store.state.user.userInfo.id
      console.log(store.state.user.userInfo)
    },
    changeDescribe(role) {
      if (role === 'teacher') {
        this.describe.id = '工号'
        this.describe.subject = '教授学科'
      } else {
        this.describe.id = '学号'
        this.describe.subject = '所选学科'
      }
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
  font-size: 20px;
}
</style>
