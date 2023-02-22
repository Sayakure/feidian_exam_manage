<template>
  <el-card class="box-card">
    <div class="header headTit">
      <span style="background: url('@/assets/common/icon.png');">帮助链接</span>
    </div>
    <div class="sideLink">
      <el-row type="flex" justify="space-between">
        <el-col>
          <a href="#">
            <div class="icon iconGuide" />
            <p>入门指南</p>
          </a>
        </el-col>
        <el-col >
          <a href="#">
            <div class="icon iconHelp" />
            <p>在线帮助手册</p>
          </a>
        </el-col>
        <el-col>
          <a href="#">
            <div class="icon iconTechnology" />
            <p>联系技术支持</p>
          </a>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
   
}
</script>

<style lang="scss" scoped>
.box-card {
  width: 800px;
  margin-top: 40px;
  margin-left: 15px;
  .header {
    margin-bottom: 30px;
    span {
      color: #2c3e50;
      font-size: 24px;
    }
    .item {
      color: #97a8be;
      float: right;
      padding: 3px 0;
    }
  }
  .headTit {
    span {
      border-bottom: 4px solid #8a97f8;
      padding-bottom: 10px;
    }
  }
}
.sideLink {
  padding-left: 100px; 
}
.icon {
  display: block;
  width: 76px;
  height: 76px;
  background: url('../../../assets/common/icon.png');
}
.iconHelp {
  background-position: -224px -5px;
}
.iconTechnology {
  background-position: -457px 0;
}
</style>
