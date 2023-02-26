<template>
  <el-dialog :modal=false title="增加试题" :visible="showDialog" @close="btnCancel">
    <el-form ref="addForm" :model="addData" label-width="120px" :rules="rules">
      <el-form-item label="题目" >
        <el-input v-model="addData.context" />
      </el-form-item>
      <el-form-item label="答案" >
        <el-input v-model="addData.answer" />
      </el-form-item>
      <el-form-item label="选项A" >
        <el-input v-model="addData.option_a" />
      </el-form-item>
      <el-form-item label="选项B" >
        <el-input v-model="addData.option_b" />
      </el-form-item>
      <el-form-item label="选项C" >
        <el-input v-model="addData.option_c" />
      </el-form-item>
      <el-form-item label="选项D" >
        <el-input v-model="addData.option_d" />
      </el-form-item>
      <el-form-item label="分值" >
        <el-input v-model="addData.point" placeholder="请填写分值" />
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
import { addQuestion } from '@/api/exam'
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    courseId: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      addData: {
        coursrId: '',
        question_type: 'x',
        context: '',
        answer: '',
        option_a: '',
        option_b: '',
        option_c: '',
        option_d: '',
        point: ''
      },
      rules: {
        point:[{ requited: true, trigger: 'blur',message: '年龄不能为空'}, { type: 'number', message: '分数必须为数字'}]
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
        this.addData.courseId = this.courseId
        addQuestion(this.addData)
      }).then(() => {
        this.$emit('addQuestion', this.addData)
        this.$emit('update:showDialog', false)
        this.addData =  {
        coursrId: '0',
        question_type: 'x',
        context: '',
        answer: '',
        option_a: '',
        option_b: '',
        option_c: '',
        option_d: '',
        point: ''
      }
      })
    }
  }
}
</script>

<style scoped>

</style>
