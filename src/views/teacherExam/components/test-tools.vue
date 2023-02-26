<template>
  <div class="item">
    <el-row class="test-item" :span="12" type="flex" justify="space-between" align="middle">
        <el-col style="width: 80%;">
        <div class="test-name">{{ question.context }}</div>
        <el-radio-group v-model="radio" v-if="question.questionType === 'x'">
          <el-radio :label="1">A: {{ question.optionA }}</el-radio>
          <el-radio :label="2">B: {{ question.optionB }}</el-radio>
          <el-radio :label="3">C: {{ question.optionC }}</el-radio>
          <el-radio :label="4">D: {{ question.optionD }}</el-radio>
        </el-radio-group>
      </el-col>
      <el-col :span="2" class="command">
        <el-dropdown @command="operateTests">
          <!-- 下拉菜单内容 -->
          <span>操作<i class="el-icon-arrow-down" /></span>
          <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="edit">编辑试题</el-dropdown-item>
              <el-dropdown-item  command="delete">删除试题</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { deleteExam } from '@/api/exam';
export default {
  props:{
    question: {
      type: Object,
      default: () => {}
    },
    courseId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: true,
      tests: {},
      editArea: '',
      radio: ''
    }
  },
  created() {
    this.getTests()
  },
  methods: {
    delete() {
      console.log(this.question);
    },
    getTests() {
      // let res = await getTests()
      console.log('获取试题')
    },
    operateTests(type) {
      if (type === 'edit') {
        // 编辑
        console.log('edit')
      } else {
        console.log(this.question,this.courseId);
        this.$confirm('您是否确定要删除该试题吗', { confirmButtonText: '确定', cancelButtonText: '取消' }).then(() => {
        //   return delDepartments(this.treeNode.id)
        const data = {
          "courseId": this.courseId,
          "questionId": this.question.questionId
        }
        deleteExam(data)
        }).then(() => {
          // 此时已经确定
          // 应该告诉父组件 更新数据
          this.$emit('update')
          this.$message.success('删除成功')
        })
      }
    }
  }
}
</script>

<style scoped>
.item {
    margin: 5px 0;
    padding: 15px 0;
}

.test-item {
  position: relative;
}
.test-name {
  width: 80%;
}
.command {
  position: absolute;
  right: 10px;
  top: 0px;
}
</style>
