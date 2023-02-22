<template>
  <div class="item">
    <el-row :span="12" type="flex" justify="space-between" align="middle">
      <el-col style="background-color: pink; width: 80%;">
        <div class="test-name">试题试题试题</div>
        <el-input
          type="textarea"
          :rows="10"
          placeholder="请输入内容"
          v-model="editArea">
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-dropdown @command="operateTests">
          <!-- 下拉菜单内容 -->
            <span>操作  <i class="el-icon-arrow-down" /></span>
          <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="edit">编辑试题</el-dropdown-item>
              <el-dropdown-item command="del">删除试题</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { getTests } from '@/api/test'
export default {
  data() {
    return {
      tests: {},
      editArea: ''
    }
  },
  created() {
    this.getTests()
  },
  methods: {
    // props: {
    //   test: {
    //     type: Object,
    //     required: true
    //   }
    // },
    getTests() {
      // let res = await getTests()
      console.log('获取试题')
    },
    operateTests(type) {
      if (type === 'edit') {
        // 编辑
        console.log('edit')
        this.$emit('editTest') // 点击编辑 传出要编辑的节点
      } else {
        // 删除
        this.$confirm('您是否确定要删除该试题吗', { confirmButtonText: '确定', cancelButtonText: '取消' }).then(() => {
        //   return delDepartments(this.treeNode.id)
        }).then(() => {
          // 此时已经确定
          // 应该告诉父组件 更新数据
          this.$emit('delDepts')
          this.$message.success('删除试题成功')
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
</style>
