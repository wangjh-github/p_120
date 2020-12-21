<template>
  <div class="login-container">
    <el-form :model="ruleForm2" :rules="rules2" status-icon ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-page" style="background-color: rgba(255,255,255,0.8)">
      <h3 class="title">登录平台</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="ruleForm2.username" auto-complete="off" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm2.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
      </el-form-item>
      <el-form-item>
        <!-- <el-checkbox 
                    v-model="checked"
                    class="rememberme">记住密码</el-checkbox> -->
        <el-button type="text" @click="forgetpassword" style="float:right">忘记密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { requestLogin } from '../api/api';
import { refreshcode } from '../api/api';
export default {
  data() {
    return {
      logining: false,
      ruleForm2: {},
      rules2: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        checkPass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      },
      checked: true
    };
  },
  methods: {
    handleReset2() {
      this.$refs.ruleForm2.resetFields();
    },
    handleSubmit(ev) {
      this.$refs.ruleForm2.validate((valid) => {
        if (valid) {
          this.logining = true;
          var loginParams = { username: this.ruleForm2.username, password: this.ruleForm2.password, identifycode: this.ruleForm2.identifycode };
          requestLogin(loginParams).then(data => {
            this.logining = false;
            let { msg, code, user } = data;
            if (code !== 200) {
              this.$message({
                message: msg,
                type: 'error'
              });
            } else {
              if (user.type === "admin") {
                sessionStorage.setItem('user', JSON.stringify(user));
                this.$router.push({ path: '/MainPage' });
              } else if (user.type === "advert") {
                sessionStorage.setItem('user', JSON.stringify(user));
                this.$router.push({ path: '/table' });
              }
            }
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    refreshcode() {
      this.uuid = this.getuuid()
      var refreshParams = { code: this.ruleForm2.identifycode };
      refreshcode(refreshParams).then(data => {
        this.imgUrl = serverUrl + "" + this.uuid
      }).catch((error) => {
        this.$message({
          message: "服务器请求出错，请重试！",
          type: 'error'
        });
      });
    },
    forgetpassword() {
      this.$alert('请联系管理员找回密码', '提示', {
        confirmButtonText: '确定',
        type: 'warning'
      })
    }
  }
}

</script>
<style scoped>
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}

label.el-button.forget {
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
}


.login-container {
  width: 100%;
  height: 80%;
}

.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

</style>
