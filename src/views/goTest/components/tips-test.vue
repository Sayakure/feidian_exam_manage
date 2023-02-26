<template>
  <el-dialog :visible="showDialog" title="考试须知" width="450px" @close="close()">
    <div class="dialog-test">
      <ul>
        <li>1.考生需掌握每门课程的考试时间及考试流程，仔细阅读考试须知、注意事项,寻找网络信号好的区域进行调试，以确保能正常参加线上考试。</li>
        <li>2.准备双设备，第一设备为手机（安卓或iOS系统版本不应太低）、台式机、笔记本电脑或平板电脑，考试方式如为超星智慧考试系统，设备必须为手机。第二设备，可为手机、平板电脑、笔记本电脑、台式电脑，须配备摄像头和麦克风。</li>
        <li>3.考试期间不能打开除试卷之外的任何页面（包括其他文档、网页等），且中途不允许去卫生间和离开摄像范围。</li>
      </ul>
    </div>
    <el-button slot="footer" type="danger" @click="goTest()">我已知晓，去考试<i class="el-icon-right" /></el-button>
  </el-dialog>
</template>

<script>
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    exam: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    goTest() {
      this.showDialog = false
      console.log('考试ID是：', this.exam);
      // 请求考试信息
      sessionStorage.setItem('exam', JSON.stringify(this.exam))
      this.$store.commit('examTable/setExam', this.exam)
      console.log("#####", this.$store.state.examTable.exam);
      const routerUrl = this.$router.resolve({ path: '/examTable'})
      window.open(routerUrl.href, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  li {
    color: #151515;
    display: block;
    margin-bottom: 30px;
    font-size: 20px;
  }
}
</style>
