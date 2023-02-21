<template>
  <el-dialog title="修改个人信息" :visible="showDialog" @close="btnCancel">
    <el-form ref="infoForm" :model="infoData" label-width="120px" :rules="rules">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="infoData.name" style="width:80%" placeholder="姓名长度为1-10个字符" />
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select v-model="infoData.gender" style="width: 80%;" placeholder="请选择性别">
          <el-option label="男" value="male" />
          <el-option label="女" value="female" />
        </el-select>
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="infoData.mobile" style="width:80%" />
      </el-form-item>
      <el-form-item label="工号" prop="id">
        <el-input v-model="infoData.id" style="width:80%" />
      </el-form-item>
      <el-form-item label="所在学院" prop="college">
        <el-input v-model="infoData.college" style="width:80%" />
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
import { setUserInfo } from '@/api/user'
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const checkMobile = async(rule, value, callback) => {
      const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
      const isRight = reg.test(value)
      isRight ? callback() : callback(new Error('请输入正确的手机号'))
    }
    return {
      infoData: {
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
      this.infoData = {
        name: '',
        gender: '',
        mobile: '',
        id: '',
        college: ''
      }
      this.$refs.infoForm.resetFields() // 重置方法
      this.$emit('update:showDialog', false)
    },
    btnOK() {
      // this.$emit('update:showDialog', false)
      this.$refs.infoForm.validate().then(() => {
        setUserInfo(this.infoData)
      }).then(() => {
        this.$emit('update:showDialog', false)
      })
    }
  }
}
</script>

<style scoped>

</style>
