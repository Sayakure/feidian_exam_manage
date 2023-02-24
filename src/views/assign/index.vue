<template>
  <div class="login-container">
    <el-form ref="assignForm" :model="assignForm" :rules="assignRules" class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">
          欢迎注册
        </h3>
      </div>

      <!-- 姓名 -->
      <el-form-item prop="name">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          ref="name"
          v-model="assignForm.name"
          placeholder="请输入姓名"
          name="name"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>

      <!-- 学院 -->
      <el-form-item prop="college">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="college"
          v-model="assignForm.college"
          placeholder="请输入所在学院"
          name="college"
          tabindex="2"
          auto-complete="on"
        />
      </el-form-item>

      <!-- 性别 -->
      <el-form-item prop="sex">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-select v-model="assignForm.sex" style="width:80%" placeholder="请选择性别">
          <el-option value="男" label="男" />
          <el-option value="女" label="女" />
        </el-select>
      </el-form-item>

      <!-- 手机号 -->
      <el-form-item prop="phonenumber">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="phonenumber"
          v-model="assignForm.phonenumber"
          placeholder="请输入手机号"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <!-- 密码 -->
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="assignForm.password"
          :type="passwordType"
          placeholder="请输入密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <!-- 确认密码 -->
      <el-form-item prop="password2">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password2"
          v-model="password2"
          :type="passwordType"
          placeholder="请再次输入密码"
          name="password2"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>

      <!-- 老师的验证码 -->
      <el-form-item prop="captcha">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="captcha"
          v-model="assignForm.captcha"
          placeholder="如果注册为老师，请输入验证码"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-button
        class="loginBtn"
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click.native.prevent="handleRegister"
      >登录</el-button>

      <router-link to="/login" class="login">已有账号？去登录</router-link>
    </el-form>
  </div>
</template>

<script>
import { register } from '@/api/user'
import { validMobile } from '@/utils/validate'
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data() {
    const validateMobile = (rule, value, callback) => {
      // value是否符合手机号格式
      validMobile(value) ? callback() : callback(new Error('手机号格式不正确'))
    }

    const checkRepeat = (rule, value, callback) => {
      // value是否符合手机号格式
      password2 === assignForm.password ? callback() : callback(new Error('手机号格式不正确'))
    }
    // validator 自定义校验函数
    // 可以自主的校验函数
    // function (rule, value, callback) {}
    // value => callback  callback(new Error())

    return {
      password2: '',
      assignForm: {
        name: '',
        sex: '',
        phonenumber: '',
        college: '',
        captcha: '',
        password: ''
      },
      assignRules: {
        name: [{ required: true, trigger: 'blur', message: '姓名不能为空' }, { min: 1, max: 15, message: '姓名为1-15长度的字符' }],
        phonenumber: [{ required: true, trigger: 'blur', message: '手机号不能为空' }, {
          trigger: 'blur',
          validator: validateMobile// 校验手机号
        }],
        college: [{ required: true, trigger: 'blur', message: '所在学院不能为空' }, { min: 1, max: 15, message: '所在学院为1-15长度的字符' }],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }, {
          min: 6, max: 16, message: '密码长度在6-16位之间', trigger: 'blur'
        }],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }, {
          min: 6, max: 16, message: '密码长度在6-16位之间', trigger: 'blur'
        }, {
          trigger: 'blur',
          validator: checkRepeat
        }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions(['user/login']),
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    // 登录
    handleRegister() {
      this.$refs.assignForm.validate(async isOK => {
        if (isOK) {
          // 发送数据
          register(this.assignForm)
          // 表示校验通过
          this.loading = true
          try {
            await register(this.loginForm)
            // 只要进行到这个位置 说明登录成功了 跳到主页
            this.$router.push('/')
          } catch (error) {
            //
          } finally {
            // finally是和trycatch配套的 不论你执行不执行catch都会执行finally
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_white: #393434;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
    &::placeholder {
      color: #999;
    }
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      // -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_white;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 254, 254, 0.877);
    background: rgba(255, 255, 255, 0.7); // 输入登录表单的背景色
    border-radius: 5px;
    color: #454545;
  }
   .el-form-item__error {
    color: #fff
  }
  .loginBtn {
  background-color: #4789F3;
  height: 64px;
  line-height: 32px;
  font-size: 24px;
}
// ::deep .login-form {
//       padding: 70px 35px;
// }
}
</style>

<style lang="scss" scoped>
$bg:#1f4c94;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 50px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 30px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: 400;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
.assign {
  &:hover {
    color: rgb(191, 188, 224);
  }
}

.login {
  color: #ccc;
  font-size: 14px;
}
</style>
