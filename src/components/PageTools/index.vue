<template>
  <el-card class="page-tools">
    <el-row type="flex" justify="space-between">
      <el-col>
        <div v-if="showBefore" class="before">
          <i class="el-icon-info" />
          <!-- 前插槽 -->
          <slot name="before" />
        </div>
        <span class="welcome">欢迎</span>
      </el-col>
      <el-col>
        <el-row type="flex" justify="end">
          <div class="after">
            <!-- 后插槽 -->
            <slot name="after" />
          </div>
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  props: {
    showBefore: {
      default: true,
      type: Boolean
    }
  }
}
</script>

<style scoped lang="scss">
.page-tools {
    margin: 10px 0;
    .before {
      line-height: 34px;
    i {
      margin-right: 5px;
      color: #409eff;
    }
    display: inline-block;
    padding: 0px 10px;
    border-radius: 3px;
    border: 1px solid rgba(145, 213, 255, 1);
    background: rgba(230, 247, 255, 1);
  }
 }
</style>
