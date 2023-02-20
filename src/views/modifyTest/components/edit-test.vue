<template>
  <el-dialog title="编辑试题" :visible="editDialog" @close="btnCancel">
    <el-form ref="testForm" :model="testData" label-width="120px" :rules="rules">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="testData.name" style="width:80%" placeholder="姓名长度为1-10个字符" />
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select v-model="testData.gender" style="width: 80%;" placeholder="请选择性别">
          <el-option label="男" value="male" />
          <el-option label="女" value="female" />
        </el-select>
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="testData.mobile" style="width:80%" />
      </el-form-item>
      <el-form-item label="工号" prop="id">
        <el-input v-model="testData.id" style="width:80%" />
      </el-form-item>
      <el-form-item label="所在学院" prop="college">
        <el-input v-model="testData.college" style="width:80%" />
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
    editDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const checkMobile = async(rule, value, callback) => {
      const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
      const isRight = await reg.test(value)
      if (isRight) {
        callback()
      } else {
        callback(new Error('请输入正确的手机号'))
      }
    }
    return {
      testData: {
        name: '',
        gender: '',
        mobile: '',
        id: '',
        college: ''
      },
      rules: {
        name: [{ required: true, message: '姓名不能为空', trigger: 'blur' }, { min: 1, max: 10, message: '姓名长度为1-10个字符', trigger: blur }],
        mobile: [{ required: true, message: '手机号不能为空', trigger: 'blur' }, {
          trigger: 'blur',
          validator: checkMobile
        }],
        id: [{ required: true, message: '工号不能为空', trigger: 'blur' }],
        college: [{ required: true, message: '所在学院不能为空', trigger: 'blur' }]
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
      this.$refs.testForm.resetFields() // 重置方法
      this.$emit('update:editDialog', false)
    },
    btnOK() {
      console.log(this.$refs.testForm.validate())
      this.$refs.testForm.validate().then(res => {
        console.log('res', res)
        if (res) {
          // updateTest(this.testData)
          console.log('pass')
          this.$emit('update:editDialog', false)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
