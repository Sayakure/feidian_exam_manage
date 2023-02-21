<template>
  <el-dialog title="增加试题" :visible="showDialog" @close="btnCancel">
    <el-form ref="addForm" :model="addData" label-width="120px" :rules="rules">
      <el-form-item label="题目描述" prop="describe">
        <el-input v-model="addData.describe" style="width:80%" placeholder="请填入题目简述" />
      </el-form-item>
      <el-form-item label="题目详情" prop="info">
        <el-input v-model="addData.info" type="textarea" :rows="12" style="width:90%" />
      </el-form-item>
    </el-form>
    <!-- 放置居中的按钮 -->
    <el-row slot="footer" type="flex" justify="center">
      <!--放置列 -->
      <el-col :span="20">
        <el-button @click="btnCancel()">取消</el-button>
        <el-button type="primary" @click="btnOK()">确定</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      addData: {
        describe: '',
        info: ''
      },
      rules: {
        describe: [{ required: true, message: '题目简述', trigger: 'blur' }, { min: 1, max: 300, message: '题目简述为1-300个字符', trigger: blur }],
        info: [{ required: true, message: '题目不能为空', trigger: 'blur' }, { min: 1, max: 1000, message: '题目主体不能超过1000个字符', trigger: blur }]
      }
    }
  },
  methods: {
    btnCancel() {
      this.testData = {
        name: '',
        gender: '',
        mobile: '',
        id: '',
        college: ''
      }
      this.$refs.addForm.resetFields() // 重置方法
      this.$emit('update:showDialog', false)
    },
    btnOK() {
      this.$refs.addForm.validate().then(() => {
        // updateTest(this.testData)
        console.log(this.$refs.addForm)
        console.log('pass')
      }).then(() => {
        this.$emit('update:showDialog', false)
      })
    }
  }
}
</script>

<style scoped>

</style>
