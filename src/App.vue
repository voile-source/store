<template>
  <div class="common-layout">
    <el-row>
      <el-container class="container">
        <el-header height="200px">
          <div class="title">
            <div class="title-top">VIVI</div>
            <div class="title-bottom">
              v &nbsp;&nbsp; i &nbsp;&nbsp; v &nbsp;&nbsp; i &nbsp;&nbsp; 商
              &nbsp;&nbsp; 城
            </div>
          </div>
        </el-header>
        <el-main user-select: none>
          <el-row justify="center">
            <div class="content">
              <div class="tab-box">
                <el-tabs
                  class="tab"
                  v-model="activeName"
                  @tab-click="handleClick"
                  stretch="true"
                >
                  <el-tab-pane label="验证码登录" name="first">
                      <div class="input-box prime">
                        <el-input
                          v-model="account"
                          placeholder="请输入账号"
                          clearable
                        />
                      </div>
                      <div class="special">
                        <el-input
                          v-model="code"
                          placeholder="请输入验证码"
                          clearable
                        ></el-input>
                        <div class="code-box">
                          <el-button>发送验证码</el-button>
                        </div>
                      </div>
                      <div class="input-box button">
                        <el-button type="primary">登录</el-button>
                      </div>
                    
                  </el-tab-pane>
                  <el-tab-pane label="账号密码登录" name="second">
                      <div class="input-box prime">
                        <el-input
                          v-model="account"
                          placeholder="请输入账号"
                          clearable
                        />
                      </div>
                      <div class="special s-password">
                        <el-input
                          v-model="password"
                          placeholder="请输入密码"
                          clearable
                          show-password
                        />
                      </div>
                      <div class="input-box button">
                        <el-button type="primary" @click="login">登录</el-button>
                      </div>
                      <div class="footer">
                        <el-link href="https://element.eleme.io" target="_blank" class="a_left">快速注册</el-link>
                        <el-link href="https://element.eleme.io" target="_blank" class="a_right">找回密码</el-link>
                      </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
          </el-row>
        </el-main>
      </el-container>
    </el-row>
    
  </div>
</template>

<script lang="js">
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import { ElMessage } from 'element-plus'

export default {
  data() {
    
    

    return {
      activeName: 'second',
      account: '',
      password:'',
      code:'',
      flag: false,
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    login() {
      let account = this.account;
      let password = this.password;
      axios.post("/login", {
        account:account,   
        password:password
      }).then(function (response) {
        success();
      })
    },
    success(){
      ElMessage({
        message: 'Congrats, this is a success message.',
        type: 'success',
      })
    },
    onSuccess(){
                this.msg = 'login success'
            },
            onFail(){
                this.msg = ''
            },
            onRefresh(){
                this.msg = ''
            }
  }
}
</script>

<style>
@font-face {
  font-family: "title";
  src: url("assets/fonts/title.ttf") format("truetype");
}

a {
  text-decoration: none;
  color: #8abcd1;
}

input {
  outline: none;
}

.footer {
  margin-top: -135px; 
}

.s-password {
  margin-left: 0 !important;
}

.s-password .el-input__inner,
.s-password .el-input {
  margin-top: -20px !important;
  width: 340px !important;
}

.code-box {
  margin-top: -160px;
  margin-left: 340px;
}

.special {
  margin-left: -120px;
  margin-top: -58px;
}

.special .el-input {
  width: 220px;
}

.special .el-input__inner {
  margin-top: -10px;
  width: 220px;
}

.tab .el-checkbox__inner:valid {
  border: 1px solid #8abcd1;
}

.tab .el-checkbox__inner:focus {
  border: 1px solid #8abcd1;
  background: #8abcd1;
}

.tab .el-link--inner {
  height: 32px !important;
  line-height: 32px;
}

.tab .el-checkbox__inner:hover {
  border: 1px solid #8abcd1;
}

.tab .a_left {
  margin-right: 120px;
}

.tab .a_right {
  margin-left: 92px;
}

.radio-text {
  font-size: 14px;
  height: 40px;
  position: relative;
  top: -122px;
  left: -5px;
}

.tab .el-tabs__content {
  height: 220px !important;
}

.radio-box {
  margin-left: -158px;
  margin-top: -135px !important;
}

.tab .el-input-group__append {
  border-radius: 24px;
  border-left: none;
}

.input-box {
  width: 339px;
  height: 50px;
  margin-bottom: 72px;
}

.tab .el-button {
  color: white;
  background: #8abcd1;
  border-radius: 24px;
  border: 0;
}

.tab .el-button:focus {
  background: #baccd9;
  color: white;
}

.tab .el-button:hover {
  background: #baccd9;
  color: white;
}

.button .el-button {
  width: 340px;
  border: 0;
  font-size: 20px;
  font-weight: 600;
  height: 45px;
}

.tab .el-input__inner:focus {
  border: 1px solid #8abcd1;
}

.tab .el-input__inner {
  font-size: 15px;
  border-radius: 24px;
  border: 1px solid #ededed;
  height: 50px;
}

.prime {
  margin-top: -40px;
}

.button .el-button {
  position: relative;
  top: -57px;
}

.button {
  margin-top: -40px;
  position: relative;
}

.prime .el-input__inner {
  border: 1px solid #ededed;
  border-radius: 24px;
  line-height: 50px;
  height: 50px;
  margin-top: -12px;
  padding-right: 22px;
  font-size: 15px;
}

.tab-box {
  margin: 30px;
  width: 340px;
}

.tab .el-tabs__item {
  font-size: 16px;
  width: 40px;
  height: 45px;
  font-weight: 600;
}

.tab .el-tabs__item:hover {
  color: #8abcd1;
}

.tab .el-tabs__active-bar {
  background: #8abcd1;
}

.tab .el-tabs__item.is-active {
  color: #8abcd1;
}

.input {
  padding-left: 18px;
  font-size: 15px;
}

body {
  background: url("https://lofter.lf127.net/1611802693229/xizhang2.jpg?imageView&type=jpg&quality=70&stripmeta=0&thumbnail=4000x4000")
    no-repeat 0px 0px;
  background-size: cover;
  background-attachment: fixed;
}

.title {
  color: white;
}

.title-top {
  font-size: 80px;
  margin-top: 110px;
  font-family: "title";
}

.title-bottom {
  /* border: 1px solid red; */
  margin-top: -16px;
  font-size: 15px;
}

.content {
  background: white;
  width: 400px;
  border-radius: 15px;
}

.el-header,
.el-footer {
  text-align: center;
  line-height: 60px;
}

.el-main {
  text-align: center;
  line-height: 160px;
}
</style>